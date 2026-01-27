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
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
        <!-- Question 1: Altersgruppe -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              1. In welcher Altersgruppe bist du?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q-age-unter18"
                  v-model="answers.q_age"
                  type="radio"
                  value="Unter 18"
                  name="q_age"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-age-unter18" class="ml-3 text-gray-700">
                  Unter 18
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-age-18-24"
                  v-model="answers.q_age"
                  type="radio"
                  value="18–24"
                  name="q_age"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-age-18-24" class="ml-3 text-gray-700">
                  18–24
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-age-25-34"
                  v-model="answers.q_age"
                  type="radio"
                  value="25–34"
                  name="q_age"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-age-25-34" class="ml-3 text-gray-700">
                  25–34
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-age-35-44"
                  v-model="answers.q_age"
                  type="radio"
                  value="35–44"
                  name="q_age"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-age-35-44" class="ml-3 text-gray-700">
                  35–44
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-age-45-54"
                  v-model="answers.q_age"
                  type="radio"
                  value="45–54"
                  name="q_age"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-age-45-54" class="ml-3 text-gray-700">
                  45–54
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-age-55-64"
                  v-model="answers.q_age"
                  type="radio"
                  value="55–64"
                  name="q_age"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-age-55-64" class="ml-3 text-gray-700">
                  55–64
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-age-65plus"
                  v-model="answers.q_age"
                  type="radio"
                  value="65+"
                  name="q_age"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-age-65plus" class="ml-3 text-gray-700">
                  65+
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-age-keineangabe"
                  v-model="answers.q_age"
                  type="radio"
                  value="Keine Angabe"
                  name="q_age"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-age-keineangabe" class="ml-3 text-gray-700">
                  Keine Angabe
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 2: Geschlecht -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              2. Wie möchtest du dich einordnen?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q-gender-weiblich"
                  v-model="answers.q_gender"
                  type="radio"
                  value="Weiblich"
                  name="q_gender"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-gender-weiblich" class="ml-3 text-gray-700">
                  Weiblich
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-gender-maennlich"
                  v-model="answers.q_gender"
                  type="radio"
                  value="Männlich"
                  name="q_gender"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-gender-maennlich" class="ml-3 text-gray-700">
                  Männlich
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-gender-nb"
                  v-model="answers.q_gender"
                  type="radio"
                  value="Nicht-binär"
                  name="q_gender"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-gender-nb" class="ml-3 text-gray-700">
                  Nicht-binär
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-gender-keineangabe"
                  v-model="answers.q_gender"
                  type="radio"
                  value="Keine Angabe"
                  name="q_gender"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-gender-keineangabe" class="ml-3 text-gray-700">
                  Keine Angabe
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 3: Berufserfahrung -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              3. Wie viele Jahre Berufserfahrung hast du?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q-exp-0-1"
                  v-model="answers.q_experience"
                  type="radio"
                  value="0–1"
                  name="q_experience"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-exp-0-1" class="ml-3 text-gray-700">
                  0–1
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-exp-2-4"
                  v-model="answers.q_experience"
                  type="radio"
                  value="2–4"
                  name="q_experience"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-exp-2-4" class="ml-3 text-gray-700">
                  2–4
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-exp-5-9"
                  v-model="answers.q_experience"
                  type="radio"
                  value="5–9"
                  name="q_experience"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-exp-5-9" class="ml-3 text-gray-700">
                  5–9
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-exp-10-14"
                  v-model="answers.q_experience"
                  type="radio"
                  value="10–14"
                  name="q_experience"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-exp-10-14" class="ml-3 text-gray-700">
                  10–14
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-exp-15plus"
                  v-model="answers.q_experience"
                  type="radio"
                  value="15+"
                  name="q_experience"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-exp-15plus" class="ml-3 text-gray-700">
                  15+
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-exp-keineangabe"
                  v-model="answers.q_experience"
                  type="radio"
                  value="Keine Angabe"
                  name="q_experience"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-exp-keineangabe" class="ml-3 text-gray-700">
                  Keine Angabe
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 4: Bildung -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              4. Was ist dein höchster Bildungsabschluss?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q-edu-pflicht"
                  v-model="answers.q_education"
                  type="radio"
                  value="Pflichtschule"
                  name="q_education"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-edu-pflicht" class="ml-3 text-gray-700">
                  Pflichtschule
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-edu-lehre"
                  v-model="answers.q_education"
                  type="radio"
                  value="Lehre"
                  name="q_education"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-edu-lehre" class="ml-3 text-gray-700">
                  Lehre
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-edu-matura"
                  v-model="answers.q_education"
                  type="radio"
                  value="Matura/Abitur"
                  name="q_education"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-edu-matura" class="ml-3 text-gray-700">
                  Matura/Abitur
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-edu-bachelor"
                  v-model="answers.q_education"
                  type="radio"
                  value="Bachelor"
                  name="q_education"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-edu-bachelor" class="ml-3 text-gray-700">
                  Bachelor
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-edu-master"
                  v-model="answers.q_education"
                  type="radio"
                  value="Master/Diplom"
                  name="q_education"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-edu-master" class="ml-3 text-gray-700">
                  Master/Diplom
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-edu-phd"
                  v-model="answers.q_education"
                  type="radio"
                  value="Doktorat/PhD"
                  name="q_education"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-edu-phd" class="ml-3 text-gray-700">
                  Doktorat/PhD
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-edu-keineangabe"
                  v-model="answers.q_education"
                  type="radio"
                  value="Keine Angabe"
                  name="q_education"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-edu-keineangabe" class="ml-3 text-gray-700">
                  Keine Angabe
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 5: IT-Tätigkeit -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              5. Bist du im IT-Bereich tätig?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q-it-arbeite"
                  v-model="answers.q_it"
                  type="radio"
                  value="Ja, ich arbeite im IT-Bereich."
                  name="q_it"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-arbeite" class="ml-3 text-gray-700">
                  Ja, ich arbeite im IT-Bereich.
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-ausbildung"
                  v-model="answers.q_it"
                  type="radio"
                  value="Ja, ich absolviere derzeit eine Ausbildung, ein Studium, eine Weiterbildung o. ä. im IT-Bereich."
                  name="q_it"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-ausbildung" class="ml-3 text-gray-700">
                  Ja, ich absolviere derzeit eine Ausbildung, ein Studium, eine Weiterbildung o. ä. im IT-Bereich.
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-beruehrung"
                  v-model="answers.q_it"
                  type="radio"
                  value="Nein, aber ich habe viele Berührungspunkte mit Tech-Themen."
                  name="q_it"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-beruehrung" class="ml-3 text-gray-700">
                  Nein, aber ich habe viele Berührungspunkte mit Tech-Themen.
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 5a: Tätigkeitsbereich (Conditional) -->
        <section v-if="answers.q_it === 'Ja, ich arbeite im IT-Bereich.'" class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              5a. Was ist dein Tätigkeitsbereich oder trifft am ehesten zu?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q-it-area-software"
                  v-model="answers.q_it_area"
                  type="radio"
                  value="Softwareentwicklung (Frontend, Backend, Fullstack)"
                  name="q_it_area"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-area-software" class="ml-3 text-gray-700">
                  Softwareentwicklung (Frontend, Backend, Fullstack)
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-area-mobile"
                  v-model="answers.q_it_area"
                  type="radio"
                  value="Mobile Entwicklung"
                  name="q_it_area"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-area-mobile" class="ml-3 text-gray-700">
                  Mobile Entwicklung
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-area-embedded"
                  v-model="answers.q_it_area"
                  type="radio"
                  value="Embedded / Firmware / IoT"
                  name="q_it_area"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-area-embedded" class="ml-3 text-gray-700">
                  Embedded / Firmware / IoT
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-area-ds"
                  v-model="answers.q_it_area"
                  type="radio"
                  value="Data Science / Machine Learning / KI"
                  name="q_it_area"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-area-ds" class="ml-3 text-gray-700">
                  Data Science / Machine Learning / KI
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-area-de"
                  v-model="answers.q_it_area"
                  type="radio"
                  value="Data Engineering / Dateninfrastruktur"
                  name="q_it_area"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-area-de" class="ml-3 text-gray-700">
                  Data Engineering / Dateninfrastruktur
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-area-bi"
                  v-model="answers.q_it_area"
                  type="radio"
                  value="Business Intelligence / Data Analytics"
                  name="q_it_area"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-area-bi" class="ml-3 text-gray-700">
                  Business Intelligence / Data Analytics
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-area-dba"
                  v-model="answers.q_it_area"
                  type="radio"
                  value="Datenbank / DBA"
                  name="q_it_area"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-area-dba" class="ml-3 text-gray-700">
                  Datenbank / DBA
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-area-devops"
                  v-model="answers.q_it_area"
                  type="radio"
                  value="DevOps / Site Reliability Engineering"
                  name="q_it_area"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-area-devops" class="ml-3 text-gray-700">
                  DevOps / Site Reliability Engineering
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-area-cloud"
                  v-model="answers.q_it_area"
                  type="radio"
                  value="Cloud-Infrastruktur / Platform Engineering"
                  name="q_it_area"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-area-cloud" class="ml-3 text-gray-700">
                  Cloud-Infrastruktur / Platform Engineering
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-area-ops"
                  v-model="answers.q_it_area"
                  type="radio"
                  value="IT-Operations / Systemadministration"
                  name="q_it_area"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-area-ops" class="ml-3 text-gray-700">
                  IT-Operations / Systemadministration
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-area-network"
                  v-model="answers.q_it_area"
                  type="radio"
                  value="Netzwerk / Network Engineering"
                  name="q_it_area"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-area-network" class="ml-3 text-gray-700">
                  Netzwerk / Network Engineering
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-area-security"
                  v-model="answers.q_it_area"
                  type="radio"
                  value="IT-Security / Cybersecurity"
                  name="q_it_area"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-area-security" class="ml-3 text-gray-700">
                  IT-Security / Cybersecurity
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-area-qa"
                  v-model="answers.q_it_area"
                  type="radio"
                  value="Qualitätssicherung / Testing (inkl. Test Automation)"
                  name="q_it_area"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-area-qa" class="ml-3 text-gray-700">
                  Qualitätssicherung / Testing (inkl. Test Automation)
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-area-architektur"
                  v-model="answers.q_it_area"
                  type="radio"
                  value="IT-Architektur (Solution / Enterprise)"
                  name="q_it_area"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-area-architektur" class="ml-3 text-gray-700">
                  IT-Architektur (Solution / Enterprise)
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-area-ux"
                  v-model="answers.q_it_area"
                  type="radio"
                  value="UX/UI Design / Interaction Design"
                  name="q_it_area"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-area-ux" class="ml-3 text-gray-700">
                  UX/UI Design / Interaction Design
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-area-product"
                  v-model="answers.q_it_area"
                  type="radio"
                  value="Produktmanagement / Product Owner"
                  name="q_it_area"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-area-product" class="ml-3 text-gray-700">
                  Produktmanagement / Product Owner
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-area-project"
                  v-model="answers.q_it_area"
                  type="radio"
                  value="Projektmanagement / Delivery / Programmmanagement"
                  name="q_it_area"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-area-project" class="ml-3 text-gray-700">
                  Projektmanagement / Delivery / Programmmanagement
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-area-agile"
                  v-model="answers.q_it_area"
                  type="radio"
                  value="Agile Coaching / Scrum Master"
                  name="q_it_area"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-area-agile" class="ml-3 text-gray-700">
                  Agile Coaching / Scrum Master
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-area-consulting"
                  v-model="answers.q_it_area"
                  type="radio"
                  value="IT-Beratung / Tech-Consulting"
                  name="q_it_area"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-area-consulting" class="ml-3 text-gray-700">
                  IT-Beratung / Tech-Consulting
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-area-presales"
                  v-model="answers.q_it_area"
                  type="radio"
                  value="Pre-Sales / Solution Engineering / Sales Engineering"
                  name="q_it_area"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-area-presales" class="ml-3 text-gray-700">
                  Pre-Sales / Solution Engineering / Sales Engineering
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-area-cs"
                  v-model="answers.q_it_area"
                  type="radio"
                  value="Customer Success / Technical Account Management / Support Engineering"
                  name="q_it_area"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-area-cs" class="ml-3 text-gray-700">
                  Customer Success / Technical Account Management / Support Engineering
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-area-devrel"
                  v-model="answers.q_it_area"
                  type="radio"
                  value="Developer Relations / Developer Advocacy"
                  name="q_it_area"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-area-devrel" class="ml-3 text-gray-700">
                  Developer Relations / Developer Advocacy
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-area-forschung"
                  v-model="answers.q_it_area"
                  type="radio"
                  value="Forschung / Wissenschaft"
                  name="q_it_area"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-area-forschung" class="ml-3 text-gray-700">
                  Forschung / Wissenschaft
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-area-andere"
                  v-model="answers.q_it_area"
                  type="radio"
                  value="Anderer Tätigkeitsbereich"
                  name="q_it_area"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-area-andere" class="ml-3 text-gray-700">
                  Anderer Tätigkeitsbereich
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 5b: Rolle (Conditional) -->
        <section v-if="answers.q_it === 'Ja, ich arbeite im IT-Bereich.'" class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              5b. Was ist deine Rolle?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q-it-role-clevel"
                  v-model="answers.q_it_role"
                  type="radio"
                  value="Geschäftsführung / C-Level (z. B. CTO, CIO, CEO)"
                  name="q_it_role"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-role-clevel" class="ml-3 text-gray-700">
                  Geschäftsführung / C-Level (z. B. CTO, CIO, CEO)
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-role-head"
                  v-model="answers.q_it_role"
                  type="radio"
                  value="Bereichsleitung / Abteilungsleitung (z. B. Head of Engineering, IT-Leitung)"
                  name="q_it_role"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-role-head" class="ml-3 text-gray-700">
                  Bereichsleitung / Abteilungsleitung (z. B. Head of Engineering, IT-Leitung)
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-role-teamlead"
                  v-model="answers.q_it_role"
                  type="radio"
                  value="Teamleitung (z. B. Engineering Manager)"
                  name="q_it_role"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-role-teamlead" class="ml-3 text-gray-700">
                  Teamleitung (z. B. Engineering Manager)
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-role-techlead"
                  v-model="answers.q_it_role"
                  type="radio"
                  value="Tech Lead"
                  name="q_it_role"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-role-techlead" class="ml-3 text-gray-700">
                  Tech Lead
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-role-senior"
                  v-model="answers.q_it_role"
                  type="radio"
                  value="Senior-Fachkraft (z. B. Senior Developer, Senior Data Scientist)"
                  name="q_it_role"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-role-senior" class="ml-3 text-gray-700">
                  Senior-Fachkraft (z. B. Senior Developer, Senior Data Scientist)
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-role-fachkraft"
                  v-model="answers.q_it_role"
                  type="radio"
                  value="Fachkraft (z. B. Softwareentwickler*in, Data Analyst, IT-Administrator*in)"
                  name="q_it_role"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-role-fachkraft" class="ml-3 text-gray-700">
                  Fachkraft (z. B. Softwareentwickler*in, Data Analyst, IT-Administrator*in)
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-role-junior"
                  v-model="answers.q_it_role"
                  type="radio"
                  value="Berufseinsteiger*in / Junior"
                  name="q_it_role"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-role-junior" class="ml-3 text-gray-700">
                  Berufseinsteiger*in / Junior
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-it-role-forschung"
                  v-model="answers.q_it_role"
                  type="radio"
                  value="Forschung"
                  name="q_it_role"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-it-role-forschung" class="ml-3 text-gray-700">
                  Forschung
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 6: Unternehmensgröße -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              6. Wie groß ist dein Unternehmen (Anzahl Mitarbeitende)?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q-company-1"
                  v-model="answers.q_company_size"
                  type="radio"
                  value="1 (Solo / Selbstständig)"
                  name="q_company_size"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-company-1" class="ml-3 text-gray-700">
                  1 (Solo / Selbstständig)
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-company-2-10"
                  v-model="answers.q_company_size"
                  type="radio"
                  value="2–10"
                  name="q_company_size"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-company-2-10" class="ml-3 text-gray-700">
                  2–10
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-company-11-50"
                  v-model="answers.q_company_size"
                  type="radio"
                  value="11–50"
                  name="q_company_size"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-company-11-50" class="ml-3 text-gray-700">
                  11–50
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-company-51-200"
                  v-model="answers.q_company_size"
                  type="radio"
                  value="51–200"
                  name="q_company_size"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-company-51-200" class="ml-3 text-gray-700">
                  51–200
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-company-201-1000"
                  v-model="answers.q_company_size"
                  type="radio"
                  value="201–1000"
                  name="q_company_size"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-company-201-1000" class="ml-3 text-gray-700">
                  201–1000
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-company-1001-3000"
                  v-model="answers.q_company_size"
                  type="radio"
                  value="1.001–3000"
                  name="q_company_size"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-company-1001-3000" class="ml-3 text-gray-700">
                  1.001–3000
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-company-3001"
                  v-model="answers.q_company_size"
                  type="radio"
                  value="3001+"
                  name="q_company_size"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-company-3001" class="ml-3 text-gray-700">
                  3001+
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 7: Wöchentliche Hördauer -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              7. Wie viel Zeit nutzt du pro Woche circa, um deutschsprachige Tech-Podcasts zu konsumieren?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q-weekly-unter30"
                  v-model="answers.q_weekly_listening"
                  type="radio"
                  value="Weniger als 30 Minuten"
                  name="q_weekly_listening"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-weekly-unter30" class="ml-3 text-gray-700">
                  Weniger als 30 Minuten
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-weekly-30-59"
                  v-model="answers.q_weekly_listening"
                  type="radio"
                  value="30–59 Minuten"
                  name="q_weekly_listening"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-weekly-30-59" class="ml-3 text-gray-700">
                  30–59 Minuten
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-weekly-1-2"
                  v-model="answers.q_weekly_listening"
                  type="radio"
                  value="1–2 Stunden"
                  name="q_weekly_listening"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-weekly-1-2" class="ml-3 text-gray-700">
                  1–2 Stunden
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-weekly-2-4"
                  v-model="answers.q_weekly_listening"
                  type="radio"
                  value="2–4 Stunden"
                  name="q_weekly_listening"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-weekly-2-4" class="ml-3 text-gray-700">
                  2–4 Stunden
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-weekly-4plus"
                  v-model="answers.q_weekly_listening"
                  type="radio"
                  value="Mehr als 4 Stunden"
                  name="q_weekly_listening"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-weekly-4plus" class="ml-3 text-gray-700">
                  Mehr als 4 Stunden
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q-weekly-variabel"
                  v-model="answers.q_weekly_listening"
                  type="radio"
                  value="Sehr unterschiedlich / kann ich schwer sagen"
                  name="q_weekly_listening"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q-weekly-variabel" class="ml-3 text-gray-700">
                  Sehr unterschiedlich / kann ich schwer sagen
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 1: Podcast List (Checkboxes) -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-2">
              8. Welche deutschsprachigen Tech-Podcasts hörst du regelmäßig (mindestens eine Episode in den letzten 3 Monaten)?
            </legend>
            <p class="text-sm text-gray-500 mb-4">(Mehrfachauswahl möglich)</p>
            <div class="space-y-3">
              <div v-for="podcast in podcastList" :key="podcast" class="flex items-start">
                <input
                  :id="`q01-${podcast}`"
                  v-model="answers.q01"
                  type="checkbox"
                  :value="podcast"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label :for="`q01-${podcast}`" class="ml-3 text-gray-700">
                  {{ podcast }}
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 9: Q04 -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              9. Hörst du bei deinen Lieblings-Podcasts jede Folge – oder suchst du dir gezielt aus, was dich interessiert?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q04-jede"
                  v-model="answers.q04"
                  type="radio"
                  value="Ich höre (fast) jede Folge"
                  name="q04"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q04-jede" class="ml-3 text-gray-700">
                  Ich höre (fast) jede Folge
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q04-gezielt"
                  v-model="answers.q04"
                  type="radio"
                  value="Ich suche mir gezielt Folgen raus"
                  name="q04"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q04-gezielt" class="ml-3 text-gray-700">
                  Ich suche mir gezielt Folgen raus
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q04-unterschiedlich"
                  v-model="answers.q04"
                  type="radio"
                  value="Unterschiedlich"
                  name="q04"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q04-unterschiedlich" class="ml-3 text-gray-700">
                  Unterschiedlich
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 10: Q04A (Conditional) -->
        <section v-if="answers.q04 !== 'Ich höre (fast) jede Folge'" class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-2">
              10. Nach welchen Kriterien wählst du aus, welche Episoden du hörst?
            </legend>
            <p class="text-sm text-gray-500 mb-4">(Mehrfachauswahl möglich)</p>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q04a-thema-interessiert"
                  v-model="answers.q04a"
                  type="checkbox"
                  value="Das Thema interessiert mich generell"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q04a-thema-interessiert" class="ml-3 text-gray-700">
                  Das Thema interessiert mich generell
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q04a-thema-nuetzlich"
                  v-model="answers.q04a"
                  type="checkbox"
                  value="Das Thema ist gerade nützlich für mich (beschäftige mich z.B. gerade beruflich damit)"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q04a-thema-nuetzlich" class="ml-3 text-gray-700">
                  Das Thema ist gerade nützlich für mich (beschäftige mich z.B. gerade beruflich damit)
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q04a-gaeste"
                  v-model="answers.q04a"
                  type="checkbox"
                  value="Ich finde die Gäste spannend oder kenne sie bereits"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q04a-gaeste" class="ml-3 text-gray-700">
                  Ich finde die Gäste spannend oder kenne sie bereits
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q04a-titel"
                  v-model="answers.q04a"
                  type="checkbox"
                  value="Der Titel oder die Beschreibung spricht mich an"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q04a-titel" class="ml-3 text-gray-700">
                  Der Titel oder die Beschreibung spricht mich an
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q04a-laenge"
                  v-model="answers.q04a"
                  type="checkbox"
                  value="Die Episoden-Länge passt gut in meinen Zeitrahmen"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q04a-laenge" class="ml-3 text-gray-700">
                  Die Episoden-Länge passt gut in meinen Zeitrahmen
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q04a-person-empfohlen"
                  v-model="answers.q04a"
                  type="checkbox"
                  value="Ich habe die Folge von einer Person empfohlen bekommen"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q04a-person-empfohlen" class="ml-3 text-gray-700">
                  Ich habe die Folge von einer Person empfohlen bekommen
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q04a-algorithmus"
                  v-model="answers.q04a"
                  type="checkbox"
                  value="Ich habe die Folge vom Algorithmus empfohlen bekommen"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q04a-algorithmus" class="ml-3 text-gray-700">
                  Ich habe die Folge vom Algorithmus empfohlen bekommen
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 11: Formate -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-2">
              11. Welche Podcast-Formate hörst du am liebsten?
            </legend>
            <p class="text-sm text-gray-500 mb-4">(Mehrfachauswahl möglich)</p>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q02-interviews"
                  v-model="answers.q02"
                  type="checkbox"
                  value="Interviews"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q02-interviews" class="ml-3 text-gray-700">
                  Interviews
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q02-news"
                  v-model="answers.q02"
                  type="checkbox"
                  value="News / Updates"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q02-news" class="ml-3 text-gray-700">
                  News / Updates
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q02-deepdive"
                  v-model="answers.q02"
                  type="checkbox"
                  value="Deep Dives (ein Thema in Tiefe)"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q02-deepdive" class="ml-3 text-gray-700">
                  Deep Dives (ein Thema in Tiefe)
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q02-talk"
                  v-model="answers.q02"
                  type="checkbox"
                  value="Talk / Laberpodcast (lockere Gesprächsrunden)"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q02-talk" class="ml-3 text-gray-700">
                  Talk / Laberpodcast (lockere Gesprächsrunden)
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q02-storytelling"
                  v-model="answers.q02"
                  type="checkbox"
                  value="Storytelling / Reportagen"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q02-storytelling" class="ml-3 text-gray-700">
                  Storytelling / Reportagen
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q02-panels"
                  v-model="answers.q02"
                  type="checkbox"
                  value="Panels / Roundtables (mehrere Gäste)"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q02-panels" class="ml-3 text-gray-700">
                  Panels / Roundtables (mehrere Gäste)
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q02-qa"
                  v-model="answers.q02"
                  type="checkbox"
                  value="Q&A / Hörerfragen"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q02-qa" class="ml-3 text-gray-700">
                  Q&A / Hörerfragen
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q02-tutorials"
                  v-model="answers.q02"
                  type="checkbox"
                  value="Tutorials / How-to (praxisnah, Schritt für Schritt)"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q02-tutorials" class="ml-3 text-gray-700">
                  Tutorials / How-to (praxisnah, Schritt für Schritt)
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q02-kurzformate"
                  v-model="answers.q02"
                  type="checkbox"
                  value="Kurzformate / Snackable (unter 15 Minuten)"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q02-kurzformate" class="ml-3 text-gray-700">
                  Kurzformate / Snackable (unter 15 Minuten)
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 12: Q05 -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              12. Hörst du deutschsprachige Tech-Podcasts aus privatem Interesse oder als Form von beruflicher Weiterbildung?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q05-privat"
                  v-model="answers.q05"
                  type="radio"
                  value="Vorwiegend privates Interesse"
                  name="q05"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q05-privat" class="ml-3 text-gray-700">
                  Vorwiegend privates Interesse
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q05-beruflich"
                  v-model="answers.q05"
                  type="radio"
                  value="Vorwiegend berufliches Interesse"
                  name="q05"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q05-beruflich" class="ml-3 text-gray-700">
                  Vorwiegend berufliches Interesse
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q05-beides"
                  v-model="answers.q05"
                  type="radio"
                  value="Beides gleichermaßen"
                  name="q05"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q05-beides" class="ml-3 text-gray-700">
                  Beides gleichermaßen
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 13: Q06 -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              13. Magst du es eher informativ und auf den Punkt - oder bevorzugst du entspanntes Geplauder?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q06-informativ"
                  v-model="answers.q06"
                  type="radio"
                  value="Informativ und auf den Punkt, bitte!"
                  name="q06"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q06-informativ" class="ml-3 text-gray-700">
                  Informativ und auf den Punkt, bitte!
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q06-bisschen"
                  v-model="answers.q06"
                  type="radio"
                  value="Ein bisschen Plaudern ist okay, solange wir beim Thema bleiben."
                  name="q06"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q06-bisschen" class="ml-3 text-gray-700">
                  Ein bisschen Plaudern ist okay, solange wir beim Thema bleiben.
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q06-gern"
                  v-model="answers.q06"
                  type="radio"
                  value="Ich höre gern auch Off-Topic-Gespräche oder persönliche Anekdoten - die Podcaster*innen dürfen auch mal abschweifen."
                  name="q06"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q06-gern" class="ml-3 text-gray-700">
                  Ich höre gern auch Off-Topic-Gespräche oder persönliche Anekdoten - die Podcaster*innen dürfen auch mal abschweifen.
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 14: Q07 -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              14. Hörst du tendenziell Podcast-Episoden zu Themen, in denen du dich bereits auskennst?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q07-ja"
                  v-model="answers.q07"
                  type="radio"
                  value="Ja"
                  name="q07"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q07-ja" class="ml-3 text-gray-700">
                  Ja
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q07-nein"
                  v-model="answers.q07"
                  type="radio"
                  value="Nein"
                  name="q07"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q07-nein" class="ml-3 text-gray-700">
                  Nein
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 15: Q08 -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              15. Wie stehst du zu Werbung in Podcasts?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q08-interessant"
                  v-model="answers.q08"
                  type="radio"
                  value="Find ich interessant"
                  name="q08"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q08-interessant" class="ml-3 text-gray-700">
                  Find ich interessant
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q08-stoert-nicht"
                  v-model="answers.q08"
                  type="radio"
                  value="Stört mich nicht"
                  name="q08"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q08-stoert-nicht" class="ml-3 text-gray-700">
                  Stört mich nicht
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q08-mag-nicht"
                  v-model="answers.q08"
                  type="radio"
                  value="Mag ich nicht"
                  name="q08"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q08-mag-nicht" class="ml-3 text-gray-700">
                  Mag ich nicht
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 16: Support -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              16. Hast du schon einmal einen Podcast durch eine Spende oder Subscription (Steady, LiberaPay, etc) unterstützt?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q09-regelmaessig"
                  v-model="answers.q09"
                  type="radio"
                  value="Ja, regelmäßig"
                  name="q09"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q09-regelmaessig" class="ml-3 text-gray-700">
                  Ja, regelmäßig
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q09-gelegentlich"
                  v-model="answers.q09"
                  type="radio"
                  value="Ja, gelegentlich bis selten"
                  name="q09"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q09-gelegentlich" class="ml-3 text-gray-700">
                  Ja, gelegentlich bis selten
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q09-nein"
                  v-model="answers.q09"
                  type="radio"
                  value="Nein"
                  name="q09"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q09-nein" class="ml-3 text-gray-700">
                  Nein
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 17: Q08a (Conditional) -->
        <section v-if="answers.q08 !== 'Mag ich nicht'" class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              17. Hast du Werbeeinblendungen bereits aktiv genutzt? (beworbene Produkte gekauft, Gutscheincodes eingelöst, etc.)
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q08a-ja"
                  v-model="answers.q08a"
                  type="radio"
                  value="Ja"
                  name="q08a"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q08a-ja" class="ml-3 text-gray-700">
                  Ja
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q08a-nein"
                  v-model="answers.q08a"
                  type="radio"
                  value="Nein"
                  name="q08a"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q08a-nein" class="ml-3 text-gray-700">
                  Nein
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 18: Q10 -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              18. Wie lang ist eine Episode idealerweise für dich?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q10-unter15"
                  v-model="answers.q10"
                  type="radio"
                  value="Unter 15 Minuten"
                  name="q10"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q10-unter15" class="ml-3 text-gray-700">
                  Unter 15 Minuten
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q10-15-30"
                  v-model="answers.q10"
                  type="radio"
                  value="15 - 30 Minuten"
                  name="q10"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q10-15-30" class="ml-3 text-gray-700">
                  15 - 30 Minuten
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q10-30-45"
                  v-model="answers.q10"
                  type="radio"
                  value="30 - 45 Minuten"
                  name="q10"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q10-30-45" class="ml-3 text-gray-700">
                  30 - 45 Minuten
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q10-45-60"
                  v-model="answers.q10"
                  type="radio"
                  value="45 - 60 Minuten"
                  name="q10"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q10-45-60" class="ml-3 text-gray-700">
                  45 - 60 Minuten
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q10-60-90"
                  v-model="answers.q10"
                  type="radio"
                  value="60 - 90 Minuten"
                  name="q10"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q10-60-90" class="ml-3 text-gray-700">
                  60 - 90 Minuten
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q10-ueber90"
                  v-model="answers.q10"
                  type="radio"
                  value="Über 90 Minuten"
                  name="q10"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q10-ueber90" class="ml-3 text-gray-700">
                  Über 90 Minuten
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q10-egal"
                  v-model="answers.q10"
                  type="radio"
                  value="Ist mir egal / bin flexibel"
                  name="q10"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q10-egal" class="ml-3 text-gray-700">
                  Ist mir egal / bin flexibel
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 19: Q11 (Checkboxes with Freitext) -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-2">
              19. In welchem Kontext hörst du deutschsprachige Tech-Podcasts?
            </legend>
            <p class="text-sm text-gray-500 mb-4">(Mehrfachauswahl möglich)</p>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q11-pendeln"
                  v-model="answers.q11"
                  type="checkbox"
                  value="Beim Pendeln"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q11-pendeln" class="ml-3 text-gray-700">
                  Beim Pendeln
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q11-arbeit"
                  v-model="answers.q11"
                  type="checkbox"
                  value="Während der Arbeit oder beim Coden"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q11-arbeit" class="ml-3 text-gray-700">
                  Während der Arbeit oder beim Coden
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q11-zwischendurch"
                  v-model="answers.q11"
                  type="checkbox"
                  value="Zwischendurch, wenn ich mal Zeit finde"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q11-zwischendurch" class="ml-3 text-gray-700">
                  Zwischendurch, wenn ich mal Zeit finde
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q11-bewusst"
                  v-model="answers.q11"
                  type="checkbox"
                  value="Ich nehme mir bewusst Zeit dafür / ich mache nichts nebenher"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q11-bewusst" class="ml-3 text-gray-700">
                  Ich nehme mir bewusst Zeit dafür / ich mache nichts nebenher
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q11-nebenbei"
                  v-model="answers.q11"
                  type="checkbox"
                  value="Ich höre Podcasts nebenbei, z. B. beim Spazieren, Kochen, Haushalt, Sport, etc."
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q11-nebenbei" class="ml-3 text-gray-700">
                  Ich höre Podcasts nebenbei, z. B. beim Spazieren, Kochen, Haushalt, Sport, etc.
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q11-einschlafen"
                  v-model="answers.q11"
                  type="checkbox"
                  value="Zum Einschlafen"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q11-einschlafen" class="ml-3 text-gray-700">
                  Zum Einschlafen
                </label>
              </div>
              <div class="mt-4">
                <label for="q11-freitext" class="block text-sm font-medium text-gray-700 mb-2">
                  Sonstiges:
                </label>
                <input
                  id="q11-freitext"
                  v-model="answers.q11_freitext"
                  type="text"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Weitere Kontexte..."
                />
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 20: Q12 -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              20. Würdest du sagen, dass dich das Hören von Podcasts beruflich weitergebracht hat?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q12-ja"
                  v-model="answers.q12"
                  type="radio"
                  value="Ja"
                  name="q12"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q12-ja" class="ml-3 text-gray-700">
                  Ja
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q12-nein"
                  v-model="answers.q12"
                  type="radio"
                  value="Nein"
                  name="q12"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q12-nein" class="ml-3 text-gray-700">
                  Nein
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 20a: Q12A (Conditional) -->
        <section v-if="answers.q12 === 'Ja'" class="bg-white shadow-sm rounded-lg p-6">
          <div>
            <label for="q12a" class="block text-xl font-semibold text-gray-900 mb-4">
              20a. Inwiefern hast du beruflich vom Podcast-Hören profitiert?
            </label>
            <textarea
              id="q12a"
              v-model="answers.q12a"
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Beschreibe, wie Podcasts dir beruflich geholfen haben..."
            ></textarea>
          </div>
        </section>

        <!-- Question 21: Q13 (Checkboxes with Freitext) -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-2">
              21. Welche Themen interessieren dich in Tech-Podcasts besonders?
            </legend>
            <p class="text-sm text-gray-500 mb-4">(Mehrfachauswahl möglich)</p>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q13-business"
                  v-model="answers.q13"
                  type="checkbox"
                  value="Business & Tech-Strategie"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q13-business" class="ml-3 text-gray-700">
                  Business & Tech-Strategie
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q13-software"
                  v-model="answers.q13"
                  type="checkbox"
                  value="Softwareentwicklung & Architektur (Backend, APIs, Patterns)"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q13-software" class="ml-3 text-gray-700">
                  Softwareentwicklung & Architektur (Backend, APIs, Patterns)
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q13-web"
                  v-model="answers.q13"
                  type="checkbox"
                  value="Web & Frontend"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q13-web" class="ml-3 text-gray-700">
                  Web & Frontend
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q13-mobile"
                  v-model="answers.q13"
                  type="checkbox"
                  value="Mobile Entwicklung"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q13-mobile" class="ml-3 text-gray-700">
                  Mobile Entwicklung
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q13-infrastruktur"
                  v-model="answers.q13"
                  type="checkbox"
                  value="Infrastruktur & Plattformen (Cloud, DevOps, SRE, Platform Engineering)"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q13-infrastruktur" class="ml-3 text-gray-700">
                  Infrastruktur & Plattformen (Cloud, DevOps, SRE, Platform Engineering)
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q13-observability"
                  v-model="answers.q13"
                  type="checkbox"
                  value="Observability, Performance & Reliability (Monitoring, Tracing, Incident Response)"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q13-observability" class="ml-3 text-gray-700">
                  Observability, Performance & Reliability (Monitoring, Tracing, Incident Response)
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q13-ki"
                  v-model="answers.q13"
                  type="checkbox"
                  value="KI, Data Science & Machine Learning"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q13-ki" class="ml-3 text-gray-700">
                  KI, Data Science & Machine Learning
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q13-data"
                  v-model="answers.q13"
                  type="checkbox"
                  value="Data Engineering & Datenplattformen (Pipelines, Warehouses, Streaming)"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q13-data" class="ml-3 text-gray-700">
                  Data Engineering & Datenplattformen (Pipelines, Warehouses, Streaming)
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q13-security"
                  v-model="answers.q13"
                  type="checkbox"
                  value="Sicherheit & Datenschutz"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q13-security" class="ml-3 text-gray-700">
                  Sicherheit & Datenschutz
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q13-testing"
                  v-model="answers.q13"
                  type="checkbox"
                  value="Testing & Qualität (QA, Test Automation)"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q13-testing" class="ml-3 text-gray-700">
                  Testing & Qualität (QA, Test Automation)
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q13-hardware"
                  v-model="answers.q13"
                  type="checkbox"
                  value="Hardware, Embedded, IoT & Zukunftstechnologien"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q13-hardware" class="ml-3 text-gray-700">
                  Hardware, Embedded, IoT & Zukunftstechnologien
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q13-dx"
                  v-model="answers.q13"
                  type="checkbox"
                  value="Developer Experience & Tooling (CI/CD, Build, Developer Tools)"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q13-dx" class="ml-3 text-gray-700">
                  Developer Experience & Tooling (CI/CD, Build, Developer Tools)
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q13-oss"
                  v-model="answers.q13"
                  type="checkbox"
                  value="Open Source & Community"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q13-oss" class="ml-3 text-gray-700">
                  Open Source & Community
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q13-leadership"
                  v-model="answers.q13"
                  type="checkbox"
                  value="Leadership, Kultur & Zusammenarbeit"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q13-leadership" class="ml-3 text-gray-700">
                  Leadership, Kultur & Zusammenarbeit
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q13-karriere"
                  v-model="answers.q13"
                  type="checkbox"
                  value="Karriere & Lernen (Hiring, Skills, Weiterbildung)"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q13-karriere" class="ml-3 text-gray-700">
                  Karriere & Lernen (Hiring, Skills, Weiterbildung)
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q13-news"
                  v-model="answers.q13"
                  type="checkbox"
                  value="Tech-News / Branchen-Updates"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q13-news" class="ml-3 text-gray-700">
                  Tech-News / Branchen-Updates
                </label>
              </div>
              <div class="mt-4">
                <label for="q13-freitext" class="block text-sm font-medium text-gray-700 mb-2">
                  Weitere Themen:
                </label>
                <input
                  id="q13-freitext"
                  v-model="answers.q13_freitext"
                  type="text"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Weitere Themen..."
                />
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 22: Q15 -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              22. Wie oft nutzt du Begleitmaterialien, die in den Show Notes verlinkt sind?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q15-nie"
                  v-model="answers.q15"
                  type="radio"
                  value="Nie, ich höre nur den Podcast"
                  name="q15"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q15-nie" class="ml-3 text-gray-700">
                  Nie, ich höre nur den Podcast
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q15-selten"
                  v-model="answers.q15"
                  type="radio"
                  value="Selten bis gelegentlich"
                  name="q15"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q15-selten" class="ml-3 text-gray-700">
                  Selten bis gelegentlich
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q15-haeufig"
                  v-model="answers.q15"
                  type="radio"
                  value="Häufig"
                  name="q15"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q15-haeufig" class="ml-3 text-gray-700">
                  Häufig
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q15-nichtwusste"
                  v-model="answers.q15"
                  type="radio"
                  value="Ich wusste nicht, dass es solche Materialien gibt oder habe es noch nicht gesehen"
                  name="q15"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q15-nichtwusste" class="ml-3 text-gray-700">
                  Ich wusste nicht, dass es solche Materialien gibt oder habe es noch nicht gesehen
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 23: Q16 (Checkboxes) -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-2">
              23. Aus welchen Gründen (die mit dem Podcast oder der Episode zu tun haben) hast du schon mal eine Episode abgebrochen, bevor du sie zu Ende gehört hattest?
            </legend>
            <p class="text-sm text-gray-500 mb-4">(Mehrfachauswahl möglich)</p>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q16-langatmig"
                  v-model="answers.q16"
                  type="checkbox"
                  value="Die Episode war zu langatmig"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q16-langatmig" class="ml-3 text-gray-700">
                  Die Episode war zu langatmig
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q16-ton"
                  v-model="answers.q16"
                  type="checkbox"
                  value="Die Tonqualität war schlecht"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q16-ton" class="ml-3 text-gray-700">
                  Die Tonqualität war schlecht
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q16-thema"
                  v-model="answers.q16"
                  type="checkbox"
                  value="Das Thema war doch nicht so interessant wie erwartet"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q16-thema" class="ml-3 text-gray-700">
                  Das Thema war doch nicht so interessant wie erwartet
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q16-lang"
                  v-model="answers.q16"
                  type="checkbox"
                  value="Die Episode war mir zu lang"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q16-lang" class="ml-3 text-gray-700">
                  Die Episode war mir zu lang
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q16-gast"
                  v-model="answers.q16"
                  type="checkbox"
                  value="Der Gast war nicht relevant für mich"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q16-gast" class="ml-3 text-gray-700">
                  Der Gast war nicht relevant für mich
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q16-bekannt"
                  v-model="answers.q16"
                  type="checkbox"
                  value="Ich habe die Infos schon aus anderen Quellen gekannt und nichts Neues gelernt"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q16-bekannt" class="ml-3 text-gray-700">
                  Ich habe die Infos schon aus anderen Quellen gekannt und nichts Neues gelernt
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q16-oberflaechlich"
                  v-model="answers.q16"
                  type="checkbox"
                  value="Die Diskussion war zu oberflächlich"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q16-oberflaechlich" class="ml-3 text-gray-700">
                  Die Diskussion war zu oberflächlich
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q16-kompliziert"
                  v-model="answers.q16"
                  type="checkbox"
                  value="Ich bin inhaltlich nicht mehr mitgekommen / es war mir zu kompliziert"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q16-kompliziert" class="ml-3 text-gray-700">
                  Ich bin inhaltlich nicht mehr mitgekommen / es war mir zu kompliziert
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q16-kompetenz"
                  v-model="answers.q16"
                  type="checkbox"
                  value="Die Sprechenden erschienen mir nicht kompetent genug"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q16-kompetenz" class="ml-3 text-gray-700">
                  Die Sprechenden erschienen mir nicht kompetent genug
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q16-struktur"
                  v-model="answers.q16"
                  type="checkbox"
                  value="Zu wenig Struktur oder roter Faden"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q16-struktur" class="ml-3 text-gray-700">
                  Zu wenig Struktur oder roter Faden
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q16-wiederholungen"
                  v-model="answers.q16"
                  type="checkbox"
                  value="Zu viele Wiederholungen"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q16-wiederholungen" class="ml-3 text-gray-700">
                  Zu viele Wiederholungen
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q16-vergessen"
                  v-model="answers.q16"
                  type="checkbox"
                  value="Ich höre Podcasts oft unterwegs und habe vergessen weiterzuhören"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q16-vergessen" class="ml-3 text-gray-700">
                  Ich höre Podcasts oft unterwegs und habe vergessen weiterzuhören
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q16-sprechweise"
                  v-model="answers.q16"
                  type="checkbox"
                  value="Die Sprechweise war nicht professionell genug (z.B. viele Pausen, viele Ähms, undeutliche Sprache, …)"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q16-sprechweise" class="ml-3 text-gray-700">
                  Die Sprechweise war nicht professionell genug (z.B. viele Pausen, viele "Ähms", undeutliche Sprache, …)
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q16-werbung"
                  v-model="answers.q16"
                  type="checkbox"
                  value="Wegen (zu vielen) Werbeeinblendungen"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q16-werbung" class="ml-3 text-gray-700">
                  Wegen (zu vielen) Werbeeinblendungen
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q16-nicht"
                  v-model="answers.q16"
                  type="checkbox"
                  value="Ich breche Episoden nicht ab / Ich breche Episoden nur aus persönlichen Gründen ab"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q16-nicht" class="ml-3 text-gray-700">
                  Ich breche Episoden nicht ab / Ich breche Episoden nur aus persönlichen Gründen ab
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 24: Unsubscribe (Freitext) -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <div>
            <label for="q17" class="block text-xl font-semibold text-gray-900 mb-4">
              24. Hast du schon mal einen Podcast unsubscribed, wenn ja warum?
            </label>
            <textarea
              id="q17"
              v-model="answers.q17"
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Deine Antwort..."
            ></textarea>
          </div>
        </section>

        <!-- Question 25: Q17 (Good Podcast Criteria - Checkboxes) -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-2">
              25. Welche Kriterien machen für dich einen richtig guten Podcast aus?
            </legend>
            <p class="text-sm text-gray-500 mb-4">(Mehrfachauswahl möglich)</p>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q18-mehrwert"
                  v-model="answers.q18"
                  type="checkbox"
                  value="Inhalte mit echtem Mehrwert"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q18-mehrwert" class="ml-3 text-gray-700">
                  Inhalte mit echtem Mehrwert
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q18-tiefe"
                  v-model="answers.q18"
                  type="checkbox"
                  value="Fachliche Tiefe"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q18-tiefe" class="ml-3 text-gray-700">
                  Fachliche Tiefe
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q18-verstaendlich"
                  v-model="answers.q18"
                  type="checkbox"
                  value="Verständliche Vermittlung auch komplexer Themen"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q18-verstaendlich" class="ml-3 text-gray-700">
                  Verständliche Vermittlung auch komplexer Themen
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q18-sympathisch"
                  v-model="answers.q18"
                  type="checkbox"
                  value="Sympathische und authentische Moderator*innen"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q18-sympathisch" class="ml-3 text-gray-700">
                  Sympathische und authentische Moderator*innen
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q18-struktur"
                  v-model="answers.q18"
                  type="checkbox"
                  value="Gute Struktur und roter Faden in jeder Folge"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q18-struktur" class="ml-3 text-gray-700">
                  Gute Struktur und roter Faden in jeder Folge
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q18-gaeste"
                  v-model="answers.q18"
                  type="checkbox"
                  value="Interessante Gäste"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q18-gaeste" class="ml-3 text-gray-700">
                  Interessante Gäste
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q18-tonqualitaet"
                  v-model="answers.q18"
                  type="checkbox"
                  value="Gute Tonqualität"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q18-tonqualitaet" class="ml-3 text-gray-700">
                  Gute Tonqualität
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q18-moderation"
                  v-model="answers.q18"
                  type="checkbox"
                  value="Gute Moderation der Hosts"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q18-moderation" class="ml-3 text-gray-700">
                  Gute Moderation der Hosts
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q18-regelmaessig"
                  v-model="answers.q18"
                  type="checkbox"
                  value="Regelmäßige Veröffentlichungen"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q18-regelmaessig" class="ml-3 text-gray-700">
                  Regelmäßige Veröffentlichungen
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q18-abwechslungsreich"
                  v-model="answers.q18"
                  type="checkbox"
                  value="Abwechslungsreiche Themen & Formate"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q18-abwechslungsreich" class="ml-3 text-gray-700">
                  Abwechslungsreiche Themen & Formate
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q18-shownotes"
                  v-model="answers.q18"
                  type="checkbox"
                  value="Gute Shownotes & weiterführende Materialien"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q18-shownotes" class="ml-3 text-gray-700">
                  Gute Shownotes & weiterführende Materialien
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q18-nachdenken"
                  v-model="answers.q18"
                  type="checkbox"
                  value="Der Podcast regt zum Nachdenken an oder inspiriert"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q18-nachdenken" class="ml-3 text-gray-700">
                  Der Podcast regt zum Nachdenken an oder inspiriert
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q18-kapitelmarken"
                  v-model="answers.q18"
                  type="checkbox"
                  value="Kapitelmarken (Chapter Marks)"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q18-kapitelmarken" class="ml-3 text-gray-700">
                  Kapitelmarken (Chapter Marks)
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 26: Q18 - Rating Frequency -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              26. Wie oft bewertest du Podcasts?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q19-nie"
                  v-model="answers.q19"
                  type="radio"
                  value="Nie"
                  name="q19"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q19-nie" class="ml-3 text-gray-700">
                  Nie
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q19-selten"
                  v-model="answers.q19"
                  type="radio"
                  value="Selten bis Gelegentlich"
                  name="q19"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q19-selten" class="ml-3 text-gray-700">
                  Selten bis Gelegentlich
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q19-regelmaessig"
                  v-model="answers.q19"
                  type="radio"
                  value="Regelmäßig"
                  name="q19"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q19-regelmaessig" class="ml-3 text-gray-700">
                  Regelmäßig
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 27: Q18A - Rating Reasons (Conditional) -->
        <section v-if="answers.q19 !== 'Nie'" class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-2">
              27. Was veranlasst dich zu einer Bewertung des Podcasts?
            </legend>
            <p class="text-sm text-gray-500 mb-4">(Mehrfachauswahl möglich)</p>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q19a-begeistert"
                  v-model="answers.q19a"
                  type="checkbox"
                  value="Ich war begeistert / enttäuscht von einer bestimmten Episode"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q19a-begeistert" class="ml-3 text-gray-700">
                  Ich war begeistert / enttäuscht von einer bestimmten Episode
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q19a-unterstuetzen"
                  v-model="answers.q19a"
                  type="checkbox"
                  value="Ich höre den Podcast regelmäßig und möchte ihn unterstützen"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q19a-unterstuetzen" class="ml-3 text-gray-700">
                  Ich höre den Podcast regelmäßig und möchte ihn unterstützen
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q19a-aufgerufen"
                  v-model="answers.q19a"
                  type="checkbox"
                  value="Die Moderator*innen haben aktiv dazu aufgerufen"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q19a-aufgerufen" class="ml-3 text-gray-700">
                  Die Moderator*innen haben aktiv dazu aufgerufen
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q19a-eindruck"
                  v-model="answers.q19a"
                  type="checkbox"
                  value="Ich hatte einen besonders positiven / negativen Gesamteindruck"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q19a-eindruck" class="ml-3 text-gray-700">
                  Ich hatte einen besonders positiven / negativen Gesamteindruck
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q19a-meinung"
                  v-model="answers.q19a"
                  type="checkbox"
                  value="Ich möchte meine Meinung mit anderen teilen"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q19a-meinung" class="ml-3 text-gray-700">
                  Ich möchte meine Meinung mit anderen teilen
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q19a-feedback"
                  v-model="answers.q19a"
                  type="checkbox"
                  value="Ich möchte konstruktives Feedback geben"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q19a-feedback" class="ml-3 text-gray-700">
                  Ich möchte konstruktives Feedback geben
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q19a-socialmedia"
                  v-model="answers.q19a"
                  type="checkbox"
                  value="Ich wurde auf Social Media oder im Newsletter daran erinnert"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q19a-socialmedia" class="ml-3 text-gray-700">
                  Ich wurde auf Social Media oder im Newsletter daran erinnert
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q19a-persoenlich"
                  v-model="answers.q19a"
                  type="checkbox"
                  value="Ich kenne die Macher*innen persönlich / aus der Community"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q19a-persoenlich" class="ml-3 text-gray-700">
                  Ich kenne die Macher*innen persönlich / aus der Community
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 28: Q19 - Release Rhythm -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              28. In welchem Rhythmus sollten neue Folgen eines Podcasts für dich erscheinen?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q20-mehrmals"
                  v-model="answers.q20"
                  type="radio"
                  value="Mehrmals pro Woche"
                  name="q20"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q20-mehrmals" class="ml-3 text-gray-700">
                  Mehrmals pro Woche
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q20-woechentlich"
                  v-model="answers.q20"
                  type="radio"
                  value="Wöchentlich"
                  name="q20"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q20-woechentlich" class="ml-3 text-gray-700">
                  Wöchentlich
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q20-zweiwoche"
                  v-model="answers.q20"
                  type="radio"
                  value="Alle zwei Wochen"
                  name="q20"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q20-zweiwoche" class="ml-3 text-gray-700">
                  Alle zwei Wochen
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q20-monatlich"
                  v-model="answers.q20"
                  type="radio"
                  value="Monatlich"
                  name="q20"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q20-monatlich" class="ml-3 text-gray-700">
                  Monatlich
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q20-egal"
                  v-model="answers.q20"
                  type="radio"
                  value="Ist mir egal"
                  name="q20"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q20-egal" class="ml-3 text-gray-700">
                  Ist mir egal
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 29: Q20 - Guests -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              29. Wie gern hörst du Gäste im Podcast?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q21-sehrgern"
                  v-model="answers.q21"
                  type="radio"
                  value="Sehr gern, spannende Gäste sind für mich ein Highlight"
                  name="q21"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q21-sehrgern" class="ml-3 text-gray-700">
                  Sehr gern, spannende Gäste sind für mich ein Highlight
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q21-gern"
                  v-model="answers.q21"
                  type="radio"
                  value="Gern, aber es kommt auf die Person oder das Thema an"
                  name="q21"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q21-gern" class="ml-3 text-gray-700">
                  Gern, aber es kommt auf die Person oder das Thema an
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q21-egal"
                  v-model="answers.q21"
                  type="radio"
                  value="Ist mir egal, Hauptsache, die Folge ist gut gemacht"
                  name="q21"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q21-egal" class="ml-3 text-gray-700">
                  Ist mir egal, Hauptsache, die Folge ist gut gemacht
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q21-nichtsogern"
                  v-model="answers.q21"
                  type="radio"
                  value="Nicht so gern, ich mag es lieber, wenn Hosts unter sich bleiben"
                  name="q21"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q21-nichtsogern" class="ml-3 text-gray-700">
                  Nicht so gern, ich mag es lieber, wenn Hosts unter sich bleiben
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q21-garnicht"
                  v-model="answers.q21"
                  type="radio"
                  value="Gar nicht, ich finde Gäste eher störend"
                  name="q21"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q21-garnicht" class="ml-3 text-gray-700">
                  Gar nicht, ich finde Gäste eher störend
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 30: Q22 - Audio vs Video -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              30. Magst du Podcasts lieber als reines Audio oder dürfen sie auch mit Video sein?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q22-audio"
                  v-model="answers.q22"
                  type="radio"
                  value="Ich bevorzuge reine Audio-Podcasts"
                  name="q22"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q22-audio" class="ml-3 text-gray-700">
                  Ich bevorzuge reine Audio-Podcasts
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q22-video"
                  v-model="answers.q22"
                  type="radio"
                  value="Ich schaue Podcasts lieber als Video"
                  name="q22"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q22-video" class="ml-3 text-gray-700">
                  Ich schaue Podcasts lieber als Video
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q22-egal"
                  v-model="answers.q22"
                  type="radio"
                  value="Ist mir egal"
                  name="q22"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q22-egal" class="ml-3 text-gray-700">
                  Ist mir egal
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 31: Q23 - Intro -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              31. Wie hilfreich findest du ein Intro am Anfang, das sagt, worum es in der Folge geht?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q23-hilfreich"
                  v-model="answers.q23"
                  type="radio"
                  value="Hilfreich – so weiß ich gleich, worauf ich mich einlasse"
                  name="q23"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q23-hilfreich" class="ml-3 text-gray-700">
                  Hilfreich – so weiß ich gleich, worauf ich mich einlasse
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q23-neutral"
                  v-model="answers.q23"
                  type="radio"
                  value="Neutral – ist mir nicht so wichtig"
                  name="q23"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q23-neutral" class="ml-3 text-gray-700">
                  Neutral – ist mir nicht so wichtig
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q23-nichthilfreich"
                  v-model="answers.q23"
                  type="radio"
                  value="Nicht hilfreich – ich skippe Intros, breche die Episode ab oder höre das Intro nur unter Protest"
                  name="q23"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q23-nichthilfreich" class="ml-3 text-gray-700">
                  Nicht hilfreich – ich skippe Intros, breche die Episode ab oder höre das Intro nur unter Protest
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 32: Q24 - Outro/Summary -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              32. Wie wichtig ist dir ein Fazit oder eine Zusammenfassung am Ende einer Folge?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q24-wichtig"
                  v-model="answers.q24"
                  type="radio"
                  value="Wichtig – finde ich nützlich und hilfreich"
                  name="q24"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q24-wichtig" class="ml-3 text-gray-700">
                  Wichtig – finde ich nützlich und hilfreich
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q24-egal"
                  v-model="answers.q24"
                  type="radio"
                  value="Ist mir egal"
                  name="q24"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q24-egal" class="ml-3 text-gray-700">
                  Ist mir egal
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q24-weglassen"
                  v-model="answers.q24"
                  type="radio"
                  value="Lieber weglassen, ist für mich überflüssig"
                  name="q24"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q24-weglassen" class="ml-3 text-gray-700">
                  Lieber weglassen, ist für mich überflüssig
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 33: Q25 - Community -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              33. Tauschst du dich mit anderen Hörer*innen über Episoden aus – z. B. in Foren, Kommentarbereichen oder einer Community des Podcasts?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q25-regelmaessig"
                  v-model="answers.q25"
                  type="radio"
                  value="Ja, regelmäßig"
                  name="q25"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q25-regelmaessig" class="ml-3 text-gray-700">
                  Ja, regelmäßig
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q25-schonmal"
                  v-model="answers.q25"
                  type="radio"
                  value="Schon mal gemacht, aber nicht regelmäßig"
                  name="q25"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q25-schonmal" class="ml-3 text-gray-700">
                  Schon mal gemacht, aber nicht regelmäßig
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q25-nein"
                  v-model="answers.q25"
                  type="radio"
                  value="Nein"
                  name="q25"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q25-nein" class="ml-3 text-gray-700">
                  Nein
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q25-nichtwusste"
                  v-model="answers.q25"
                  type="radio"
                  value="Ich wusste nicht, dass es solche Möglichkeiten gibt"
                  name="q25"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q25-nichtwusste" class="ml-3 text-gray-700">
                  Ich wusste nicht, dass es solche Möglichkeiten gibt
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 34: Q26 - Diversity -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              34. Wie wichtig ist es dir, dass in einem Podcast ganz unterschiedliche Personen vorkommen – z. B. Menschen unterschiedlichen Geschlechts, verschiedener Herkunft oder mit unterschiedlichen gesellschaftlichen und beruflichen Hintergründen?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q26-sehrwichtig"
                  v-model="answers.q26"
                  type="radio"
                  value="Sehr wichtig – ich achte aktiv darauf und finde es bereichernd"
                  name="q26"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q26-sehrwichtig" class="ml-3 text-gray-700">
                  Sehr wichtig – ich achte aktiv darauf und finde es bereichernd
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q26-schoen"
                  v-model="answers.q26"
                  type="radio"
                  value="Schön, wenn's passiert – aber kein Muss für mich"
                  name="q26"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q26-schoen" class="ml-3 text-gray-700">
                  Schön, wenn's passiert – aber kein Muss für mich
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q26-nichtwichtig"
                  v-model="answers.q26"
                  type="radio"
                  value="Ist mir nicht so wichtig, ich achte mehr auf die Inhalte"
                  name="q26"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q26-nichtwichtig" class="ml-3 text-gray-700">
                  Ist mir nicht so wichtig, ich achte mehr auf die Inhalte
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 35: Q27 - Evolution -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              35. Wie findest du es, wenn sich ein Podcast weiterentwickelt – z. B. durch neue Formate, veränderte Struktur oder kreative Experimente?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q27-super"
                  v-model="answers.q27"
                  type="radio"
                  value="Finde ich super – Abwechslung hält den Podcast lebendig"
                  name="q27"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q27-super" class="ml-3 text-gray-700">
                  Finde ich super – Abwechslung hält den Podcast lebendig
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q27-neutral"
                  v-model="answers.q27"
                  type="radio"
                  value="Neutral / Kommt drauf an – solange die Inhalte und Qualität stimmen"
                  name="q27"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q27-neutral" class="ml-3 text-gray-700">
                  Neutral / Kommt drauf an – solange die Inhalte und Qualität stimmen
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q27-verlaesslichkeit"
                  v-model="answers.q27"
                  type="radio"
                  value="Ich mag lieber Verlässlichkeit – bitte keine allzu großen Änderungen"
                  name="q27"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q27-verlaesslichkeit" class="ml-3 text-gray-700">
                  Ich mag lieber Verlässlichkeit – bitte keine allzu großen Änderungen
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 36: Q28 - Co-determination -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              36. Ist es dir wichtig, die Themen des Podcasts mitbestimmen zu können – z. B. indem du Vorschläge oder Anregungen einbringen kannst?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q28-ja"
                  v-model="answers.q28"
                  type="radio"
                  value="Ja, das finde ich gut – ich habe gern die Möglichkeit zur Mitwirkung"
                  name="q28"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q28-ja" class="ml-3 text-gray-700">
                  Ja, das finde ich gut – ich habe gern die Möglichkeit zur Mitwirkung
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q28-nett"
                  v-model="answers.q28"
                  type="radio"
                  value="Kann nett sein – aber ich nutze solche Angebote eher selten"
                  name="q28"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q28-nett" class="ml-3 text-gray-700">
                  Kann nett sein – aber ich nutze solche Angebote eher selten
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q28-nein"
                  v-model="answers.q28"
                  type="radio"
                  value="Nein, das ist mir nicht wichtig"
                  name="q28"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q28-nein" class="ml-3 text-gray-700">
                  Nein, das ist mir nicht wichtig
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 36a: Q28A - Feedback Channels (Conditional) -->
        <section v-if="answers.q28 === 'Ja, das finde ich gut – ich habe gern die Möglichkeit zur Mitwirkung'" class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-2">
              36a. Wenn du Themen oder Ideen einbringen willst – was wäre für dich die beste Möglichkeit, das zu tun?
            </legend>
            <p class="text-sm text-gray-500 mb-4">(Mehrfachauswahl möglich)</p>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q28a-community"
                  v-model="answers.q28a"
                  type="checkbox"
                  value="In einer Community-Plattform (z. B. Discord, Mastodon, ...)"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q28a-community" class="ml-3 text-gray-700">
                  In einer Community-Plattform (z. B. Discord, Mastodon, ...)
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q28a-email"
                  v-model="answers.q28a"
                  type="checkbox"
                  value="Über direkte Rückmeldung (z. B. E-Mail)"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q28a-email" class="ml-3 text-gray-700">
                  Über direkte Rückmeldung (z. B. E-Mail)
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q28a-socialmedia"
                  v-model="answers.q28a"
                  type="checkbox"
                  value="Über Social Media (LinkedIn, Instagram, Facebook)"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q28a-socialmedia" class="ml-3 text-gray-700">
                  Über Social Media (LinkedIn, Instagram, Facebook)
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q28a-kommentar"
                  v-model="answers.q28a"
                  type="checkbox"
                  value="In einem Kommentarbereich (z. B. unter der Folge)"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q28a-kommentar" class="ml-3 text-gray-700">
                  In einem Kommentarbereich (z. B. unter der Folge)
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 37: Q29 - Discovery Channels -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-2">
              37. Wie bist du auf die Podcasts aufmerksam geworden, die du regelmäßig hörst?
            </legend>
            <p class="text-sm text-gray-500 mb-4">(Mehrfachauswahl möglich)</p>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q29-app"
                  v-model="answers.q29"
                  type="checkbox"
                  value="Über die Suche oder Empfehlungen in meiner Podcast-App"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q29-app" class="ml-3 text-gray-700">
                  Über die Suche oder Empfehlungen in meiner Podcast-App
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q29-freunde"
                  v-model="answers.q29"
                  type="checkbox"
                  value="Durch Freund*innen oder Bekannte"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q29-freunde" class="ml-3 text-gray-700">
                  Durch Freund*innen oder Bekannte
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q29-kollegen"
                  v-model="answers.q29"
                  type="checkbox"
                  value="Durch Kolleg*innen oder im beruflichen Umfeld"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q29-kollegen" class="ml-3 text-gray-700">
                  Durch Kolleg*innen oder im beruflichen Umfeld
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q29-socialmedia"
                  v-model="answers.q29"
                  type="checkbox"
                  value="Über Social Media"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q29-socialmedia" class="ml-3 text-gray-700">
                  Über Social Media
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q29-werbung"
                  v-model="answers.q29"
                  type="checkbox"
                  value="Über Werbung / Erwähnung in anderen Podcasts"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q29-werbung" class="ml-3 text-gray-700">
                  Über Werbung / Erwähnung in anderen Podcasts
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q29-suchmaschine"
                  v-model="answers.q29"
                  type="checkbox"
                  value="Über eine Suchmaschine"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q29-suchmaschine" class="ml-3 text-gray-700">
                  Über eine Suchmaschine
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q29-newsletter"
                  v-model="answers.q29"
                  type="checkbox"
                  value="Durch einen Newsletter, Blog oder Videoplattform"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q29-newsletter" class="ml-3 text-gray-700">
                  Durch einen Newsletter, Blog oder Videoplattform
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q29-medienbericht"
                  v-model="answers.q29"
                  type="checkbox"
                  value="Durch einen Medienbericht oder Artikel"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q29-medienbericht" class="ml-3 text-gray-700">
                  Durch einen Medienbericht oder Artikel
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q29-kannte"
                  v-model="answers.q29"
                  type="checkbox"
                  value="Ich kannte die Person(en), die den Podcast machen"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q29-kannte" class="ml-3 text-gray-700">
                  Ich kannte die Person(en), die den Podcast machen
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q29-zufaellig"
                  v-model="answers.q29"
                  type="checkbox"
                  value="Zufällig beim Stöbern / Scrollen"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q29-zufaellig" class="ml-3 text-gray-700">
                  Zufällig beim Stöbern / Scrollen
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q29-weissnicht"
                  v-model="answers.q29"
                  type="checkbox"
                  value="Ich weiß es nicht mehr"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="q29-weissnicht" class="ml-3 text-gray-700">
                  Ich weiß es nicht mehr
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 38: Q30 - Niche vs Broad -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4">
              38. Magst du lieber Nischen-Podcasts oder eher solche, die thematisch breit aufgestellt sind?
            </legend>
            <div class="space-y-3">
              <div class="flex items-start">
                <input
                  id="q30-nische"
                  v-model="answers.q30"
                  type="radio"
                  value="Ich mag eher Nischenformate, die sich intensiv mit einem klaren Thema beschäftigen"
                  name="q30"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q30-nische" class="ml-3 text-gray-700">
                  Ich mag eher Nischenformate, die sich intensiv mit einem klaren Thema beschäftigen
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q30-breit"
                  v-model="answers.q30"
                  type="radio"
                  value="Ich finde eher ein breites, abwechslungsreiches Themenfeld spannender"
                  name="q30"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q30-breit" class="ml-3 text-gray-700">
                  Ich finde eher ein breites, abwechslungsreiches Themenfeld spannender
                </label>
              </div>
              <div class="flex items-start">
                <input
                  id="q30-beides"
                  v-model="answers.q30"
                  type="radio"
                  value="Beides"
                  name="q30"
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                />
                <label for="q30-beides" class="ml-3 text-gray-700">
                  Beides
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <!-- Question 39: Q31 - Final Feedback -->
        <section class="bg-white shadow-sm rounded-lg p-6">
          <div>
            <label for="q31" class="block text-xl font-semibold text-gray-900 mb-4">
              39. Gibt es noch etwas, das du uns sagen möchtest? Hast du Feedback zu Podcasts, die du besonders magst (oder nicht)? Möchtest du Lob, Kritik oder Themenwünsche loswerden?
            </label>
            <textarea
              id="q31"
              v-model="answers.q31"
              rows="6"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Deine Antwort..."
            ></textarea>
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
            
            <button
              type="submit"
              :disabled="isSubmitting"
              class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isSubmitting ? 'Wird gesendet...' : 'Umfrage absenden' }}
            </button>
          </div>

          <!-- Error Message -->
          <div v-if="submitError" class="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p class="text-sm text-red-800">
              <strong>Fehler:</strong> {{ submitError }}
            </p>
            <button
              type="button"
              @click="submitError = ''"
              class="mt-2 text-sm text-red-600 hover:text-red-700 underline"
            >
              Erneut versuchen
            </button>
          </div>
        </div>
      </form>

      <!-- Footer -->
      <footer class="mt-12 text-center text-sm text-gray-500">
        <p>
          © 2026 Tech-Podcast Umfrage | 
          <NuxtLink to="/privacy" class="hover:text-gray-700 underline ml-1">
            Datenschutz
          </NuxtLink>
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
  q_age: '',                 // Altersgruppe (radio)
  q_gender: '',              // Geschlecht (radio)
  q_experience: '',          // Berufserfahrung (radio)
  q_education: '',           // Bildungsabschluss (radio)
  q_it: '',                  // IT-Tätigkeit (radio)
  q_it_area: '',             // IT-Tätigkeitsbereich (radio) - conditional
  q_it_role: '',             // Rolle (radio) - conditional
  q_company_size: '',        // Unternehmensgröße (radio)
  q_weekly_listening: '',    // Wöchentliche Hördauer (radio)
  q01: [],        // Podcast list (checkboxes)
  q04: '',        // Episode listening pattern (radio)
  q04a: [],       // Selection criteria (checkboxes) - conditional
  q02: [],        // Formats (checkboxes)
  q05: '',        // Private vs professional (radio)
  q06: '',        // Informative vs casual (radio)
  q07: '',        // Topics you know (radio)
  q08: '',        // Advertising stance (radio)
  q09: '',        // Financial support (radio)
  q08a: '',       // Used ads (radio) - conditional
  q10: '',        // Episode length (radio)
  q11: [],        // Listening context (checkboxes)
  q11_freitext: '',
  q12: '',        // Career benefit (radio)
  q12a: '',       // Career benefit details (textarea) - conditional
  q13: [],        // Topics of interest (checkboxes)
  q13_freitext: '',
  q15: '',        // Show notes usage (radio)
  q16: [],        // Reasons for stopping episodes (checkboxes)
  q17: '',        // Unsubscribe reasons (textarea)
  q18: [],        // Good podcast criteria (checkboxes)
  q19: '',        // Rating frequency (radio)
  q19a: [],       // Rating reasons (checkboxes) - conditional
  q20: '',        // Release rhythm (radio)
  q21: '',        // Guests preference (radio)
  q22: '',        // Audio vs video (radio)
  q23: '',        // Intro usefulness (radio)
  q24: '',        // Outro/summary importance (radio)
  q25: '',        // Community engagement (radio)
  q26: '',        // Diversity importance (radio)
  q27: '',        // Podcast evolution (radio)
  q28: '',        // Topic co-determination (radio)
  q28a: [],       // Feedback channels (checkboxes) - conditional
  q29: [],        // Discovery channels (checkboxes)
  q30: '',        // Niche vs broad (radio)
  q31: '',        // Final feedback (textarea)
  // More questions will be added...
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
    
    await $fetch(apiEndpoint, {
      method: 'POST',
      body: answers.value,
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
