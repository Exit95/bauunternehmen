<section class="section" data-testid="cmp_about">
  <div class="container">
    <div class="about-content">
      <div class="about-text">
        <h2 class="display text-3xl mb-6">Ein Team. Klare Abläufe.</h2>
        <p class="about-description">
          Meisterbetrieb mit regionalem Netzwerk für schnelle Entscheidungen 
          und saubere Übergaben. Seit über 20 Jahren realisieren wir Bauprojekte 
          mit Festpreis-Garantie und verlässlichen Terminen.
        </p>
        
        <ul class="about-benefits" role="list">
          <li>Meisterqualität in allen Gewerken</li>
          <li>Regionales Netzwerk verlässlicher Partner</li>
          <li>Direkte Kommunikation ohne Umwege</li>
          <li>Transparente Kostenplanung</li>
        </ul>
        
        <div class="about-actions">
          <a 
            href="/projekte?utm_source=about&utm_medium=cta&utm_campaign=about_projekte" 
            class="btn btn-primary"
          >
            Projekte ansehen
          </a>
        </div>
      </div>
      
      <div class="about-visual">
        <div class="about-stats">
          <div class="stat-item">
            <div class="stat-number">20+</div>
            <div class="stat-label">Jahre Erfahrung</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">200+</div>
            <div class="stat-label">Projekte</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">100%</div>
            <div class="stat-label">Termintreue</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">25%</div>
            <div class="stat-label">Empfehlungsbonus</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .section {
    padding: var(--space-48) 0;
  }
  
  .about-content {
    display: grid;
    gap: var(--space-48);
    align-items: center;
  }
  
  @media (min-width: 1024px) {
    .about-content {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  .about-description {
    font-size: var(--text-lg);
    margin-bottom: var(--space-24);
    color: oklch(0.40 0.03 250);
  }
  
  .about-benefits {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: var(--space-32);
  }
  
  .about-benefits li {
    padding: var(--space-12) 0;
    border-bottom: 1px solid var(--color-border);
    position: relative;
    padding-left: var(--space-24);
  }
  
  .about-benefits li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--color-primary);
    font-weight: bold;
  }
  
  .about-benefits li:last-child {
    border-bottom: none;
  }
  
  .about-stats {
    display: grid;
    gap: var(--space-24);
    grid-template-columns: repeat(2, 1fr);
  }
  
  .stat-item {
    text-align: center;
    padding: var(--space-24);
    background: white;
    border-radius: var(--radius);
    box-shadow: var(--shadow-soft);
  }
  
  .stat-number {
    font-family: var(--font-display);
    font-size: var(--text-3xl);
    font-weight: 800;
    color: var(--color-primary);
    margin-bottom: var(--space-8);
  }
  
  .stat-label {
    font-size: var(--text-sm);
    font-weight: 600;
    color: oklch(0.50 0.03 250);
  }
</style>