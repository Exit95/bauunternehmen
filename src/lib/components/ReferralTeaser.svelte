<section class="section referral-section" data-testid="cmp_referral">
  <div class="container">
    <div class="referral-content">
      <div class="referral-text">
        <h2 class="referral-title display text-3xl">
          Empfehlen lohnt sich: 25 % vom Gewinn.
        </h2>
        <p class="referral-description">
          Sie kennen jemanden, der bauen oder sanieren möchte? Empfehlen Sie uns weiter! 
          Bei erfolgreicher Vermittlung erhalten Sie 25% unseres Gesamtgewinns aus dem Projekt.
        </p>
        
        <div class="referral-process">
          <h3 class="process-title">So funktioniert es:</h3>
          <ol class="process-steps">
            <li>Kontakt vermitteln</li>
            <li>Projekt wird beauftragt</li>
            <li>Auszahlung nach Zahlungseingang</li>
          </ol>
        </div>
        
        <div class="referral-actions">
          <a 
            href="/kontakt?utm_source=referral&utm_medium=cta&utm_campaign=referral_invite&utm_content=25_percent" 
            class="btn btn-primary"
          >
            Freund einladen
          </a>
          <p class="referral-legal">
            Auszahlung nach Zahlungseingang des vermittelten Kunden. 
            Keine Bagatellgrenze, keine versteckten Bedingungen.
          </p>
        </div>
      </div>
      
      <div class="referral-visual">
        <div class="reward-display">
          <div class="reward-amount">25%</div>
          <div class="reward-label">vom Gesamtgewinn</div>
          <div class="reward-example">
            Bei 50.000€ Gewinn<br>
            = <strong>12.500€</strong> für Sie
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .referral-section {
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
    color: white;
    position: relative;
    overflow: hidden;
  }
  
  .referral-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="white" opacity="0.1"/><circle cx="80" cy="40" r="3" fill="white" opacity="0.1"/><circle cx="40" cy="80" r="2" fill="white" opacity="0.1"/></svg>');
    background-size: 200px 200px;
  }
  
  .referral-content {
    display: grid;
    gap: var(--space-48);
    align-items: center;
    position: relative;
    z-index: 1;
  }
  
  @media (min-width: 1024px) {
    .referral-content {
      grid-template-columns: 2fr 1fr;
    }
  }
  
  .referral-title {
    margin-bottom: var(--space-24);
    text-shadow: 0 2px 4px oklch(0 0 0 / 0.2);
  }
  
  .referral-description {
    font-size: var(--text-lg);
    margin-bottom: var(--space-32);
    opacity: 0.95;
    line-height: 1.6;
  }
  
  .process-title {
    font-family: var(--font-display);
    font-size: var(--text-xl);
    font-weight: 600;
    margin-bottom: var(--space-16);
  }
  
  .process-steps {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: var(--space-32);
  }
  
  .process-steps li {
    position: relative;
    padding: var(--space-8) 0 var(--space-8) var(--space-32);
    margin-bottom: var(--space-8);
  }
  
  .process-steps li::before {
    content: counter(step-counter);
    counter-increment: step-counter;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background: white;
    color: var(--color-primary);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--text-sm);
    font-weight: 700;
  }
  
  .process-steps {
    counter-reset: step-counter;
  }
  
  .referral-actions {
    margin-top: var(--space-32);
  }
  
  .referral-actions .btn {
    margin-bottom: var(--space-16);
    background: white;
    color: var(--color-primary);
  }
  
  .referral-actions .btn:hover {
    background: oklch(0.95 0.01 250);
    transform: translateY(-2px);
  }
  
  .referral-legal {
    font-size: var(--text-sm);
    opacity: 0.8;
    line-height: 1.4;
  }
  
  .referral-visual {
    display: flex;
    justify-content: center;
  }
  
  .reward-display {
    background: oklch(1 0 0 / 0.15);
    backdrop-filter: blur(8px);
    padding: var(--space-48);
    border-radius: var(--radius);
    text-align: center;
    border: 1px solid oklch(1 0 0 / 0.2);
  }
  
  .reward-amount {
    font-family: var(--font-display);
    font-size: 4rem;
    font-weight: 900;
    line-height: 1;
    margin-bottom: var(--space-8);
    text-shadow: 0 2px 4px oklch(0 0 0 / 0.2);
  }
  
  .reward-label {
    font-size: var(--text-lg);
    font-weight: 600;
    margin-bottom: var(--space-24);
    opacity: 0.9;
  }
  
  .reward-example {
    font-size: var(--text-base);
    opacity: 0.8;
    line-height: 1.4;
  }
  
  .reward-example strong {
    color: white;
    font-size: var(--text-xl);
  }
</style>