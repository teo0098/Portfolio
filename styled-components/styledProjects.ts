import styled, { StyledComponent } from 'styled-components'

import ThemeInterface from '../interfaces/themeInterface'

export const StyledProjects : StyledComponent<"div", any> = styled.div`
    padding: 30px 10px;
    position: relative;
    background-color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.orange};

    ::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 100vw 50px 0;
        border-color: ${({ theme } : { theme : ThemeInterface }) => `transparent ${theme.colors.light} transparent transparent`};
        z-index: 1;
    }
`

export const StyledA : StyledComponent<"a", any> = styled.a`
    text-decoration: underline;
    color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.dark};
`

export const StyledProjectsWrapper : StyledComponent<"div", any> = styled.div`
    display: grid;
    row-gap: 30px;
    margin-top: 30px;
`