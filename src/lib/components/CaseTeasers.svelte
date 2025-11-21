<section class="section" data-testid="cmp_cases">
  <div class="container">
    <header class="section-header text-center mb-8">
      <h2 class="display text-3xl mb-4">Case Studies</h2>
      <p class="section-subtitle">
        Detaillierte Einblicke in ausgewählte Bauprojekte.
      </p>
    </header>
    
    <div class="cases-grid">
      <article class="case-card">
        <div class="case-image">
          <img 
            src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Einfamilienhaus Neubau - Modernes Design" 
            loading="lazy"
            width="600"
            height="400"
          />
          <div class="case-overlay">
            <span class="case-duration">8 Monate</span>
          </div>
        </div>
        <div class="case-content">
          <h3 class="case-title">
            <a href="#case1">Einfamilienhaus Neubau</a>
          </h3>
          <p class="case-description">
            Energieeffizientes Einfamilienhaus mit 140 qm Wohnfläche. 
            KfW-55 Standard erreicht, Fertigstellung 2 Wochen vor Termin.
          </p>
          <div class="case-details">
            <span class="case-detail">Wohnfläche: 140 qm</span>
            <span class="case-detail">Budget: Im Plan</span>
            <span class="case-detail">KfW-55 Standard</span>
          </div>
        </div>
      </article>
      
      <article class="case-card">
        <div class="case-image">
          <img 
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Komplettsanierung Altbau - Vorher Nachher" 
            loading="lazy"
            width="600"
            height="400"
          />
          <div class="case-overlay">
            <span class="case-duration">12 Wochen</span>
          </div>
        </div>
        <div class="case-content">
          <h3 class="case-title">
            <a href="#case2">Altbau Komplettsanierung</a>
          </h3>
          <p class="case-description">
            Denkmalgeschütztes Gebäude aus 1920 komplett modernisiert. 
            Erhalt der historischen Substanz bei moderner Ausstattung.
          </p>
          <div class="case-details">
            <span class="case-detail">Baujahr: 1920</span>
            <span class="case-detail">Denkmalschutz</span>
            <span class="case-detail">Kernsanierung</span>
          </div>
        </div>
      </article>
      
      <article class="case-card">
        <div class="case-image">
          <img 
            src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Anbau mit Terrasse - Wohnraumerweiterung" 
            loading="lazy"
            width="600"
            height="400"
          />
          <div class="case-overlay">
            <span class="case-duration">6 Wochen</span>
          </div>
        </div>
        <div class="case-content">
          <h3 class="case-title">
            <a href="#case3">Anbau mit Terrasse</a>
          </h3>
          <p class="case-description">
            Wohnraumerweiterung um 35 qm mit anschließender Terrassengestaltung. 
            Nahtlose Integration in die bestehende Architektur.
          </p>
          <div class="case-details">
            <span class="case-detail">+35 qm Wohnfläche</span>
            <span class="case-detail">Terrasse 25 qm</span>
            <span class="case-detail">Festpreis</span>
          </div>
        </div>
      </article>
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
  
  .cases-grid {
    display: grid;
    gap: var(--space-32);
  }
  
  @media (min-width: 768px) {
    .cases-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 1024px) {
    .cases-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  .case-card {
    background: white;
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow-soft);
    transition: all var(--duration-enter) var(--ease);
  }
  
  .case-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-glass);
  }
  
  .case-image {
    position: relative;
    overflow: hidden;
    aspect-ratio: 3 / 2;
  }
  
  .case-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--duration-enter) var(--ease);
  }
  
  .case-card:hover .case-image img {
    transform: scale(1.05);
  }
  
  .case-overlay {
    position: absolute;
    top: var(--space-16);
    right: var(--space-16);
  }
  
  .case-duration {
    background: var(--color-accent);
    color: white;
    padding: var(--space-4) var(--space-12);
    border-radius: var(--space-16);
    font-size: var(--text-sm);
    font-weight: 600;
  }
  
  .case-content {
    padding: var(--space-24);
  }
  
  .case-title {
    font-family: var(--font-display);
    font-size: var(--text-xl);
    font-weight: 600;
    margin-bottom: var(--space-12);
  }
  
  .case-title a {
    color: var(--color-fg);
    text-decoration: none;
    transition: color var(--duration-enter) var(--ease);
  }
  
  .case-title a:hover {
    color: var(--color-primary);
  }
  
  .case-description {
    color: oklch(0.40 0.03 250);
    margin-bottom: var(--space-16);
    line-height: 1.5;
  }
  
  .case-details {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-8);
  }
  
  .case-detail {
    background: var(--color-muted);
    padding: var(--space-4) var(--space-8);
    border-radius: var(--space-12);
    font-size: var(--text-xs);
    color: oklch(0.50 0.03 250);
    font-weight: 600;
  }
</style>