<section class="section" data-testid="cmp_team">
  <div class="container">
    <header class="section-header text-center mb-8">
      <h2 class="display text-3xl mb-4">Team</h2>
      <p class="section-subtitle">
        Lernen Sie die Menschen hinter Bauunternehmen Roger kennen.
      </p>
    </header>
    
    <div class="team-grid">
      <article class="team-member">
        <div class="member-image">
          <img 
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
            alt="Roger Müller - Geschäftsführer und Maurermeister"
            loading="lazy"
            width="300"
            height="300"
          />
        </div>
        <div class="member-content">
          <h3 class="member-name">Roger Müller</h3>
          <p class="member-role">Geschäftsführer & Maurermeister</p>
          <p class="member-description">
            Gründer des Unternehmens mit über 25 Jahren Erfahrung im Bauwesen. 
            Spezialist für Hochbau und Sanierung.
          </p>
        </div>
      </article>
      
      <article class="team-member">
        <div class="member-image">
          <img 
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400" 
            alt="Stefan Weber - Bauleiter und Polier"
            loading="lazy"
            width="300"
            height="300"
          />
        </div>
        <div class="member-content">
          <h3 class="member-name">Stefan Weber</h3>
          <p class="member-role">Bauleiter & Polier</p>
          <p class="member-description">
            Verantwortlich für die Koordination aller Gewerke und 
            die termingerechte Ausführung der Bauprojekte.
          </p>
        </div>
      </article>
      
      <article class="team-member">
        <div class="member-image">
          <img 
            src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400" 
            alt="Maria Schmidt - Büroleiterin und Kundenbetreuung"
            loading="lazy"
            width="300"
            height="300"
          />
        </div>
        <div class="member-content">
          <h3 class="member-name">Maria Schmidt</h3>
          <p class="member-role">Büroleiterin & Kundenbetreuung</p>
          <p class="member-description">
            Erste Ansprechpartnerin für alle Kundenanfragen und 
            verantwortlich für die Projektplanung und -abwicklung.
          </p>
        </div>
      </article>
      
      <article class="team-member">
        <div class="member-image">
          <img 
            src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400" 
            alt="Thomas Klein - Elektriker und Installateur"
            loading="lazy"
            width="300"
            height="300"
          />
        </div>
        <div class="member-content">
          <h3 class="member-name">Thomas Klein</h3>
          <p class="member-role">Elektriker & Installateur</p>
          <p class="member-description">
            Experte für alle elektrotechnischen Installationen und 
            moderne Gebäudetechnik. Smart-Home Spezialist.
          </p>
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
  
  .team-grid {
    display: grid;
    gap: var(--space-32);
  }
  
  @media (min-width: 768px) {
    .team-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 1024px) {
    .team-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  
  .team-member {
    background: white;
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow-soft);
    text-align: center;
    transition: all var(--duration-enter) var(--ease);
  }
  
  .team-member:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-glass);
  }
  
  .member-image {
    overflow: hidden;
  }
  
  .member-image img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform var(--duration-enter) var(--ease);
  }
  
  .team-member:hover .member-image img {
    transform: scale(1.05);
  }
  
  .member-content {
    padding: var(--space-24);
  }
  
  .member-name {
    font-family: var(--font-display);
    font-size: var(--text-xl);
    font-weight: 600;
    margin-bottom: var(--space-8);
    color: var(--color-fg);
  }
  
  .member-role {
    color: var(--color-primary);
    font-weight: 600;
    margin-bottom: var(--space-12);
    font-size: var(--text-sm);
  }
  
  .member-description {
    color: oklch(0.40 0.03 250);
    font-size: var(--text-sm);
    line-height: 1.5;
  }
</style>