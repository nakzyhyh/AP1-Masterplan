const definitions = {
    // =======================================================
    // LERNFELD 1: Das Unternehmen und die eigene Rolle im Betrieb
    // =======================================================
    'linienorganisation': {
        title: 'Linien-, Stab- & Matrixorganisation',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">📚 Überblick</div>
                <p>Organisationsstrukturen legen fest, wie Aufgaben, Kompetenzen und Verantwortlichkeiten in einem Unternehmen verteilt sind. Die drei wichtigsten Grundformen sind die Linien-, Stab- und Matrixorganisation.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">📊 Vergleich der Strukturen</div>
                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th>Merkmal</th>
                            <th>Linienorganisation</th>
                            <th>Stabsorganisation</th>
                            <th>Matrixorganisation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Prinzip</strong></td>
                            <td>Einliniensystem (jeder hat <em>einen</em> Chef)</td>
                            <td>Erweitertes Einliniensystem mit beratenden Stäben</td>
                            <td>Mehrliniensystem (jeder hat <em>zwei</em> Chefs)</td>
                        </tr>
                        <tr>
                            <td><strong>Weisungsbefugnis</strong></td>
                            <td>Klar & eindeutig von oben nach unten</td>
                            <td>Linie hat Weisungsbefugnis, Stab nur Beratungsfunktion</td>
                            <td>Geteilte Weisungsbefugnis (funktional & projektbezogen)</td>
                        </tr>
                        <tr>
                            <td><strong>Vorteil</strong></td>
                            <td>Klare Struktur, eindeutige Verantwortung</td>
                            <td>Entlastung der Führung, besseres Fachwissen</td>
                            <td>Hohe Flexibilität, optimale Ressourcennutzung</td>
                        </tr>
                        <tr>
                            <td><strong>Nachteil</strong></td>
                            <td>Lange Dienstwege, unflexibel</td>
                            <td>Konflikte zwischen Stab und Linie, hohe Kosten</td>
                            <td>Kompetenzkonflikte, hoher Kommunikationsaufwand</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="example-box">
                <strong>💻 IT-Beispiel:</strong><br>
                Ein Azubi in der <strong>Linienorganisation</strong> berichtet nur an seinen Ausbilder. In der <strong>Stabsorganisation</strong> könnte ein Datenschutz-Stab den IT-Leiter beraten. In der <strong>Matrixorganisation</strong> arbeitet der Azubi für seinen Ausbilder (Linie) UND für einen Projektleiter (Projekt).
            </div>
        `,
        flashcard: { question: "Was ist der Hauptunterschied in der Weisungsbefugnis zwischen Linien- und Matrixorganisation?", answer: "Linie: Ein Vorgesetzter (Einliniensystem). Matrix: Zwei Vorgesetzte (Mehrliniensystem)." }
    },
    'projektorganisation': {
        title: 'Projekt- vs. Linienorganisation',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">📚 Definition</div>
                <p>Die <strong>Linienorganisation</strong> ist die dauerhafte, hierarchische Grundstruktur eines Unternehmens für das Tagesgeschäft. Die <strong>Projektorganisation</strong> ist eine temporäre, oft bereichsübergreifende Struktur, die für die Dauer eines bestimmten, einmaligen Projekts geschaffen wird.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">📊 Gegenüberstellung</div>
                <table class="comparison-table">
                    <thead><tr><th>Kriterium</th><th>Linienorganisation</th><th>Projektorganisation</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Dauer</strong></td><td>Dauerhaft</td><td>Temporär, zeitlich befristet</td></tr>
                        <tr><td><strong>Zweck</strong></td><td>Abwicklung des Tagesgeschäfts</td><td>Erreichung eines einmaligen, spezifischen Ziels</td></tr>
                        <tr><td><strong>Struktur</strong></td><td>Hierarchisch, stabil</td><td>Flexibel, oft teamorientiert</td></tr>
                        <tr><td><strong>Mitarbeiter</strong></td><td>Feste Abteilungszugehörigkeit</td><td>Temporäre Zuordnung aus verschiedenen Abteilungen</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="example-box">
                <strong>💡 Beispiel:</strong> Das Entwickler-Team (Linie) wartet bestehende Software. Für die Entwicklung einer neuen App wird ein Projektteam (Projektorganisation) mit Mitgliedern aus Entwicklung, Marketing und Design gebildet. Nach dem Launch wird das Projektteam aufgelöst.
            </div>
        `,
        flashcard: { question: "Was ist der Hauptunterschied bezüglich der Dauer zwischen Linien- und Projektorganisation?", answer: "Linienorganisation ist dauerhaft, Projektorganisation ist temporär für die Dauer eines Projekts." }
    },
    'kommunikationswege': {
        title: 'Kommunikations- & Entscheidungsprozesse',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">🗣️ Kommunikationswege</div>
                <p>Beschreiben, wie Informationen im Unternehmen fließen.</p>
                <ul>
                    <li><strong>Top-Down:</strong> Von der Führung zu den Mitarbeitern (z.B. Anweisungen, Unternehmensziele). Der klassische "Dienstweg".</li>
                    <li><strong>Bottom-Up:</strong> Von Mitarbeitern zur Führung (z.B. Feedback, Statusberichte, Probleme). Wichtig für agile Prozesse.</li>
                    <li><strong>Horizontal:</strong> Zwischen Kollegen auf derselben Ebene (z.B. Abstimmung zwischen Entwicklung und Testing).</li>
                </ul>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">🎯 Entscheidungsprozesse</div>
                <p>Strukturierte Vorgehensweise, um eine Wahl zwischen Alternativen zu treffen.</p>
                <ol>
                    <li><strong>Problem erkennen:</strong> Was ist die Herausforderung? (z.B. "Unser Backupsystem ist veraltet.")</li>
                    <li><strong>Informationen sammeln:</strong> Fakten und Daten zusammentragen (z.B. Kosten, technische Anforderungen, Recovery-Zeiten).</li>
                    <li><strong>Alternativen entwickeln:</strong> Mögliche Lösungswege aufzeigen (z.B. Make-or-Buy, Cloud vs. On-Premise).</li>
                    <li><strong>Alternativen bewerten:</strong> Vor- und Nachteile abwägen (z.B. mittels Nutzwertanalyse, TCO-Rechnung).</li>
                    <li><strong>Entscheidung treffen:</strong> Die beste Alternative auswählen.</li>
                    <li><strong>Umsetzung & Kontrolle:</strong> Die Entscheidung ausführen und den Erfolg überprüfen (z.B. ROI-Analyse, Sicherstellung der RTO/RPO).</li>
                </ol>
            </div>
        `,
        flashcard: { question: "Nenne die ersten drei Schritte eines typischen Entscheidungsprozesses.", answer: "1. Problem erkennen, 2. Informationen sammeln, 3. Alternativen entwickeln." }
    },
    'it-abteilung': {
        title: 'Rolle der IT-Abteilung',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">🏢 Die IT im Unternehmen</div>
                <p>Die IT-Abteilung ist heute meist mehr als nur ein "Reparaturservice". Sie agiert als interner Dienstleister und strategischer Partner für andere Abteilungen, um Geschäftsprozesse zu optimieren und zu digitalisieren.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">🔧 Kernaufgaben</div>
                <ul>
                    <li><strong>Infrastruktur-Management:</strong> Bereitstellung und Wartung von Servern, Netzwerken, Clients und der Cloud-Umgebung.</li>
                    <li><strong>Anwendungsbetreuung:</strong> Support und Weiterentwicklung von Unternehmenssoftware (z.B. ERP-System, CRM).</li>
                    <li><strong>User-Support (Helpdesk/Servicedesk):</strong> Anlaufstelle für Mitarbeiter bei IT-Problemen und Serviceanfragen.</li>
                    <li><strong>IT-Sicherheit:</strong> Schutz der Unternehmensdaten und -systeme (Firewalls, Virenschutz, Backups, Notfallpläne).</li>
                    <li><strong>Projektmanagement:</strong> Planung und Durchführung von IT-Projekten (z.B. Einführung neuer Software).</li>
                    <li><strong>Beratung (Business Alignment):</strong> Unterstützung anderer Abteilungen bei der Digitalisierung ihrer Prozesse.</li>
                </ul>
            </div>
        `,
        flashcard: { question: "Nenne drei Kernaufgaben einer IT-Abteilung.", answer: "Infrastruktur-Management, Anwendungsbetreuung und IT-Sicherheit." }
    },
    'cpm': {
        title: 'Critical Path Method (CPM)',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">📚 Definition</div>
                <p>Die <strong>Critical Path Method (CPM)</strong> oder Methode des kritischen Pfades ist eine Technik zur Analyse und Planung von Projektabläufen. Ihr Ziel ist es, die längste Kette voneinander abhängiger Vorgänge zu identifizieren.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">🎯 Kernkonzept</div>
                <p>Der <strong>kritische Pfad</strong> ist die Kette von Vorgängen, die die minimale Gesamtdauer des Projekts bestimmt. Vorgänge auf diesem Pfad haben <strong>keinen Puffer (Pufferzeit = 0)</strong>. Jede Verzögerung bei einem dieser Vorgänge verzögert das gesamte Projekt.</p>
            </div>
            <div class="example-box">
                <strong>💡 Beispiel:</strong> Stell dir vor, du baust ein Haus. Das Legen des Fundaments ist auf dem kritischen Pfad. Wenn sich das um 2 Tage verzögert, verzögert sich das gesamte Bauprojekt um 2 Tage. Das Streichen der Wände im Inneren hat vielleicht Puffer, da es parallel zu Arbeiten am Dach stattfinden kann.
            </div>
        `,
        flashcard: { question: "Was charakterisiert Vorgänge auf dem kritischen Pfad?", answer: "Sie haben keine Pufferzeit (Puffer = 0). Eine Verzögerung bei ihnen verzögert das gesamte Projekt." }
    },
    'vorgangsknoten': {
        title: 'Vorgangsknoten-Netzpläne',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">📊 Visualisierung</div>
                <p>Im <strong>Vorgangsknoten-Netzplan</strong> wird jeder Vorgang (jede Aufgabe) als Knoten (meist ein Rechteck) dargestellt. Die Pfeile zwischen den Knoten zeigen die Abhängigkeiten an.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">🖼️ Aufbau eines Knotens</div>
                <div style="border: 2px solid; border-radius: 8px; padding: 10px; text-align: center;">
                    <table style="width:100%; font-size: 0.8em; text-align: center; border-collapse: collapse;">
                        <tr>
                            <td style="border: 1px solid; padding: 5px;">FAZ</td>
                            <td style="border: 1px solid; padding: 5px;">Dauer</td>
                            <td style="border: 1px solid; padding: 5px;">FEZ</td>
                        </tr>
                        <tr>
                            <td colspan="3" style="border: 1px solid; padding: 10px; font-weight: bold;">Vorgangsbezeichnung</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid; padding: 5px;">SAZ</td>
                            <td style="border: 1px solid; padding: 5px;">GP</td>
                            <td style="border: 1px solid; padding: 5px;">SEZ</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="popup-section">
                 <div class="popup-section-title">📜 Legende</div>
                 <ul>
                    <li><strong>FAZ:</strong> Frühester Anfangszeitpunkt</li>
                    <li><strong>FEZ:</strong> Frühester Endzeitpunkt</li>
                    <li><strong>SAZ:</strong> Spätester Anfangszeitpunkt</li>
                    <li><strong>SEZ:</strong> Spätester Endzeitpunkt</li>
                    <li><strong>Dauer:</strong> Dauer des Vorgangs</li>
                    <li><strong>GP:</strong> Gesamtpuffer</li>
                 </ul>
            </div>
        `,
        flashcard: { question: "Was repräsentiert ein Knoten in einem Vorgangsknoten-Netzplan?", answer: "Einen einzelnen Vorgang bzw. eine Aufgabe im Projekt." }
    },
    'frueheste-termine': {
        title: 'Früheste/Späteste Termine (Vorwärts- & Rückwärtsrechnung)',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">➡️ Vorwärtsrechnung (Früheste Termine)</div>
                <p>Man rechnet vom Projektstart zum Projektende, um die frühestmöglichen Zeitpunkte zu ermitteln.</p>
                <ul>
                    <li><strong>FAZ (Frühester Anfangszeitpunkt):</strong> Der höchste FEZ aller direkten Vorgänger. Für den Startknoten ist FAZ = 0.</li>
                    <li><strong>FEZ (Frühester Endzeitpunkt):</strong> Berechnet sich aus <strong>FAZ + Dauer</strong>.</li>
                </ul>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">⬅️ Rückwärtsrechnung (Späteste Termine)</div>
                <p>Man rechnet vom Projektende zum Projektstart, um die spätestzulässigen Zeitpunkte zu ermitteln, ohne das Projekt zu verzögern.</p>
                <ul>
                    <li><strong>SEZ (Spätester Endzeitpunkt):</strong> Der niedrigste SAZ aller direkten Nachfolger. Für den Endknoten gilt SEZ = FEZ.</li>
                    <li><strong>SAZ (Spätester Anfangszeitpunkt):</strong> Berechnet sich aus <strong>SEZ - Dauer</strong>.</li>
                </ul>
            </div>
        `,
        flashcard: { question: "Wie berechnet man den FEZ (Frühesten Endzeitpunkt) eines Vorgangs?", answer: "FEZ = FAZ (Frühester Anfangszeitpunkt) + Dauer." }
    },
    'pufferzeiten': {
        title: 'Pufferzeiten',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">📚 Definition</div>
                <p>Die <strong>Pufferzeit</strong> ist der Zeitraum, um den ein Vorgang verschoben oder verlängert werden kann, ohne die Gesamtdauer des Projekts zu gefährden.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">🧮 Berechnung des Gesamtpuffers (GP)</div>
                <p>Der Gesamtpuffer gibt die maximale Zeit an, die ein Vorgang benötigen darf, ohne das Projektende zu verschieben.</p>
                <div class="formula-box">
                    GP = SAZ - FAZ <br>
                    <em>oder</em><br>
                    GP = SEZ - FEZ
                </div>
            </div>
            <div class="example-box">
                <strong>❗ Wichtig:</strong> Vorgänge auf dem kritischen Pfad haben immer einen Gesamtpuffer von <strong>0</strong>.
            </div>
        `,
        flashcard: { question: "Wie hoch ist der Gesamtpuffer (GP) eines Vorgangs auf dem kritischen Pfad?", answer: "Genau 0." }
    },
    'ressourcenplanung': {
        title: 'Ressourcenplanung',
        prüfungsteil: 'AP1',
        content: `
             <div class="popup-section">
                <div class="popup-section-title">📚 Definition</div>
                <p>Die <strong>Ressourcenplanung</strong> befasst sich mit der Identifizierung, Zuweisung und Steuerung der für ein Projekt benötigten Ressourcen.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">📋 Arten von Ressourcen</div>
                <ul>
                    <li><strong>Personal:</strong> Mitarbeiter mit bestimmten Fähigkeiten (z.B. Java-Entwickler, Netzwerktechniker).</li>
                    <li><strong>Sachmittel:</strong> Geräte, Maschinen, Softwarelizenzen, Räume.</li>
                    <li><strong>Finanzmittel:</strong> Das für das Projekt verfügbare Budget.</li>
                </ul>
            </div>
             <div class="popup-section">
                <div class="popup-section-title">🎯 Ziele</div>
                <ul>
                    <li>Sicherstellen, dass die richtigen Ressourcen zur richtigen Zeit verfügbar sind.</li>
                    <li>Vermeiden von <strong>Ressourcenkonflikten</strong> (z.B. ein Mitarbeiter ist für zwei Aufgaben gleichzeitig eingeplant).</li>
                    <li>Vermeiden von <strong>Ressourcenüberlastung</strong>.</li>
                    <li>Optimale Auslastung der Ressourcen.</li>
                </ul>
            </div>
        `,
        flashcard: { question: "Was ist ein Hauptziel der Ressourcenplanung?", answer: "Die Vermeidung von Ressourcenkonflikten und Überlastung." }
    },
    'teambildungsphasen': {
        title: 'Teambildungsphasen nach Tuckman',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">📚 Das Modell</div>
                <p>Bruce Tuckman beschrieb 5 Phasen, die Teams typischerweise durchlaufen, um leistungsfähig zu werden.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">🔄 Die 5 Phasen</div>
                <ol>
                    <li><strong>Forming (Orientierungsphase):</strong> Das Team lernt sich kennen. Man ist höflich, unsicher, und die Aufgaben sind noch unklar.</li>
                    <li><strong>Storming (Konfliktphase):</strong> Es kommt zu Konflikten um Rollen, Ziele und Vorgehensweisen. Cliquen können sich bilden. Diese Phase ist entscheidend für die spätere Leistungsfähigkeit.</li>
                    <li><strong>Norming (Organisationsphase):</strong> Das Team einigt sich auf gemeinsame Regeln, Strukturen und Arbeitsweisen. Der Teamgeist wächst.</li>
                    <li><strong>Performing (Leistungsphase):</strong> Das Team arbeitet effizient und zielorientiert zusammen. Probleme werden konstruktiv gelöst. Die Energie fließt in die Aufgabe.</li>
                    <li><strong>Adjourning (Auflösungsphase):</strong> Nach Projektende wird das Team aufgelöst. Es kommt zu einer emotionalen Phase des Abschieds.</li>
                </ol>
            </div>
            <div class="example-box">
                <strong>💡 Prüfungsfrage:</strong> "Ein neues Projektteam streitet ständig über die richtige Programmiersprache. In welcher Phase nach Tuckman befindet sich das Team?"<br><strong>Antwort:</strong> Storming.
            </div>
        `,
        flashcard: { question: "Welche Phase nach Tuckman ist durch Konflikte um Rollen und Ziele gekennzeichnet?", answer: "Storming (Konfliktphase)." }
    },
    'kommunikationsmodelle': {
        title: 'Kommunikationsmodelle (4-Ohren-Modell)',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">📚 Das 4-Ohren-Modell</div>
                <p>Entwickelt von Friedemann Schulz von Thun, besagt dieses Modell, dass <strong>jede Nachricht vier Ebenen (oder "Ohren")</strong> hat, auf denen sie gesendet und empfangen werden kann. Missverständnisse entstehen, wenn Sender und Empfänger auf unterschiedlichen Ebenen kommunizieren.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">👂 Die vier Ebenen</div>
                <table class="comparison-table">
                    <thead><tr><th>Ebene</th><th>Was wird übermittelt?</th><th>Beispiel: "Die Ampel ist grün."</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Sachebene</strong></td><td>Die reine Information, Daten & Fakten.</td><td>"Die Ampel zeigt die Farbe Grün."</td></tr>
                        <tr><td><strong>Selbstoffenbarung</strong></td><td>Was der Sender über sich selbst verrät (Gefühle, Zustand).</td><td>"Ich habe es eilig."</td></tr>
                        <tr><td><strong>Beziehungsebene</strong></td><td>Was der Sender vom Empfänger hält und wie er zu ihm steht.</td><td>"Du brauchst meine Hilfe beim Fahren."</td></tr>
                        <tr><td><strong>Appellebene</strong></td><td>Wozu der Sender den Empfänger veranlassen möchte.</td><td>"Fahr los!"</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="example-box">
                <strong>⚠️ Konfliktpotenzial:</strong> Der Fahrer (Sender) sagt "Die Ampel ist grün." (Sachebene). Die Beifahrerin (Empfänger) hört es auf der Beziehungsebene ("Du hältst mich für eine schlechte Fahrerin!") und reagiert verärgert, obwohl nur eine Information gemeint war.
            </div>
        `,
        flashcard: { question: "Nenne die vier Ebenen (Ohren) des Kommunikationsmodells von Schulz von Thun.", answer: "Sachebene, Selbstoffenbarung, Beziehungsebene und Appellebene." }
    },
    'scrum_kanban': {
        title: 'Scrum und Kanban Grundlagen',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title"> agile Methoden</div>
                <p>Scrum und Kanban sind die populärsten agilen Vorgehensmodelle, die auf Flexibilität, kontinuierliche Verbesserung und schnelle Reaktionsfähigkeit auf Änderungen setzen.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">📊 Vergleich</div>
                <table class="comparison-table">
                    <thead><tr><th>Aspekt</th><th>Scrum</th><th>Kanban</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Grundprinzip</strong></td><td>Arbeit in festen Zyklen (Sprints)</td><td>Kontinuierlicher Fluss der Arbeit (Flow)</td></tr>
                        <tr><td><strong>Rollen</strong></td><td>Fest definiert: Product Owner, Scrum Master, Entwicklungsteam</td><td>Keine festen Rollen vorgeschrieben</td></tr>
                        <tr><td><strong>Arbeitseinheiten</strong></td><td>Sprint Backlog wird zu Beginn des Sprints festgelegt</td><td>Aufgaben werden einzeln aus einem Backlog gezogen (Pull-Prinzip)</td></tr>
                        <tr><td><strong>Meetings</strong></td><td>Festgelegt: Sprint Planning, Daily Scrum, Sprint Review, Retrospective</td><td>Keine festen Meetings, oft aber "Stand-ups"</td></tr>
                        <tr><td><strong>Fokus</strong></td><td>Ein "potenziell auslieferbares Inkrement" am Ende jedes Sprints</td><td>Visualisierung des Workflows, Begrenzung der parallelen Arbeit (WIP-Limits)</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="example-box">
                <strong>Scrum</strong> ist wie ein Restaurant, das alle 2 Wochen ein neues Menü plant und kocht. <strong>Kanban</strong> ist wie eine Sushi-Bar, bei der die Köche kontinuierlich die Teller auf dem Laufband nachfüllen, sobald einer genommen wird.
            </div>
        `,
        flashcard: { question: "Was ist der Hauptunterschied zwischen Scrum und Kanban bezüglich der Arbeitsweise?", answer: "Scrum arbeitet in festen Zyklen (Sprints), Kanban in einem kontinuierlichen Fluss (Flow)." }
    },
    'feedback-techniken': {
        title: 'Feedback-Techniken',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">📚 Ziel von Feedback</div>
                <p>Konstruktives Feedback soll eine Verhaltensänderung oder -bestätigung bewirken, ohne die Beziehung zu belasten. Es sollte immer beschreibend, konkret und subjektiv ("Ich-Botschaften") sein.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">🥪 Sandwich-Methode</div>
                <p>Eine populäre, aber auch umstrittene Methode, bei der Kritik zwischen zwei positive Anmerkungen "verpackt" wird.</p>
                <ol>
                    <li><strong>Positiver Einstieg:</strong> "Ich finde es super, wie engagiert du im Projekt bist."</li>
                    <li><strong>Konstruktive Kritik:</strong> "Mir ist aufgefallen, dass du in den letzten Meetings oft andere unterbrichst. Auf mich wirkt das so, als ob du ihre Ideen nicht wertschätzt."</li>
                    <li><strong>Positiver Abschluss:</strong> "Ich bin aber zuversichtlich, dass wir das als Team gut hinbekommen."</li>
                </ol>
                <p><strong>⚠️ Kritik an der Methode:</strong> Die positiven Aussagen können unaufrichtig wirken und die eigentliche Kritik wird eventuell nicht ernst genommen.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">⭐ WWW-Feedback</div>
                <p>Eine alternative, oft als besser empfundene Methode:</p>
                <ul>
                    <li><strong>Wahrnehmung:</strong> Was habe ich konkret beobachtet? ("Ich habe gesehen, dass die Dokumentation für Modul X fehlt.")</li>
                    <li><strong>Wirkung:</strong> Welche Wirkung hatte das auf mich/das Team? ("Das hat bei mir dazu geführt, dass ich eine Stunde länger gebraucht habe, um die Schnittstelle zu verstehen.")</li>
                    <li><strong>Wunsch:</strong> Was wünsche ich mir für die Zukunft? ("Ich wünsche mir, dass wir vereinbaren, die Doku direkt nach der Implementierung zu schreiben.")</li>
                </ul>
            </div>
        `,
        flashcard: { question: "Beschreibe das WWW-Feedback-Modell.", answer: "Wahrnehmung (Was habe ich beobachtet?), Wirkung (Wie hat es auf mich gewirkt?), Wunsch (Was wünsche ich mir?)." }
    },
    'arbeitszeiten': {
        title: 'Arbeitszeiten & Ruhepausen (ArbZG)',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">⚖️ Arbeitszeitgesetz (ArbZG)</div>
                <p>Das ArbZG regelt die grundlegenden Rechte und Pflichten bezüglich der Arbeitszeit in Deutschland zum Schutz der Arbeitnehmer.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">⏰ Kernaussagen</div>
                <ul>
                    <li><strong>Tägliche Arbeitszeit:</strong> Grundsätzlich max. <strong>8 Stunden</strong> pro Werktag.</li>
                    <li><strong>Verlängerung:</strong> Kann auf bis zu <strong>10 Stunden</strong> verlängert werden, wenn innerhalb von 6 Monaten ein Durchschnitt von 8 Stunden pro Werktag nicht überschritten wird.</li>
                    <li><strong>Ruhepausen:</strong>
                        <ul>
                            <li>Bei 6 bis 9 Stunden Arbeit: mind. <strong>30 Minuten</strong> Pause.</li>
                            <li>Bei über 9 Stunden Arbeit: mind. <strong>45 Minuten</strong> Pause.</li>
                            <li>Die Pausen können in Blöcke von je 15 Minuten aufgeteilt werden.</li>
                        </ul>
                    </li>
                    <li><strong>Ruhezeit:</strong> Nach Beendigung der täglichen Arbeitszeit muss eine ununterbrochene Ruhezeit von mind. <strong>11 Stunden</strong> gewährt werden.</li>
                </ul>
            </div>
        `,
        flashcard: { question: "Wie lange ist die gesetzliche Mindestruhezeit zwischen zwei Arbeitstagen?", answer: "11 Stunden." }
    },
    'software-lizenzen': {
        title: 'Software-Lizenzarten',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">📚 Lizenz-Grundlagen</div>
                <p>Eine Software-Lizenz ist ein Vertrag, der die Nutzungsrechte für eine Software regelt. Man unterscheidet grob zwischen proprietärer und freier/Open-Source-Software.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">📊 Lizenztypen im Vergleich</div>
                <table class="comparison-table">
                    <thead><tr><th>Typ</th><th>Beschreibung</th><th>Beispiel</th></tr></thead>
                    <tbody>
                        <tr>
                            <td><strong>Proprietär</strong></td>
                            <td>Quellcode ist geheim, Nutzung stark eingeschränkt (oft pro Nutzer/Gerät), meist kostenpflichtig.</td>
                            <td>Microsoft Windows, Adobe Photoshop</td>
                        </tr>
                        <tr>
                            <td><strong>Freeware</strong></td>
                            <td>Kostenlos nutzbar, aber oft mit eingeschränkten Rechten (z.B. nur für private Nutzung). Quellcode nicht einsehbar.</td>
                            <td>CCleaner (Free Version)</td>
                        </tr>
                        <tr>
                            <td><strong>Open Source (Permissive)</strong></td>
                            <td>Quellcode ist offen. Software darf frei genutzt, verändert und weitergegeben werden, auch in kommerziellen Produkten. Wenig Pflichten.</td>
                            <td>MIT Lizenz, Apache 2.0</td>
                        </tr>
                        <tr>
                            <td><strong>Open Source (Copyleft)</strong></td>
                            <td>Quellcode ist offen. Abgeleitete Werke müssen ebenfalls unter derselben oder einer kompatiblen Lizenz veröffentlicht werden.</td>
                            <td>GPL (GNU General Public License)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `,
        flashcard: { question: "Was ist der Hauptunterschied zwischen einer MIT-Lizenz und der GPL (Copyleft)?", answer: "Bei der GPL müssen abgeleitete Werke ebenfalls unter der GPL veröffentlicht werden (Copyleft), bei MIT nicht." }
    },
    'dsgvo-artikel6': {
        title: 'DSGVO Art. 6 - Rechtmäßigkeit der Verarbeitung',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">⚖️ Grundprinzip</div>
                <p>Die Verarbeitung personenbezogener Daten ist <strong>grundsätzlich verboten</strong>, es sei denn, es liegt eine Erlaubnis vor. Artikel 6 der DSGVO listet diese Erlaubnistatbestände auf.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">✅ Erlaubnistatbestände (Auswahl)</div>
                <p>Die Verarbeitung ist nur rechtmäßig, wenn mindestens eine der folgenden Bedingungen erfüllt ist:</p>
                <ul>
                    <li><strong>Einwilligung (lit. a):</strong> Die betroffene Person hat ihre freiwillige und informierte Einwilligung gegeben.</li>
                    <li><strong>Vertragserfüllung (lit. b):</strong> Die Verarbeitung ist für die Erfüllung eines Vertrags (z.B. Arbeitsvertrag, Kaufvertrag) notwendig.</li>
                    <li><strong>Rechtliche Verpflichtung (lit. c):</strong> Die Verarbeitung ist zur Erfüllung einer rechtlichen Pflicht erforderlich (z.B. steuerliche Aufbewahrungspflichten).</li>
                    <li><strong>Lebenswichtige Interessen (lit. d):</strong> Zum Schutz des Lebens oder der Gesundheit (z.B. Notfalldaten im Krankenhaus).</li>
                    <li><strong>Berechtigtes Interesse (lit. f):</strong> Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Unternehmens erforderlich und die Interessen des Betroffenen überwiegen nicht (z.B. Videoüberwachung zur Diebstahlprävention).</li>
                </ul>
            </div>
        `,
        flashcard: { question: "Nenne zwei Rechtsgrundlagen für die Verarbeitung personenbezogener Daten nach Art. 6 DSGVO.", answer: "Einwilligung der Person oder Notwendigkeit zur Vertragserfüllung." }
    },
    'it-sicherheitsgesetz': {
        title: 'IT-Sicherheitsgesetz (IT-SiG)',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">📚 Ziel des Gesetzes</div>
                <p>Das IT-Sicherheitsgesetz (aktuell IT-SiG 2.0) soll die Sicherheit informationstechnischer Systeme in Deutschland erhöhen. Ein besonderer Fokus liegt auf <strong>Kritischen Infrastrukturen (KRITIS)</strong>.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">🏭 Was ist KRITIS?</div>
                <p>Kritische Infrastrukturen sind Organisationen und Einrichtungen mit wichtiger Bedeutung für das staatliche Gemeinwesen, bei deren Ausfall oder Beeinträchtigung nachhaltig wirkende Versorgungsengpässe, erhebliche Störungen der öffentlichen Sicherheit oder andere dramatische Folgen eintreten würden.</p>
                <p><strong>Sektoren sind z.B.:</strong> Energie, Wasser, Ernährung, Gesundheit, Transport, Finanzen und Informationstechnik.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">📋 Hauptpflichten für KRITIS-Betreiber</div>
                <ul>
                    <li>Umsetzung von IT-Sicherheitsmaßnahmen nach dem <strong>Stand der Technik</strong>.</li>
                    <li>Regelmäßiger <strong>Nachweis</strong> der Umsetzung gegenüber dem BSI (Bundesamt für Sicherheit in der Informationstechnik).</li>
                    <li><strong>Meldung von erheblichen IT-Störungen</strong> an das BSI.</li>
                    <li>Benennung einer zentralen <strong>Kontaktstelle</strong>.</li>
                </ul>
            </div>
        `,
        flashcard: { question: "Was versteht man unter KRITIS im Kontext des IT-Sicherheitsgesetzes?", answer: "Kritische Infrastrukturen (z.B. Energie, Wasser, Gesundheit), deren Ausfall dramatische Folgen hätte." }
    },

    // =======================================================
    // THEMA: HARDWARE & KONFIGURATION
    // =======================================================
    'hardware-komponenten': {
        title: 'Hardware-Komponenten & Systemarchitektur',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">🖥️ Zentrale PC-Komponenten</div>
                 <table class="comparison-table">
                    <thead><tr><th>Komponente</th><th>Funktion & Wichtige Merkmale</th></tr></thead>
                    <tbody>
                        <tr><td><strong>CPU (Central Processing Unit)</strong></td><td>Das "Gehirn" des Computers. Führt Befehle aus. Kennzahlen: Taktfrequenz (GHz), Anzahl der Kerne, Cache.</td></tr>
                        <tr><td><strong>RAM (Random Access Memory)</strong></td><td>Flüchtiger Arbeitsspeicher für aktive Programme & Daten. Kennzahlen: Kapazität (GB), Geschwindigkeit (DDR-Typ, Taktrate).</td></tr>
                        <tr><td><strong>Storage (HDD/SSD)</strong></td><td>Nicht-flüchtiger Speicher. HDD (mechanisch, günstig, langsam), SSD (elektronisch, schnell, teurer).</td></tr>
                        <tr><td><strong>GPU (Graphics Processing Unit)</strong></td><td>Spezialisiert auf die Berechnung von Grafikdaten. Wichtig für Gaming, Design, KI.</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">🔌 Mainboard (Motherboard)</div>
                <p>Die zentrale Platine, die alle Komponenten verbindet. Es fungiert als Rückgrat des Computers.</p>
                <ul>
                    <li><strong>Prozessorsockel (CPU-Socket):</strong> Hier wird der Prozessor eingesetzt. Muss mit der CPU kompatibel sein.</li>
                    <li><strong>Chipsatz:</strong> Verbindet die CPU mit anderen Komponenten. Früher als North- und Southbridge bekannt, heute sind viele Funktionen direkt in die CPU integriert.</li>
                    <li><strong>Erweiterungssteckplätze:</strong> Früher PCI, heute der viel schnellere <strong>PCIe (PCI Express)</strong> für Grafikkarten etc.</li>
                    <li><strong>Speicheranschlüsse:</strong> Früher IDE, heute <strong>SATA</strong> (für HDDs/SSDs) und <strong>NVMe (M.2)</strong> für extrem schnelle SSDs.</li>
                    <li><strong>BIOS/UEFI:</strong> Die Firmware des Mainboards. Das moderne <strong>UEFI</strong> (Unified Extensible Firmware Interface) hat das alte BIOS abgelöst und bietet eine grafische Oberfläche und mehr Funktionen.</li>
                </ul>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">⚙️ Chronologischer Ablauf der CPU-Operationen</div>
                <p>Jeder Befehl, den eine CPU verarbeitet, durchläuft einen Zyklus aus mehreren Schritten (Pipeline):</p>
                <ol>
                    <li><strong>Instruction Fetch (Befehl holen):</strong> Der Befehl wird aus dem Speicher (RAM/Cache) geholt. Der <strong>Programmzähler (PC)</strong> zeigt dabei auf die Adresse des nächsten Befehls.</li>
                    <li><strong>Instruction Decode (Befehl dekodieren):</strong> Der Befehlsdecoder analysiert den Befehl und übersetzt ihn in Steuersignale für die CPU.</li>
                    <li><strong>Execute (Ausführen):</strong> Die <strong>ALU (Arithmetic Logic Unit)</strong> führt die eigentliche Operation aus (z.B. Addition, logisches UND).</li>
                    <li><strong>Write Back (Rückschreiben):</strong> Das Ergebnis der Operation wird zurück in ein Register geschrieben, um für weitere Befehle verfügbar zu sein.</li>
                </ol>
            </div>
        `,
        flashcard: { question: "Wodurch wurde das alte BIOS auf Mainboards ersetzt und welche Vorteile bietet es?", answer: "Durch UEFI (Unified Extensible Firmware Interface). Vorteile sind u.a. eine grafische Oberfläche und Unterstützung für größere Festplatten." }
    },
    'tco': {
        title: 'Total Cost of Ownership (TCO)',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">📚 Definition</div>
                <p>Der <strong>Total Cost of Ownership (TCO)</strong> ist eine Berechnungsmethode, die nicht nur die Anschaffungskosten, sondern <strong>alle Kosten</strong> berücksichtigt, die über die gesamte Lebensdauer einer IT-Anschaffung anfallen.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">➕ Kostenarten</div>
                <ul>
                    <li><strong>Direkte Kosten (sichtbar):</strong>
                        <ul>
                            <li>Anschaffung (Hardware, Software)</li>
                            <li>Installation & Implementierung</li>
                            <li>Wartung & Supportverträge</li>
                        </ul>
                    </li>
                    <li><strong>Indirekte Kosten (oft unsichtbar):</strong>
                        <ul>
                            <li>Personalkosten (Schulung, Administration)</li>
                            <li>Betriebskosten (Strom, Kühlung)</li>
                            <li>Ausfallzeiten & Produktivitätsverluste</li>
                            <li>Entsorgungskosten</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="example-box">
                <strong>💻 Beispiel:</strong> Ein "billiger" Server (geringe Anschaffungskosten) kann einen hohen TCO haben, wenn er viel Strom verbraucht und häufig gewartet werden muss. Ein teurerer, energieeffizienter Server kann langfristig günstiger sein.
            </div>
        `,
        flashcard: { question: "Was betrachtet der TCO außer dem Kaufpreis?", answer: "Alle direkten und indirekten Kosten über die gesamte Nutzungsdauer (z.B. Strom, Wartung, Personal)." }
    },
    'roi': {
        title: 'Return on Investment (ROI)',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">📚 Definition</div>
                <p>Der <strong>Return on Investment (ROI)</strong> ist eine Kennzahl, die die Rentabilität einer Investition misst. Sie zeigt, wie viel Prozent des eingesetzten Kapitals als Gewinn zurückgeflossen ist.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">🧮 Formel</div>
                <div class="formula-box">ROI (%) = (Gewinn / Investitionskosten) × 100</div>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">🎯 Interpretation</div>
                <ul>
                    <li><strong>ROI > 0%:</strong> Die Investition war rentabel.</li>
                    <li><strong>ROI = 0%:</strong> Weder Gewinn noch Verlust.</li>
                    <li><strong>ROI < 0%:</strong> Die Investition hat zu einem Verlust geführt.</li>
                </ul>
            </div>
            <div class="example-box">
                <strong>🔧 Beispiel:</strong> Eine Investition von 20.000 € in eine neue Software bringt einen Gewinn (z.B. durch Prozesseinsparungen) von 30.000 €.<br>
                ROI = (30.000 € / 20.000 €) × 100 = 150%.<br>
                Jeder investierte Euro hat 1,50 € Gewinn erbracht.
            </div>
        `,
        flashcard: { question: "Was bedeutet ein ROI von 200%?", answer: "Dass der Gewinn doppelt so hoch war wie die ursprünglichen Investitionskosten." }
    },
    'amortisation': {
        title: 'Amortisationszeit (Payback Period)',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">📚 Definition</div>
                <p>Die <strong>Amortisationszeit</strong> gibt an, wie lange es dauert, bis die ursprünglichen Anschaffungskosten einer Investition durch die daraus resultierenden Einnahmen oder Einsparungen (Cashflows) vollständig zurückverdient sind.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">🧮 Formel (vereinfacht)</div>
                <div class="formula-box">Amortisationszeit (in Jahren) = Anschaffungskosten / Jährliche Einsparungen</div>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">🎯 Bedeutung</div>
                <p>Sie ist eine einfache Methode zur Risikobewertung: <strong>Je kürzer die Amortisationszeit, desto schneller ist das investierte Kapital wieder "sicher" und desto geringer das Risiko.</strong></p>
            </div>
            <div class="example-box">
                <strong>💻 Beispiel:</strong> Ein neuer Server kostet 10.000 €. Er spart pro Jahr 2.500 € an Strom- und Wartungskosten.<br>
                Amortisationszeit = 10.000 € / 2.500 € pro Jahr = 4 Jahre.
            </div>
        `,
        flashcard: { question: "Was sagt eine kurze Amortisationszeit aus?", answer: "Dass das investierte Kapital schnell zurückfließt und das Risiko der Investition geringer ist." }
    },
    'make-or-buy': {
        title: 'Make-or-Buy-Entscheidung',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">📚 Definition</div>
                <p>Die <strong>Make-or-Buy-Entscheidung</strong> ist die strategische Überlegung, ob ein Produkt oder eine Dienstleistung selbst erstellt (Make) oder von einem externen Anbieter eingekauft wird (Buy).</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">⚖️ Entscheidungskriterien</div>
                <table class="comparison-table">
                    <thead><tr><th>Faktor</th><th>Pro "Make" (Selbstmachen)</th><th>Pro "Buy" (Einkaufen)</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Kosten</strong></td><td>Langfristig potenziell günstiger, keine Gewinnmarge für Dritte.</td><td>Keine hohen Anfangsinvestitionen, Skaleneffekte des Anbieters.</td></tr>
                        <tr><td><strong>Know-how</strong></td><td>Schutz von Betriebsgeheimnissen, Aufbau eigener Kompetenzen.</td><td>Zugriff auf Expertenwissen, man muss nicht alles selbst können.</td></tr>
                        <tr><td><strong>Qualität</strong></td><td>Volle Kontrolle über den Prozess und die Qualität.</td><td>Anbieter ist oft hochspezialisiert und liefert Top-Qualität.</td></tr>
                        <tr><td><strong>Fokus</strong></td><td>Unabhängigkeit von Lieferanten.</td><td>Konzentration auf das eigene Kerngeschäft.</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="example-box">
                <strong>💻 IT-Beispiel:</strong> Soll ein Unternehmen seine eigene Buchhaltungssoftware entwickeln (Make) oder eine Standardlösung wie DATEV oder SAP kaufen (Buy)?
            </div>
        `,
        flashcard: { question: "Nenne zwei Faktoren für eine Make-or-Buy-Entscheidung.", answer: "Kosten, Know-how, Qualität, strategischer Fokus, verfügbare Kapazitäten." }
    },
    'energiekosten': {
        title: 'Energiekosten-Berechnung',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">📚 Grundlage</div>
                <p>Die Berechnung der Energiekosten für IT-Geräte ist eine typische Prüfungsaufgabe. Sie basiert auf der Leistung des Geräts, der Nutzungsdauer und dem Strompreis.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">🧮 Formel</div>
                <div class="formula-box">
                    Gesamtkosten = (Leistung in kW × Nutzungsdauer in h) × Strompreis in €/kWh
                </div>
                <p><strong>Wichtige Umrechnungen:</strong></p>
                <ul>
                    <li>1 Kilowatt (kW) = 1000 Watt (W)</li>
                    <li>Leistung (W) muss oft erst in kW umgerechnet werden: <strong>Watt / 1000 = Kilowatt</strong>.</li>
                </ul>
            </div>
            <div class="example-box">
                <strong>💻 Prüfungsbeispiel:</strong><br>
                Ein Server hat eine Leistungsaufnahme von 200 Watt und läuft 24/7 (also 24h an 365 Tagen). Der Strompreis beträgt 0,30 €/kWh.<br>
                1. <strong>Leistung in kW:</strong> 200 W / 1000 = 0,2 kW<br>
                2. <strong>Nutzungsstunden pro Jahr:</strong> 24 h/Tag × 365 Tage = 8760 h<br>
                3. <strong>Verbrauch in kWh:</strong> 0,2 kW × 8760 h = 1752 kWh<br>
                4. <strong>Jahreskosten:</strong> 1752 kWh × 0,30 €/kWh = 525,60 €
            </div>
        `,
        flashcard: { question: "Wie berechnet man die jährlichen Stromkosten eines Geräts?", answer: "(Leistung in kW * 8760 h) * Strompreis pro kWh." }
    },

    // =======================================================
    // THEMA: NETZWERKE (CLIENTS EINBINDEN)
    // =======================================================
    'ip-klassen-cidr': {
        title: 'IP-Klassen & CIDR',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">📚 Historische IP-Klassen</div>
                <p>Ursprünglich wurden IPv4-Adressen in Klassen eingeteilt, um die Größe von Netzwerken festzulegen. Die Klasse wurde durch die ersten Bits der IP-Adresse bestimmt.</p>
                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th>Klasse</th>
                            <th>Adressbereich</th>
                            <th>Standard-Subnetzmaske</th>
                            <th>Zweck</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Klasse A</strong></td>
                            <td>0.0.0.0 – 127.255.255.255</td>
                            <td>255.0.0.0 (/8)</td>
                            <td>Sehr wenige, riesige Netzwerke (z.B. für große Konzerne, ISPs).</td>
                        </tr>
                        <tr>
                            <td><strong>Klasse B</strong></td>
                            <td>128.0.0.0 – 191.255.255.255</td>
                            <td>255.255.0.0 (/16)</td>
                            <td>Mittelgroße Netzwerke (z.B. für Universitäten).</td>
                        </tr>
                        <tr>
                            <td><strong>Klasse C</strong></td>
                            <td>192.0.0.0 – 223.255.255.255</td>
                            <td>255.255.255.0 (/24)</td>
                            <td>Sehr viele, kleine Netzwerke.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">🚀 CIDR (Classless Inter-Domain Routing)</div>
                <p>Das starre Klassensystem war ineffizient und wurde durch <strong>CIDR</strong> abgelöst. Statt fester Klassen verwendet CIDR eine flexible <strong>Präfixlänge</strong> (z.B. /25), um die Größe des Netzwerkanteils exakt zu definieren. Dies ermöglicht eine viel effizientere Vergabe von IP-Adressen.</p>
                <div class="example-box">
                    <strong>💡 Beispiel:</strong> Eine IP-Adresse 192.168.1.1 gehört nach dem alten System zur Klasse C. Mit CIDR könnte sie aber mit einer Subnetzmaske /16 (255.255.0.0) verwendet werden, was sie Teil eines viel größeren Netzwerks macht. CIDR ist heute der Standard.
                </div>
            </div>
        `,
        flashcard: { question: "Was ist der Hauptunterschied zwischen klassenbasierter Adressierung und CIDR?", answer: "Klassen (A, B, C) haben feste, vordefinierte Subnetzmasken. CIDR (Classless Inter-Domain Routing) verwendet eine flexible Präfixlänge (z.B. /24, /26), um IP-Adressbereiche bedarfsgerecht und effizient zuzuweisen." }
    },
    'private-ip': {
        title: 'Private vs. Öffentliche IP-Adressen',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">📚 Definition</div>
                <p>IPv4-Adressen werden in zwei Haupttypen unterteilt: private Adressen für lokale Netzwerke und öffentliche Adressen für das Internet.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">📊 Vergleich</div>
                <table class="comparison-table">
                    <thead><tr><th>Merkmal</th><th>Private IP-Adresse</th><th>Öffentliche IP-Adresse</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Zweck</strong></td><td>Kommunikation innerhalb eines lokalen Netzwerks (LAN), z.B. zu Hause oder in der Firma.</td><td>Kommunikation über das Internet. Eindeutige Identifikation eines Netzwerks weltweit.</td></tr>
                        <tr><td><strong>Routing</strong></td><td><strong>Nicht</strong> im öffentlichen Internet routbar.</td><td>Im Internet routbar.</td></tr>
                        <tr><td><strong>Adressbereiche (RFC 1918)</strong></td><td>10.0.0.0 – 10.255.255.255 (/8)<br>172.16.0.0 – 172.31.255.255 (/12)<br>192.168.0.0 – 192.168.255.255 (/16)</td><td>Alle anderen Adressen, die nicht als privat, Loopback o.ä. reserviert sind.</td></tr>
                        <tr><td><strong>Vergabe</strong></td><td>Wird vom lokalen Router (meist per DHCP) vergeben. Kann in jedem LAN wiederverwendet werden.</td><td>Wird vom Internet Service Provider (ISP) zugewiesen und ist weltweit (temporär) eindeutig.</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">🌐 Network Address Translation (NAT)</div>
                <p>Damit ein Gerät mit privater IP-Adresse ins Internet kann, muss der Router <strong>NAT</strong> anwenden. Der Router "übersetzt" die private Absender-IP in seine eigene, öffentliche IP-Adresse. Für die Gegenstelle im Internet sieht es so aus, als käme die Anfrage direkt vom Router.</p>
            </div>
        `,
        flashcard: { question: "Darf eine private IP-Adresse (z.B. 192.168.1.5) direkt im Internet geroutet werden?", answer: "Nein. Private IP-Adressen sind nur in lokalen Netzwerken gültig. Für die Internetkommunikation müssen sie mittels NAT (Network Address Translation) in eine öffentliche IP-Adresse übersetzt werden." }
    },
    'subnetting': {
        title: 'Subnetting & VLSM',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">📚 Was ist Subnetting?</div>
                <p><strong>Subnetting</strong> (Subnetzbildung) ist der Prozess, bei dem ein großes IP-Netzwerk in mehrere kleinere, logische Unternetze (Subnetze) aufgeteilt wird. Dies geschieht durch "Ausleihen" von Bits aus dem Host-Anteil der IP-Adresse, um sie dem Netzwerk-Anteil hinzuzufügen. Dadurch wird die Subnetzmaske verlängert.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">🎯 Warum Subnetting?</div>
                <ul>
                    <li><strong>Organisation:</strong> Netzwerke können nach Abteilungen oder Standorten strukturiert werden.</li>
                    <li><strong>Performance:</strong> Reduziert Broadcast-Verkehr, da Broadcasts auf das jeweilige Subnetz beschränkt bleiben.</li>
                    <li><strong>Sicherheit:</strong> Der Datenverkehr kann zwischen den Subnetzen über einen Router kontrolliert und gefiltert werden.</li>
                </ul>
            </div>
             <div class="popup-section">
                <div class="popup-section-title">💡 VLSM (Variable Length Subnet Masking)</div>
                <p>VLSM ist eine fortgeschrittene Methode des Subnettings, die es erlaubt, für verschiedene Subnetze <strong>unterschiedlich große Subnetzmasken</strong> zu verwenden. Das ist extrem effizient, da man jedem Subnetz genau die Anzahl an Adressen zuweisen kann, die es benötigt.</p>
            </div>
            <div class="example-box">
                <strong>🔧 Beispielaufgabe (VLSM):</strong> Ein Netzwerk benötigt 100 Hosts.
                <ol>
                    <li><strong>Bedarf ermitteln:</strong> Für 100 Hosts braucht man 100 Adressen + 1 Netzwerk- + 1 Broadcast-Adresse = 102 Adressen.</li>
                    <li><strong>Nächste Zweierpotenz finden:</strong> Die nächste Potenz von 2, die größer oder gleich 102 ist, ist $2^7 = 128$. Man benötigt also 7 Bits für den Host-Anteil.</li>
                    <li><strong>Subnetzmaske berechnen:</strong> Eine IPv4-Adresse hat 32 Bits. Wenn 7 Bits für die Hosts reserviert sind, bleiben $32 - 7 = 25$ Bits für das Netzwerk.</li>
                    <li><strong>Ergebnis:</strong> Das Subnetz hat die Präfixlänge <strong>/25</strong> (Subnetzmaske 255.255.255.128). Es stellt 128 Adressen bereit, wovon 126 für Hosts nutzbar sind.</li>
                </ol>
            </div>
        `,
        flashcard: { question: "Was ist der Hauptvorteil von VLSM gegenüber Subnetting mit fester Länge?", answer: "VLSM (Variable Length Subnet Masking) erlaubt die Verwendung unterschiedlich großer Subnetze, wodurch IP-Adressen viel effizienter und bedarfsgerechter zugewiesen werden können." }
    },
    'broadcast-netzwerk': {
        title: 'Netzwerk-, Host- & Broadcast-Adresse',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">📚 Die drei Adresstypen in einem Subnetz</div>
                <p>Jedes IP-Subnetz enthält drei Arten von Adressen, deren Rolle durch die Host-Bits in der Adresse definiert wird.</p>
                <ul>
                    <li><strong>Netzwerkadresse:</strong> Die <strong>allererste</strong> Adresse in einem Subnetz. Alle Host-Bits sind hier auf 0 gesetzt. Sie identifiziert das Subnetz als Ganzes und kann keinem einzelnen Gerät zugewiesen werden.</li>
                    <li><strong>Host-Adressen:</strong> Alle Adressen zwischen der Netzwerk- und der Broadcast-Adresse. Diese können Geräten wie PCs, Servern oder Druckern zugewiesen werden.</li>
                    <li><strong>Broadcast-Adresse:</strong> Die <strong>allerletzte</strong> Adresse in einem Subnetz. Alle Host-Bits sind hier auf 1 gesetzt. Ein an diese Adresse gesendetes Paket erreicht alle Geräte im selben Subnetz. Sie kann ebenfalls keinem einzelnen Gerät zugewiesen werden.</li>
                </ul>
            </div>
            <div class="example-box">
                <strong>🔧 Beispielaufgabe:</strong> Gegeben ist die IP-Adresse <strong>192.168.50.100</strong> mit der Subnetzmaske <strong>/24</strong> (255.255.255.0).
                <ul>
                    <li>Die Subnetzmaske /24 legt fest, dass die ersten 3 Oktette (192.168.50) den Netzwerkanteil bilden und das letzte Oktett den Hostanteil.</li>
                    <li><strong>Netzwerkadresse:</strong> Das letzte Oktett auf den niedrigsten Wert setzen (alle Host-Bits auf 0) -> <strong>192.168.50.0</strong></li>
                    <li><strong>Broadcast-Adresse:</strong> Das letzte Oktett auf den höchsten Wert setzen (alle Host-Bits auf 1) -> <strong>192.168.50.255</strong></li>
                    <li><strong>Nutzbare Host-Adressen:</strong> 192.168.50.1 bis 192.168.50.254</li>
                    <li><strong>Anzahl Hosts:</strong> Für den Host-Anteil bleiben 8 Bits ($32-24=8$). Daraus ergeben sich $2^8 = 256$ Gesamtadressen. Abzüglich der 2 reservierten Adressen sind das <strong>254 nutzbare Hosts</strong>.</li>
                </ul>
            </div>
            <section id="broadcast-calculation">
  <h2>Ausführliche Anleitung: Berechnung der Broadcast-Adresse</h2>

  <p>
    Eine Broadcast-Adresse dient dazu, ein Paket an <em>alle</em> Hosts innerhalb eines bestimmten Subnetzes zu senden. 
    Um sie zu ermitteln, muss man gezielt alle Bits reservierter Host-Adressen auf „1“ setzen, während die Netz-Bits unverändert bleiben.
  </p>

  <h3>1. Grundbegriffe verstehen</h3>
  <p>
    <strong>IP-Adresse:</strong> Eine 32-Bit-Zahl, gegliedert in einen Netz-Teil und einen Host-Teil.  
    <strong>CIDR-Notation (/n):</strong> Gibt an, wie viele Bits zum Netz-Teil gehören (z. B. /24 → die ersten 24 Bits sind Netz-Teil).  
    <strong>Subnetzmaske:</strong> Stellt diese Aufteilung in Dezimalform dar: „1“ für Netz-Bits, „0“ für Host-Bits (z. B. /24 → 255.255.255.0).  
    <strong>Wildcard-Maske:</strong> Das bitweise Inverse der Subnetzmaske – sie zeigt, welche Bits zum Host-Teil gehören (Wildcard-Oktett = 255 − Maske-Oktett).
  </p>

  <h3>2. Subnetzmaske → Wildcard-Maske</h3>
  <p>
    Die Wildcard-Maske zeigt, <em>welche</em> Bits innerhalb der 32-Bit-Adresse für Hosts frei sind. 
    Ein praktisches Vorgehen:
  </p>
  <ul>
    <li>Subnetzmaske in vier Oktette zerlegen (z. B. /26 → 255.255.255.192).</li>
    <li>Jedes Oktett mit <code>255 − Oktettwert</code> invertieren:</li>
  </ul>
  <pre><code>
Subnetzmaske: 255 . 255 . 255 . 192
             11111111 . 11111111 . 11111111 . 11000000
Wildcard     =   0   .   0   .   0   .    63
             00000000 . 00000000 . 00000000 . 00111111
  </code></pre>
  <p>→ Wildcard-Maske = <strong>0.0.0.63</strong></p>

  <h3>3. Netz-ID sicherstellen</h3>
  <p>
    Die Netz-ID ist der erste (kleinste) Wert im Subnetz – immer <code>IP-Adresse AND Subnetzmaske</code>. 
    Oft ist sie bereits vorgegeben (z. B. „172.16.0.0/16“).  
    Bitweise gerechnet ergibt sie die Adresse mit allen Host-Bits auf „0“.
  </p>

  <h3>4. Broadcast-Adresse berechnen</h3>
  <p>
    Die Broadcast-Adresse besteht aus der Netz-ID plus der Wildcard-Maske. 
    Damit werden sämtliche Host-Bits auf „1“ gesetzt, was genau dem Zweck einer Broadcast-Adresse entspricht:
  </p>
  <pre><code>
Broadcast = Netz-ID + Wildcard-Maske
  </code></pre>

  <h3>5. Schritt-für-Schritt-Beispiele</h3>

  <!-- Beispiel A: WAN /30 -->
  <h4>A) WAN-Netz: 203.0.113.64/30</h4>
  <p>
    Ein /30-Netz teilt 32 Bits in 30 Netz-Bits und 2 Host-Bits auf. Das ergibt genau 4 Adressen:
    Netz-ID, zwei Host-Adressen und die Broadcast-Adresse.
  </p>
  <ul>
    <li><strong>Subnetzmaske:</strong> 255.255.255.252 → Wildcard 0.0.0.3</li>
    <li><strong>Netz-ID:</strong> 203.0.113.64 (Host-Bits = 00)</li>
    <li><strong>Broadcast:</strong>
      <code>203.0.113.64 + 0.0.0.3 = 203.0.113.67</code>
    </li>
  </ul>

  <!-- Beispiel B: LAN /16 -->
  <h4>B) LAN-Netz: 172.16.0.0/16</h4>
  <p>
    Bei /16 verbleiben 16 Bits für Host-Adressen (2¹⁶ = 65 536 Adressen).
    Die ersten (Netz-ID) und letzte Adresse (Broadcast) sind reserviert.
  </p>
  <ul>
    <li><strong>Subnetzmaske:</strong> 255.255.0.0 → Wildcard 0.0.255.255</li>
    <li><strong>Netz-ID:</strong> 172.16.0.0 (Host-Bits = 00000000.00000000)</li>
    <li><strong>Broadcast:</strong>
      <code>172.16.0.0 + 0.0.255.255 = 172.16.255.255</code>
    </li>
  </ul>

  <!-- Beispiel C: DMZ /26 -->
  <h4>C) DMZ-Netz: 10.10.0.0/26</h4>
  <p>
    Ein /26-Netz nutzt 26 Bits für das Netz und lässt 6 Bits frei. 
    Somit stehen 2⁶ = 64 Adressen zur Verfügung.
  </p>
  <ul>
    <li><strong>Subnetzmaske:</strong> 255.255.255.192 → Wildcard 0.0.0.63</li>
    <li><strong>Netz-ID:</strong> 10.10.0.0</li>
    <li><strong>Broadcast:</strong>
      <code>10.10.0.0 + 0.0.0.63 = 10.10.0.63</code>
    </li>
  </ul>

  <h3>6. Zusammenfassung und Praxistipps</h3>
  <p>
    <strong>Merke:</strong>  
    Broadcast-Adresse = Netz-ID (Host-Bits = 0) + Wildcard (Host-Bits = 1).  
    Die Anzahl der nutzbaren Hosts ist dabei immer <code>2^(Host-Bits) - 2</code>, 
    da Netz-ID und Broadcast nicht als Host-Adressen verwendet werden dürfen.
  </p>
  <p>
    So kannst du in jeder Netzwerk-Planung sicher und schnell die korrekte Broadcast-Adresse ermitteln.
  </p>
</section>
        `,
        flashcard: { question: "Welche zwei Adressen in einem Subnetz können nicht an einen Host vergeben werden?", answer: "Die Netzwerkadresse (die erste Adresse, alle Host-Bits auf 0) und die Broadcast-Adresse (die letzte Adresse, alle Host-Bits auf 1)." }
    },
    'ipv6-adresstypen': {
        title: 'IPv6-Adresstypen & ihre Funktion',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">📚 Modulares Konzept von IPv6</div>
                <p>Anders als bei IPv4, wo Adresstypen oft durch Tricks wie NAT entstanden, hat IPv6 ein modulares Konzept, bei dem jeder Adresstyp eine klar definierte Aufgabe hat. Ein Gerät hat oft mehrere IPv6-Adressen gleichzeitig.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">📊 Die wichtigsten IPv6 Unicast-Adresstypen</div>
                <table class="comparison-table">
                    <thead><tr><th>Adresstyp</th><th>Präfix</th><th>Zweck</th><th>Vergleichbare IPv4-Entsprechung</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Global Unicast (GUA)</strong></td><td><code>2000::/3</code> (z.B. <code>2001:db8:...</code>)</td><td>Weltweit eindeutige, im Internet routbare Adresse. Für die Kommunikation mit dem Internet.</td><td>Öffentliche IPv4-Adresse</td></tr>
                        <tr><td><strong>Unique Local (ULA)</strong></td><td><code>fc00::/7</code></td><td>Für die interne Kommunikation in einem oder mehreren lokalen Netzwerken. Nicht im Internet routbar. Stabil, auch wenn sich der Internetanbieter ändert.</td><td>Private IPv4-Adresse (z.B. 192.168.x.x)</td></tr>
                        <tr><td><strong>Link-Local (LLA)</strong></td><td><code>fe80::/10</code></td><td>Wird automatisch erzeugt. Nur für die Kommunikation im selben physischen Netzwerksegment (z.B. zwischen PC und Router). Nicht routbar. Technisch notwendig für die Netzwerkkonfiguration.</td><td>APIPA (169.254.x.x), aber immer aktiv</td></tr>
                        <tr><td><strong>Loopback</strong></td><td><code>::1</code></td><td>Verweist auf das eigene Gerät (localhost). Zum Testen der Netzwerkkonfiguration.</td><td>127.0.0.1</td></tr>
                    </tbody>
                </table>
                 <p>Zusätzlich gibt es noch den <strong>Multicast-Adressraum</strong> (Präfix <code>ff00::/8</code>), der genutzt wird, um Daten an eine Gruppe von Geräten gleichzeitig zu senden und den veralteten Broadcast ersetzt.</p>
            </div>
        `,
        flashcard: { question: "Nenne drei Haupttypen von IPv6-Unicast-Adressen und ihren Zweck.", answer: "1. Global Unicast (GUA): Öffentlich, für die Internet-Kommunikation. 2. Unique Local (ULA): Privat, für die interne Netzwerkkommunikation. 3. Link-Local (LLA): Nur für die direkte Kommunikation im selben LAN-Segment." }
    },
    'netzwerkgeraete-vergleich': {
        title: 'Netzwerkgeräte im Vergleich (Hub, Switch, Router)',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">📚 Die Grundbausteine eines Netzwerks</div>
                <p>Hubs, Switches und Router sind zentrale Komponenten für den Aufbau von Netzwerken. Sie unterscheiden sich fundamental in ihrer Funktionsweise und "Intelligenz".</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">📊 Vergleich der Geräte</div>
                <table class="comparison-table">
                    <thead><tr><th>Merkmal</th><th>Hub</th><th>Switch</th><th>Router</th></tr></thead>
                    <tbody>
                        <tr><td><strong>OSI-Schicht</strong></td><td>Schicht 1 (Physical Layer)</td><td>Schicht 2 (Data Link Layer)</td><td>Schicht 3 (Network Layer)</td></tr>
                        <tr><td><strong>Funktionsweise</strong></td><td>Elektrischer Verstärker</td><td>Intelligenter Verteiler</td><td>Netzwerk-Koppler / Wegfinder</td></tr>
                        <tr><td><strong>Adressierung</strong></td><td>Keine, kennt keine Adressen</td><td>MAC-Adressen</td><td>IP-Adressen</td></tr>
                        <tr><td><strong>Weiterleitung</strong></td><td>Sendet ankommende Daten an <strong>alle</strong> anderen Ports (Broadcast)</td><td>Sendet Daten gezielt nur an den Port des Empfängers (via MAC-Tabelle)</td><td>Leitet Daten gezielt zwischen <strong>verschiedenen</strong> Netzwerken weiter</td></tr>
                        <tr><td><strong>Kollisionsdomäne</strong></td><td>Alle Ports teilen sich eine einzige Kollisionsdomäne (ineffizient)</td><td>Jeder Port ist eine eigene Kollisionsdomäne (effizient)</td><td>Jeder Port ist eine eigene Broadcast-Domäne</td></tr>
                        <tr><td><strong>Verwendung</strong></td><td>Veraltet, kaum noch im Einsatz</td><td>Standard in lokalen Netzwerken (LAN) zur Verbindung von Endgeräten</td><td>Verbindung von LANs untereinander oder mit dem Internet (WAN)</td></tr>
                    </tbody>
                </table>
            </div>
             <div class="example-box">
                <strong>💡 Analogie:</strong><br>
                - Ein <strong>Hub</strong> ist wie ein Megafon: Eine Person schreit hinein, und jeder im Raum hört es, egal für wen es bestimmt war.<br>
                - Ein <strong>Switch</strong> ist wie eine Telefonanlage: Er verbindet gezielt den Anrufer mit dem gewünschten Gesprächspartner.<br>
                - Ein <strong>Router</strong> ist wie ein Post-Verteilzentrum: Er schaut auf die Postleitzahl (IP-Netz) und leitet das Paket in die richtige Stadt (Netzwerk) weiter.
            </div>
        `,
        flashcard: { question: "Was ist der Hauptunterschied zwischen einem Switch und einem Hub?", answer: "Ein Hub (Layer 1) sendet Daten an alle Ports (Broadcast). Ein Switch (Layer 2) leitet Daten intelligent und gezielt nur an den Port des Empfängers weiter, basierend auf dessen MAC-Adresse." }
    },
    'bridge-stp': {
        title: 'Bridge & Spanning Tree Protocol (STP)',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">🌉 Was ist eine Bridge?</div>
                <p>Eine <strong>Bridge</strong> ist ein Netzwerkgerät, das zwei oder mehr Segmente eines lokalen Netzwerks (LAN) auf <strong>Schicht 2 (Data Link Layer)</strong> miteinander verbindet. Sie arbeitet wie ein einfacher Switch, indem sie MAC-Adressen lernt und den Datenverkehr filtert, um unnötige Datenübertragungen zwischen den Segmenten zu vermeiden. Heute sind Bridges weitgehend durch Switches ersetzt worden, die im Grunde "Multi-Port-Bridges" sind.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">🔄 Das Problem: Switching-Loops</div>
                <p>Wenn Switches (oder Bridges) redundant miteinander verbunden werden, um die Ausfallsicherheit zu erhöhen, kann ein gefährliches Problem entstehen: der <strong>Switching-Loop</strong> (oder Broadcast-Sturm).</p>
                <p>Dabei wird ein Broadcast-Frame endlos im Kreis von Switch zu Switch weitergeleitet. Jeder Switch leitet den Frame an alle anderen Ports weiter, was zu einer exponentiellen Vervielfachung des Datenverkehrs führt und das gesamte Netzwerk innerhalb von Sekunden lahmlegen kann.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">🌳 Die Lösung: Spanning Tree Protocol (STP)</div>
                <p>Das <strong>Spanning Tree Protocol (STP, IEEE 802.1D)</strong> ist ein Mechanismus, der solche Loops automatisch verhindert. Seine Aufgabe ist es, eine schleifenfreie, baumartige Logik-Topologie in einem physikalisch vermaschten Netzwerk zu erstellen.</p>
                <ul>
                    <li><strong>Wahl eines Root-Switch:</strong> STP wählt einen zentralen "Root-Switch".</li>
                    <li><strong>Ermittlung der besten Pfade:</strong> Von jedem anderen Switch aus wird der schnellste Pfad zur Root-Bridge berechnet.</li>
                    <li><strong>Blockierung redundanter Pfade:</strong> Alle anderen, redundanten Pfade werden von STP in einen <strong>Blocking-Zustand</strong> versetzt. Sie leiten keinen Datenverkehr weiter, bleiben aber als "Backup" verfügbar.</li>
                </ul>
                 <div class="example-box">
                    <strong>❗ Wichtig:</strong> Fällt der aktive Pfad aus, re-aktiviert STP automatisch einen der blockierten Pfade, um die Netzwerkverbindung aufrechtzuerhalten.
                </div>
            </div>
        `,
        flashcard: { question: "Welchen Zweck erfüllt das Spanning Tree Protocol (STP) in einem geswitchten Netzwerk?", answer: "STP verhindert Switching-Loops (Broadcast-Stürme), indem es redundante Pfade in der Netzwerktopologie erkennt und logisch blockiert, um eine schleifenfreie Topologie sicherzustellen." }
    },
    'osi-modell-gesamt': {
        title: 'Das OSI-Modell (7 Schichten)',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">📚 Warum gibt es das OSI-Modell?</div>
                <p>Das OSI-Modell (Open Systems Interconnection) wurde von der ISO als Referenzmodell entwickelt, um Netzwerkkommunikation zu standardisieren. Es teilt den komplexen Prozess der Datenübertragung in <strong>sieben logische Schichten (Layer)</strong> auf. Jede Schicht hat eine spezifische Aufgabe und arbeitet mit den Schichten direkt darüber und darunter zusammen. Dies erleichtert die Fehlersuche und die Interoperabilität zwischen Geräten verschiedener Hersteller.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">🏢 Die 7 Schichten im Überblick</div>
                <table class="comparison-table">
                    <thead><tr><th>#</th><th>Schicht</th><th>Hauptaufgabe</th><th>Protokolle / Geräte / Beispiele</th></tr></thead>
                    <tbody>
                        <tr><td>7</td><td><strong>Anwendung (Application)</strong></td><td>Schnittstelle für Netzwerkanwendungen</td><td>HTTP, FTP, SMTP, DNS, Browser</td></tr>
                        <tr><td>6</td><td><strong>Darstellung (Presentation)</strong></td><td>Daten umwandeln, verschlüsseln, komprimieren</td><td>JPEG, ASCII, TLS/SSL</td></tr>
                        <tr><td>5</td><td><strong>Sitzung (Session)</strong></td><td>Kommunikationssitzungen steuern</td><td>NetBIOS, RPC, Sockets</td></tr>
                        <tr><td>4</td><td><strong>Transport (Transport)</strong></td><td>Zuverlässige End-zu-End-Verbindung, Segmentierung</td><td>TCP, UDP, Ports</td></tr>
                        <tr><td>3</td><td><strong>Netzwerk (Network)</strong></td><td>Logische Adressierung & Routing zwischen Netzwerken</td><td>IP (IPv4/IPv6), ICMP, Router</td></tr>
                        <tr><td>2</td><td><strong>Sicherung (Data Link)</strong></td><td>Fehlerfreie Übertragung im lokalen Netz, physische Adressierung</td><td>Ethernet, WLAN, MAC-Adressen, Switches</td></tr>
                        <tr><td>1</td><td><strong>Bitübertragung (Physical)</strong></td><td>Physische Übertragung von Bits</td><td>Kabel, Glasfaser, Funk, Hubs, Repeater</td></tr>
                    </tbody>
                </table>
                <p><strong>Merkhilfe (von unten nach oben):</strong> <strong>P</strong>lease <strong>D</strong>o <strong>N</strong>ot <strong>T</strong>hrow <strong>S</strong>ausage <strong>P</strong>izza <strong>A</strong>way.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">🔄 Datenfluss (Verkapselung)</div>
                <p>Wenn Daten gesendet werden, durchlaufen sie das Modell von oben nach unten (Schicht 7 -> 1). Auf jeder Schicht wird ein Header mit schichtspezifischen Informationen hinzugefügt. Dieser Prozess nennt sich <strong>Verkapselung (Encapsulation)</strong>.</p>
                <p>Beim Empfänger läuft der Prozess umgekehrt ab (Schicht 1 -> 7). Jede Schicht entfernt ihren Header und verarbeitet die Informationen, bis die reinen Nutzdaten bei der Anwendung ankommen. Dies nennt man <strong>Entkapselung (Decapsulation)</strong>.</p>
            </div>
        `,
        flashcard: { question: "Auf welcher OSI-Schicht arbeiten Router und welche Adressen verwenden sie?", answer: "Router arbeiten auf Schicht 3 (Netzwerkschicht) und verwenden IP-Adressen, um Datenpakete zwischen verschiedenen Netzwerken weiterzuleiten (Routing)." }
    },

    // =======================================================
    // THEMA: SCHUTZBEDARFSANALYSE
    // =======================================================
    'schutzziele-cia': {
        title: 'Schutzziele der Informationssicherheit (CIA-Triade)',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">🛡️ Die 3 Grundpfeiler</div>
                <p>Die klassischen Schutzziele der Informationssicherheit werden durch die CIA-Triade beschrieben. Sie sind die Grundlage jeder Schutzbedarfsanalyse.</p>
                <ul>
                    <li><strong>Vertraulichkeit (Confidentiality):</strong> Daten dürfen nur von autorisierten Personen eingesehen werden. Unbefugter Zugriff wird verhindert.</li>
                    <li><strong>Integrität (Integrity):</strong> Daten müssen korrekt und vollständig sein. Unbemerkte, unautorisierte Veränderungen müssen verhindert werden.</li>
                    <li><strong>Verfügbarkeit (Availability):</strong> Daten und IT-Systeme müssen für autorisierte Benutzer jederzeit zugänglich und funktionsfähig sein.</li>
                </ul>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">➕ Erweiterte Schutzziele</div>
                <p>Neben der CIA-Triade gibt es weitere wichtige Schutzziele:</p>
                <ul>
                    <li><strong>Authentizität:</strong> Die Echtheit und Glaubwürdigkeit eines Subjekts oder Objekts muss sichergestellt sein (z.B. ist der Absender einer E-Mail wirklich der, für den er sich ausgibt?).</li>
                    <li><strong>Zurechenbarkeit / Nichtabstreitbarkeit (Non-Repudiation):</strong> Eine durchgeführte Handlung kann einem Akteur eindeutig zugeordnet werden und nicht abgestritten werden (z.B. eine digitale Signatur unter einem Vertrag).</li>
                </ul>
            </div>
             <div class="example-box">
                <strong>Beispiel:</strong> Eine Online-Banking-Transaktion.<br>
                - <strong>Vertraulichkeit:</strong> Nur du und die Bank können die Kontodaten sehen (Verschlüsselung).<br>
                - <strong>Integrität:</strong> Der Überweisungsbetrag kann auf dem Weg nicht unbemerkt verändert werden.<br>
                - <strong>Verfügbarkeit:</strong> Das Online-Banking-Portal ist erreichbar, wenn du es nutzen möchtest.<br>
                - <strong>Authentizität:</strong> Du weist dich mit Passwort und TAN als echter Kontoinhaber aus.
            </div>
        `,
        flashcard: { question: "Nenne die drei klassischen Schutzziele der Informationssicherheit (CIA-Triade).", answer: "Vertraulichkeit (Confidentiality), Integrität (Integrity) und Verfügbarkeit (Availability)." }
    },
    'backup-konzepte': {
        title: 'Backup-Arten (Voll, Differentiell, Inkrementell)',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">📚 Das Grundprinzip</div>
                <p>Backups sind strategische Kopien von Daten, um diese nach einem Datenverlust wiederherstellen zu können. Die Wahl der Backup-Art beeinflusst Speicherbedarf, Geschwindigkeit und Komplexität der Wiederherstellung.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">📊 Die drei Hauptarten</div>
                <table class="comparison-table">
                    <thead><tr><th>Backup-Art</th><th>Was wird gesichert?</th><th>Vorteil</th><th>Nachteil</th><th>Wiederherstellung</th></tr></thead>
                    <tbody>
                        <tr>
                            <td><strong>Voll-Backup (Full)</strong></td>
                            <td>Alle ausgewählten Daten, jedes Mal.</td>
                            <td>Einfache, schnelle Wiederherstellung.</td>
                            <td>Hoher Speicherbedarf, lange Sicherungsdauer.</td>
                            <td>Benötigt nur das letzte Voll-Backup.</td>
                        </tr>
                        <tr>
                            <td><strong>Differentielles Backup</strong></td>
                            <td>Alle Daten, die sich <strong>seit dem letzten Voll-Backup</strong> geändert haben.</td>
                            <td>Schneller als Voll-Backup, mittlere Komplexität bei Wiederherstellung.</td>
                            <td>Benötigt mehr Speicher als inkrementell, da Änderungen kumulieren.</td>
                            <td>Benötigt das letzte Voll-Backup + das letzte differentielle Backup.</td>
                        </tr>
                        <tr>
                            <td><strong>Inkrementelles Backup</strong></td>
                            <td>Alle Daten, die sich <strong>seit dem letzten Backup (egal welches)</strong> geändert haben.</td>
                            <td>Sehr schnell, geringster Speicherbedarf.</td>
                            <td>Komplexe, langsame Wiederherstellung.</td>
                            <td>Benötigt das letzte Voll-Backup + <strong>alle</strong> inkrementellen Backups seitdem.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="example-box">
                <strong>Typische Strategie (Großvater-Vater-Sohn):</strong><br>
                - <strong>Sonntag:</strong> Voll-Backup<br>
                - <strong>Mo-Sa:</strong> Tägliche differentielle oder inkrementelle Backups.
            </div>
        `,
        flashcard: { question: "Was ist der Unterschied zwischen einem differentiellen und einem inkrementellen Backup?", answer: "Differentiell sichert alle Änderungen seit dem letzten Voll-Backup. Inkrementell sichert alle Änderungen seit dem letzten Backup (egal ob voll oder inkrementell)." }
    },
    '321-regel': {
        title: 'Die 3-2-1-Backup-Regel',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">🛡️ Ein robustes Backup-Konzept</div>
                <p>Die 3-2-1-Regel ist eine einfach zu merkende, aber sehr effektive Best-Practice-Strategie für die Datensicherung, die die Wahrscheinlichkeit eines vollständigen Datenverlusts drastisch reduziert.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">🔢 Die Regel im Detail</div>
                <ul>
                    <li><strong>3️⃣ Kopien Ihrer Daten:</strong><br>
                    Halten Sie immer mindestens <strong>drei Kopien</strong> Ihrer wichtigen Daten vor. Dies schließt die Originaldaten und zwei Backups mit ein.</li>
                    
                    <li><strong>2️⃣ Verschiedene Speichermedien:</strong><br>
                    Speichern Sie diese Kopien auf mindestens <strong>zwei unterschiedlichen Medientypen</strong>. Dies schützt vor dem Ausfall eines bestimmten Medientyps (z.B. alle Festplatten einer fehlerhaften Charge).
                    <div class="example-box" style="margin-top: 5px;">
                        Beispiele: Interne Festplatte + externe USB-Festplatte, NAS + Tape (Bandlaufwerk), Festplatte + Cloud-Speicher.
                    </div>
                    </li>

                    <li><strong>1️⃣ Kopie außer Haus (Off-Site):</strong><br>
                    Bewahren Sie mindestens <strong>eine Kopie an einem anderen geografischen Ort</strong> auf. Dies schützt vor lokalen Katastrophen wie Feuer, Wasserschaden oder Diebstahl.
                    <div class="example-box" style="margin-top: 5px;">
                        Beispiele: Backup in einem Cloud-Speicher, eine externe Festplatte im Bankschließfach oder an einem anderen Firmenstandort.
                    </div>
                    </li>
                </ul>
            </div>
        `,
        flashcard: { question: "Erkläre die 3-2-1-Backup-Regel.", answer: "Mindestens 3 Kopien der Daten, auf 2 verschiedenen Medientypen, davon 1 Kopie außer Haus (Off-Site)." }
    },
    'rto-rpo': {
        title: 'RTO und RPO',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">⏱️ Kennzahlen für den Notfall</div>
                <p>RTO und RPO sind zwei entscheidende Kennzahlen in der Notfallplanung und im Business Continuity Management. Sie definieren die zeitlichen Anforderungen an die Wiederherstellung von IT-Systemen.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">📊 Die Kennzahlen im Detail</div>
                <table class="comparison-table">
                     <thead><tr><th>Kennzahl</th><th>Vollständiger Name</th><th>Frage</th><th>Fokus</th><th>Beispiel</th></tr></thead>
                     <tbody>
                         <tr>
                             <td><strong>RTO</strong></td>
                             <td><strong>Recovery Time Objective</strong><br>(Wiederherstellungszeitziel)</td>
                             <td>"Wie schnell müssen wir nach einem Ausfall wieder online sein?"</td>
                             <td>Zeit / Ausfalldauer</td>
                             <td>Ein RTO von 2 Stunden bedeutet, dass das System spätestens 2 Stunden nach dem Ausfall wieder laufen muss.</td>
                         </tr>
                         <tr>
                             <td><strong>RPO</strong></td>
                             <td><strong>Recovery Point Objective</strong><br>(Wiederherstellungspunktziel)</td>
                             <td>"Wie viel Datenverlust können wir maximal tolerieren?"</td>
                             <td>Daten / Datenverlust</td>
                             <td>Ein RPO von 1 Stunde bedeutet, dass der Datenbestand maximal eine Stunde alt sein darf. Dies erfordert mindestens stündliche Backups.</td>
                         </tr>
                     </tbody>
                </table>
            </div>
             <div class="example-box">
                <strong>💡 Wichtig:</strong> Je niedriger RTO und RPO, desto teurer und aufwändiger sind die technischen Lösungen (z.B. Hochverfügbarkeitscluster, synchrone Replikation).
            </div>
        `,
        flashcard: { question: "Was ist der Unterschied zwischen RTO und RPO?", answer: "RTO (Recovery Time Objective) ist die maximal tolerierbare Ausfallzeit. RPO (Recovery Point Objective) ist der maximal tolerierbare Datenverlust." }
    },
    'snapshot-technologie': {
        title: 'Snapshot-Technologie',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">📸 Was ist ein Snapshot?</div>
                <p>Ein <strong>Snapshot</strong> (Momentaufnahme) ist ein eingefrorener Zustand eines Systems (z.B. einer virtuellen Maschine oder eines Dateisystems) zu einem bestimmten Zeitpunkt. Er speichert nicht die kompletten Daten, sondern nur die Unterschiede zum vorherigen Zustand (Delta) oder verweist auf die Originaldatenblöcke.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">⚖️ Snapshot vs. Backup</div>
                <p>Ein Snapshot ist <strong>KEIN Backup!</strong> Sie dienen unterschiedlichen Zwecken.</p>
                <table class="comparison-table">
                    <thead><tr><th>Merkmal</th><th>Snapshot</th><th>Backup</th></tr></thead>
                    <tbody>
                        <tr>
                            <td><strong>Zweck</strong></td>
                            <td>Kurzfristige, schnelle Wiederherstellung bei fehlgeschlagenen Änderungen (z.B. Software-Update).</td>
                            <td>Langfristige Datensicherung zur Wiederherstellung nach einem Totalverlust (z.B. Hardware-Defekt, Katastrophe).</td>
                        </tr>
                        <tr>
                            <td><strong>Abhängigkeit</strong></td>
                            <td>Ist vom Original-Datenträger abhängig. Geht der Original-Datenträger verloren, ist der Snapshot nutzlos.</td>
                            <td>Ist eine unabhängige, vollständige Kopie der Daten und kann ohne das Original wiederhergestellt werden.</td>
                        </tr>
                        <tr>
                            <td><strong>Dauer</strong></td>
                            <td>Sehr schnell zu erstellen (Sekunden).</td>
                            <td>Langsamer, da große Datenmengen kopiert werden müssen.</td>
                        </tr>
                         <tr>
                            <td><strong>Speicherort</strong></td>
                            <td>Meist am selben Ort wie die Originaldaten.</td>
                            <td>Sollte auf einem separaten Medium und idealerweise an einem anderen Ort gespeichert werden (3-2-1-Regel).</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `,
        flashcard: { question: "Warum ist ein Snapshot kein Ersatz für ein Backup?", answer: "Weil ein Snapshot vom Original-Datenträger abhängig ist. Geht das Original verloren, ist der Snapshot nutzlos. Ein Backup ist eine unabhängige Kopie." }
    },

    // =======================================================
    // THEMA: SOFTWARE & DATEN
    // =======================================================
    'er-diagramme': {
        title: 'ER-Diagramme (Entity-Relationship-Modell)',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">📚 Definition</div>
                <p>Ein <strong>Entity-Relationship-Modell (ERM)</strong> ist eine grafische Darstellung zur Konzeption von Datenbanken. Es zeigt, welche Arten von Objekten (Entitäten) es gibt und wie diese miteinander in Beziehung stehen.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">🧱 Bausteine eines ER-Diagramms</div>
                <ul>
                    <li><strong>Entität (Entity):</strong> Ein eindeutig identifizierbares Objekt der realen Welt, über das Informationen gespeichert werden sollen. Wird als Rechteck dargestellt.<br><em>Beispiel: Kunde, Produkt, Bestellung.</em></li>
                    <li><strong>Attribut (Attribute):</strong> Eine Eigenschaft, die eine Entität beschreibt. Wird als Ellipse dargestellt.<br><em>Beispiel: Ein Kunde hat die Attribute Kunden-Nr, Name, Adresse.</em></li>
                    <li><strong>Beziehung (Relationship):</strong> Eine Verknüpfung zwischen zwei oder mehr Entitäten. Wird als Raute dargestellt.<br><em>Beispiel: Ein Kunde 'tätigt' eine Bestellung.</em></li>
                    <li><strong>Kardinalität:</strong> Gibt an, wie viele Entitäten einer Art mit wie vielen Entitäten einer anderen Art in Beziehung stehen können.<br><em>Beispiel: 1:n (Ein Kunde kann n Bestellungen haben), n:m (n Schüler besuchen m Kurse).</em></li>
                </ul>
            </div>
            <div class="example-box">
                <strong>Grafisches Beispiel (vereinfacht):</strong><br>
                [Kunde] --(1)----◊ tätigt ◊----(n)-- [Bestellung]
            </div>
        `,
        flashcard: { question: "Was sind die drei Hauptkomponenten eines ER-Diagramms?", answer: "Entitäten (Objekte, als Rechteck), Attribute (Eigenschaften, als Ellipse) und Beziehungen (Verknüpfungen, als Raute)." }
    },
    'datenbankdesign': {
        title: 'Datenbankdesign & Normalisierung',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">🎯 Ziel der Normalisierung</div>
                <p>Die Normalisierung ist ein schrittweiser Prozess im relationalen Datenbankdesign, um Datenredundanz zu reduzieren und Datenintegrität zu verbessern. Ziel ist es, Anomalien bei der Datenänderung (Einfügen, Ändern, Löschen) zu verhindern.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">🔢 Die ersten drei Normalformen (1NF, 2NF, 3NF)</div>
                <ol>
                    <li><strong>Erste Normalform (1NF):</strong> Eine Tabelle ist in der 1NF, wenn alle Attributwerte <strong>atomar</strong> sind. Das bedeutet, es gibt keine mehrwertigen Attribute (z.B. mehrere Telefonnummern in einer einzigen Zelle). Jede Spalte muss einen eindeutigen Namen haben und jede Zeile muss durch einen Primärschlüssel eindeutig identifizierbar sein.</li>
                    <li><strong>Zweite Normalform (2NF):</strong> Eine Tabelle ist in der 2NF, wenn sie sich in der 1NF befindet und jedes Nicht-Schlüssel-Attribut <strong>voll funktional vom gesamten Primärschlüssel</strong> abhängig ist. Dies ist nur relevant für Tabellen mit zusammengesetzten Primärschlüsseln. Attribute, die nur von einem Teil des Schlüssels abhängen, müssen in eine separate Tabelle ausgelagert werden.</li>
                    <li><strong>Dritte Normalform (3NF):</strong> Eine Tabelle ist in der 3NF, wenn sie sich in der 2NF befindet und es <strong>keine transitiven Abhängigkeiten</strong> gibt. Das bedeutet, kein Nicht-Schlüssel-Attribut darf von einem anderen Nicht-Schlüssel-Attribut abhängig sein. Solche Abhängigkeiten müssen in eine neue Tabelle ausgelagert werden.</li>
                </ol>
            </div>
             <div class="example-box">
                <strong>Einfach gesagt:</strong><br>
                - <strong>1NF:</strong> "Jedes Feld nur ein Wert."<br>
                - <strong>2NF:</strong> "Alle Felder hängen vom ganzen Schlüssel ab."<br>
                - <strong>3NF:</strong> "Alle Felder hängen nur vom Schlüssel ab."
            </div>
        `,
        flashcard: { question: "Was ist das Hauptziel der Normalisierung von Datenbanken?", answer: "Die Reduzierung von Datenredundanz und die Vermeidung von Datenanomalien (Update-, Insert-, Delete-Anomalien), um die Datenintegrität zu gewährleisten." }
    },
    'sql-grundlagen': {
        title: 'SQL-Grundlagen (DML, DDL, DCL, TCL)',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">📚 Structured Query Language (SQL)</div>
                <p>SQL ist die Standardsprache zur Kommunikation mit relationalen Datenbanken. Die Befehle lassen sich in vier Hauptkategorien unterteilen.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">🗂️ DML (Data Manipulation Language)</div>
                <p>Zum Bearbeiten der in den Tabellen gespeicherten Daten.</p>
                <ul>
                    <li><strong>SELECT:</strong> Daten aus Tabellen abfragen. (<code>SELECT * FROM kunden;</code>)</li>
                    <li><strong>INSERT:</strong> Neue Datensätze in eine Tabelle einfügen. (<code>INSERT INTO kunden (...) VALUES (...);</code>)</li>
                    <li><strong>UPDATE:</strong> Bestehende Datensätze ändern. (<code>UPDATE kunden SET ... WHERE ...;</code>)</li>
                    <li><strong>DELETE:</strong> Datensätze aus einer Tabelle löschen. (<code>DELETE FROM kunden WHERE ...;</code>)</li>
                </ul>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">🏗️ DDL (Data Definition Language)</div>
                <p>Zum Definieren und Verwalten der Datenbankstruktur selbst.</p>
                <ul>
                    <li><strong>CREATE:</strong> Neue Datenbankobjekte erstellen. (<code>CREATE TABLE ...;</code>)</li>
                    <li><strong>ALTER:</strong> Bestehende Objekte ändern. (<code>ALTER TABLE ... ADD COLUMN ...;</code>)</li>
                    <li><strong>DROP:</strong> Objekte löschen. (<code>DROP TABLE ...;</code>)</li>
                </ul>
            </div>
             <div class="popup-section">
                <div class="popup-section-title">🔒 DCL (Data Control Language)</div>
                <p>Zur Steuerung der Zugriffsrechte auf die Datenbank.</p>
                <ul>
                    <li><strong>GRANT:</strong> Rechte vergeben. (<code>GRANT SELECT ON kunden TO user;</code>)</li>
                    <li><strong>REVOKE:</strong> Rechte entziehen. (<code>REVOKE SELECT ON kunden FROM user;</code>)</li>
                </ul>
            </div>
             <div class="popup-section">
                <div class="popup-section-title">🔄 TCL (Transaction Control Language)</div>
                <p>Zur Verwaltung von Transaktionen.</p>
                <ul>
                    <li><strong>COMMIT:</strong> Eine Transaktion dauerhaft speichern.</li>
                    <li><strong>ROLLBACK:</strong> Eine Transaktion rückgängig machen.</li>
                </ul>
            </div>
        `,
            flashcard: { question: "Zu welcher SQL-Kategorie gehört der `CREATE TABLE`-Befehl?", answer: "Zu DDL (Data Definition Language), da er die Datenstruktur definiert." }
        },
        'programmierlogik': {
        title: 'Grundlagen: HTML, CSS & JavaScript',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">🏗️ Das Grundgerüst einer Webseite</div>
                <p>Die Entwicklung moderner Webseiten basiert auf dem Zusammenspiel von drei Kerntechnologien, die man sich wie den Bau eines Hauses vorstellen kann:</p>
                <ul>
                    <li><strong>HTML (HyperText Markup Language):</strong> Das <strong>Skelett</strong>. Es gibt der Webseite ihre Struktur und ihren Inhalt (Texte, Bilder, Links).</li>
                    <li><strong>CSS (Cascading Style Sheets):</strong> Das <strong>Design</strong>. Es gestaltet das Aussehen der Webseite (Farben, Schriftarten, Layout).</li>
                    <li><strong>JavaScript:</strong> Die <strong>Interaktivität</strong>. Es macht die Webseite dynamisch und reagiert auf Benutzereingaben.</li>
                </ul>
            </div>

            <div class="popup-section">
                <div class="popup-section-title">📝 HTML: Die Struktur</div>
                <p>HTML verwendet "Tags", um Elemente zu definieren.</p>
                <ul>
                    <li><code>&lt;h1&gt;</code> bis <code>&lt;h6&gt;</code>: Überschriften</li>
                    <li><code>&lt;p&gt;</code>: Ein Textabsatz</li>
                    <li><code>&lt;a href="..."&gt;</code>: Ein Link</li>
                    <li><code>&lt;img src="..."&gt;</code>: Ein Bild</li>
                    <li><code>&lt;div&gt;</code>: Ein generischer Container zur Gruppierung</li>
                </ul>
            </div>

            <div class="popup-section">
                <div class="popup-section-title">🎨 CSS: Das Styling</div>
                <p>CSS wählt HTML-Elemente über "Selektoren" aus und weist ihnen Stile zu.</p>
                <pre><code>/* Wählt alle Absätze aus und färbt sie blau */
p {
    color: blue;
    font-size: 16px;
}</code></pre>
            </div>
            
            <div class="popup-section">
                <div class="popup-section-title">⚙️ JavaScript: Die Logik</div>
                <p>JavaScript manipuliert das <strong>DOM (Document Object Model)</strong>, die baumartige Repräsentation der HTML-Struktur im Browser.</p>
                <ul>
                    <li><strong>Variablen:</strong> Speicher für Werte (<code>let name = "Kai";</code>).</li>
                    <li><strong>Funktionen:</strong> Wiederverwendbare Codeblöcke.</li>
                    <li><strong>Events:</strong> Reaktionen auf Benutzeraktionen (z.B. Klicks). 
                        <pre><code>button.addEventListener('click', function() {
    alert('Button geklickt!');
});</code></pre>
                    </li>
                    <li><strong>Datenstrukturen:</strong>
                        <ul>
                            <li><strong>Array:</strong> Eine Liste von Werten, wie ein Regal mit Fächern. <code>let fruits = ["Apfel", "Banane"];</code></li>
                            <li><strong>String:</strong> Eine Kette von Zeichen (Text). <code>let greeting = "Hallo Welt";</code></li>
                        </ul>
                    </li>
                </ul>
            </div>
        `,
        flashcard: { question: "Was sind die drei Kerntechnologien des Frontend und welche Rolle spielt jede?", answer: "1. HTML: Strukturiert den Inhalt (Skelett). 2. CSS: Gestaltet das Aussehen (Design). 3. JavaScript: Steuert die Interaktivität (Logik)." }
    },

    // =======================================================
    // THEMA: SERVICE & KUNDENBERATUNG
    // =======================================================
    'kundenberatung': {
        title: 'Kundenberatung & Kommunikation',
        prüfungsteil: 'AP1',
        content: `
            <div class="popup-section">
                <div class="popup-section-title">🗣️ Grundlagen der Kommunikation</div>
                <p>Professionelle Kundenberatung im IT-Bereich erfordert mehr als nur technisches Wissen. Es geht darum, Probleme zu verstehen, Lösungen verständlich zu erklären und eine positive Kundenbeziehung aufzubauen.</p>
            </div>
            <div class="popup-section">
                <div class="popup-section-title">🔑 Wichtige Techniken</div>
                <ul>
                    <li><strong>Aktives Zuhören:</strong> Dem Kunden volle Aufmerksamkeit schenken, nachfragen, um das Problem wirklich zu verstehen, und das Gehörte zusammenfassen ("Habe ich Sie richtig verstanden, dass...?").</li>
                    <li><strong>Zielgruppengerechte Kommunikation:</strong> Technische Details so erklären, dass ein Laie sie versteht. Vermeiden von Fachjargon oder diesen erklären.</li>
                    <li><strong>Fragetechniken:</strong>
                        <ul>
                            <li><strong>Offene Fragen (W-Fragen):</strong> Fördern eine ausführliche Antwort ("Welche Fehlermeldung wird genau angezeigt?").</li>
                            <li><strong>Geschlossene Fragen:</strong> Dienen der Bestätigung ("Haben Sie den Computer schon neu gestartet?").</li>
                        </ul>
                    </li>
                    <li><strong>4-Ohren-Modell (Schulz von Thun):</strong> Bewusstsein dafür schaffen, dass eine Nachricht auf vier Ebenen (Sach-, Beziehungs-, Selbstoffenbarungs-, Appell-Ebene) gesendet und empfangen wird, um Missverständnisse zu vermeiden.</li>
                    <li><strong>Einwandbehandlung:</strong> Einwände des Kunden ernst nehmen, Verständnis zeigen und lösungsorientiert darauf eingehen, statt sie abzutun.</li>
                </ul>
            </div>
        `,
        flashcard: { question: "Was ist der Unterschied zwischen offenen und geschlossenen Fragen in der Kundenberatung?", answer: "Offene Fragen (W-Fragen) fordern eine detaillierte Antwort. Geschlossene Fragen werden mit Ja/Nein beantwortet und dienen der Bestätigung." }
    }
};