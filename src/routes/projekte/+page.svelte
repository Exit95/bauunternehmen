<script lang="ts">
  import ProjectGallery from '$lib/components/ProjectGallery.svelte';
  import TestimonialSlider from '$lib/components/TestimonialSlider.svelte';
  import CaseTeasers from '$lib/components/CaseTeasers.svelte';
</script>

<svelte:head>
  <title>Projekte & Referenzen | Bauunternehmen Roger</title>
  <meta name="description" content="Referenzen und abgeschlossene Bauprojekte von Bauunternehmen Roger. Vorher-Nachher Bilder unserer Arbeiten." />
</svelte:head>

<section class="section">
  <div class="container">
    <header class="text-center mb-8">
      <h1 class="display text-4xl mb-4">Projekte & Referenzen</h1>
      <p class="text-xl">Überzeugen Sie sich von der Qualität unserer Arbeit.</p>
    </header>
  </div>
</section>

<ProjectGallery detailed={true} />
<CaseTeasers />
<TestimonialSlider />