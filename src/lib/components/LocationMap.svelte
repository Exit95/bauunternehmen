<script lang="ts">
  import { onMount } from 'svelte';
  
  let mapContainer: HTMLElement;
  let prefersReducedMotion = false;
  
  onMount(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion = mediaQuery.matches;
  });
</script>

<section class="section" data-testid="cmp_locations">
  <div class="container">
    <header class="section-header text-center mb-8">
      <h2 class="display text-3xl mb-4">Region & Anfahrt</h2>
      <p class="section-subtitle">
        Unser Einsatzgebiet umfasst einen Radius von 50 km. Kurze Wege für schnelle Hilfe.
      </p>
    </header>
    
    <div class="location-content">
      <div class="location-info">
        <h3 class="info-title">Unser Standort</h3>
        <address class="location-address">
          <p><strong>Bauunternehmen Roger</strong></p>
          <p>Musterstraße 123</p>
          <p>12345 Musterstadt</p>
          <p>
            <a href="tel:+49123456789">Telefon: +49 123 456 789</a>
          </p>
          <p>
            <a href="mailto:info@bauunternehmen-roger.de">
              E-Mail: info@bauunternehmen-roger.de
            </a>
          </p>
        </address>
        
        <div class="service-area">
          <h4 class="area-title">Unser Einsatzgebiet</h4>
          <ul class="area-list">
            <li>Musterstadt und Umgebung</li>
            <li>Beispielort (15 km)</li>
            <li>Musterdorf (25 km)</li>
            <li>Teststadt (35 km)</li>
            <li>Demohausen (45 km)</li>
          </ul>
          <p class="area-note">
            Auch außerhalb dieser Orte? Sprechen Sie uns an – 
            für größere Projekte fahren wir auch weitere Strecken.
          </p>
        </div>
      </div>
      
      <div class="map-container" bind:this={mapContainer}>
        {#if prefersReducedMotion}
          <div class="static-map">
            <img 
              src="https://images.pexels.com/photos/2538107/pexels-photo-2538107.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Karte der Region um Musterstadt mit Einsatzgebiet von Bauunternehmen Roger"
              loading="lazy"
              width="600"
              height="400"
            />
            <div class="map-overlay">
              <p>Interaktive Karte deaktiviert (Reduced Motion)</p>
              <a href="https://maps.google.com/maps?q=Musterstadt" target="_blank" rel="noopener">
                In Google Maps öffnen
              </a>
            </div>
          </div>
        {:else}
          <div class="interactive-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4!2d13.4!3d52.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDMwJzAwLjAiTiAxM8KwMjQnMDAuMCJF!5e0!3m2!1sde!2sde!4v1"
              width="100%"
              height="400"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Standort Bauunternehmen Roger in Musterstadt"
            ></iframe>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>

<style>
  .section-header {
    margin-bottom: var(--space-48);
  }
  
  .section-subtitle {
    font-size: var(--text-lg);
    color: oklch(0.40 0.03 250);
    max-width: 600px;
    margin: 0 auto;
  }
  
  .location-content {
    display: grid;
    gap: var(--space-48);
  }
  
  @media (min-width: 1024px) {
    .location-content {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  .location-info {
    padding: var(--space-32);
    background: white;
    border-radius: var(--radius);
    box-shadow: var(--shadow-soft);
  }
  
  .info-title {
    font-family: var(--font-display);
    font-size: var(--text-2xl);
    font-weight: 600;
    margin-bottom: var(--space-24);
    color: var(--color-fg);
  }
  
  .location-address {
    font-style: normal;
    margin-bottom: var(--space-32);
    padding-bottom: var(--space-24);
    border-bottom: 1px solid var(--color-border);
  }
  
  .location-address p {
    margin-bottom: var(--space-8);
  }
  
  .location-address strong {
    color: var(--color-primary);
  }
  
  .location-address a {
    color: var(--color-fg);
    text-decoration: none;
  }
  
  .location-address a:hover {
    color: var(--color-primary);
  }
  
  .area-title {
    font-family: var(--font-display);
    font-size: var(--text-lg);
    font-weight: 600;
    margin-bottom: var(--space-16);
    color: var(--color-fg);
  }
  
  .area-list {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: var(--space-16);
  }
  
  .area-list li {
    padding: var(--space-8) 0;
    position: relative;
    padding-left: var(--space-20);
  }
  
  .area-list li::before {
    content: '📍';
    position: absolute;
    left: 0;
  }
  
  .area-note {
    font-size: var(--text-sm);
    color: oklch(0.50 0.03 250);
    font-style: italic;
  }
  
  .map-container {
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow-soft);
    background: var(--color-muted);
  }
  
  .static-map {
    position: relative;
  }
  
  .static-map img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  
  .map-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: oklch(0 0 0 / 0.7);
    color: white;
    text-align: center;
    gap: var(--space-16);
  }
  
  .map-overlay a {
    color: white;
    background: var(--color-primary);
    padding: var(--space-8) var(--space-16);
    border-radius: var(--radius);
    text-decoration: none;
    font-weight: 600;
  }
  
  .interactive-map iframe {
    display: block;
    width: 100%;
  }
</style>