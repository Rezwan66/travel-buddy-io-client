import { useEffect, useState } from "react";

export const useDarkMode = () => {
    const [mode, setMode] = useState('light');
    const handleChangeTheme = () => {
        const html = document.documentElement;
        if (mode === 'light') {
            html.classList.remove('light');
            html.classList.add('dark');
            setMode('dark');
            localStorage.setItem('mode', 'dark');
        } else {
            html.classList.add('light');
            html.classList.remove('dark');
            setMode('light');
            localStorage.setItem('mode', 'light');
        }
    };

    useEffect(() => {
        const currentMode = localStorage.getItem('mode') || 'light';
        document.documentElement.classList.add(currentMode);
        setMode(currentMode);
    }, []);

    return { handleChangeTheme, mode }
}