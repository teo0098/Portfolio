import styled, { StyledComponent } from 'styled-components'

import ThemeInterface from '../interfaces/themeInterface'

export const StyledIntro : StyledComponent<"div", any> = styled.div`
    width: 100%;
    height: ${({ theme } : { theme : ThemeInterface }) => `calc(100vh - ${theme.heights.navigation})`};
    position: relative;

    ::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 300px 0 0 100vw;
        border-color: ${({ theme } : { theme : ThemeInterface }) => `transparent transparent transparent ${theme.colors.orange}`};
        z-index: -2;
    }
`