import {defaultTheme, mapTheme, Theme} from "./Theme";
import React, {useEffect} from "react";

export type ThemeProviderProps = {
    theme?: Theme;
    children: React.ReactNode;
}

const ThemeContext = React.createContext<Theme | undefined>(undefined);

export default function ThemeProvider({theme = defaultTheme, children}: ThemeProviderProps) {
    const isRoot = React.useContext(ThemeContext) === undefined;
    const themeRoot = React.useRef<any>();
    useEffect(() => {
        const themeObject = mapTheme(theme);
        if (!themeObject) return;

        const root = themeRoot.current;

        Object.keys(themeObject).forEach((property) => {
            if (property === 'name') {
                return;
            }

            root.style.setProperty(property, themeObject[property]);
            if (isRoot) {
                document.documentElement.style.setProperty(property, themeObject[property]);
            }
        });
    }, [theme]);

    return (
        <div className="min-h-full min-w-full bg-background text-foreground" ref={themeRoot}>
            <ThemeContext.Provider value={theme}>
                {children}
            </ThemeContext.Provider>
        </div>
    )
}

export function useTheme() {
    return React.useContext(ThemeContext);
}