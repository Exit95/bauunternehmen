<script lang="ts">
  import { onMount } from 'svelte';
  
  let currentSlide = 0;
  let sliderContainer: HTMLElement;
  
  const testimonials = [
    {
      text: 'Termingerecht, sauber und zu einem fairen Festpreis. Unser Anbau wurde perfekt umgesetzt. Würden wir jederzeit wieder beauftragen.',
      author: 'Familie Müller',
      project: 'Anbau mit Terrasse',
      location: 'Musterstadt'
    },
    {
      text: 'Von der ersten Beratung bis zur Schlüsselübergabe hat alles gestimmt. Besonders die regelmäßigen Updates und die saubere Baustelle haben uns überzeugt.',
      author: 'Thomas Weber',
      project: 'Einfamilienhaus Neubau',
      location: 'Beispielort'
    },
    {
      text: 'Die Badsanierung wurde in der vereinbarten Zeit und zum Festpreis fertiggestellt. Alle Handwerker waren freundlich und kompetent.',
      author: 'Petra Schmidt',
      project: 'Badsanierung',
      location: 'Musterdorf'
    }
  ];
  
  onMount(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  });
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % testimonials.length;
  }
  
  function prevSlide() {
    currentSlide = currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1;
  }
  
  function goToSlide(index: number) {
    currentSlide = index;
  }
</script>

<section class="section bg-muted" data-testid="cmp_testimonials">
  <div class="container">
    <header class="section-header text-center mb-8">
      <h2 class="display text-3xl mb-4">Stimmen</h2>
      <p class="section-subtitle">
        Was unsere Kunden über uns sagen.
      </p>
    </header>
    
    <div class="testimonials-slider" aria-roledescription="carousel" aria-label="Kundenstimmen">
      <div class="slider-controls">
        <button 
          class="slider-btn slider-btn-prev" 
          on:click={prevSlide}
          aria-label="Vorherige Bewertung"
        >
          ←
        </button>
        <button 
          class="slider-btn slider-btn-next" 
          on:click={nextSlide}
          aria-label="Nächste Bewertung"
        >
          →
        </button>
      </div>
      
      <div class="slider-container" bind:this={sliderContainer}>
        <div 
          class="slider-track" 
          style="transform: translateX(-{currentSlide * 100}%)"
        >
          {#each testimonials as testimonial, index}
            <article 
              class="testimonial-slide"
              aria-hidden={index !== currentSlide}
              role="group"
              aria-roledescription="slide"
              aria-label="Bewertung {index + 1} von {testimonials.length}"
            >
              <div class="testimonial-content">
                <blockquote class="testimonial-text">
                  "{testimonial.text}"
                </blockquote>
                <footer class="testimonial-author">
                  <cite class="author-name">{testimonial.author}</cite>
                  <div class="author-details">
                    <span class="project-type">{testimonial.project}</span>
                    <span class="project-location">{testimonial.location}</span>
                  </div>
                </footer>
              </div>
            </article>
          {/each}
        </div>
      </div>
      
      <div class="slider-dots">
        {#each testimonials as _, index}
          <button 
            class="dot" 
            class:active={index === currentSlide}
            on:click={() => goToSlide(index)}
            aria-label="Zu Bewertung {index + 1} springen"
          ></button>
        {/each}
      </div>
    </div>
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
  
  .testimonials-slider {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
  }
  
  .slider-controls {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    z-index: 2;
    pointer-events: none;
  }
  
  .slider-btn {
    background: white;
    border: none;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    box-shadow: var(--shadow-soft);
    cursor: pointer;
    font-size: var(--text-xl);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all var(--duration-enter) var(--ease);
    pointer-events: auto;
  }
  
  .slider-btn:hover {
    background: var(--color-primary);
    color: white;
    transform: scale(1.1);
  }
  
  .slider-btn:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
  
  .slider-container {
    overflow: hidden;
    border-radius: var(--radius);
  }
  
  .slider-track {
    display: flex;
    transition: transform var(--duration-enter) var(--ease);
  }
  
  .testimonial-slide {
    flex: 0 0 100%;
    padding: var(--space-48) var(--space-24);
  }
  
  .testimonial-content {
    background: white;
    padding: var(--space-48);
    border-radius: var(--radius);
    box-shadow: var(--shadow-soft);
    text-align: center;
  }
  
  .testimonial-text {
    font-size: var(--text-lg);
    line-height: 1.6;
    margin-bottom: var(--space-32);
    color: var(--color-fg);
    font-style: italic;
  }
  
  .testimonial-author {
    border-top: 1px solid var(--color-border);
    padding-top: var(--space-24);
  }
  
  .author-name {
    font-family: var(--font-display);
    font-size: var(--text-lg);
    font-weight: 600;
    color: var(--color-primary);
    font-style: normal;
    display: block;
    margin-bottom: var(--space-8);
  }
  
  .author-details {
    display: flex;
    justify-content: center;
    gap: var(--space-16);
    font-size: var(--text-sm);
    color: oklch(0.50 0.03 250);
  }
  
  .project-type {
    font-weight: 600;
  }
  
  .slider-dots {
    display: flex;
    justify-content: center;
    gap: var(--space-8);
    margin-top: var(--space-32);
  }
  
  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: none;
    background: oklch(0.70 0.03 250);
    cursor: pointer;
    transition: all var(--duration-enter) var(--ease);
  }
  
  .dot.active {
    background: var(--color-primary);
    transform: scale(1.3);
  }
  
  .dot:hover {
    background: var(--color-primary);
  }
  
  .dot:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
</style>