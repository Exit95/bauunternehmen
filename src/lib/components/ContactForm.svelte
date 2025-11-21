<script lang="ts">
  import { onMount } from 'svelte';
  
  let form: HTMLFormElement;
  let isSubmitting = false;
  let submitMessage = '';
  let submitType: 'success' | 'error' | '' = '';
  
  let formData = {
    name: '',
    email: '',
    telefon: '',
    nachricht: ''
  };
  
  let errors = {
    name: '',
    email: '',
    telefon: '',
    nachricht: ''
  };
  
  function validateField(field: keyof typeof formData) {
    errors[field] = '';
    
    switch (field) {
      case 'name':
        if (!formData.name.trim()) {
          errors.name = 'Name ist erforderlich';
        }
        break;
      case 'email':
        if (!formData.email.trim()) {
          errors.email = 'E-Mail ist erforderlich';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = 'Bitte geben Sie eine gültige E-Mail ein';
        }
        break;
      case 'telefon':
        if (!formData.telefon.trim()) {
          errors.telefon = 'Telefonnummer ist erforderlich';
        }
        break;
      case 'nachricht':
        if (!formData.nachricht.trim()) {
          errors.nachricht = 'Nachricht ist erforderlich';
        }
        break;
    }
  }
  
  function validateForm() {
    Object.keys(formData).forEach(field => {
      validateField(field as keyof typeof formData);
    });
    
    return Object.values(errors).every(error => !error);
  }
  
  async function handleSubmit(event: Event) {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    isSubmitting = true;
    submitMessage = '';
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      submitType = 'success';
      submitMessage = 'Vielen Dank für Ihre Anfrage! Wir melden uns innerhalb von 24 Stunden bei Ihnen.';
      
      // Reset form
      formData = { name: '', email: '', telefon: '', nachricht: '' };
      
      // Track Lead event (would be implemented with proper consent management)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'generate_lead', {
          currency: 'EUR',
          value: 0.00,
          event_category: 'Contact',
          event_label: 'Contact Form'
        });
      }
      
    } catch (error) {
      submitType = 'error';
      submitMessage = 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<section class="section" data-testid="cmp_contact">
  <div class="container">
    <header class="section-header text-center mb-8">
      <h2 class="display text-3xl mb-4">Projekt anfragen</h2>
      <p class="section-subtitle">
        Beschreiben Sie uns Ihr Vorhaben – wir melden uns binnen 24 Stunden.
      </p>
    </header>
    
    <div class="contact-content">
      <form class="contact-form" on:submit={handleSubmit} bind:this={form} novalidate>
        <div class="form-row">
          <div class="form-group">
            <label for="name" class="form-label">Name *</label>
            <input
              type="text"
              id="name"
              class="form-input"
              class:error={errors.name}
              bind:value={formData.name}
              on:blur={() => validateField('name')}
              aria-describedby={errors.name ? 'name-error' : undefined}
              required
            />
            {#if errors.name}
              <span class="form-error" id="name-error" role="alert">{errors.name}</span>
            {/if}
          </div>
          
          <div class="form-group">
            <label for="telefon" class="form-label">Telefon *</label>
            <input
              type="tel"
              id="telefon"
              class="form-input"
              class:error={errors.telefon}
              bind:value={formData.telefon}
              on:blur={() => validateField('telefon')}
              aria-describedby={errors.telefon ? 'telefon-error' : undefined}
              required
            />
            {#if errors.telefon}
              <span class="form-error" id="telefon-error" role="alert">{errors.telefon}</span>
            {/if}
          </div>
        </div>
        
        <div class="form-group">
          <label for="email" class="form-label">E-Mail *</label>
          <input
            type="email"
            id="email"
            class="form-input"
            class:error={errors.email}
            bind:value={formData.email}
            on:blur={() => validateField('email')}
            aria-describedby={errors.email ? 'email-error' : undefined}
            required
          />
          {#if errors.email}
            <span class="form-error" id="email-error" role="alert">{errors.email}</span>
          {/if}
        </div>
        
        <div class="form-group">
          <label for="nachricht" class="form-label">Projektbeschreibung *</label>
          <textarea
            id="nachricht"
            class="form-textarea"
            class:error={errors.nachricht}
            bind:value={formData.nachricht}
            on:blur={() => validateField('nachricht')}
            aria-describedby={errors.nachricht ? 'nachricht-error' : undefined}
            rows="5"
            placeholder="Beschreiben Sie uns Ihr Bauvorhaben..."
            required
          ></textarea>
          {#if errors.nachricht}
            <span class="form-error" id="nachricht-error" role="alert">{errors.nachricht}</span>
          {/if}
        </div>
        
        <div class="form-actions">
          <button 
            type="submit" 
            class="btn btn-primary btn-large"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
          </button>
        </div>
        
        {#if submitMessage}
          <div 
            class="form-message" 
            class:success={submitType === 'success'} 
            class:error={submitType === 'error'}
            role="alert"
            aria-live="polite"
          >
            {submitMessage}
          </div>
        {/if}
      </form>
      
      <div class="contact-info">
        <h3 class="info-title">Direkter Kontakt</h3>
        <div class="info-item">
          <strong>Telefon</strong>
          <a href="tel:+49123456789">+49 123 456 789</a>
        </div>
        <div class="info-item">
          <strong>E-Mail</strong>
          <a href="mailto:info@bauunternehmen-roger.de">info@bauunternehmen-roger.de</a>
        </div>
        <div class="info-item">
          <strong>Bürozeiten</strong>
          <span>Mo - Fr: 7:00 - 17:00 Uhr<br>Sa: 8:00 - 12:00 Uhr</span>
        </div>
        
        <div class="info-highlight">
          <p>
            <strong>Kostenloser Ortstermin</strong><br>
            Wir besichtigen Ihr Objekt und erstellen ein unverbindliches Angebot.
          </p>
        </div>
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
  
  .contact-content {
    display: grid;
    gap: var(--space-48);
    max-width: 1200px;
    margin: 0 auto;
  }
  
  @media (min-width: 1024px) {
    .contact-content {
      grid-template-columns: 2fr 1fr;
    }
  }
  
  .contact-form {
    background: white;
    padding: var(--space-48);
    border-radius: var(--radius);
    box-shadow: var(--shadow-soft);
  }
  
  .form-row {
    display: grid;
    gap: var(--space-24);
    margin-bottom: var(--space-24);
  }
  
  @media (min-width: 768px) {
    .form-row {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  .form-group {
    margin-bottom: var(--space-24);
  }
  
  .form-label {
    display: block;
    margin-bottom: var(--space-8);
    font-weight: 600;
    color: var(--color-fg);
  }
  
  .form-input,
  .form-textarea {
    width: 100%;
    padding: var(--space-12) var(--space-16);
    border: 2px solid var(--color-border);
    border-radius: var(--radius);
    font-size: var(--text-base);
    transition: border-color var(--duration-enter) var(--ease);
  }
  
  .form-input:focus,
  .form-textarea:focus {
    outline: none;
    border-color: var(--color-primary);
  }
  
  .form-input.error,
  .form-textarea.error {
    border-color: #ef4444;
  }
  
  .form-textarea {
    resize: vertical;
    min-height: 120px;
  }
  
  .form-error {
    display: block;
    margin-top: var(--space-4);
    color: #ef4444;
    font-size: var(--text-sm);
  }
  
  .form-actions {
    margin-top: var(--space-32);
  }
  
  .btn-large {
    padding: var(--space-16) var(--space-32);
    font-size: var(--text-lg);
    width: 100%;
  }
  
  @media (min-width: 768px) {
    .btn-large {
      width: auto;
    }
  }
  
  .form-message {
    margin-top: var(--space-24);
    padding: var(--space-16);
    border-radius: var(--radius);
    font-weight: 600;
  }
  
  .form-message.success {
    background: #dcfce7;
    color: #16a34a;
    border: 1px solid #bbf7d0;
  }
  
  .form-message.error {
    background: #fef2f2;
    color: #dc2626;
    border: 1px solid #fecaca;
  }
  
  .contact-info {
    padding: var(--space-32);
  }
  
  .info-title {
    font-family: var(--font-display);
    font-size: var(--text-2xl);
    font-weight: 600;
    margin-bottom: var(--space-24);
    color: var(--color-fg);
  }
  
  .info-item {
    margin-bottom: var(--space-24);
  }
  
  .info-item strong {
    display: block;
    margin-bottom: var(--space-4);
    color: var(--color-primary);
    font-weight: 600;
  }
  
  .info-item a {
    color: var(--color-fg);
    text-decoration: none;
  }
  
  .info-item a:hover {
    color: var(--color-primary);
  }
  
  .info-highlight {
    margin-top: var(--space-32);
    padding: var(--space-24);
    background: var(--color-muted);
    border-radius: var(--radius);
    border-left: 4px solid var(--color-primary);
  }
</style>