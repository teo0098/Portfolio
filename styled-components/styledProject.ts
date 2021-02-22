import styled, { StyledComponent } from 'styled-components'

import ThemeInterface from '../interfaces/themeInterface'

interface OrderProps { index ?: number }

export const StyledProject : StyledComponent<"section", any, OrderProps> = styled.section<OrderProps>`
    color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.dark};
    display: grid;
    row-gap: 10px;

    ${({ theme } : { theme : ThemeInterface }) => theme.media.tablet} {
        row-gap: 30px;
    }

    ${({ theme } : { theme : ThemeInterface }) => theme.media.desktop} {
        display: flex;
        flex-direction: ${({ index }) => index != undefined && index % 2 === 0 ? 'row' : 'row-reverse'};
        justify-content: space-between;
    }
`

export const StyledImg : StyledComponent<"img", any, OrderProps> = styled.img<OrderProps>`
    max-width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: ${({ theme } : { theme : ThemeInterface }) => `20px 20px 12px -12px ${theme.colors.dark}`};

    ${({ theme } : { theme : ThemeInterface }) => theme.media.tablet} {
        margin: 0 auto;
    }

    ${({ theme } : { theme : ThemeInterface }) => theme.media.desktop} {
        box-shadow: ${({ index, theme } : { index ?: number, theme : ThemeInterface }) => index != undefined && index % 2 === 0 ? `20px 20px 12px -12px ${theme.colors.dark}` : `-20px 20px 12px -12px ${theme.colors.dark}`};
    }
` 

export const StyledH3 : StyledComponent<"h3", any> = styled.h3`
    font-size: 30px;
`

export const StyledDesc : StyledComponent<"p", any> = styled.p`
    font-size: 18px;
    font-family: ${({ theme } : { theme : ThemeInterface }) => theme.fonts.balsam};
`

export const StyledButton : StyledComponent<"button", any> = styled.button`
    border-radius: 3px;
    padding: 10px;
    text-align: center;
    font-weight: 700;
    border: ${({ theme } : { theme : ThemeInterface }) => `1px solid ${theme.colors.dark}`};
    background-color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.light};
    box-shadow: ${({ theme } : { theme : ThemeInterface }) => `0 8px 6px -6px ${theme.colors.dark}`};
    font-size: 17px;
    transition: all 50ms linear;

    :nth-child(1) {
        background-color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.dark};
        color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.light};
    }

    ${({ theme } : { theme : ThemeInterface }) => theme.media.tablet} {
        padding: 15px;

        :hover {
            transform: scale(0.95);
            box-shadow: ${({ theme } : { theme : ThemeInterface }) => `0 16px 12px -12px ${theme.colors.dark}`};
        }
    }
`

export const StyledButtons : StyledComponent<"div", any> = styled.div`
    display: grid;
    row-gap: 10px;

    ${({ theme } : { theme : ThemeInterface }) => theme.media.tablet} {
        display: grid;
        grid-template-columns: repeat(2, max-content);
        column-gap: 10px;
        justify-content: center;
    }
`

export const StyledSection : StyledComponent<"section", any> = styled.section`
    display: grid;
    row-gap: 10px;
`

export const StyledInfoWrapper : StyledComponent<"div", any> = styled.div`
    display: grid;
    row-gap: 10px;

    ${({ theme } : { theme : ThemeInterface }) => theme.media.tablet} {
        row-gap: 30px;
    }

    ${({ theme } : { theme : ThemeInterface }) => theme.media.desktop} {
        width: 60%;
        margin: 0 20px;
    }
`