
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/datenschutz" | "/faq" | "/impressum" | "/kontakt" | "/leistungen" | "/projekte";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/datenschutz": Record<string, never>;
			"/faq": Record<string, never>;
			"/impressum": Record<string, never>;
			"/kontakt": Record<string, never>;
			"/leistungen": Record<string, never>;
			"/projekte": Record<string, never>
		};
		Pathname(): "/" | "/datenschutz" | "/faq" | "/impressum" | "/kontakt" | "/leistungen" | "/projekte";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.ico" | "/robots.txt" | "/sitemap.xml";
	}
}