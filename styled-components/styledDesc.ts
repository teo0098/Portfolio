import styled, { StyledComponent } from 'styled-components'

import ThemeInterface from '../interfaces/themeInterface'

export const StyledDesc : StyledComponent<"section", any> = styled.section`
    display: grid;
    row-gap: 10px;
    margin-top: 20px;
    color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.dark};
`

export const StyledH2 : StyledComponent<"h2", any> = styled.h2`
    font-size: 35px;
`

export const StyledP : StyledComponent<"p", any> = styled.p`
    font-family: ${({ theme } : { theme : ThemeInterface }) => theme.fonts.balsam};
    font-size: 18px;
`