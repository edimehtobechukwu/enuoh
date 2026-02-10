import { createContext, useContext, useState, ReactNode } from "react";

type NavTheme = "light" | "dark";

interface NavbarContextType {
    navTheme: NavTheme;
    setNavTheme: (theme: NavTheme) => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export function NavbarProvider({ children }: { children: ReactNode }) {
    const [navTheme, setNavTheme] = useState<NavTheme>("dark");

    return (
        <NavbarContext.Provider value={{ navTheme, setNavTheme }}>
            {children}
        </NavbarContext.Provider>
    );
}

export function useNavbar() {
    const context = useContext(NavbarContext);
    if (context === undefined) {
        throw new Error("useNavbar must be used within a NavbarProvider");
    }
    return context;
}
