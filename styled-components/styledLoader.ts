import styled, { StyledComponent } from 'styled-components'

import ThemeInterface from '../interfaces/themeInterface'

const StyledLoader : StyledComponent<"div", any> = styled.div`
    border: ${({ theme } : { theme : ThemeInterface }) => `8px solid ${theme.colors.darkTransparent}`};
    border-radius: 50%;
    border-top: ${({ theme } : { theme : ThemeInterface }) => `8px solid ${theme.colors.dark}`};;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`

export default StyledLoader