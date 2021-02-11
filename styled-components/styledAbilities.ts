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
`

export const StyledUL : StyledComponent<"ul", any> = styled.ul`
    list-style-type: none;
    margin-top: 40px;
    display: grid;
    row-gap: 20px;
    justify-content: center;
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