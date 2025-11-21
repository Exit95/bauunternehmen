<script lang="ts">
  import ServiceCards from '$lib/components/ServiceCards.svelte';
  import FeatureList from '$lib/components/FeatureList.svelte';
</script>

<svelte:head>
  <title>Leistungen | Bauunternehmen Roger</title>
  <meta name="description" content="Neubau, Anbau, Sanierung, Beton- und Mauerarbeiten aus Meisterhand. Alle Bauleistungen aus einer Hand." />
  
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
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Leistungen",
          "item": "https://www.bauunternehmen-roger.de/leistungen"
        }
      ]
    }
  </script>`}
</svelte:head>

<section class="section">
  <div class="container">
    <header class="text-center mb-8">
      <h1 class="display text-4xl mb-4">Leistungen im Überblick</h1>
      <p class="text-xl">Vom ersten Spatenstich bis zur Schlüsselübergabe – alles aus einer Hand.</p>
    </header>
  </div>
</section>

<ServiceCards detailed={true} />
<FeatureList />

<section class="section timeline-section">
  <div class="container">
    <header class="section-header text-center mb-8">
      <h2 class="display text-3xl mb-4">Ablauf & Zeitplan</h2>
      <p class="section-subtitle">
        Von der ersten Idee bis zur Schlüsselübergabe – so läuft Ihr Projekt ab.
      </p>
    </header>
    
    <div class="timeline-container">
      <div class="timeline-track"></div>
      
      <div class="timeline-steps">
        <article class="timeline-step">
          <div class="step-marker">
            <span class="step-number">01</span>
          </div>
          <div class="step-content">
            <h3 class="step-title display text-xl">Ortstermin</h3>
            <p class="step-description">
              Kostenlose Beratung und Aufmaß vor Ort. Wir besprechen Ihre Wünsche 
              und prüfen die baulichen Gegebenheiten.
            </p>
            <div class="step-duration">
              <strong>Dauer:</strong> 1-2 Stunden
            </div>
          </div>
        </article>
        
        <article class="timeline-step">
          <div class="step-marker">
            <span class="step-number">02</span>
          </div>
          <div class="step-content">
            <h3 class="step-title display text-xl">Angebot</h3>
            <p class="step-description">
              Binnen 48 Stunden erhalten Sie ein detailliertes Festpreisangebot 
              mit Leistungsbeschreibung und Zeitplan.
            </p>
            <div class="step-duration">
              <strong>Dauer:</strong> 24-48 Stunden
            </div>
          </div>
        </article>
        
        <article class="timeline-step">
          <div class="step-marker">
            <span class="step-number">03</span>
          </div>
          <div class="step-content">
            <h3 class="step-title display text-xl">Bauphase</h3>
            <p class="step-description">
              Termingerechte Ausführung mit eigener Bauleitung. Regelmäßige 
              Abstimmung und saubere Baustelle.
            </p>
            <div class="step-duration">
              <strong>Dauer:</strong> Je nach Projekt
            </div>
          </div>
        </article>
      </div>
    </div>
    
    <div class="timeline-cta text-center">
      <p class="cta-text">Bereit für Ihr Projekt?</p>
      <a 
        href="/kontakt?utm_source=leistungen&utm_medium=cta&utm_campaign=timeline_cta" 
        class="btn btn-primary"
      >
        Kostenlosen Ortstermin vereinbaren
      </a>
    </div>
  </div>
</section>

<style>
  .timeline-section {
    background: var(--color-muted);
    position: relative;
    overflow: hidden;
  }
  
  .timeline-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, var(--color-primary) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, var(--color-accent) 0%, transparent 50%);
    opacity: 0.02;
    z-index: 0;
  }
  
  .section-header {
    margin-bottom: var(--space-48);
    position: relative;
    z-index: 1;
  }
  
  .section-subtitle {
    font-size: var(--text-lg);
    color: oklch(0.40 0.03 250);
    max-width: 600px;
    margin: 0 auto;
  }
  
  .timeline-container {
    position: relative;
    max-width: 800px;
    margin: 0 auto var(--space-48);
    z-index: 1;
  }
  
  .timeline-track {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      var(--color-primary) 10%,
      var(--color-primary) 90%,
      transparent 100%
    );
    transform: translateX(-50%);
  }
  
  .timeline-steps {
    display: flex;
    flex-direction: column;
    gap: var(--space-48);
  }
  
  .timeline-step {
    display: flex;
    align-items: flex-start;
    gap: var(--space-32);
    position: relative;
  }
  
  .timeline-step:nth-child(even) {
    flex-direction: row-reverse;
  }
  
  .step-marker {
    flex-shrink: 0;
    width: 80px;
    height: 80px;
    background: white;
    border: 4px solid var(--color-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-soft);
    position: relative;
    z-index: 2;
  }
  
  .step-number {
    font-family: var(--font-display);
    font-size: var(--text-xl);
    font-weight: 800;
    color: var(--color-primary);
  }
  
  .step-content {
    flex: 1;
    background: white;
    padding: var(--space-32);
    border-radius: var(--radius);
    box-shadow: var(--shadow-soft);
    max-width: 350px;
    position: relative;
  }
  
  .step-content::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    transform: translateY(-50%);
  }
  
  .timeline-step:nth-child(odd) .step-content::before {
    left: -24px;
    border-right-color: white;
  }
  
  .timeline-step:nth-child(even) .step-content::before {
    right: -24px;
    border-left-color: white;
  }
  
  .step-title {
    margin-bottom: var(--space-16);
    color: var(--color-fg);
  }
  
  .step-description {
    color: oklch(0.40 0.03 250);
    line-height: 1.6;
    margin-bottom: var(--space-16);
  }
  
  .step-duration {
    font-size: var(--text-sm);
    color: var(--color-primary);
    font-weight: 600;
    padding: var(--space-8) var(--space-16);
    background: var(--color-muted);
    border-radius: var(--space-16);
    display: inline-block;
  }
  
  .timeline-cta {
    background: white;
    padding: var(--space-48);
    border-radius: var(--radius);
    box-shadow: var(--shadow-soft);
    position: relative;
    z-index: 1;
  }
  
  .cta-text {
    font-size: var(--text-lg);
    font-weight: 600;
    margin-bottom: var(--space-24);
    color: var(--color-fg);
  }
  
  @media (max-width: 768px) {
    .timeline-track {
      left: 40px;
    }
    
    .timeline-step {
      flex-direction: row !important;
      gap: var(--space-24);
    }
    
    .timeline-step:nth-child(even) {
      flex-direction: row !important;
    }
    
    .step-marker {
      width: 60px;
      height: 60px;
    }
    
    .step-number {
      font-size: var(--text-lg);
    }
    
    .step-content {
      max-width: none;
    }
    
    .step-content::before {
      left: -24px !important;
      right: auto !important;
      border-right-color: white !important;
      border-left-color: transparent !important;
    }
  }
  
  .process-benefits {
    padding: var(--space-48) 0;
  }
  
  .benefits-grid {
    display: grid;
    gap: var(--space-24);
  }
  
  @media (min-width: 768px) {
    .benefits-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 1024px) {
    .benefits-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  
  .benefit-item {
    text-align: center;
    padding: var(--space-24);
    background: white;
    border-radius: var(--radius);
    box-shadow: var(--shadow-soft);
    transition: all var(--duration-enter) var(--ease);
  }
  
  .benefit-item:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-glass);
  }
  
  .benefit-title {
    font-family: var(--font-display);
    font-size: var(--text-lg);
    font-weight: 600;
    margin-bottom: var(--space-12);
    color: var(--color-primary);
  }
  
  .benefit-description {
    color: oklch(0.40 0.03 250);
    font-size: var(--text-sm);
    line-height: 1.5;
  }
</style>