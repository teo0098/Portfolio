import styled, { StyledComponent } from 'styled-components'

import ThemeInterface from '../interfaces/themeInterface'

export const StyledNavigation : StyledComponent<"header", any> = styled.header`
    height: ${({ theme } : { theme : ThemeInterface }) => theme.heights.navigation};
    padding: 10px 0 10px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 990;

    ${({ theme } : { theme : ThemeInterface }) => theme.media.tablet} {
        padding: 10px 30px;    
    }

    ${({ theme } : { theme : ThemeInterface }) => theme.media.desktop} {
        padding: 10px 50px;    
    }

    ${({ theme } : { theme : ThemeInterface }) => theme.media.laptop} {
        padding: 10px 100px;    
    }
`

export const StyledMenuWrapper : StyledComponent<"div", any> = styled.div`
    display: none;

    ${({ theme } : { theme : ThemeInterface }) => theme.media.tablet} {
        display: block;    
    }
`  