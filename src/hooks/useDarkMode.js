import { useLocalStorage} from "./useLocalStorage";
import { useState, useEffect } from 'react';

export const useDarkMode = (darkModeBool) => {
    const [storedValue, setStoredValue] = useLocalStorage('darkmode')

    useEffect(() => {
        const isDarkModeOn = window.localStorage.getItem('darkmode') === 'true';

        if(isDarkModeOn) {
            document.body.classList.add("dark-mode");
        }
        else {
            document.body.classList.remove('dark-mode');
        }
    }, [storedValue]);

    return [storedValue, setStoredValue];
};