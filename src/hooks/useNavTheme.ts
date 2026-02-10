import { useEffect, useRef } from "react";
import { useInView } from "motion/react";
import { useNavbar } from "../context/NavbarContext";

type NavTheme = "light" | "dark";

export function useNavTheme(theme: NavTheme) {
    const ref = useRef<HTMLDivElement>(null);
    const { setNavTheme } = useNavbar();

    // Use a margin that triggers when the element is near the top of the viewport
    // "0px 0px -90% 0px" means the element is considered "in view" when its top 10% is visible
    // adjusting to catch the top bar area specifically.
    // Actually, we want to know when this section is UNDER the navbar.
    // The navbar is fixed at top. approx 100px height.
    // margin: "-10% 0px -90% 0px" might work well.

    const isInView = useInView(ref, {
        margin: "-50px 0px -50% 0px", // Trigger when the element hits the top area
        amount: "some"
    });

    useEffect(() => {
        if (isInView) {
            setNavTheme(theme);
        }
    }, [isInView, theme, setNavTheme]);

    return ref;
}
