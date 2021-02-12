import styled, { StyledComponent } from 'styled-components'

import ThemeInterface from '../interfaces/themeInterface'

export const StyledProject : StyledComponent<"section", any> = styled.section`
    color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.dark};
    display: grid;
    row-gap: 10px;
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
    list-style-type: none;
`
interface StyledTechnologyProps { size : string }

export const StyledTechnology : StyledComponent<"li", any, StyledTechnologyProps> = styled.li<StyledTechnologyProps>`

    display: grid;
    grid-template-columns: repeat(2, max-content);
    align-items: center;
    column-gap: 10px;
    margin: 10px;

    & > *:nth-child(1) {
        width: ${({ size }) => size};
        height: ${({ size }) => size};
    }
`

export const StyledSpan : StyledComponent<"span", any> = styled.span`
    font-weight: 600;
    font-size: 18px;
`

export const StyledButton : StyledComponent<"button", any> = styled.button`
    border-radius: 3px;
    padding: 10px;
    text-align: center;
    font-weight: 700;
    border: ${({ theme } : { theme : ThemeInterface }) => `2px solid ${theme.colors.dark}`};
    background-color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.light};
    box-shadow: 0 8px 6px -6px black;
    font-size: 17px;
`

export const StyledButtons : StyledComponent<"div", any> = styled.div`
    display: grid;
    row-gap: 10px;
`