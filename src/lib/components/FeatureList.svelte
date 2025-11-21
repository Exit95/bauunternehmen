<section class="section bg-muted" data-testid="cmp_features">
  <div class="container">
    <header class="section-header text-center mb-8">
      <h2 class="display text-3xl mb-4">Warum mit Roger?</h2>
      <p class="section-subtitle">
        Vier gute Gründe für eine Zusammenarbeit mit unserem Meisterbetrieb.
      </p>
    </header>
    
    <ul class="features-list" role="list">
      <li class="feature-item">
        <div class="feature-content">
          <h3 class="feature-title">Festpreis nach Ortstermin</h3>
          <p class="feature-description">
            Nach kostenloser Besichtigung erhalten Sie ein verbindliches Festpreisangebot 
            mit detaillierter Leistungsbeschreibung – ohne versteckte Kosten.
          </p>
        </div>
      </li>
      
      <li class="feature-item">
        <div class="feature-content">
          <h3 class="feature-title">Verlässliche Zeitpläne</h3>
          <p class="feature-description">
            Klare Terminplanung von Baubeginn bis Fertigstellung. 
            Sie wissen immer, wann welcher Arbeitsschritt ansteht.
          </p>
        </div>
      </li>
      
      <li class="feature-item">
        <div class="feature-content">
          <h3 class="feature-title">Saubere Baustellen</h3>
          <p class="feature-description">
            Ordentliche Arbeitsweise und tägliche Reinigung der Baustelle. 
            Respektvoller Umgang mit Ihrem Eigentum.
          </p>
        </div>
      </li>
      
      <li class="feature-item">
        <div class="feature-content">
          <h3 class="feature-title">Eigene Bauleitung</h3>
          <p class="feature-description">
            Persönliche Betreuung durch erfahrene Bauleiter. 
            Ein fester Ansprechpartner für alle Fragen.
          </p>
        </div>
      </li>
    </ul>
  </div>
</section>

<style>
  .section {
    background: var(--color-muted);
  }
  
  .section-header {
    margin-bottom: var(--space-48);
  }
  
  .section-subtitle {
    font-size: var(--text-lg);
    color: oklch(0.40 0.03 250);
    max-width: 600px;
    margin: 0 auto;
  }
  
  .features-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: var(--space-24);
  }
  
  @media (min-width: 768px) {
    .features-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  .feature-item {
    background: white;
    padding: var(--space-32);
    border-radius: var(--radius);
    box-shadow: var(--shadow-soft);
    position: relative;
  }
  
  .feature-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--color-primary);
    border-radius: var(--radius) 0 0 var(--radius);
  }
  
  .feature-title {
    font-family: var(--font-display);
    font-size: var(--text-xl);
    font-weight: 600;
    margin-bottom: var(--space-16);
    color: var(--color-fg);
  }
  
  .feature-description {
    color: oklch(0.40 0.03 250);
    line-height: 1.6;
  }
</style>