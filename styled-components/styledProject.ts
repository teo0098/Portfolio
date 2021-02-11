import styled, { StyledComponent } from 'styled-components'

import ThemeInterface from '../interfaces/themeInterface'

export const StyledProject : StyledComponent<"section", any> = styled.section`
    color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.dark};
`

export const StyledImg : StyledComponent<"img", any> = styled.img`
    max-width: 100%;
    height: auto;
    object-fit: cover;
    display: none;
` 

export const StyledH3 : StyledComponent<"h3", any> = styled.h3`
    font-size: 25px;
`

export const StyledDesc : StyledComponent<"p", any> = styled.p`
    font-size: 18px;
    font-family: ${({ theme } : { theme : ThemeInterface }) => theme.fonts.balsam};
`

export const StyledTechnologies : StyledComponent<"ul", any> = styled.ul`

`


export const StyledTechnology : StyledComponent<"li", any> = styled.li`

`

export const StyledSpan : StyledComponent<"span", any> = styled.span`

`

export const StyledButton : StyledComponent<"button", any> = styled.button`

`

export const StyledButtons : StyledComponent<"div", any> = styled.div`

`