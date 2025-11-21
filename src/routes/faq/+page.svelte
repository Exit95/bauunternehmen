<script lang="ts">
  import FAQ from '$lib/components/FAQ.svelte';
</script>

<svelte:head>
  <title>Häufige Fragen (FAQ) | Bauunternehmen Roger</title>
  <meta name="description" content="Antworten auf häufige Fragen zu Kosten, Dauer, Garantie und Ablauf bei Bauunternehmen Roger." />
  
  {@html `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Bieten Sie Festpreise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja – nach Ortstermin erhalten Sie ein Festpreisangebot mit Leistungsbeschreibung und Zeitplan."
          }
        }
      ]
    }
  </script>`}
</svelte:head>

<section class="section">
  <div class="container">
    <header class="text-center mb-8">
      <h1 class="display text-4xl mb-4">Häufige Fragen</h1>
      <p class="text-xl">Alles was Sie über unser Bauunternehmen wissen möchten.</p>
    </header>
  </div>
</section>

<FAQ />