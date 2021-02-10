import styled, { StyledComponent } from 'styled-components'

import ThemeInterface from '../interfaces/themeInterface'

export const StyledDesc : StyledComponent<"section", any> = styled.section`
    display: grid;
    gap: 10px;
`

export const StyledH1 : StyledComponent<"h1", any> = styled.h1`
    color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.dark};
    font-size: 35px;
`

export const StyledP : StyledComponent<"p", any> = styled.p`
    color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.dark};
    font-family: ${({ theme } : { theme : ThemeInterface }) => theme.fonts.balsam};
    font-size: 18px;
`