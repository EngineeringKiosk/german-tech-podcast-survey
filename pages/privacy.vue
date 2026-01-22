<template>
  <div class="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <!-- Header -->
      <header class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">
          Datenschutzerklärung
        </h1>
      </header>

      <!-- Content -->
      <div class="bg-white shadow-sm rounded-lg p-6 sm:p-8 space-y-6 text-gray-700">
        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3">
            Vollständig anonyme Umfrage
          </h2>
          <p class="mb-3">
            Diese Umfrage ist vollständig anonym. Wir erfassen keinerlei personenbezogene Daten, 
            die Rückschlüsse auf Ihre Identität zulassen würden.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3">
            Keine Cookies oder Tracking
          </h2>
          <p class="mb-3">
            Wir verwenden keine Cookies, keine Tracking-Technologien und keine Analytics-Tools. 
            Ihre Antworten werden direkt an unseren Server übermittelt, ohne dass dabei 
            identifizierende Informationen gespeichert werden.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3">
            Keine Datenspeicherung im Browser
          </h2>
          <p class="mb-3">
            Ihre Antworten werden nicht im Browser gespeichert (kein LocalStorage oder SessionStorage). 
            Wenn Sie die Seite neu laden, gehen Ihre Eingaben verloren. Ihre Daten werden nur bei 
            erfolgreicher Übermittlung an unseren Server gesendet.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3">
            Datenverwendung
          </h2>
          <p class="mb-3">
            Die gesammelten Antworten dienen ausschließlich der Erforschung von Hörgewohnheiten 
            und Präferenzen im Bereich deutschsprachiger Tech-Podcasts. Die Ergebnisse werden 
            in aggregierter Form ausgewertet und können zur Verbesserung von Podcast-Inhalten 
            verwendet werden.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3">
            Freiwillige Teilnahme
          </h2>
          <p class="mb-3">
            Die Teilnahme an dieser Umfrage ist vollständig freiwillig. Alle Fragen sind optional – 
            Sie können die Umfrage jederzeit absenden, auch wenn Sie nicht alle Fragen beantwortet haben. 
            Es besteht keine Verpflichtung zur Teilnahme oder zur Beantwortung einzelner Fragen.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3">
            Kontakt
          </h2>
          <p>
            Bei Fragen zum Datenschutz oder zur Umfrage können Sie uns gerne kontaktieren.
          </p>
        </section>
      </div>

      <!-- Back Link -->
      <div class="mt-8 text-center">
        <NuxtLink 
          to="/" 
          class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
        >
          ← Zurück zur Umfrage
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Datenschutzerklärung - Tech-Podcast Umfrage'
})
</script>
