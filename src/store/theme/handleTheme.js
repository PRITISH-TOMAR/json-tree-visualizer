import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "./themeSlice";
import { THEMES, LOCAL_STORAGE_KEYS } from "../../../variables/variables";

export const useTheme = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.current);

    useEffect(() => {
        const savedTheme = localStorage.getItem(LOCAL_STORAGE_KEYS.THEME);
        if (savedTheme) {
            dispatch(setTheme(savedTheme));
        } else {
            localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, THEMES.LIGHT);
            dispatch(setTheme(THEMES.LIGHT));
        }
    }, [dispatch]);


    useEffect(() => {
        if (theme) {
            document.documentElement.setAttribute(LOCAL_STORAGE_KEYS.THEME, theme);
            localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, theme);
        }
    }, [theme]);

    const handleThemeChange = (e) => {
        const selectedTheme = e;
        dispatch(setTheme(selectedTheme));
    };

    return { theme, handleThemeChange };
};
