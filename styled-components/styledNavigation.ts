import styled, { StyledComponent } from 'styled-components'

import ThemeInterface from '../interfaces/themeInterface'

interface StyledNavigationProps { scrolled : boolean }

export const StyledNavigation : StyledComponent<"header", any, StyledNavigationProps> = styled.header<StyledNavigationProps>`
    height: ${({ theme } : { theme : ThemeInterface }) => theme.heights.navigation};
    padding: 10px 0 10px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 300ms ease-out;

    ${({ theme } : { theme : ThemeInterface }) => theme.media.tablet} {
        position: sticky;
        top: 0;
        left: 0;
        z-index: 990;
        padding: 10px 30px;
        background-color: ${({ theme, scrolled } : { theme : ThemeInterface, scrolled : boolean }) => scrolled ? theme.colors.darkerLight : 'transparent'};
        box-shadow: ${({ theme, scrolled } : { theme : ThemeInterface, scrolled : boolean }) => scrolled ? `0 1px 5px 1px ${theme.colors.darkTransparent}` : 'none'};
        height: ${({ theme, scrolled } : { theme : ThemeInterface, scrolled : boolean }) => scrolled ? `calc(${theme.heights.navigation} - 10px)` : theme.heights.navigation};    

        & > *:nth-child(1) {
            transition: all 300ms ease-out;
            transform: ${({ scrolled }) => scrolled ? 'scale(0.9)' : 'scale(1)'};
        }
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

export const StyledPoint : StyledComponent<"div", any> = styled.div`
    position: absolute;
    width: 1px;
    height: 1px;
    top: 30px;
    left: 0;
    background-color: transparent;
`