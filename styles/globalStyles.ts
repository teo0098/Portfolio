import { createGlobalStyle, GlobalStyleComponent, DefaultTheme } from 'styled-components'

const GlobalStyles : GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle<any>`
    body {
        background-color: ${({ theme }) => theme.colors.light};
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