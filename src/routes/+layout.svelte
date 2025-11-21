<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';
  import { onNavigate } from '$app/navigation';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;
    
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  $: currentPath = $page.url.pathname;
</script>

<svelte:head>
  <meta name="robots" content="index,follow" />
  <link rel="canonical" href="https://www.bauunternehmen-roger.de{currentPath}" />
</svelte:head>

<a href="#main" class="skip-link">Zum Hauptinhalt springen</a>

<div class="app">
  <Header {currentPath} />
  <main id="main">
    <slot />
  </main>
  <Footer />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }
</style>