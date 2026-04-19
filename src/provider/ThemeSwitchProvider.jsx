"use client";
import { ThemeProvider } from "next-themes";

const ThemeSwitchProvider = ({ children }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            {children}
        </ThemeProvider>
    );
};

export default ThemeSwitchProvider;