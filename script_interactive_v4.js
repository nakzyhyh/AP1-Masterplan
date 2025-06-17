// ===== KERNVARIABLEN, KONSTANTEN UND DATENMODELL =====

const MINI_QUIZ_QUESTION_COUNT = 12;

// Das "definitions" Objekt wurde in definitions.js ausgelagert.
// Das "questions" oder "MASTER_QUESTIONS" Objekt wurde in questions.js ausgelagert.

let userProfile = {
    progress: {}, 
    quizStats: {}, 
    flashcards: {} 
};

// KORRIGIERT: Globale Variablen für das Abschlussquiz hier oben zentral deklariert
let currentQuestionIndex = 0;
let score = 0;
let quizQuestions = []; // Hält die Fragen für die aktuelle Quiz-Runde
let shuffledQuestions = []; // Hält alle Fragen für den gesamten Quiz-Durchlauf

const LEITNER_BOX_INTERVALS = [1, 3, 7, 14, 30];

// ===== USER PROFILE & PERSISTENT PROGRESS =====

function loadUserProfile() {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
        userProfile = JSON.parse(savedProfile);
        if (!userProfile.progress) userProfile.progress = {};
        if (!userProfile.quizStats) userProfile.quizStats = {};
        if (!userProfile.flashcards) userProfile.flashcards = {};
    }
    updateUIFromProfile();
}

function saveUserProfile() {
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
}

function updateUIFromProfile() {
    updateCheckboxesFromProfile();
    updateOverallProgress();
    renderLernprofilDashboard();
    renderExamRelevance();
}

function initializeTopicProgress(topicId) {
    if (!userProfile.progress[topicId]) {
        userProfile.progress[topicId] = { completedByCheckbox: false, miniQuizPassed: null };
    }
}

// ===== UI HELPER & POPUP FUNCTIONS =====

function toggleTopics(element, event) {
    if (event.target.closest('.lernfeld-topics')) return;
    const topics = element.querySelector('.lernfeld-topics');
    if (topics) topics.classList.toggle('active');
}

function toggleDetails(element, event) {
    if (event.target.closest('.topic-checkbox, .topic-action-btn, .mini-quiz-container button')) return;
    event.stopPropagation();
    const details = element.querySelector('.topic-details');
    if (details) details.classList.toggle('active');
    element.classList.toggle('expanded');
}

function showDefinition(termId, event) {
    if (event) event.stopPropagation();
    const defData = definitions[termId];
    if (!defData || !defData.content || defData.content === '...') {
         alert('Definition für "' + (defData?.title || termId) + '" noch nicht verfügbar.');
        return;
    }
    document.getElementById('popupTitle').textContent = defData.title;
    document.getElementById('popupContent').innerHTML = defData.content;
    document.getElementById('mainPopupOverlay').classList.add('active');
    document.getElementById('definitionPopup').classList.add('active');
}

function closeAllPopups() {
    document.querySelectorAll('.popup-overlay, .definition-popup, .flashcard-modal').forEach(el => el.classList.remove('active'));
}

document.addEventListener('keydown', e => e.key === 'Escape' && closeAllPopups());

// ===== PROGRESS TRACKING & UI UPDATES =====

function toggleTopicCompletion(checkbox, event) {
    if(event) event.stopPropagation();
    const topicId = checkbox.closest('.topic-item').dataset.topicId;
    if (topicId) {
        initializeTopicProgress(topicId);
        userProfile.progress[topicId].completedByCheckbox = checkbox.checked;
        saveUserProfile();
        updateOverallProgress();
    }
}

function updateCheckboxesFromProfile() {
    document.querySelectorAll('.topic-checkbox').forEach(checkbox => {
        const topicId = checkbox.closest('.topic-item').dataset.topicId;
        if (topicId && userProfile.progress[topicId]) {
            checkbox.checked = userProfile.progress[topicId].completedByCheckbox;
        }
    });
}

function updateOverallProgress() {
    const allTopics = document.querySelectorAll('.topic-item[data-topic-id]');
    const completed = Array.from(allTopics).filter(item => {
        const topicId = item.dataset.topicId;
        return userProfile.progress[topicId] && userProfile.progress[topicId].completedByCheckbox;
    }).length;
    const percentage = allTopics.length > 0 ? (completed / allTopics.length) * 100 : 0;
    const progressBar = document.getElementById('globalProgressBar');
    const progressText = document.getElementById('globalProgressText');
    if (progressBar) progressBar.style.width = `${percentage}%`;
    if (progressText) progressText.textContent = `${percentage.toFixed(0)}% der Themen abgeschlossen (${completed}/${allTopics.length})`;
}

// ===== MINI-QUIZ LOGIK =====

let activeMiniQuizzes = {};
function renderEmbeddedMiniQuiz(containerId, categoryName, topicId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const startButton = container.previousElementSibling;
    if (startButton) startButton.style.display = 'none';

    // Annahme: questions.js enthält eine Variable namens MASTER_QUESTIONS
    const categoryQuestions = MASTER_QUESTIONS.filter(q => q.category === topicId);
    const shuffled = [...categoryQuestions].sort(() => 0.5 - Math.random()).slice(0, MINI_QUIZ_QUESTION_COUNT);

    if (shuffled.length === 0) {
        container.innerHTML = `<p class="mini-quiz-feedback">Keine Fragen für "${categoryName}" verfügbar.</p>`;
        if(startButton) startButton.style.display = 'block';
        return;
    }
    activeMiniQuizzes[containerId] = { questions: shuffled, currentIndex: 0, score: 0 };
    displayEmbeddedQuestion(containerId, topicId);
}

function displayEmbeddedQuestion(containerId, topicId) {
    const quiz = activeMiniQuizzes[containerId];
    const container = document.getElementById(containerId);
    if (quiz.currentIndex >= quiz.questions.length) {
        displayEmbeddedMiniQuizResult(containerId, topicId);
        return;
    }
    const questionData = quiz.questions[quiz.currentIndex];
    const choicesHtml = questionData.choices.map((choice, i) => `<li onclick="checkEmbeddedAnswer(event, '${containerId}', ${i}, '${topicId}')">${choice}</li>`).join('');

    container.innerHTML = `
        <p class="mini-quiz-question-text">${quiz.currentIndex + 1}. ${questionData.question}</p>
        <ul class="mini-quiz-choices">${choicesHtml}</ul>
        <div class="mini-quiz-feedback" style="display:none;"></div>`;
}

function checkEmbeddedAnswer(event, containerId, selectedIdx, topicId) {
    event.stopPropagation();
    const quiz = activeMiniQuizzes[containerId];
    const q = quiz.questions[quiz.currentIndex];
    const container = document.getElementById(containerId);
    const choices = container.querySelectorAll('.mini-quiz-choices li');
    const feedback = container.querySelector('.mini-quiz-feedback');
    
    choices.forEach(c => c.onclick = null);

    if (!userProfile.quizStats[topicId]) {
        userProfile.quizStats[topicId] = { correct: 0, incorrect: 0 };
    }

    if (selectedIdx === q.answer) {
        quiz.score++;
        choices[selectedIdx].classList.add('correct');
        feedback.innerHTML = `<strong>Richtig!</strong> ${q.explanation || ''}`;
        feedback.className = 'mini-quiz-feedback correct-feedback';
        userProfile.quizStats[topicId].correct++;
    } else {
        choices[selectedIdx].classList.add('incorrect');
        choices[q.answer].classList.add('correct');
        feedback.innerHTML = `<strong>Falsch.</strong> Richtig: "${q.choices[q.answer]}". ${q.explanation || ''}`;
        feedback.className = 'mini-quiz-feedback incorrect-feedback';
        userProfile.quizStats[topicId].incorrect++;
    }

    userProfile.quizStats[topicId].lastTested = new Date().toISOString();
    
    saveUserProfile();
    renderLernprofilDashboard();

    feedback.style.display = 'block';
    
    const nextButton = document.createElement('button');
    nextButton.className = 'mini-quiz-btn';
    nextButton.textContent = 'Weiter';
    nextButton.onclick = (e) => { e.stopPropagation(); quiz.currentIndex++; displayEmbeddedQuestion(containerId, topicId); };
    container.appendChild(nextButton);
}

function displayEmbeddedMiniQuizResult(containerId, topicId) {
    const quiz = activeMiniQuizzes[containerId];
    const passed = quiz.questions.length > 0 ? (quiz.score / quiz.questions.length) >= 0.6 : false;
    
    initializeTopicProgress(topicId);
    userProfile.progress[topicId].miniQuizPassed = passed;
    saveUserProfile();

    const container = document.getElementById(containerId);
    container.innerHTML = `<p class="mini-quiz-summary">Ergebnis: ${quiz.score}/${quiz.questions.length} (${passed ? 'Bestanden' : 'Nicht bestanden'}).</p>`;
}

// ===== LEITNER SYSTEM FLASHCARDS =====
let flashcardDeck = [];
let currentFlashcardIndex = 0;

function showFlashcardModal(termIdOrTopicId, isTopic = false) {
    flashcardDeck = [];
    if (isTopic) {
        const topicItem = document.querySelector(`.topic-item[data-topic-id="${termIdOrTopicId}"]`);
        if (topicItem) {
            topicItem.querySelectorAll('.clickable-term').forEach(span => {
                const termKeyMatch = span.getAttribute('onclick').match(/'([^']+)'/);
                if (termKeyMatch && termKeyMatch[1]) {
                    const termKey = termKeyMatch[1];
                    if (definitions[termKey]?.flashcard) {
                        flashcardDeck.push({ term: termKey, ...definitions[termKey].flashcard });
                    }
                }
            });
        }
    } else if (definitions[termIdOrTopicId]?.flashcard) {
        flashcardDeck.push({ term: termIdOrTopicId, ...definitions[termIdOrTopicId].flashcard });
    }

    if (flashcardDeck.length === 0) return alert("Keine Lernkarten für diese Auswahl verfügbar.");

    currentFlashcardIndex = 0;
    document.getElementById('mainPopupOverlay').classList.add('active');
    document.getElementById('flashcardModal').classList.add('active');
    displayCurrentFlashcard();
}

function displayCurrentFlashcard() {
    const card = flashcardDeck[currentFlashcardIndex];
    document.querySelector('#flashcardCounter').textContent = `(${currentFlashcardIndex + 1}/${flashcardDeck.length})`;
    document.querySelector('.flashcard-front p').textContent = card.question;
    document.querySelector('.flashcard-back p').textContent = card.answer;
    document.querySelector('#flashcardPrevBtn').disabled = currentFlashcardIndex === 0;
    const cardElement = document.querySelector('.flashcard');
    const cardInner = cardElement.querySelector('.flashcard-inner');
    if (cardInner.classList.contains('flipped')) {
        cardInner.classList.remove('flipped');
    }
}

function flipFlashcard(cardElement) { cardElement.querySelector('.flashcard-inner').classList.toggle('flipped'); }
function prevFlashcard() { if (currentFlashcardIndex > 0) { currentFlashcardIndex--; displayCurrentFlashcard(); } }

function rateFlashcard(rating) {
    const termId = flashcardDeck[currentFlashcardIndex].term;
    if (!userProfile.flashcards[termId]) userProfile.flashcards[termId] = { box: 0 };
    let card = userProfile.flashcards[termId];

    if (rating === 0) card.box = 0;
    else if (rating === 1) card.box = Math.min(card.box + 1, LEITNER_BOX_INTERVALS.length);
    else if (rating === 2) card.box = LEITNER_BOX_INTERVALS.length;

    const intervalDays = card.box > 0 ? LEITNER_BOX_INTERVALS[card.box - 1] : 0;
    const nextReviewDate = new Date();
    if(intervalDays > 0) nextReviewDate.setDate(nextReviewDate.getDate() + intervalDays);
    else nextReviewDate.setMinutes(nextReviewDate.getMinutes() + 10);
    card.nextReview = nextReviewDate.toISOString();
    
    saveUserProfile();
    renderLernprofilDashboard();

    if (currentFlashcardIndex < flashcardDeck.length - 1) {
        setTimeout(() => {
            currentFlashcardIndex++;
            displayCurrentFlashcard();
        }, 200);
    } else {
        alert("Stapel beendet!");
        closeAllPopups();
    }
}

// ===== FILTER & DASHBOARD & RELEVANCE =====
function filterTopics(button, criteria) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    document.querySelectorAll('.topic-item').forEach(item => {
        const fachrichtung = item.dataset.fachrichtung || "";
        item.classList.toggle('hidden-by-filter', criteria.fachrichtung && !fachrichtung.includes(criteria.fachrichtung));
    });
}

function renderLernprofilDashboard() {
    const stats = userProfile.quizStats;
    const strengthsList = document.getElementById('strengthsList');
    const weaknessesList = document.getElementById('weaknessesList');
    const repetitionList = document.getElementById('repetitionList');

    if (!strengthsList || !weaknessesList || !repetitionList) return;
    
    let totalCorrect = 0;
    let totalIncorrect = 0;
    for (const cat in stats) {
        totalCorrect += stats[cat].correct || 0;
        totalIncorrect += stats[cat].incorrect || 0;
    }
    const totalAnswered = totalCorrect + totalIncorrect;
    const successRate = totalAnswered > 0 ? (totalCorrect / totalAnswered) * 100 : 0;

    document.getElementById('totalQuestionsAnswered').textContent = totalAnswered;
    document.getElementById('correctAnswerRate').textContent = `${successRate.toFixed(0)}%`;
    
    const sorted = Object.keys(stats).map(cat => ({
        id: cat,
        name: MASTER_QUESTIONS.find(q => q.category === cat)?.category,
        ratio: (stats[cat].correct / (stats[cat].correct + stats[cat].incorrect || 1)) || 0,
        total: (stats[cat].correct || 0) + (stats[cat].incorrect || 0)
    })).filter(c => c.total > 0).sort((a, b) => b.ratio - a.ratio);

    const topicTitles = {};
    document.querySelectorAll('.topic-item[data-topic-id]').forEach(item => {
        const id = item.dataset.topicId;
        const titleNode = item.querySelector('.topic-title').cloneNode(true);
        titleNode.querySelector('input, span.expand-icon')?.remove();
        topicTitles[id] = titleNode.textContent.trim();
    });

    const strengthsHTML = sorted.filter(c => c.ratio >= 0.8 && c.total >= 5).slice(0, 3).map(c => `<li>${topicTitles[c.id] || c.id}</li>`).join('');
    strengthsList.innerHTML = strengthsHTML || '<li class="empty-state"><span class="empty-icon">📚</span><span>Noch keine Daten</span><small>Absolviere Quizze, um deine Stärken zu entdecken!</small></li>';

    const weaknessesHTML = sorted.filter(c => c.ratio < 0.6 && c.total >= 5).reverse().slice(0, 3).map(c => `<li>${topicTitles[c.id] || c.id}</li>`).join('');
    weaknessesList.innerHTML = weaknessesHTML || '<li class="empty-state"><span class="empty-icon">💡</span><span>Noch keine Schwächen</span><small>Starte ein Quiz, um zu sehen, wo du dich verbessern kannst.</small></li>';
    
    const now = new Date();
    const dueFlashcards = Object.keys(userProfile.flashcards)
        .filter(term => new Date(userProfile.flashcards[term].nextReview) <= now)
        .map(term => `<li>${definitions[term]?.title || term}</li>`).join('');
    
    repetitionList.innerHTML = dueFlashcards ? `<ul>${dueFlashcards}</ul>` : '<div class="empty-state"><span class="empty-icon">✨</span><span>Keine Wiederholungen fällig</span><small>Großartig! Du bist auf dem neuesten Stand.</small></div>';

    renderCategoryProgressChart();
}

function renderCategoryProgressChart() {
    const container = document.getElementById('categoryProgress');
    if (!container) return;

    const stats = userProfile.quizStats;
    const answeredCategories = Object.keys(stats).filter(cat => (stats[cat].correct || 0) + (stats[cat].incorrect || 0) > 0);
    
    if (answeredCategories.length === 0) {
        container.innerHTML = `<div class="empty-state"><span class="empty-icon">📈</span><span>Noch keine Fortschrittsdaten</span><small>Beginne mit dem Lernen, um deinen Fortschritt zu verfolgen!</small></div>`;
        return;
    }
    
    container.innerHTML = '';

    answeredCategories.forEach(cat => {
        const total = (stats[cat].correct || 0) + (stats[cat].incorrect || 0);
        const ratio = (stats[cat].correct / total) * 100;
        const topicTitle = MASTER_QUESTIONS.find(q => q.category === cat)?.category || cat;
        
        const item = document.createElement('div');
        item.className = 'category-progress-item';
        item.innerHTML = `
            <span class="category-label">${topicTitle}</span>
            <div class="category-bar">
                <div class="category-fill" style="width: ${ratio}%;"></div>
            </div>
            <span class="category-percentage">${ratio.toFixed(0)}%</span>
        `;
        container.appendChild(item);
    });
}

function renderExamRelevance() {
    document.querySelectorAll('.topic-item[data-topic-id]').forEach(item => {
        const topicId = item.dataset.topicId;
        const def = definitions[topicId];
        const container = document.getElementById(`examRelevanceContent-${topicId}`);
        if(def && container) {
            let html = '';
            if (def.prüfungsteil) html += `<span class="relevance-tag">${def.prüfungsteil}</span>`;
            if (def.kam_vor_in) html += def.kam_vor_in.map(exam => `<span class="relevance-tag">${exam}</span>`).join(' ');
            container.innerHTML = html || '';
        }
    });
}


// ===== ABSCHLUSS-QUIZ FUNKTIONALITÄT =====
// KORRIGIERT: Vollständige Implementierung der Quiz-Funktionen

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    // Annahme: questions.js enthält eine Variable namens 'questions'
   shuffledQuestions = [...MASTER_QUESTIONS].sort(() => Math.random() - 0.5);
    quizQuestions = shuffledQuestions;

    document.getElementById('startQuizBtn').classList.add('hidden');
    document.getElementById('quizResult').classList.add('hidden');
    document.getElementById('quizCard').classList.remove('hidden');

    displayQuestion();
}

function displayQuestion() {
    document.getElementById('nextQuestionBtn').classList.add('hidden');
    document.getElementById('answerFeedback').classList.add('hidden');

    const questionData = quizQuestions[currentQuestionIndex];
    document.getElementById('quizQuestion').innerText = questionData.question;
    
    const choicesContainer = document.getElementById('quizChoices');
    choicesContainer.innerHTML = ''; 

    const progressText = document.getElementById('quizProgressText');
    progressText.innerText = `Frage ${currentQuestionIndex + 1} von ${quizQuestions.length}`;
    const progressFill = document.getElementById('progressFill');
    progressFill.style.width = `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`;

questionData.choices.forEach((choice, index) => {
    const li = document.createElement('li');
    li.innerText = choice;
    li.onclick = () => checkAnswer(index, questionData.answer);
    choicesContainer.appendChild(li);
});
}
function checkAnswer(selectedIndex, correctIndex) {
    const choiceItems = document.querySelectorAll('#quizChoices li');
    const questionData = quizQuestions[currentQuestionIndex]; 

    choiceItems.forEach((item, index) => {
        item.onclick = null;
        if (index === correctIndex) {
            item.classList.add('correct');
        } else if (index === selectedIndex) {
            item.classList.add('incorrect');
        }
    });

    const feedbackDiv = document.getElementById('answerFeedback');
    if (selectedIndex === correctIndex) {
        score++;
        feedbackDiv.innerText = "Richtig!";
        feedbackDiv.className = 'answer-feedback correct-feedback';
    } else {
        const correctChoiceText = questionData.choices[correctIndex];
        feedbackDiv.innerText = `Falsch. Die richtige Antwort ist: "${correctChoiceText}"`;
        feedbackDiv.className = 'answer-feedback incorrect-feedback';
    }
    feedbackDiv.classList.remove('hidden');

    document.getElementById('nextQuestionBtn').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quizCard').classList.add('hidden');
    const resultContainer = document.getElementById('quizResult');
    resultContainer.classList.remove('hidden');

    const scoreText = document.getElementById('scoreText');
    const percentage = quizQuestions.length > 0 ? Math.round((score / quizQuestions.length) * 100) : 0;
    scoreText.innerText = `Du hast ${score} von ${quizQuestions.length} Fragen richtig beantwortet (${percentage}%).`;

    // Hier könnte die Chart.js-Logik implementiert werden
}

function restartQuiz() {
    document.getElementById('quizResult').classList.add('hidden');
    document.getElementById('startQuizBtn').classList.remove('hidden');
}

function retryWeak() {
    // Diese Funktion müsste noch implementiert werden, um nur schwache Fragen zu wiederholen.
    // Als Platzhalter startet sie das Quiz neu.
    startQuiz();
}

// ===== NEUE FEATURES: DARK MODE & VOLLBILD =====

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const darkModeBtn = document.getElementById('dark-mode-btn');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        if(darkModeBtn) darkModeBtn.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        if(darkModeBtn) darkModeBtn.textContent = '🌙';
    }
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// ===== INITIALIZATION =====

window.addEventListener('load', () => {
    // Sicherstellen, dass die Fragendatei geladen ist
 if (typeof MASTER_QUESTIONS === 'undefined') {
        document.body.innerHTML = `<div style="padding:40px; text-align:center; font-family:sans-serif; color:red;">
            <h1>Fehler: questions.js nicht gefunden</h1><p>Die Fragendatei konnte nicht geladen werden. Stellen Sie sicher, dass 'questions.js' im selben Ordner liegt und in der HTML-Datei korrekt vor dem Hauptskript eingebunden ist.</p></div>`;
        return;
    }
    loadUserProfile();

    const darkModeBtn = document.getElementById('dark-mode-btn');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    if(darkModeBtn) darkModeBtn.addEventListener('click', toggleDarkMode);
    if(fullscreenBtn) fullscreenBtn.addEventListener('click', toggleFullscreen);

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        if(darkModeBtn) darkModeBtn.textContent = '☀️';
    }
});

// ===== GLOBAL EXPOSURE (WICHTIG für onclick in HTML) =====
// Stellt sicher, dass alle im HTML verwendeten Funktionen global erreichbar sind.

window.toggleTopics = toggleTopics;
window.toggleDetails = toggleDetails;
window.showDefinition = showDefinition;
window.closeAllPopups = closeAllPopups;
window.toggleTopicCompletion = toggleTopicCompletion;
window.startQuiz = startQuiz;
window.nextQuestion = nextQuestion; // KORRIGIERT: Sicherstellen, dass die definierte Funktion hier zugewiesen wird
window.retryWeak = retryWeak;
window.restartQuiz = restartQuiz;
window.filterTopics = filterTopics;
window.showFlashcardModal = showFlashcardModal;
window.flipFlashcard = flipFlashcard;
window.prevFlashcard = prevFlashcard;
window.rateFlashcard = rateFlashcard;
window.renderEmbeddedMiniQuiz = renderEmbeddedMiniQuiz;
window.checkEmbeddedAnswer = checkEmbeddedAnswer;
// ========== IHK PRÜFUNG VALIDIERUNG ==========

function validateExam() {
    // Definiert die korrekten Lösungen für automatisch prüfbare Aufgaben
    const solutions = {
        task1aa_net1: "0.0.0.0", task1aa_mask1: "0.0.0.0",
        task1aa_net2: "172.16.0.0", task1aa_mask2: "255.255.0.0",
        task1aa_net3: "10.10.0.0", task1aa_mask3: "255.255.255.192",
        task1bb_src: "203.0.113.65", task1bb_dest: "51.38.104.145",
        task2ca: "IMAP", task2cb: "STARTTLS", task2cc: "Passwort, normal"
    };

    // Prüft exakte Antworten
    for (const id in solutions) {
        const element = document.getElementById(id);
        if (element) {
            const isCorrect = element.value.trim().toLowerCase() === solutions[id].toLowerCase();
            element.classList.toggle('correct-answer', isCorrect);
            element.classList.toggle('incorrect-answer', !isCorrect);
        }
    }

    // --- ANZEIGE ALLER MUSTERLÖSUNGEN ---

    // NEU: Musterlösung für Aufgabe 1aa
    displaySolution('solution1aa', `
        <h5>Musterlösung 1aa (Routing-Tabelle)</h5>
        <ul>
            <li><b>Default-Route:</b> Netz-ID <code>0.0.0.0</code>, Maske <code>0.0.0.0</code> &rarr; Interface WAN</li>
            <li><b>LAN-Route:</b> Netz-ID <code>172.16.0.0</code>, Maske <code>255.255.0.0</code> &rarr; Interface LAN</li>
            <li><b>DMZ-Route:</b> Netz-ID <code>10.10.0.0</code>, Maske <code>255.255.255.192</code> &rarr; Interface DMZ</li>
        </ul>
    `);

    // Aufgabe 1 (Rest)
    displaySolution('solution1ab', '<h5>Musterlösung 1ab</h5><ul><li>WAN: <code>203.0.113.67</code></li><li>LAN: <code>172.16.255.255</code></li><li>DMZ: <code>10.10.0.63</code></li></ul>');
    displaySolution('solution1ac', '<h5>Musterlösung 1ac</h5><ul><li><b>Unicast:</b> 1-zu-1-Kommunikation, z.B. Client 1 fragt den Dateiserver an.</li><li><b>Multicast:</b> 1-zu-Viele-Kommunikation, z.B. Videostream an eine Gruppe.</li><li><b>Broadcast:</b> 1-zu-Alle-Kommunikation im Subnetz, z.B. ARP-Request.</li></ul>');
    displaySolution('solution1ad', '<h5>Musterlösung 1ad</h5><p>Start: <code>224.0.0.0</code>, Ende: <code>239.255.255.255</code></p>');
    displaySolution('solution1ba', '<h5>Musterlösung 1ba</h5><p>Am Router muss <b>Port-Forwarding</b> (Destination NAT) eingerichtet werden, um Anfragen an die öffentliche IP auf die internen Server-IPs weiterzuleiten.</p>');
    displaySolution('solution1bc', '<h5>Musterlösung 1bc</h5><p>Client 1 vergleicht die Netz-ID der Ziel-IP (DMZ) mit seiner eigenen (LAN). Da sie nicht übereinstimmen, sendet er das Paket an sein Default-Gateway.</p>');
    displaySolution('solution1bd', '<h5>Musterlösung 1bd</h5><p>Um die MAC-Adresse des Gateways zu erhalten, sendet der Client einen ARP-Request (Broadcast) und empfängt einen ARP-Reply (Unicast) vom Router.</p>');
    
    // Aufgabe 2
    displaySolution('solution2aa', '<h5>Musterlösung 2aa</h5><p>Die Adresse stammt aus dem APIPA-Bereich. Der Client hat diese Adresse selbst zugewiesen, da er den DHCP-Server im Netzwerk nicht erreichen konnte.</p>');
    displaySolution('solution2ab', '<h5>Musterlösung 2ab</h5><p>Es handelt sich um eine <b>Link-Local-Adresse</b> (LLA). Sie wird automatisch von jedem IPv6-fähigen Gerät für die Kommunikation im lokalen Segment erzeugt, oft aus dem Präfix <code>fe80::/64</code> und der MAC-Adresse.</p>');
    displaySolution('solution2ac', '<h5>Musterlösung 2ac</h5><p>Die physische Netzwerkverbindung zum DHCP-Server prüfen (Kabel, Switch-Port). Alternativ eine passende, statische IP-Konfiguration manuell eintragen.</p>');
    displaySolution('solution2ba', '<h5>Musterlösung 2ba</h5><p>Der eingetragene DNS-Server (<code>8.8.8.8</code>) ist öffentlich und kann interne Hostnamen nicht auflösen. Der Zugriff auf das Internet funktioniert deshalb, der auf lokale Server per Name nicht.</p>');
    displaySolution('solution2bb', '<h5>Musterlösung 2bb</h5><p>Der DNS-Server des Clients muss auf den internen Domain Controller (<code>172.16.1.11</code>) geändert werden, damit lokale Namen aufgelöst werden können.</p>');

    // Aufgabe 3
    displaySolution('solution3aa', '<h5>Musterlösung 3aa</h5><p>Wegen der Knappheit von IPv4-Adressen (IPv4 exhaustion). IPv6 bietet einen quasi unerschöpflichen Adressraum und ist somit zukunftssicher.</p>');
    displaySolution('solution3ab', '<h5>Musterlösung 3ab</h5><p>1. <b>Kein NAT:</b> Direkte Ende-zu-Ende-Konnektivität. 2. <b>Effizienteres Routing:</b> Vereinfachte Paket-Header. 3. <b>SLAAC:</b> Zustandlose Autokonfiguration ohne DHCP-Server.</p>');
    displaySolution('solution3ba', '<h5>Musterlösung 3ba</h5><p>1. <b>Sicherheit:</b> Logische Trennung von Netzbereichen. 2. <b>Performance:</b> Reduzierung von Broadcast-Verkehr (obwohl IPv6 kein Broadcast im klassischen Sinne nutzt, wird der Multicast-Verkehr besser eingedämmt).</p>');
    displaySolution('solution3bb', '<h5>Musterlösung 3bb</h5><p>Erweiterung des /48-Präfixes um 2 Bit ergibt ein /50-Präfix. Die Subnetze sind:<ul><li><code>2001:DB8:CAFE:0000::/50</code></li><li><code>2001:DB8:CAFE:4000::/50</code></li><li><code>2001:DB8:CAFE:8000::/50</code></li><li><code>2001:DB8:CAFE:C000::/50</code></li></ul></p>');
    displaySolution('solution3ca', '<h5>Musterlösung 3ca</h5><p>SLAAC: Der Client empfängt das Netzwerk-Präfix vom Router (via Router Advertisement) und kombiniert es mit einem selbst generierten Interface-Identifier (oft aus der MAC-Adresse), um seine eigene, globale IPv6-Adresse zu erstellen.</p>');
    displaySolution('solution3cb', '<h5>Musterlösung 3cb</h5><p>1. <b>Zentrale Vergabe von DNS-Servern.</b> 2. <b>Vergabe weiterer Optionen</b> (z.B. NTP-Server). 3. <b>Zentrale Verwaltung und Protokollierung</b> der Adressvergabe.</p>');

    // Aufgabe 4
    displaySolution('solution4aa', '<h5>Musterlösung 4aa</h5><p>1. <b>Ein gemeinsamer Schlüssel (PSK)</b> für alle. 2. <b>Schwierige Schlüsselverwaltung</b> bei Personalwechsel. 3. <b>Anfällig für schwache Passwörter.</b></p>');
    displaySolution('solution4ab', '<h5>Musterlösung 4ab</h5><p>Umstieg auf <b>WPA2/WPA3 Enterprise</b> mit individueller Authentifizierung pro Benutzer (z.B. über einen RADIUS-Server).</p>');
    displaySolution('solution4ba', '<h5>Musterlösung 4ba</h5><p>1. <b>Sicherheit:</b> Strikte Trennung des internen vom Gast-Netzwerk. 2. <b>Bandbreitenmanagement:</b> Limitierung der Bandbreite für Gäste. 3. <b>Rechtliche Absicherung:</b> Getrennte Protokollierung des Gast-Traffics.</p>');
    displaySolution('solution4bb', '<h5>Musterlösung 4bb</h5><p>1. Die neuen APs sind nur für das <b>5-GHz-Band</b> konfiguriert. 2. Die neuen APs nutzen einen <b>Kanal im 2,4-GHz-Band</b>, der von den Kameras nicht unterstützt wird.</p>');
    displaySolution('solution4ca', '<h5>Musterlösung 4ca</h5><p><b>SSID:</b> Der Name des WLAN. <b>BSSID:</b> Die MAC-Adresse des Access Points. <b>CHANNEL:</b> Der genutzte Funkkanal.</p>');
    displaySolution('solution4cb', '<h5>Musterlösung 4cb</h5><p>Es gibt eine <b>Kanalüberlappung auf Kanal 1</b>, da zwei Netzwerke denselben Kanal nutzen. Dies führt zu Interferenzen.</p>');
    displaySolution('solution4cc', '<h5>Musterlösung 4cc</h5><p>Das Netzwerk ist "versteckt", da der Access Point die Aussendung seines Namens (SSID Broadcast) unterdrückt.</p>');
    displaySolution('solution4da', '<h5>Musterlösung 4da</h5><p>Ein Voucher-System generiert einzigartige, oft zeitlich begrenzte Zugangscodes. Gäste geben diesen Code auf einer Webseite (Captive Portal) ein, um WLAN-Zugriff zu erhalten.</p>');
    displaySolution('solution4db', '<h5>Musterlösung 4db</h5><p>1. <b>Bandbreitenbegrenzung</b> pro Ticket. 2. Begrenzung des <b>Datenvolumens</b>. 3. <b>Content Filtering</b> (Sperren von Webseiten).</p>');
}

// Helferfunktion, um die Lösungen anzuzeigen
function displaySolution(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = content;
        element.style.display = 'block';
    }
}