<script lang="ts">
  export let detailed: boolean = false;
  
  const projects = [
    {
      title: 'Einfamilienhaus Neubau',
      category: 'Neubau',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modernes Einfamilienhaus mit energieeffizienter Bauweise.'
    },
    {
      title: 'Anbau mit Terrasse',
      category: 'Anbau',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Wohnraumerweiterung mit anschließender Terrassengestaltung.'
    },
    {
      title: 'Komplettsanierung',
      category: 'Sanierung',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Vollständige Modernisierung eines älteren Wohnhauses.'
    },
    {
      title: 'Badsanierung Modern',
      category: 'Sanierung',
      image: 'https://images.pexels.com/photos/6782351/pexels-photo-6782351.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Elegante Badsanierung mit hochwertigen Materialien.'
    },
    {
      title: 'Keller & Fundament',
      category: 'Rohbau',
      image: 'https://images.pexels.com/photos/7031733/pexels-photo-7031733.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Solide Fundamentarbeiten und Kellerausbau.'
    },
    {
      title: 'Außenanlage Gestaltung',
      category: 'Außenanlagen',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Komplette Gartengestaltung mit Pflasterarbeiten.'
    }
  ];
  
  const displayProjects = detailed ? projects : projects.slice(0, 4);
</script>

<section class="section" data-testid="cmp_gallery">
  <div class="container">
    <header class="section-header text-center mb-8">
      <h2 class="display text-3xl mb-4">Projekte</h2>
      <p class="section-subtitle">
        Überzeugen Sie sich von der Qualität unserer Arbeit.
      </p>
    </header>
    
    <div class="gallery-grid">
      {#each displayProjects as project}
        <article class="project-card">
          <figure class="project-image">
            <img 
              src={project.image} 
              alt="{project.title} - {project.description}"
              loading="lazy"
              width="800"
              height="600"
            />
            <div class="project-overlay">
              <span class="project-category">{project.category}</span>
            </div>
          </figure>
          <div class="project-content">
            <h3 class="project-title">{project.title}</h3>
            <figcaption class="project-description">
              {project.description}
            </figcaption>
          </div>
        </article>
      {/each}
    </div>
    
    {#if !detailed}
      <div class="gallery-cta text-center">
        <a 
          href="/projekte?utm_source=gallery&utm_medium=cta&utm_campaign=gallery_detail" 
          class="btn btn-primary"
        >
          Alle Projekte ansehen
        </a>
      </div>
    {/if}
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
  
  .gallery-grid {
    display: grid;
    gap: var(--space-24);
    margin-bottom: var(--space-48);
  }
  
  @media (min-width: 768px) {
    .gallery-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 1024px) {
    .gallery-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  .project-card {
    background: white;
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow-soft);
    transition: all var(--duration-enter) var(--ease);
  }
  
  .project-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-glass);
  }
  
  .project-image {
    position: relative;
    margin: 0;
    overflow: hidden;
    aspect-ratio: 4 / 3;
  }
  
  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--duration-enter) var(--ease);
  }
  
  .project-card:hover .project-image img {
    transform: scale(1.05);
  }
  
  .project-overlay {
    position: absolute;
    top: var(--space-16);
    left: var(--space-16);
  }
  
  .project-category {
    background: var(--color-primary);
    color: white;
    padding: var(--space-4) var(--space-12);
    border-radius: var(--space-16);
    font-size: var(--text-sm);
    font-weight: 600;
  }
  
  .project-content {
    padding: var(--space-24);
  }
  
  .project-title {
    font-family: var(--font-display);
    font-size: var(--text-lg);
    font-weight: 600;
    margin-bottom: var(--space-8);
    color: var(--color-fg);
  }
  
  .project-description {
    color: oklch(0.40 0.03 250);
    font-size: var(--text-sm);
    line-height: 1.5;
  }
  
  .gallery-cta {
    margin-top: var(--space-32);
  }
</style>