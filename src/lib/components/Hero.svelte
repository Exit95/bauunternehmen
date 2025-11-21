<script lang="ts">
  import { onMount } from 'svelte';
  
  let heroElement: HTMLElement;
  let mounted = false;
  
  onMount(() => {
    mounted = true;
    
    // 3D Hero Stage Effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroElement) return;
      
      const rect = heroElement.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      const rotateX = (y - 0.5) * 10;
      const rotateY = (x - 0.5) * -10;
      
      heroElement.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    const resetTransform = () => {
      if (!heroElement) return;
      heroElement.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };
    
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (!prefersReducedMotion.matches) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      heroElement.addEventListener('mouseleave', resetTransform);
    }
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        heroElement.removeEventListener('mouseleave', resetTransform);
      }
    };
  });
</script>

<section class="hero mesh-bg" bind:this={heroElement} data-testid="cmp_hero">
  <div class="hero-background">
    <div class="hero-grid"></div>
    <div class="hero-aura"></div>
  </div>
  
  <div class="container">
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-title display">
          <span class="hero-highlight">Bauunternehmen Roger</span><br>
          Bauen ohne Umwege.
        </h1>
        <p class="hero-subtitle">
          Neubau, Anbau, Sanierung aus einer Hand – regional und terminsicher.
        </p>
        <div class="hero-actions">
          <a 
            href="/kontakt?utm_source=hero&utm_medium=cta&utm_campaign=hero_primary" 
            class="btn btn-primary btn-large"
            aria-label="Projekt anfragen - Kontaktformular öffnen"
          >
            Projekt anfragen
          </a>
          <a 
            href="/leistungen?utm_source=hero&utm_medium=link&utm_campaign=hero_secondary" 
            class="btn btn-secondary"
          >
            Leistungen ansehen
          </a>
        </div>
      </div>
      
      <div class="hero-visual">
        <div class="hero-stage">
          <div class="stage-layer stage-layer-1"></div>
          <div class="stage-layer stage-layer-2"></div>
          <div class="stage-layer stage-layer-3"></div>
        </div>
      </div>
    </div>
    
    <div class="hero-features">
      <div class="feature-item">
        <strong>Festpreis</strong>
        <span>nach Ortstermin</span>
      </div>
      <div class="feature-item">
        <strong>Terminsicher</strong>
        <span>mit Zeitplan</span>
      </div>
      <div class="feature-item">
        <strong>Regional</strong>
        <span>vor Ort für Sie da</span>
      </div>
      <div class="feature-item">
        <strong>Meisterbetrieb</strong>
        <span>seit über 20 Jahren</span>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding: 8rem 0 4rem;
    transition: transform var(--duration-enter) var(--ease);
  }
  
  .hero-background {
    position: absolute;
    inset: 0;
    z-index: -1;
  }
  
  .hero-grid {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(to right, var(--color-border) 1px, transparent 1px),
      linear-gradient(to bottom, var(--color-border) 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: 0.1;
  }
  
  .hero-aura {
    position: absolute;
    top: 20%;
    left: 50%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, var(--color-primary) 0%, transparent 70%);
    opacity: 0.05;
    transform: translateX(-50%);
    animation: heroAura 20s ease-in-out infinite;
  }
  
  @keyframes heroAura {
    0%, 100% { transform: translateX(-50%) scale(1); }
    50% { transform: translateX(-50%) scale(1.2); }
  }
  
  .hero-content {
    display: grid;
    gap: var(--space-48);
    align-items: center;
    margin-bottom: var(--space-48);
  }
  
  @media (min-width: 1024px) {
    .hero-content {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  .hero-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: var(--space-24);
    text-shadow: 0 2px 4px oklch(0.22 0.03 250 / 0.1);
  }
  
  .hero-highlight {
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .hero-subtitle {
    font-size: var(--text-xl);
    color: oklch(0.40 0.03 250);
    margin-bottom: var(--space-32);
    max-width: 600px;
  }
  
  .hero-actions {
    display: flex;
    gap: var(--space-16);
    flex-wrap: wrap;
  }
  
  .btn-large {
    padding: var(--space-16) var(--space-32);
    font-size: var(--text-lg);
  }
  
  .btn-secondary {
    background: transparent;
    color: var(--color-fg);
    border: 2px solid var(--color-border);
  }
  
  .btn-secondary:hover {
    border-color: var(--color-primary);
    background: var(--color-primary);
    color: white;
  }
  
  .hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .hero-stage {
    position: relative;
    width: 400px;
    height: 400px;
    transform-style: preserve-3d;
  }
  
  .stage-layer {
    position: absolute;
    border-radius: var(--radius);
    backdrop-filter: blur(8px);
    border: 1px solid var(--color-border);
  }
  
  .stage-layer-1 {
    width: 100%;
    height: 100%;
    background: oklch(1 0 0 / 0.1);
    transform: translateZ(0px);
  }
  
  .stage-layer-2 {
    width: 80%;
    height: 80%;
    top: 10%;
    left: 10%;
    background: var(--color-primary);
    opacity: 0.1;
    transform: translateZ(20px);
  }
  
  .stage-layer-3 {
    width: 60%;
    height: 60%;
    top: 20%;
    left: 20%;
    background: var(--color-accent);
    opacity: 0.1;
    transform: translateZ(40px);
  }
  
  .hero-features {
    display: grid;
    gap: var(--space-24);
    margin-top: var(--space-48);
  }
  
  @media (min-width: 768px) {
    .hero-features {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  
  @media (max-width: 767px) {
    .hero-features {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  .feature-item {
    text-align: center;
    padding: var(--space-16);
    background: white;
    border-radius: var(--radius);
    box-shadow: var(--shadow-soft);
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }
  
  .feature-item strong {
    font-family: var(--font-display);
    font-weight: 600;
    color: var(--color-primary);
  }
  
  .feature-item span {
    font-size: var(--text-sm);
    color: oklch(0.50 0.03 250);
  }
  
  @media (prefers-reduced-motion: reduce) {
    .hero-aura {
      animation: none;
    }
    
    .hero {
      transition: none;
    }
  }
</style>