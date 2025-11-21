<script lang="ts">
  import ContactForm from '$lib/components/ContactForm.svelte';
  import LocationMap from '$lib/components/LocationMap.svelte';
</script>

<svelte:head>
  <title>Kontakt | Bauunternehmen Roger</title>
  <meta name="description" content="Kontaktieren Sie Bauunternehmen Roger für Ihr Bauprojekt. Telefon, E-Mail und Kontaktformular." />
</svelte:head>

<section class="section">
  <div class="container">
    <header class="text-center mb-8">
      <h1 class="display text-4xl mb-4">Projekt anfragen</h1>
      <p class="text-xl">Lassen Sie uns über Ihr Bauprojekt sprechen.</p>
    </header>
  </div>
</section>

<ContactForm />
<LocationMap />