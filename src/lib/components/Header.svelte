<script lang="ts">
  import { onMount } from 'svelte';
  
  export let currentPath: string = '/';
  
  let isMenuOpen = false;
  let scrolled = false;
  
  const navItems = [
    { href: '/', label: 'Start' },
    { href: '/leistungen', label: 'Leistungen' },
    { href: '/projekte', label: 'Projekte' },
    { href: '/faq', label: 'FAQ' },
    { href: '/kontakt', label: 'Kontakt' }
  ];
  
  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 50;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
  
  function closeMenu() {
    isMenuOpen = false;
  }
</script>

<header class="header" class:scrolled>
  <div class="container">
    <nav class="nav" aria-label="Hauptnavigation">
      <div class="nav-brand">
        <a href="/" class="brand-link" on:click={closeMenu}>
          <span class="brand-text">Bauunternehmen Roger</span>
        </a>
      </div>
      
      <button 
        class="menu-toggle" 
        aria-expanded={isMenuOpen}
        aria-controls="navigation-menu"
        aria-label="Navigation {isMenuOpen ? 'schließen' : 'öffnen'}"
        on:click={toggleMenu}
      >
        <span class="hamburger"></span>
        <span class="hamburger"></span>
        <span class="hamburger"></span>
      </button>
      
      <ul class="nav-menu" class:open={isMenuOpen} id="navigation-menu">
        {#each navItems as item}
          <li class="nav-item">
            <a 
              href="{item.href}?utm_source=header&utm_medium=nav&utm_campaign=main_nav" 
              class="nav-link" 
              class:active={currentPath === item.href}
              on:click={closeMenu}
              aria-current={currentPath === item.href ? 'page' : null}
            >
              {item.label}
            </a>
          </li>
        {/each}
        <li class="nav-item nav-cta">
          <a 
            href="/kontakt?utm_source=header&utm_medium=cta&utm_campaign=header_cta" 
            class="btn btn-primary"
            on:click={closeMenu}
          >
            Projekt anfragen
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: oklch(0.98 0.01 250 / 0.95);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid oklch(0.90 0.01 250);
    z-index: 100;
    transition: all var(--duration-enter) var(--ease);
  }
  
  .header.scrolled {
    background: oklch(0.98 0.01 250 / 0.98);
    box-shadow: var(--shadow-soft);
  }
  
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-16) 0;
  }
  
  .brand-link {
    font-family: var(--font-display);
    font-size: var(--text-xl);
    font-weight: 700;
    text-decoration: none;
    color: var(--color-fg);
  }
  
  .brand-text {
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .menu-toggle {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--space-8);
  }
  
  .hamburger {
    width: 24px;
    height: 2px;
    background: var(--color-fg);
    transition: all var(--duration-enter) var(--ease);
  }
  
  .nav-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
    gap: var(--space-32);
  }
  
  .nav-link {
    font-weight: 500;
    text-decoration: none;
    color: var(--color-fg);
    position: relative;
    transition: color var(--duration-enter) var(--ease);
  }
  
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--color-primary);
    transition: width var(--duration-enter) var(--ease);
  }
  
  .nav-link:hover::after,
  .nav-link.active::after {
    width: 100%;
  }
  
  .nav-cta {
    margin-left: var(--space-16);
  }
  
  @media (max-width: 768px) {
    .menu-toggle {
      display: flex;
    }
    
    .nav-menu {
      position: fixed;
      top: 100%;
      left: 0;
      right: 0;
      background: oklch(0.98 0.01 250 / 0.98);
      backdrop-filter: blur(8px);
      flex-direction: column;
      align-items: stretch;
      gap: 0;
      padding: var(--space-24);
      border-top: 1px solid var(--color-border);
      transform: translateY(-100%);
      opacity: 0;
      visibility: hidden;
      transition: all var(--duration-enter) var(--ease);
    }
    
    .nav-menu.open {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
    
    .nav-item {
      padding: var(--space-12) 0;
    }
    
    .nav-cta {
      margin-left: 0;
      margin-top: var(--space-16);
    }
  }
</style>