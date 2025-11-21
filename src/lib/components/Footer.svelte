<script lang="ts">
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { href: '/leistungen', label: 'Leistungen' },
    { href: '/projekte', label: 'Projekte' },
    { href: '/faq', label: 'FAQ' },
    { href: '/kontakt', label: 'Kontakt' }
  ];
  
  const legalLinks = [
    { href: '/impressum', label: 'Impressum' },
    { href: '/datenschutz', label: 'Datenschutz' }
  ];
</script>

<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-section">
        <h3 class="footer-title">Bauunternehmen Roger</h3>
        <p class="footer-description">
          Meisterbetrieb für Hochbau und Sanierung.
          Regional, terminsicher und mit Festpreis-Garantie.
        </p>
        <div class="footer-referral">
          <p class="referral-highlight">
            <strong>Empfehlen lohnt sich:</strong><br>
            25% vom Gewinn bei erfolgreicher Vermittlung
          </p>
        </div>
      </div>
      
      <div class="footer-section">
        <h4 class="footer-subtitle">Quick Links</h4>
        <ul class="footer-links">
          {#each quickLinks as link}
            <li>
              <a href="{link.href}?utm_source=footer&utm_medium=link&utm_campaign=footer_nav">
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
      
      <div class="footer-section">
        <h4 class="footer-subtitle">Kontakt</h4>
        <address class="footer-address">
          <p>Musterstraße 123</p>
          <p>12345 Musterstadt</p>
          <p>
            <a href="tel:+49123456789">+49 123 456 789</a>
          </p>
          <p>
            <a href="mailto:info@bauunternehmen-roger.de">
              info@bauunternehmen-roger.de
            </a>
          </p>
        </address>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="footer-legal">
        <ul class="legal-links">
          {#each legalLinks as link}
            <li><a href={link.href}>{link.label}</a></li>
          {/each}
        </ul>
      </div>
      <div class="footer-copyright">
        <p>&copy; {currentYear} Bauunternehmen Roger. Alle Rechte vorbehalten.</p>
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: var(--color-fg);
    color: white;
    padding: var(--space-48) 0 var(--space-24);
    margin-top: auto;
  }
  
  .footer-content {
    display: grid;
    gap: var(--space-32);
    margin-bottom: var(--space-32);
  }
  
  @media (min-width: 768px) {
    .footer-content {
      grid-template-columns: 2fr 1fr 1fr;
      gap: var(--space-48);
    }
  }
  
  .footer-title {
    font-family: var(--font-display);
    font-size: var(--text-xl);
    font-weight: 700;
    margin-bottom: var(--space-16);
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .footer-subtitle {
    font-family: var(--font-display);
    font-size: var(--text-lg);
    font-weight: 600;
    margin-bottom: var(--space-16);
  }
  
  .footer-description {
    margin-bottom: var(--space-24);
    opacity: 0.9;
  }
  
  .footer-referral {
    background: var(--color-primary);
    padding: var(--space-16);
    border-radius: var(--radius);
    margin-top: var(--space-16);
  }
  
  .referral-highlight {
    margin: 0;
    font-size: var(--text-sm);
  }
  
  .footer-links {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .footer-links li {
    margin-bottom: var(--space-8);
  }
  
  .footer-links a {
    color: white;
    text-decoration: none;
    opacity: 0.8;
    transition: opacity var(--duration-enter) var(--ease);
  }
  
  .footer-links a:hover {
    opacity: 1;
  }
  
  .footer-address {
    font-style: normal;
    opacity: 0.9;
  }
  
  .footer-address p {
    margin-bottom: var(--space-8);
  }
  
  .footer-address a {
    color: white;
    text-decoration: none;
  }
  
  .footer-bottom {
    border-top: 1px solid oklch(0.22 0.03 250 / 0.2);
    padding-top: var(--space-24);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-16);
  }
  
  .legal-links {
    display: flex;
    gap: var(--space-16);
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .legal-links a {
    color: white;
    text-decoration: none;
    opacity: 0.7;
    font-size: var(--text-sm);
    transition: opacity var(--duration-enter) var(--ease);
  }
  
  .legal-links a:hover {
    opacity: 1;
  }
  
  .footer-copyright {
    opacity: 0.7;
    font-size: var(--text-sm);
  }
  
  @media (max-width: 767px) {
    .footer-bottom {
      flex-direction: column;
      text-align: center;
    }
  }
</style>