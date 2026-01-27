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
            die Rückschlüsse auf deine Identität zulassen würden.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3">
            Keine Cookies oder Tracking
          </h2>
          <p class="mb-3">
            Wir verwenden keine Cookies, keine Tracking-Technologien und keine Analytics-Tools. 
            Deine Antworten werden direkt an unseren Server übermittelt, ohne dass dabei 
            identifizierende Informationen gespeichert werden.
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
            verwendet und in aggregierter Form veröffentlicht werden.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3">
            Freiwillige Teilnahme
          </h2>
          <p class="mb-3">
            Die Teilnahme an dieser Umfrage ist vollständig freiwillig. Alle Fragen sind optional – 
            du kannst die Umfrage jederzeit absenden, auch wenn du nicht alle Fragen beantwortet hast. 
            Es besteht keine Verpflichtung zur Teilnahme oder zur Beantwortung einzelner Fragen.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3">
            Lokale Zwischenspeicherung
          </h2>
          <p class="mb-3">
            Deine Antworten werden beim Ausfüllen lokal in deinem Browser (LocalStorage) zwischengespeichert, 
            damit du sie bei einem Seiten-Reload nicht verlierst. Beim erfolgreichen Absenden werden die 
            lokalen Daten gelöscht.
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
