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

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3">
            Open Source &amp; Transparenz
          </h2>
          <p class="mb-3">
            Wir glauben an Offenheit und Transparenz – deshalb ist alles rund um diese Umfrage Open Source.
            Der gesamte Quellcode, vom Frontend bis zum Server, ist öffentlich auf GitHub einsehbar und kann
            von jedem eingesehen, geprüft und weiterentwickelt werden.
          </p>
          <p class="mb-3">
            Die erhobenen Antworten werden nach Abschluss der Umfrage in aggregierter und anonymisierter Form
            veröffentlicht, damit die gesamte Community von den Ergebnissen profitieren kann.
          </p>
          <p>
            <a href="https://github.com/EngineeringKiosk/german-tech-podcast-survey" target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-primary-600 hover:text-primary-700 font-medium transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"
                aria-hidden="true">
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              Zum GitHub-Repository
            </a>
          </p>
        </section>
      </div>

      <!-- Back Link -->
      <div class="mt-8 text-center">
        <NuxtLink to="/" class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
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
