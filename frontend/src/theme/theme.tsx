'use client';

import { createTheme } from "@mui/system";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
        },
        secondary: {
            main: '#',
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
    },
    shape: {
        borderRadius: 8,
    },
    spacing: (factor: number) => `${0.25 * factor}rem`,
})