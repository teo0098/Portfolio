import styled, { StyledComponent } from 'styled-components'

import ThemeInterface from '../interfaces/themeInterface'

export const StyledSection : StyledComponent<"section", any> = styled.section`
    display: grid;
    grid-template-columns: repeat(2, min-content);
    column-gap: 10px;
    align-items: center;
`
export const StyledLogo : StyledComponent<"img", any> = styled.img`
    width: 60px;
    height: 60px;
`
export const StyledH3 : StyledComponent<"h3", any> = styled.h3`
    line-height: 1.1;
    letter-spacing: 0.5px;
    color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.dark};
    font-size: 20px;
`