import styled, { StyledComponent } from 'styled-components'

import ThemeInterface from '../interfaces/themeInterface'

export const StyledContact : StyledComponent<"div", any> = styled.div`
    padding: 30px 10px;
    position: relative;
    display: grid;
    row-gap: 30px;

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
        z-index: 1;
    }
`

interface StyledStatusProps { open : boolean, theme : ThemeInterface } 

export const StyledStatus : StyledComponent<"section", any, StyledStatusProps> = styled.section<StyledStatusProps>`
    border: ${({ theme, open } : StyledStatusProps) => open ? `3px solid ${theme.colors.success}` : `3px solid ${theme.colors.error}`};
    border-radius: 5px;
    padding: 20px 10px;
    color: ${({ theme } : {theme : ThemeInterface}) => theme.colors.dark};
    text-align: center;
`

export const StyledH4 : StyledComponent<"h4", any> = styled.h4`
    font-size: 20px;
    font-weight: 500;
`

export const StyledP : StyledComponent<"p", any> = styled.p`
    font-size: 22px;
    font-weight: 700;
`

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

`

export const StyledProfile : StyledComponent<"section", any> = styled.section`
    margin-left: 10px;
`

export const StyledName : StyledComponent<"h4", any> = styled.h4`
    font-size: 22px;
`

export const StyledMessage : StyledComponent<"p", any> = styled.p`
    font-family: ${({ theme } : { theme : ThemeInterface }) => theme.fonts.balsam};
    font-size: 18px;
    margin-top: 3px;
`

export const StyledAdditionalData : StyledComponent<"span", any> = styled.span`
    font-weight: 700;
`