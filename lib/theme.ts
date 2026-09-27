export const THEME_COOKIE = "duwinko_theme";
export const DARK_THEME = "duwinko";
export const LIGHT_THEME = "duwinko-light";

export type ThemeName = typeof DARK_THEME | typeof LIGHT_THEME;

export function isThemeName(value: string | undefined | null): value is ThemeName {
  return value === DARK_THEME || value === LIGHT_THEME;
}

export function resolveTheme(value: string | undefined | null): ThemeName {
  return value === LIGHT_THEME ? LIGHT_THEME : DARK_THEME;
}

export const themeInitScript = `(function(){try{var m=document.cookie.match(/(?:^|; )${THEME_COOKIE}=([^;]*)/);var t=m?decodeURIComponent(m[1]):"${DARK_THEME}";if(t!=="${LIGHT_THEME}")t="${DARK_THEME}";document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;
