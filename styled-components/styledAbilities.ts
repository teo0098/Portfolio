import styled, { StyledComponent } from 'styled-components'

import ThemeInterface from '../interfaces/themeInterface'

export const StyledAbilities : StyledComponent<"div", any> = styled.div`
    padding: 30px 10px;
    position: relative;

    ::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 100vw 50px 0;
        border-color: ${({ theme } : { theme : ThemeInterface }) => `transparent ${theme.colors.orange} transparent transparent`};
        z-index: -2;
    }

    ${({ theme } : { theme : ThemeInterface }) => theme.media.tablet} {
        padding: 30px 20px;
    }

    ${({ theme } : { theme : ThemeInterface }) => theme.media.desktop} {
        padding: 30px 30px;
    }

    ${({ theme } : { theme : ThemeInterface }) => theme.media.laptop} {
        display: flex;
        align-items: flex-start;
        padding: 30px 50px;
        justify-content: space-between;
    }
`

export const StyledUL : StyledComponent<"ul", any> = styled.ul`
    list-style-type: none;
    margin-top: 40px;
    display: grid;
    row-gap: 20px;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    align-items: center;
`

export const StyledLI : StyledComponent<"li", any> = styled.li`
    display: grid;
    grid-template-columns: repeat(2, max-content);
    column-gap: 10px;
    align-items: center;
`

export const StyledSpan : StyledComponent<"span", any> = styled.span`
    order: 2;
    font-weight: 600;
    font-size: 18px;
    color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.dark};
`

export const StyledSVG : StyledComponent<"div", any> = styled.div`
    order: 1;
`

export const StyledAbilitiesWrapper : StyledComponent<"div", any> = styled.div`
    ${({ theme } : { theme : ThemeInterface }) => theme.media.laptop} {
        padding: 0 80px;
        width: 75%;
    }
`

export const StyledSVGCharacter : StyledComponent<"div", any> = styled.div`
    display: none;

    ${({ theme } : { theme : ThemeInterface }) => theme.media.laptop} {
        display: block;

        & > * {
            width: 300px;
            height: 100%;
        }
    }
`