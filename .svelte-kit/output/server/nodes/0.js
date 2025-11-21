import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CStfzHJ-.js","_app/immutable/chunks/CTO0dJwd.js","_app/immutable/chunks/IHki7fMi.js","_app/immutable/chunks/ByfXccR0.js","_app/immutable/chunks/mxzHo5yi.js","_app/immutable/chunks/-gASlQSi.js"];
export const stylesheets = ["_app/immutable/assets/0.DFGwWJAs.css"];
export const fonts = [];
