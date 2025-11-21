<section class="section" data-testid="cmp_imprint">
  <div class="container">
    <header class="page-header">
      <h1 class="display text-4xl mb-6">Impressum</h1>
    </header>
    
    <div class="imprint-content">
      <section class="imprint-section">
        <h2 class="section-title">Angaben gemäß § 5 TMG</h2>
        <address class="company-details">
          <p><strong>Bauunternehmen Roger</strong></p>
          <p>Inhaber: Roger Müller</p>
          <p>Musterstraße 123</p>
          <p>12345 Musterstadt</p>
          <p>Deutschland</p>
        </address>
      </section>
      
      <section class="imprint-section">
        <h2 class="section-title">Kontakt</h2>
        <div class="contact-details">
          <p>Telefon: <a href="tel:+49123456789">+49 123 456 789</a></p>
          <p>E-Mail: <a href="mailto:info@bauunternehmen-roger.de">info@bauunternehmen-roger.de</a></p>
          <p>Website: <a href="https://www.bauunternehmen-roger.de">www.bauunternehmen-roger.de</a></p>
        </div>
      </section>
      
      <section class="imprint-section">
        <h2 class="section-title">Umsatzsteuer-ID</h2>
        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
        <p><strong>DE 123 456 789</strong></p>
      </section>
      
      <section class="imprint-section">
        <h2 class="section-title">Handwerkskammer</h2>
        <p>Eingetragen bei der Handwerkskammer Musterstadt</p>
        <p>Handwerksrolle-Nr.: HW-123456</p>
        <p>Betriebsnummer: 12345678</p>
      </section>
      
      <section class="imprint-section">
        <h2 class="section-title">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
        <p>Berufsbezeichnung: Maurermeister</p>
        <p>Zuständige Kammer: Handwerkskammer Musterstadt</p>
        <p>Verliehen in: Deutschland</p>
      </section>
      
      <section class="imprint-section">
        <h2 class="section-title">Versicherung</h2>
        <p>Betriebshaftpflichtversicherung bei:</p>
        <p><strong>Muster Versicherung AG</strong></p>
        <p>Musterstraße 456</p>
        <p>12345 Musterstadt</p>
        <p>Geltungsraum der Versicherung: Deutschland</p>
      </section>
      
      <section class="imprint-section">
        <h2 class="section-title">Redaktionell verantwortlich</h2>
        <p>Roger Müller</p>
        <p>Musterstraße 123</p>
        <p>12345 Musterstadt</p>
      </section>
      
      <section class="imprint-section">
        <h2 class="section-title">EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener">
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
      </section>
      
      <section class="imprint-section">
        <h2 class="section-title">Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>
    </div>
  </div>
</section>

<style>
  .page-header {
    text-align: center;
    margin-bottom: var(--space-48);
    padding-bottom: var(--space-24);
    border-bottom: 2px solid var(--color-border);
  }
  
  .imprint-content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .imprint-section {
    margin-bottom: var(--space-48);
    padding: var(--space-32);
    background: white;
    border-radius: var(--radius);
    box-shadow: var(--shadow-soft);
  }
  
  .section-title {
    font-family: var(--font-display);
    font-size: var(--text-xl);
    font-weight: 600;
    margin-bottom: var(--space-16);
    color: var(--color-primary);
    border-bottom: 1px solid var(--color-border);
    padding-bottom: var(--space-8);
  }
  
  .company-details,
  .contact-details {
    font-style: normal;
  }
  
  .company-details p,
  .contact-details p,
  .imprint-section p {
    margin-bottom: var(--space-8);
    line-height: 1.6;
  }
  
  .company-details strong,
  .imprint-section strong {
    color: var(--color-fg);
  }
  
  .contact-details a,
  .imprint-section a {
    color: var(--color-primary);
    text-decoration: none;
  }
  
  .contact-details a:hover,
  .imprint-section a:hover {
    text-decoration: underline;
  }
  
  .imprint-section:last-child {
    margin-bottom: 0;
  }
</style>