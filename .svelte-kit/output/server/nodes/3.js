

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/datenschutz/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.DcC5lzaG.js","_app/immutable/chunks/CTO0dJwd.js","_app/immutable/chunks/IHki7fMi.js"];
export const stylesheets = ["_app/immutable/assets/3.M4Z4eAjS.css"];
export const fonts = [];
