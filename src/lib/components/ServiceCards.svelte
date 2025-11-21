<script lang="ts">
  export let detailed: boolean = false;
  
  const services = [
    {
      title: 'Neubau Hochbau',
      description: 'Schlüsselfertige Neubauten nach Ihren Wünschen.',
      details: 'Von der Planung bis zur Schlüsselübergabe realisieren wir Ihr Traumhaus. Moderne Bautechnik, energieeffizient und nachhaltig.'
    },
    {
      title: 'Anbau/Aufstockung',
      description: 'Mehr Platz durch professionelle Erweiterungen.',
      details: 'Schaffen Sie zusätzlichen Wohnraum durch Anbauten oder Aufstockungen. Wir beraten Sie zu allen Möglichkeiten.'
    },
    {
      title: 'Kern- & Badsanierung',
      description: 'Modernisierung von Küche und Bad.',
      details: 'Komplette Sanierung von Bad und Küche mit allen Gewerken. Von der Planung bis zur finalen Montage.'
    },
    {
      title: 'Beton- & Mauerarbeiten',
      description: 'Solide Grundlagen für jedes Bauprojekt.',
      details: 'Fundamente, Keller, Mauern und Betonarbeiten aller Art. Präzise ausgeführt von erfahrenen Maurern.'
    },
    {
      title: 'Außenanlagen',
      description: 'Gestaltung rund ums Haus.',
      details: 'Terrassen, Einfahrten, Zäune und Gartenanlagen. Komplette Außengestaltung aus einer Hand.'
    }
  ];
</script>

<section class="section" data-testid="cmp_services">
  <div class="container">
    <header class="section-header text-center mb-8">
      <h2 class="display text-3xl mb-4">Leistungen</h2>
      <p class="section-subtitle">
        Alle Bauleistungen aus Meisterhand – von der Planung bis zur Übergabe.
      </p>
    </header>
    
    <div class="services-grid" role="list">
      {#each services as service, index}
        <article class="service-card card" role="listitem">
          <div class="service-content">
            <h3 class="service-title display text-xl">{service.title}</h3>
            <p class="service-description">
              {detailed ? service.details : service.description}
            </p>
          </div>
          <div class="service-number">
            {String(index + 1).padStart(2, '0')}
          </div>
        </article>
      {/each}
    </div>
    
    {#if !detailed}
      <div class="services-cta text-center">
        <a 
          href="/leistungen?utm_source=services&utm_medium=cta&utm_campaign=services_detail" 
          class="btn btn-primary"
        >
          Alle Leistungen ansehen
        </a>
      </div>
    {/if}
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
  
  .services-grid {
    display: grid;
    gap: var(--space-24);
    margin-bottom: var(--space-48);
  }
  
  @media (min-width: 768px) {
    .services-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 1024px) {
    .services-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  .service-card {
    padding: var(--space-32);
    position: relative;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 200px;
  }
  
  .service-content {
    flex: 1;
  }
  
  .service-title {
    margin-bottom: var(--space-16);
    color: var(--color-fg);
  }
  
  .service-description {
    color: oklch(0.40 0.03 250);
    line-height: 1.6;
  }
  
  .service-number {
    position: absolute;
    top: var(--space-16);
    right: var(--space-16);
    font-family: var(--font-display);
    font-size: var(--text-2xl);
    font-weight: 800;
    color: var(--color-primary);
    opacity: 0.3;
  }
  
  .services-cta {
    margin-top: var(--space-32);
  }
</style>