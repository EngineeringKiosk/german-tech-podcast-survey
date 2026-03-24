<template>
  <div class="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <header class="mb-8">
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Deutschsprachige Tech-Podcast Umfrage
        </h1>
        <p class="text-lg text-gray-600 mb-4">
          Hilf uns, die deutschsprachige Tech-Podcast-Landschaft besser zu verstehen!
          Alle Fragen sind optional – du kannst die Umfrage jederzeit absenden.
        </p>
        <p class="text-sm text-gray-500">
          Diese Umfrage ist vollständig anonym und speichert keine persönlichen Daten.
          <NuxtLink to="/privacy" class="text-primary-600 hover:text-primary-700 underline ml-1">
            Mehr zum Datenschutz
          </NuxtLink>
        </p>
      </header>

      <!-- Success Message -->
      <div v-if="submitSuccess" class="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-lg font-medium text-green-800">
              Vielen Dank für deine Teilnahme!
            </h3>
            <p class="mt-2 text-green-700">
              Deine Antworten wurden erfolgreich übermittelt und helfen uns,
              die Tech-Podcast-Landschaft besser zu verstehen.
            </p>
          </div>
        </div>
      </div>

      <!-- Survey Form -->
      <form v-if="!submitSuccess" @submit.prevent="handleSubmit" class="space-y-8">
        <!-- Honeypot: hidden from real users, filled only by bots -->
        <div aria-hidden="true" style="position:absolute;opacity:0;pointer-events:none;height:0;overflow:hidden;">
          <label for="_email">E-Mail (bitte leer lassen)</label>
          <input id="_email" v-model="answers._email" type="email" name="_email" autocomplete="off" tabindex="-1" />
        </div>

        <!-- Question 1: Podcast List -->
        <SurveyCheckboxQuestion
          name="q_podcasts"
          legend="1. Welche deutschsprachigen Tech-Podcasts hörst du regelmäßig?"
          subtitle="(mindestens eine Episode in den letzten 3 Monaten gehört, Mehrfachauswahl möglich)"
          :options="podcastList"
          v-model="answers.q_podcasts"
        />

        <!-- Question 2: Altersgruppe -->
        <SurveyRadioQuestion
          name="q_age"
          legend="2. In welcher Altersgruppe bist du?"
          :options="['Unter 18', '18–24', '25–34', '35–44', '45–54', '55–64', '65+', 'Keine Angabe']"
          v-model="answers.q_age"
        />

        <!-- Question 3: Geschlecht -->
        <SurveyRadioQuestion
          name="q_gender"
          legend="3. Wie möchtest du dich einordnen?"
          :options="['Weiblich', 'Männlich', 'Nicht-binär', 'Keine Angabe']"
          v-model="answers.q_gender"
        />

        <!-- Question 4: Berufserfahrung -->
        <SurveyRadioQuestion
          name="q_experience"
          legend="4. Wie viele Jahre Berufserfahrung hast du?"
          :options="['0–1', '2–4', '5–9', '10–14', '15+', 'Keine Angabe']"
          v-model="answers.q_experience"
        />

        <!-- Question 5: Bildung -->
        <SurveyRadioQuestion
          name="q_education"
          legend="5. Was ist dein höchster Bildungsabschluss?"
          :options="['Pflichtschule', 'Lehre', 'Matura/Abitur', 'Bachelor', 'Master/Diplom', 'Doktorat/PhD', 'Keine Angabe']"
          v-model="answers.q_education"
        />

        <!-- Question 6: IT-Tätigkeit -->
        <SurveyRadioQuestion
          name="q_it"
          legend="6. Bist du im IT-Bereich tätig?"
          :options="[
            'Ja, ich arbeite im IT-Bereich.',
            'Ja, ich absolviere derzeit eine Ausbildung, ein Studium, eine Weiterbildung o. ä. im IT-Bereich.',
            'Nein, aber ich habe viele Berührungspunkte mit Tech-Themen.',
          ]"
          v-model="answers.q_it"
        />

        <!-- Question 6a: Tätigkeitsbereich (Conditional) -->
        <SurveyRadioQuestion
          v-if="answers.q_it === 'Ja, ich arbeite im IT-Bereich.'"
          name="q_it_area"
          legend="6a. Was ist dein Tätigkeitsbereich oder trifft am ehesten zu?"
          :options="[
            'Softwareentwicklung (Frontend, Backend, Fullstack)',
            'Mobile Entwicklung',
            'Embedded / Firmware / IoT',
            'Data Science / Machine Learning / KI',
            'Data Engineering / Dateninfrastruktur',
            'Business Intelligence / Data Analytics',
            'Datenbank / DBA',
            'DevOps / Site Reliability Engineering',
            'Cloud-Infrastruktur / Platform Engineering',
            'IT-Operations / Systemadministration',
            'Netzwerk / Network Engineering',
            'IT-Security / Cybersecurity',
            'Qualitätssicherung / Testing (inkl. Test Automation)',
            'IT-Architektur (Solution / Enterprise)',
            'UX/UI Design / Interaction Design',
            'Produktmanagement / Product Owner',
            'Projektmanagement / Delivery / Programmmanagement',
            'Agile Coaching / Scrum Master',
            'IT-Beratung / Tech-Consulting',
            'Pre-Sales / Solution Engineering / Sales Engineering',
            'Customer Success / Technical Account Management / Support Engineering',
            'Developer Relations / Developer Advocacy',
            'Forschung / Wissenschaft',
            'Anderer Tätigkeitsbereich',
          ]"
          v-model="answers.q_it_area"
        />

        <!-- Question 6b: Rolle (Conditional) -->
        <SurveyRadioQuestion
          v-if="answers.q_it === 'Ja, ich arbeite im IT-Bereich.'"
          name="q_it_role"
          legend="6b. Was ist deine Rolle?"
          :options="[
            'Geschäftsführung / C-Level (z. B. CTO, CIO, CEO)',
            'Bereichsleitung / Abteilungsleitung (z. B. Head of Engineering, IT-Leitung)',
            'Teamleitung (z. B. Engineering Manager)',
            'Tech Lead',
            'Senior-Fachkraft (z. B. Senior Developer, Senior Data Scientist)',
            'Fachkraft (z. B. Softwareentwickler*in, Data Analyst, IT-Administrator*in)',
            'Berufseinsteiger*in / Junior',
            'Forschung',
          ]"
          v-model="answers.q_it_role"
        />

        <!-- Question 7: Unternehmensgröße -->
        <SurveyRadioQuestion
          name="q_company_size"
          legend="7. Wie groß ist dein Unternehmen (Anzahl Mitarbeitende)?"
          :options="['1 (Solo / Selbstständig)', '2–10', '11–50', '51–200', '201–1000', '1.001–3000', '3001+', 'Sonstige/Keine Angabe']"
          v-model="answers.q_company_size"
        />

        <!-- Question 8: Wöchentliche Hördauer -->
        <SurveyRadioQuestion
          name="q_weekly_listening"
          legend="8. Wie viel Zeit nutzt du pro Woche circa, um deutschsprachige Tech-Podcasts zu konsumieren?"
          :options="[
            'Weniger als 30 Minuten',
            '30–59 Minuten',
            '1–2 Stunden',
            '2–4 Stunden',
            'Mehr als 4 Stunden',
            'Sehr unterschiedlich / kann ich schwer sagen',
          ]"
          v-model="answers.q_weekly_listening"
        />

        <!-- Question 9: Episodenauswahl-Kriterien -->
        <SurveyCheckboxQuestion
          name="q_episode_selection"
          legend="9. Nach welchen Kriterien wählst du aus, welche Episoden du hörst?"
          subtitle="(Mehrfachauswahl möglich)"
          :options="[
            'Ich höre generell alle Episoden meiner Lieblingspodcasts',
            'Das Thema interessiert mich generell',
            'Das Thema ist gerade nützlich für mich (beschäftige mich z.B. gerade beruflich damit)',
            'Ich finde die Gäste spannend oder kenne sie bereits',
            'Der Titel oder die Beschreibung spricht mich an',
            'Die Episoden-Länge passt gut in meinen Zeitrahmen',
            'Ich habe die Folge von einer Person empfohlen bekommen',
            'Ich habe die Folge vom Algorithmus empfohlen bekommen',
          ]"
          v-model="answers.q_episode_selection"
        />

        <!-- Question 10: Formate -->
        <SurveyCheckboxQuestion
          name="q_formats"
          legend="10. Welche Podcast-Formate hörst du am liebsten?"
          subtitle="(Mehrfachauswahl möglich)"
          :options="[
            'Interviews',
            'News / Updates',
            'Deep Dives (ein Thema in Tiefe)',
            'Talk / Laberpodcast (lockere Gesprächsrunden)',
            'Storytelling / Reportagen',
            'Panels / Roundtables (mehrere Gäste)',
            'Q&A / Hörerfragen',
            'Tutorials / How-to (praxisnah, Schritt für Schritt)',
            'Kurzformate / Snackable (unter 15 Minuten)',
          ]"
          v-model="answers.q_formats"
          freitextLabel="Sonstiges:"
          v-model:freitextModelValue="answers.q_formats_other"
          freitextPlaceholder="Weitere Formate..."
        />

        <!-- Question 11: Motivation -->
        <SurveyRadioQuestion
          name="q_listening_motivation"
          legend="11. Hörst du deutschsprachige Tech-Podcasts aus privatem Interesse oder als Form von beruflicher Weiterbildung?"
          :options="[
            'Vorwiegend privates Interesse',
            'Vorwiegend berufliches Interesse',
            'Beides gleichermaßen',
          ]"
          v-model="answers.q_listening_motivation"
        />

        <!-- Question 12: Inhaltsstil -->
        <SurveyRadioQuestion
          name="q_content_style"
          legend="12. Magst du es eher informativ und auf den Punkt - oder bevorzugst du entspanntes Geplauder?"
          :options="[
            'Informativ und auf den Punkt, bitte!',
            'Ein bisschen Plaudern ist okay, solange wir beim Thema bleiben.',
            'Ich höre gern auch Off-Topic-Gespräche oder persönliche Anekdoten - die Podcaster*innen dürfen auch mal abschweifen.',
          ]"
          v-model="answers.q_content_style"
        />

        <!-- Question 13: Bekannte Themen -->
        <SurveyRadioQuestion
          name="q_familiar_topics"
          legend="13. Hörst du tendenziell Podcast-Episoden zu Themen, in denen du dich bereits auskennst?"
          :options="['Ja', 'Nein']"
          v-model="answers.q_familiar_topics"
        />

        <!-- Question 14: Werbung -->
        <SurveyRadioQuestion
          name="q_advertising"
          legend="14. Wie stehst du zu Werbung in Podcasts?"
          :options="['Find ich interessant', 'Stört mich nicht', 'Mag ich nicht']"
          v-model="answers.q_advertising"
        />

        <!-- Question 15: Finanzieller Support -->
        <SurveyRadioQuestion
          name="q_financial_support"
          legend="15. Hast du schon einmal einen Podcast durch eine Spende oder Subscription (Steady, Liberapay, etc) unterstützt?"
          :options="['Ja, regelmäßig', 'Ja, gelegentlich bis selten', 'Nein']"
          v-model="answers.q_financial_support"
        />

        <!-- Question 16: Werbung genutzt (Conditional) -->
        <SurveyRadioQuestion
          v-if="answers.q_advertising !== 'Mag ich nicht'"
          name="q_advertising_used"
          legend="16. Hast du Werbeeinblendungen bereits aktiv genutzt?"
          subtitle="(beworbene Produkte gekauft, Gutscheincodes eingelöst, etc.)"
          :options="['Ja', 'Nein']"
          v-model="answers.q_advertising_used"
        />

        <!-- Question 17: Episodenlänge -->
        <SurveyRadioQuestion
          name="q_episode_length"
          legend="17. Wie lang ist eine Episode idealerweise für dich?"
          :options="[
            'Unter 15 Minuten',
            '15 - 30 Minuten',
            '30 - 45 Minuten',
            '45 - 60 Minuten',
            '60 - 90 Minuten',
            'Über 90 Minuten',
            'Ist mir egal / bin flexibel',
          ]"
          v-model="answers.q_episode_length"
        />

        <!-- Question 18: Hörkontext -->
        <SurveyCheckboxQuestion
          name="q_listening_context"
          legend="18. In welchem Kontext hörst du deutschsprachige Tech-Podcasts?"
          subtitle="(Mehrfachauswahl möglich)"
          :options="[
            'Beim Pendeln',
            'Während der Arbeit oder beim Coden',
            'Zwischendurch, wenn ich mal Zeit finde',
            'Ich nehme mir bewusst Zeit dafür / ich mache nichts nebenher',
            'Ich höre Podcasts nebenbei, z. B. beim Spazieren, Kochen, Haushalt, Sport, etc.',
            'Zum Einschlafen',
          ]"
          v-model="answers.q_listening_context"
          freitextLabel="Sonstiges:"
          v-model:freitextModelValue="answers.q_listening_context_other"
          freitextPlaceholder="Weitere Kontexte..."
        />

        <!-- Question 19: Beruflicher Nutzen -->
        <SurveyRadioQuestion
          name="q_career_benefit"
          legend="19. Würdest du sagen, dass dich das Hören von Podcasts beruflich weitergebracht hat?"
          :options="['Ja', 'Nein']"
          v-model="answers.q_career_benefit"
        />

        <!-- Question 19a: Details beruflicher Nutzen (Conditional) -->
        <SurveyTextareaQuestion
          v-if="answers.q_career_benefit === 'Ja'"
          id="q12a"
          legend="19a. Inwiefern hast du beruflich vom Podcast-Hören profitiert?"
          v-model="answers.q_career_benefit_details"
          placeholder="Beschreibe, wie Podcasts dir beruflich geholfen haben..."
        />

        <!-- Question 20: Themen -->
        <SurveyCheckboxQuestion
          name="q_topics"
          legend="20. Welche Themen interessieren dich in Tech-Podcasts besonders?"
          subtitle="(Mehrfachauswahl möglich)"
          :options="[
            'Business & Tech-Strategie',
            'Softwareentwicklung & Architektur (Backend, APIs, Patterns)',
            'Web & Frontend',
            'Mobile Entwicklung',
            'Infrastruktur & Plattformen (Cloud, DevOps, SRE, Platform Engineering)',
            'Observability, Performance & Reliability (Monitoring, Tracing, Incident Response)',
            'KI, Data Science & Machine Learning',
            'Data Engineering & Datenplattformen (Pipelines, Warehouses, Streaming)',
            'Sicherheit & Datenschutz',
            'Testing & Qualität (QA, Test Automation)',
            'Hardware, Embedded, IoT & Zukunftstechnologien',
            'Developer Experience & Tooling (CI/CD, Build, Developer Tools)',
            'Open Source & Community',
            'Leadership, Kultur & Zusammenarbeit',
            'Karriere & Lernen (Hiring, Skills, Weiterbildung)',
            'Tech-News / Branchen-Updates',
          ]"
          v-model="answers.q_topics"
          freitextLabel="Weitere Themen:"
          v-model:freitextModelValue="answers.q_topics_other"
          freitextPlaceholder="Weitere Themen..."
        />

        <!-- Question 21: Show Notes Nutzung -->
        <SurveyRadioQuestion
          name="q_shownotes_usage"
          legend="21. Wie oft nutzt du Begleitmaterialien, die in den Show Notes verlinkt sind?"
          :options="[
            'Nie, ich höre nur den Podcast',
            'Selten bis gelegentlich',
            'Häufig',
            'Ich wusste nicht, dass es solche Materialien gibt oder habe es noch nicht gesehen',
          ]"
          v-model="answers.q_shownotes_usage"
        />

        <!-- Question 22: Episodenabbruch-Gründe -->
        <SurveyCheckboxQuestion
          name="q_skip_reasons"
          legend="22. Aus welchen Gründen (die mit dem Podcast oder der Episode zu tun haben) hast du schon mal eine Episode abgebrochen, bevor du sie zu Ende gehört hattest?"
          subtitle="(Mehrfachauswahl möglich)"
          :options="[
            'Die Episode war zu langatmig',
            'Die Tonqualität war schlecht',
            'Das Thema war doch nicht so interessant wie erwartet',
            'Die Episode war mir zu lang',
            'Der Gast war nicht relevant für mich',
            'Ich habe die Infos schon aus anderen Quellen gekannt und nichts Neues gelernt',
            'Die Diskussion war zu oberflächlich',
            'Ich bin inhaltlich nicht mehr mitgekommen / es war mir zu kompliziert',
            'Die Sprechenden erschienen mir nicht kompetent genug',
            'Zu wenig Struktur oder roter Faden',
            'Zu viele Wiederholungen',
            'Ich höre Podcasts oft unterwegs und habe vergessen weiterzuhören',
            'Die Sprechweise war nicht professionell genug (z.B. viele Pausen, viele Ähms, undeutliche Sprache, …)',
            'Wegen (zu vielen) Werbeeinblendungen',
            'Ich breche Episoden nicht ab / Ich breche Episoden nur aus persönlichen Gründen ab',
          ]"
          v-model="answers.q_skip_reasons"
        />

        <!-- Question 23: Unsubscribe-Gründe -->
        <SurveyTextareaQuestion
          id="q17"
          legend="23. Hast du schon mal einen Podcast unsubscribed, wenn ja warum?"
          v-model="answers.q_unsubscribe_reasons"
        />

        <!-- Question 24: Qualitätskriterien -->
        <SurveyCheckboxQuestion
          name="q_quality_criteria"
          legend="24. Welche Kriterien machen für dich einen richtig guten Podcast aus?"
          subtitle="(Mehrfachauswahl möglich)"
          :options="[
            'Inhalte mit echtem Mehrwert',
            'Fachliche Tiefe',
            'Verständliche Vermittlung auch komplexer Themen',
            'Sympathische und authentische Moderator*innen',
            'Gute Struktur und roter Faden in jeder Folge',
            'Interessante Gäste',
            'Gute Tonqualität',
            'Gute Moderation der Hosts',
            'Regelmäßige Veröffentlichungen',
            'Abwechslungsreiche Themen & Formate',
            'Gute Shownotes & weiterführende Materialien',
            'Der Podcast regt zum Nachdenken an oder inspiriert',
            'Kapitelmarken (Chapter Marks)',
          ]"
          v-model="answers.q_quality_criteria"
        />

        <!-- Question 25: Bewertungsgründe -->
        <SurveyCheckboxQuestion
          name="q_rating_reasons"
          legend="25. Was veranlasst dich zu einer Bewertung des Podcasts?"
          subtitle="(Mehrfachauswahl möglich)"
          :options="[
            'Ich bewerte grundsätzlich keine Podcasts',
            'Ich war begeistert / enttäuscht von einer bestimmten Episode',
            'Ich höre den Podcast regelmäßig und möchte ihn unterstützen',
            'Die Moderator*innen haben aktiv dazu aufgerufen',
            'Ich hatte einen besonders positiven / negativen Gesamteindruck',
            'Ich möchte meine Meinung mit anderen teilen',
            'Ich möchte konstruktives Feedback geben',
            'Ich wurde auf Social Media oder im Newsletter daran erinnert',
            'Ich kenne die Macher*innen persönlich / aus der Community',
          ]"
          v-model="answers.q_rating_reasons"
        />

        <!-- Question 26: Veröffentlichungsrhythmus -->
        <SurveyRadioQuestion
          name="q_release_rhythm"
          legend="26. In welchem Rhythmus sollten neue Folgen eines Podcasts für dich erscheinen?"
          :options="['Mehrmals pro Woche', 'Wöchentlich', 'Alle zwei Wochen', 'Monatlich', 'Ist mir egal']"
          v-model="answers.q_release_rhythm"
        />

        <!-- Question 27: Gäste -->
        <SurveyRadioQuestion
          name="q_guests"
          legend="27. Wie gern hörst du Gäste im Podcast?"
          :options="[
            'Sehr gern, spannende Gäste sind für mich ein Highlight',
            'Gern, aber es kommt auf die Person oder das Thema an',
            'Ist mir egal, Hauptsache, die Folge ist gut gemacht',
            'Nicht so gern, ich mag es lieber, wenn Hosts unter sich bleiben',
            'Gar nicht, ich finde Gäste eher störend',
          ]"
          v-model="answers.q_guests"
        />

        <!-- Question 28: Audio vs. Video -->
        <SurveyRadioQuestion
          name="q_audio_video"
          legend="28. Magst du Podcasts lieber als reines Audio oder dürfen sie auch mit Video sein?"
          :options="[
            'Ich bevorzuge reine Audio-Podcasts',
            'Ich schaue Podcasts lieber als Video',
            'Ist mir egal',
          ]"
          v-model="answers.q_audio_video"
        />

        <!-- Question 29: Intro -->
        <SurveyRadioQuestion
          name="q_intro"
          legend="29. Wie hilfreich findest du ein Intro am Anfang, das sagt, worum es in der Folge geht?"
          :options="[
            'Hilfreich – so weiß ich gleich, worauf ich mich einlasse',
            'Neutral – ist mir nicht so wichtig',
            'Nicht hilfreich/ich skippe Intros',
          ]"
          v-model="answers.q_intro"
        />

        <!-- Question 30: Outro/Zusammenfassung -->
        <SurveyRadioQuestion
          name="q_outro"
          legend="30. Wie wichtig ist dir ein Fazit oder eine Zusammenfassung am Ende einer Folge?"
          :options="[
            'Wichtig – finde ich nützlich und hilfreich',
            'Ist mir egal',
            'Lieber weglassen, ist für mich überflüssig',
          ]"
          v-model="answers.q_outro"
        />

        <!-- Question 31: Community -->
        <SurveyRadioQuestion
          name="q_community"
          legend="31. Tauschst du dich mit anderen Hörer*innen über Episoden aus?"
          subtitle="(z. B. in Foren, Kommentarbereichen oder einer Community des Podcasts)"
          :options="[
            'Ja, regelmäßig',
            'Schon mal gemacht, aber nicht regelmäßig',
            'Nein',
            'Ich wusste nicht, dass es solche Möglichkeiten gibt',
          ]"
          v-model="answers.q_community"
        />

        <!-- Question 32: Diversität -->
        <SurveyRadioQuestion
          name="q_diversity"
          legend="32. Wie wichtig ist es dir, dass in einem Podcast ganz unterschiedliche Personen vorkommen?"
          subtitle="(z. B. Menschen unterschiedlichen Geschlechts, verschiedener Herkunft oder mit unterschiedlichen gesellschaftlichen und beruflichen Hintergründen)"
          :options="[
            'Sehr wichtig – ich achte aktiv darauf und finde es bereichernd',
            'Schön, wenn\'s passiert – aber kein Muss für mich',
            'Ist mir nicht so wichtig, ich achte mehr auf die Inhalte',
          ]"
          v-model="answers.q_diversity"
        />

        <!-- Question 33: Weiterentwicklung -->
        <SurveyRadioQuestion
          name="q_evolution"
          legend="33. Wie findest du es, wenn sich ein Podcast weiterentwickelt?"
          subtitle="(z. B. durch neue Formate, veränderte Struktur oder kreative Experimente)"
          :options="[
            'Finde ich super – Abwechslung hält den Podcast lebendig',
            'Neutral / Kommt drauf an – solange die Inhalte und Qualität stimmen',
            'Ich mag lieber Verlässlichkeit – bitte keine allzu großen Änderungen',
          ]"
          v-model="answers.q_evolution"
        />

        <!-- Question 34: Mitbestimmung -->
        <SurveyRadioQuestion
          name="q_codetermination"
          legend="34. Ist es dir wichtig, die Themen des Podcasts mitbestimmen zu können?"
          subtitle="(z. B. indem du Vorschläge oder Anregungen einbringen kannst)"
          :options="[
            'Ja, das finde ich gut – ich habe gern die Möglichkeit zur Mitwirkung',
            'Kann nett sein – aber ich nutze solche Angebote eher selten',
            'Nein, das ist mir nicht wichtig',
          ]"
          v-model="answers.q_codetermination"
        />

        <!-- Question 34a: Feedback-Kanäle (Conditional) -->
        <SurveyCheckboxQuestion
          v-if="answers.q_codetermination === 'Ja, das finde ich gut – ich habe gern die Möglichkeit zur Mitwirkung'"
          name="q_feedback_channels"
          legend="34a. Wenn du Themen oder Ideen einbringen willst – was wäre für dich die beste Möglichkeit, das zu tun?"
          subtitle="(Mehrfachauswahl möglich)"
          :options="[
            'In einer Community-Plattform (z. B. Discord, Mastodon, ...)',
            'Über direkte Rückmeldung (z. B. E-Mail)',
            'Über Social Media (LinkedIn, Instagram, Facebook)',
            'In einem Kommentarbereich (z. B. unter der Folge)',
          ]"
          v-model="answers.q_feedback_channels"
        />

        <!-- Question 35: Entdeckungskanäle -->
        <SurveyCheckboxQuestion
          name="q_discovery"
          legend="35. Wie bist du auf die Podcasts aufmerksam geworden, die du regelmäßig hörst?"
          subtitle="(Mehrfachauswahl möglich)"
          :options="[
            'Über die Suche oder Empfehlungen in meiner Podcast-App',
            'Durch Freund*innen oder Bekannte',
            'Durch Kolleg*innen oder im beruflichen Umfeld',
            'Über Social Media',
            'Über Werbung / Erwähnung in anderen Podcasts',
            'Über eine Suchmaschine',
            'Durch einen Newsletter, Blog oder Videoplattform',
            'Durch einen Medienbericht oder Artikel',
            'Ich kannte die Person(en), die den Podcast machen',
            'Zufällig beim Stöbern / Scrollen',
            'Ich weiß es nicht mehr',
          ]"
          v-model="answers.q_discovery"
        />

        <!-- Question 36: Nische vs. breit -->
        <SurveyRadioQuestion
          name="q_niche_vs_broad"
          legend="36. Magst du lieber Nischen-Podcasts oder eher solche, die thematisch breit aufgestellt sind?"
          :options="[
            'Ich mag eher Nischenformate, die sich intensiv mit einem klaren Thema beschäftigen',
            'Ich finde eher ein breites, abwechslungsreiches Themenfeld spannender',
            'Beides',
          ]"
          v-model="answers.q_niche_vs_broad"
        />

        <!-- Question 37: Offenes Feedback -->
        <SurveyTextareaQuestion
          id="q31"
          legend="37. Gibt es noch etwas, das du uns sagen möchtest? Hast du Feedback zu Podcasts, die du besonders magst (oder nicht)? Möchtest du Lob, Kritik oder Themenwünsche loswerden?"
          v-model="answers.q_open_feedback"
          :rows="6"
        />

        <!-- Email notification opt-in -->
        <section class="bg-blue-50 border border-blue-100 shadow-sm rounded-lg p-6">
          <div>
            <label for="q_notify_email" class="block text-xl font-semibold text-gray-900 mb-2">
              Über die Ergebnisse informiert werden
            </label>
            <p class="text-sm text-gray-600 mb-4">
              Wenn wir dich über die Resultate informieren sollen, hinterlasse uns gerne deine E-Mail-Adresse.
              Wir senden dir eine kurze Info, sobald die Ergebnisse verfügbar sind – sonst nichts.
            </p>
            <input id="q_notify_email" v-model="answers.q_notify_email" type="email" autocomplete="email"
              placeholder="deine@email.de"
              class="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
            <p class="mt-2 text-xs text-gray-400">
              Die E-Mail-Adresse wird ausschließlich für diese Benachrichtigung verwendet und danach gelöscht.
            </p>
          </div>
        </section>

        <!-- Submit Section -->
        <div class="bg-white shadow-sm rounded-lg p-6">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p class="text-sm text-gray-600">
              <NuxtLink to="/privacy" class="text-primary-600 hover:text-primary-700 underline">
                Datenschutzerklärung
              </NuxtLink>
            </p>

            <button type="submit" :disabled="isSubmitting"
              class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
              <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>
              {{ isSubmitting ? 'Wird gesendet...' : 'Umfrage absenden' }}
            </button>
          </div>

          <!-- Error Message -->
          <div v-if="submitError" class="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p class="text-sm text-red-800">
              <strong>Fehler:</strong> {{ submitError }}
            </p>
            <button type="button" @click="submitError = ''"
              class="mt-2 text-sm text-red-600 hover:text-red-700 underline">
              Erneut versuchen
            </button>
          </div>
        </div>
      </form>

      <!-- Footer -->
      <footer class="mt-12 text-center text-sm text-gray-500">
        <p class="inline-flex flex-wrap justify-center items-center gap-x-3 gap-y-1">
          <NuxtLink to="/privacy" class="hover:text-gray-700 underline">
            Datenschutz & Impressum
          </NuxtLink>
          <span aria-hidden="true" class="mx-1">|</span>
          <a href="https://github.com/EngineeringKiosk/german-tech-podcast-survey" target="_blank"
            rel="noopener noreferrer" class="inline-flex items-center gap-1.5 hover:text-gray-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"
              aria-hidden="true">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            Wir sind Open Source
          </a>
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
const STORAGE_KEY = 'podcast-survey-answers'

const podcastList = [
  'Binärgewitter',
  'Bits & Böses - Der Tech Crime Podcast',
  'Bits und so',
  'Breach FM',
  "c't uplink",
  'Chaosradio',
  'Click! Clack! Hack!',
  'Code Culture',
  'Coding Buddies',
  'Computer und Kommunikation (Deutschlandfunk)',
  'Kernel und Kernobstat',
  'DAS WAR SCHON KAPUTT',
  'Data Science Deep Dive',
  'Der GameDev Podcast',
  'DevCouch',
  'Devs on Tape',
  'Digitale Anomalien',
  'Einfach Komplex',
  'Engineering Kiosk',
  'Faxinformatiker',
  'Female TechTalk',
  'FOCUS ON: DevOps',
  'Urlaub im Userspace',
  'Frauen und Technik – mit Eckert und Wolfangel',
  'Freakshow',
  'Gamedev für die Platte - Der Unreal Podcast',
  'GNU/Linux.ch',
  'heise Developer: SoftwareArchitekTOUR',
  'Hobby Spieleentwickler Podcast',
  'Index out of bounds',
  'INNOQ Podcast',
  'ISMS X-Plain',
  'IT ist alles',
  'IT-Berufe Podcast',
  'IT@DB',
  'KI-Update',
  'Kurz informiert by heise online',
  'Logbuch Digitalien',
  'Logbuch: Netzpolitik',
  'Mac & i - der Apple-Podcast',
  'Mein Scrum ist kaputt!',
  'Mind the Tech',
  'Mixedcast',
  'Nachgehackt',
  'Netzpolitik',
  'Neuland',
  'Percepticon',
  'programmier.bar',
  'Python Podcast',
  'RadioTux',
  'Ready for Review',
  'Rheingehäckt',
  'Schlüsseltechnologie',
  'Security-Insider',
  'She Likes Tech',
  'Silicon Weekly',
  'SoftwareArchitekTOUR - von Entwicklern für Entwickler',
  'SoftwareArchitektur im Stream',
  'SoftwerkerCast',
  't3n Interview',
  't3n MeisterPrompter',
  'TechnikTechnik',
  'The World of IT-Security',
  'ThinkPad-Museum Podcast',
  'TILpod',
  'todo:cast',
  'TR Podcast',
  'Unmute IT',
  'Wartungsfenster',
  'Web & Design Podcast',
  'Webcafé - Webentwicklung und Unternehmenskultur',
  'Wo wir sind ist vorne',
  'Working Draft'
]

// Answer state - all answers stored here
const answers = ref<Record<string, any>>({
  // ── Demographics ──────────────────────────────────────────────────────────
  q_age: '',                          // Altersgruppe (radio)
  q_gender: '',                       // Geschlecht (radio)
  q_experience: '',                   // Berufserfahrung in Jahren (radio)
  q_education: '',                    // Höchster Bildungsabschluss (radio)
  q_it: '',                           // IT-Tätigkeit (radio)
  q_it_area: '',                      // IT-Tätigkeitsbereich (radio) – conditional
  q_it_role: '',                      // Rolle im Unternehmen (radio) – conditional
  q_company_size: '',                 // Unternehmensgröße (radio)
  // ── Listening habits ──────────────────────────────────────────────────────
  q_weekly_listening: '',             // Wöchentliche Hördauer (radio)
  q_podcasts: [],                     // Gehörte Podcasts (checkboxes)
  q_episode_selection: [],            // Kriterien für Episodenauswahl (checkboxes)
  q_formats: [],                      // Bevorzugte Podcast-Formate (checkboxes)
  q_formats_other: '',                // Sonstiges Format (text)
  // ── Motivation & style ────────────────────────────────────────────────────
  q_listening_motivation: '',         // Privat vs. beruflich (radio)
  q_content_style: '',                // Informativ vs. entspannt (radio)
  q_familiar_topics: '',              // Bekannte Themen bevorzugt (radio)
  // ── Monetisation ──────────────────────────────────────────────────────────
  q_advertising: '',                  // Haltung zu Werbung (radio)
  q_financial_support: '',            // Podcast finanziell unterstützt (radio)
  q_advertising_used: '',             // Werbung aktiv genutzt (radio) – conditional
  // ── Format preferences ────────────────────────────────────────────────────
  q_episode_length: '',               // Ideale Episodenlänge (radio)
  q_listening_context: [],            // Hörkontext (checkboxes)
  q_listening_context_other: '',      // Sonstiger Hörkontext (text)
  // ── Impact & topics ───────────────────────────────────────────────────────
  q_career_benefit: '',               // Beruflicher Nutzen (radio)
  q_career_benefit_details: '',       // Details zum beruflichen Nutzen (textarea) – conditional
  q_topics: [],                       // Interessante Themen (checkboxes)
  q_topics_other: '',                 // Weitere Themeninteressen (text)
  // ── Episode quality ───────────────────────────────────────────────────────
  q_shownotes_usage: '',              // Nutzung von Show Notes (radio)
  q_skip_reasons: [],                 // Gründe für Episodenabbruch (checkboxes)
  q_unsubscribe_reasons: '',          // Gründe für Unsubscribe (textarea)
  q_quality_criteria: [],             // Kriterien für guten Podcast (checkboxes)
  q_rating_reasons: [],               // Gründe für Bewertung (checkboxes)
  // ── Release & production ──────────────────────────────────────────────────
  q_release_rhythm: '',               // Gewünschter Veröffentlichungsrhythmus (radio)
  q_guests: '',                       // Gäste im Podcast (radio)
  q_audio_video: '',                  // Audio vs. Video (radio)
  q_intro: '',                        // Intro-Nützlichkeit (radio)
  q_outro: '',                        // Outro/Zusammenfassung (radio)
  // ── Community & co-determination ─────────────────────────────────────────
  q_community: '',                    // Austausch mit anderen Hörer*innen (radio)
  q_diversity: '',                    // Diversität im Podcast (radio)
  q_evolution: '',                    // Podcast-Weiterentwicklung (radio)
  q_codetermination: '',              // Themen mitbestimmen (radio)
  q_feedback_channels: [],            // Bevorzugte Feedback-Kanäle (checkboxes) – conditional
  // ── Discovery & open feedback ─────────────────────────────────────────────
  q_discovery: [],                    // Wie auf Podcast aufmerksam geworden (checkboxes)
  q_niche_vs_broad: '',               // Nische vs. breit aufgestellt (radio)
  q_open_feedback: '',                // Offenes Feedback (textarea)
  q_notify_email: '',                 // E-Mail für Ergebnis-Benachrichtigung (optional)
  // ── Honeypot — must remain empty; filled only by bots ────────────────────
  _email: '',
})

// Submit state
const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')

// Load saved answers from localStorage (if any)
onMounted(() => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      answers.value = { ...answers.value, ...parsed }
    }
  } catch (error) {
    console.warn('Konnte gespeicherte Antworten nicht laden:', error)
  }
})

// Persist answers on every change to prevent data loss before submit
watch(
  answers,
  (value) => {
    if (submitSuccess.value) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
    } catch (error) {
      console.warn('Konnte Antworten nicht speichern:', error)
    }
  },
  { deep: true }
)

// Submit handler
const handleSubmit = async () => {
  isSubmitting.value = true
  submitError.value = ''

  try {
    const apiEndpoint = useRuntimeConfig().public.surveyApiUrl || '/api/survey'

    const { _email, ...surveyAnswers } = answers.value

    await $fetch(apiEndpoint, {
      method: 'POST',
      body: { _email, answers: surveyAnswers },
      headers: {
        'Content-Type': 'application/json'
      }
    })

    submitSuccess.value = true
    localStorage.removeItem(STORAGE_KEY)

    // Scroll to top to show success message
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } catch (error: any) {
    console.error('Survey submission error:', error)
    submitError.value = error.message || 'Die Umfrage konnte nicht übermittelt werden. Bitte versuche es erneut.'
  } finally {
    isSubmitting.value = false
  }
}

useHead({
  title: 'Deutschsprachige Tech-Podcast Umfrage'
})
</script>
