import styled, { StyledComponent } from 'styled-components'

import ThemeInterface from '../interfaces/themeInterface'

export const StyledAbilities : StyledComponent<"div", any> = styled.div`
    padding: 20px 10px;
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

`

export const StyledLI : StyledComponent<"li", any> = styled.li`
    
`