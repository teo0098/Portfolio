import { createGlobalStyle, GlobalStyleComponent, DefaultTheme } from 'styled-components'
import ThemeInterface from '../interfaces/themeInterface';

const GlobalStyles : GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle<any>`

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.light};
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.dark};
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.dark};
    }

    body {
        background-color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.light};
    }

    a {
        color: inherit;
        text-decoration: none;
    }
    
    * {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;

export default GlobalStyles