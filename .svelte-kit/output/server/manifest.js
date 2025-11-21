export const manifest = (() => {
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
		client: {start:"_app/immutable/entry/start.D02j2LVN.js",app:"_app/immutable/entry/app.DbWd2XHI.js",imports:["_app/immutable/entry/start.D02j2LVN.js","_app/immutable/chunks/mxzHo5yi.js","_app/immutable/chunks/CTO0dJwd.js","_app/immutable/entry/app.DbWd2XHI.js","_app/immutable/chunks/CTO0dJwd.js","_app/immutable/chunks/IHki7fMi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/datenschutz","/faq","/impressum","/kontakt","/leistungen","/projekte"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
