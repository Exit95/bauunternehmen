<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import AboutIntro from '$lib/components/AboutIntro.svelte';
  import ServiceCards from '$lib/components/ServiceCards.svelte';
  import FeatureList from '$lib/components/FeatureList.svelte';
  import ProjectGallery from '$lib/components/ProjectGallery.svelte';
  import TestimonialSlider from '$lib/components/TestimonialSlider.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
  import ReferralTeaser from '$lib/components/ReferralTeaser.svelte';
</script>

<svelte:head>
  <title>Bauunternehmen Roger | Meisterbetrieb für Hochbau & Sanierung</title>
  <meta name="description" content="Hochbau, Anbau, Sanierung – ein Partner für alles. Festpreise, klare Zeitpläne, saubere Ausführung. Jetzt Projekt anfragen." />
  <meta property="og:title" content="Bauunternehmen Roger" />
  <meta property="og:description" content="Neubau & Sanierung aus einer Hand." />
  <meta property="og:image" content="https://www.bauunternehmen-roger.de/og.jpg" />
  <meta property="og:url" content="https://www.bauunternehmen-roger.de/" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Bauunternehmen Roger" />
  <meta name="twitter:description" content="Regional. Präzise. Terminsicher." />
  <meta name="twitter:image" content="https://www.bauunternehmen-roger.de/og.jpg" />
  
  {@html `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ConstructionCompany",
      "@id": "https://www.bauunternehmen-roger.de/#company",
      "name": "Bauunternehmen Roger",
      "url": "https://www.bauunternehmen-roger.de/",
      "areaServed": "regional",
      "image": "https://www.bauunternehmen-roger.de/og.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "",
        "addressRegion": "",
        "postalCode": "",
        "streetAddress": ""
      },
      "telephone": "",
      "sameAs": []
    }
  </script>`}
  
  {@html `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Start",
          "item": "https://www.bauunternehmen-roger.de/"
        }
      ]
    }
  </script>`}
</svelte:head>

<Hero />
<AboutIntro />
<ServiceCards />
<FeatureList />
<ProjectGallery />
<TestimonialSlider />
<ReferralTeaser />
<FAQ />
<ContactForm />