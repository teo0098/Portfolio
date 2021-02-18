import styled, { StyledComponent } from 'styled-components'

import ThemeInterface from '../interfaces/themeInterface'

export const StyledOtherContacts : StyledComponent<"ul", any> = styled.ul`
    list-style-type: none;
    color: ${({ theme } : {theme : ThemeInterface}) => theme.colors.dark};
    display: grid;
    row-gap: 30px;    
`

export const StyledOtherContact : StyledComponent<"li", any> = styled.li`
    display: flex;
    align-items: center;
`

export const StyledLink : StyledComponent<"a", any> = styled.a`
    font-size: 22px;
    font-weight: 700;
    text-decoration: underline;
`

export const StyledProfile : StyledComponent<"section", any> = styled.section`
    margin-left: 10px;
`

export const StyledMessage : StyledComponent<"p", any> = styled.p`
    font-family: ${({ theme } : { theme : ThemeInterface }) => theme.fonts.balsam};
    font-size: 18px;
    margin-top: 3px;
`

export const StyledAdditionalData : StyledComponent<"span", any> = styled.span`
    font-weight: 700;
`