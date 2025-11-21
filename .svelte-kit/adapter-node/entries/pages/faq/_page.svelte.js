import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { F as FAQ } from "../../../chunks/FAQ.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1oh3njr_START -->${$$result.title = `<title>Häufige Fragen (FAQ) | Bauunternehmen Roger</title>`, ""}<meta name="description" content="Antworten auf häufige Fragen zu Kosten, Dauer, Garantie und Ablauf bei Bauunternehmen Roger."><!-- HTML_TAG_START -->${`<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Bieten Sie Festpreise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja – nach Ortstermin erhalten Sie ein Festpreisangebot mit Leistungsbeschreibung und Zeitplan."
          }
        }
      ]
    }
  <\/script>`}<!-- HTML_TAG_END --><!-- HEAD_svelte-1oh3njr_END -->`, ""} <section class="section" data-svelte-h="svelte-953wun"><div class="container"><header class="text-center mb-8"><h1 class="display text-4xl mb-4">Häufige Fragen</h1> <p class="text-xl">Alles was Sie über unser Bauunternehmen wissen möchten.</p></header></div></section> ${validate_component(FAQ, "FAQ").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
