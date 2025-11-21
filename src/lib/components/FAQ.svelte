<script lang="ts">
  let openItems = new Set<number>();
  
  const faqs = [
    {
      question: 'Bieten Sie Festpreise?',
      answer: 'Ja – nach Ortstermin erhalten Sie ein Festpreisangebot mit Leistungsbeschreibung und Zeitplan. Änderungen dokumentieren wir transparent per Nachtrag. So behalten Sie Kosten und Termine im Griff.'
    },
    {
      question: 'Wie lange dauert ein typisches Projekt?',
      answer: 'Die Dauer hängt vom Projektumfang ab. Ein Badumbau dauert 2-3 Wochen, ein Anbau 6-8 Wochen, ein Neubau 6-8 Monate. Den genauen Zeitplan erhalten Sie mit dem Angebot.'
    },
    {
      question: 'Welche Garantien gibt es?',
      answer: 'Wir gewähren die gesetzliche Gewährleistung von 5 Jahren auf Bauwerke und 2 Jahren auf andere Arbeiten. Zusätzlich bieten wir eine freiwillige Nachbesserungsgarantie im ersten Jahr.'
    },
    {
      question: 'Arbeiten Sie nur regional?',
      answer: 'Ja, unser Einsatzgebiet umfasst einen Radius von etwa 50 km. So können wir schnell vor Ort sein und eine persönliche Betreuung garantieren.'
    },
    {
      question: 'Wie funktioniert die Kostenabrechnung?',
      answer: 'Nach Vertragsabschluss erfolgt die Zahlung nach Baufortschritt in vereinbarten Teilbeträgen. Eine Anzahlung ist nur bei größeren Materialbestellungen erforderlich.'
    },
    {
      question: 'Was ist bei Änderungswünschen während der Bauphase?',
      answer: 'Änderungen sind grundsätzlich möglich. Wir erstellen einen transparenten Nachtrag mit Mehr- oder Minderkosten und Auswirkungen auf den Zeitplan. Sie entscheiden dann über die Umsetzung.'
    }
  ];
  
  function toggleItem(index: number) {
    if (openItems.has(index)) {
      openItems.delete(index);
    } else {
      openItems.add(index);
    }
    openItems = openItems; // Trigger reactivity
  }
</script>

<section class="section" data-testid="cmp_faq">
  <div class="container">
    <header class="section-header text-center mb-8">
      <h2 class="display text-3xl mb-4">Häufige Fragen</h2>
      <p class="section-subtitle">
        Antworten auf die wichtigsten Fragen rund um Ihr Bauprojekt.
      </p>
    </header>
    
    <div class="faq-container">
      {#each faqs as faq, index}
        <article class="faq-item">
          <button 
            class="faq-question"
            aria-expanded={openItems.has(index)}
            aria-controls="faq-answer-{index}"
            on:click={() => toggleItem(index)}
          >
            <span class="question-text">{faq.question}</span>
            <span class="question-icon" class:open={openItems.has(index)}>+</span>
          </button>
          
          <div 
            class="faq-answer" 
            class:open={openItems.has(index)}
            id="faq-answer-{index}"
            role="region"
            aria-labelledby="faq-question-{index}"
          >
            <div class="answer-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        </article>
      {/each}
    </div>
    
    <div class="faq-cta text-center">
      <p class="cta-text">Weitere Fragen?</p>
      <a 
        href="/kontakt?utm_source=faq&utm_medium=cta&utm_campaign=faq_contact" 
        class="btn btn-primary"
      >
        Jetzt Beratung anfragen
      </a>
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
  
  .faq-container {
    max-width: 800px;
    margin: 0 auto var(--space-48);
  }
  
  .faq-item {
    border-bottom: 1px solid var(--color-border);
  }
  
  .faq-item:last-child {
    border-bottom: none;
  }
  
  .faq-question {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-24) 0;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    transition: color var(--duration-enter) var(--ease);
  }
  
  .faq-question:hover {
    color: var(--color-primary);
  }
  
  .faq-question:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
  
  .question-text {
    font-family: var(--font-display);
    font-size: var(--text-lg);
    font-weight: 600;
  }
  
  .question-icon {
    font-size: var(--text-2xl);
    font-weight: 300;
    color: var(--color-primary);
    transition: transform var(--duration-enter) var(--ease);
    flex-shrink: 0;
    margin-left: var(--space-16);
  }
  
  .question-icon.open {
    transform: rotate(45deg);
  }
  
  .faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height var(--duration-enter) var(--ease);
  }
  
  .faq-answer.open {
    max-height: 300px;
  }
  
  .answer-content {
    padding-bottom: var(--space-24);
    color: oklch(0.40 0.03 250);
    line-height: 1.6;
  }
  
  .faq-cta {
    padding: var(--space-32);
    background: var(--color-muted);
    border-radius: var(--radius);
  }
  
  .cta-text {
    font-size: var(--text-lg);
    font-weight: 600;
    margin-bottom: var(--space-16);
    color: var(--color-fg);
  }
</style>