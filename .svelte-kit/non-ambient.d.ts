
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
		RouteId(): "/" | "/locations" | "/profile" | "/shop";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/locations": Record<string, never>;
			"/profile": Record<string, never>;
			"/shop": Record<string, never>
		};
		Pathname(): "/" | "/locations" | "/locations/" | "/profile" | "/profile/" | "/shop" | "/shop/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/assets/cities/ACoruna.png" | "/assets/cities/Lugo.png" | "/assets/cities/Pontevedra.png" | "/assets/cities/Santiago_de_Compostela.png" | "/assets/cities/Vigo.png" | "/assets/cities/Vilagarcia_de_Arousa.png" | "/assets/fondoToday.png" | "/assets/galicianSky_logo.svg" | "/assets/locations_icon.svg" | "/assets/minicities/ACoruna.png" | "/assets/minicities/Lugo.png" | "/assets/minicities/Pontevedra.png" | "/assets/minicities/Santiago_de_Compostela.png" | "/assets/minicities/Vigo.png" | "/assets/minicities/Vilagarcia_de_Arousa.png" | "/assets/profile_icon.svg" | "/assets/shop_icon.svg" | "/assets/sun-light.svg" | "/assets/weather/01d.gif" | "/assets/weather/01n.gif" | "/assets/weather/02d.gif" | "/assets/weather/02n.gif" | "/assets/weather/03d.gif" | "/assets/weather/03n.gif" | "/assets/weather/04d.gif" | "/assets/weather/04n.gif" | "/assets/weather/09d.gif" | "/assets/weather/09n.gif" | "/assets/weather/10d.gif" | "/assets/weather/10n.gif" | "/assets/weather/11d.gif" | "/assets/weather/11n.gif" | "/assets/weather/13d.gif" | "/assets/weather/13n.gif" | "/assets/weather/50d.gif" | "/assets/weather/50n.gif" | "/assets/weather/unknown.gif" | "/fonts/Montserrat-VariableFont_wght.ttf" | "/robots.txt" | string & {};
	}
}