import { createSlice, current } from "@reduxjs/toolkit";
import { THEMES, LOCAL_STORAGE_KEYS, DEFAULTS } from "../../../variables/variables";
const InitialTheme = () => {
    const alreadySaved = localStorage.getItem(LOCAL_STORAGE_KEYS.THEME);
    return alreadySaved || THEMES.LIGHT;
}

const themeSlice = createSlice({
    name: 'theme',
    initialState : {
        current :InitialTheme()
    },

    reducers : {
        setTheme : (state, action) => {
            state.current = action.payload;
            document.documentElement.setAttribute('data-theme', action.payload);
            localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, action.payload);
        }
    }
})

export const {setTheme} = themeSlice.actions
export default themeSlice.reducer