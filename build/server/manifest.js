const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","robots.txt","sitemap.xml"]),
	mimeTypes: {".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.qeJSoOL6.js",app:"_app/immutable/entry/app.CVlKcr4G.js",imports:["_app/immutable/entry/start.qeJSoOL6.js","_app/immutable/chunks/B7grZOyI.js","_app/immutable/chunks/CTO0dJwd.js","_app/immutable/entry/app.CVlKcr4G.js","_app/immutable/chunks/CTO0dJwd.js","_app/immutable/chunks/IHki7fMi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-Dn9Ztb7S.js')),
			__memo(() => import('./chunks/1-2lQpdCAa.js')),
			__memo(() => import('./chunks/2-DOYKDoYS.js')),
			__memo(() => import('./chunks/3-C-Y8QIEq.js')),
			__memo(() => import('./chunks/4-ktydit_h.js')),
			__memo(() => import('./chunks/5-BGQs__Zc.js')),
			__memo(() => import('./chunks/6-IrNUBZTG.js')),
			__memo(() => import('./chunks/7-sG75Ll_E.js')),
			__memo(() => import('./chunks/8-BaipC71M.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/datenschutz",
				pattern: /^\/datenschutz\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/faq",
				pattern: /^\/faq\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/impressum",
				pattern: /^\/impressum\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/kontakt",
				pattern: /^\/kontakt\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/leistungen",
				pattern: /^\/leistungen\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/projekte",
				pattern: /^\/projekte\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
