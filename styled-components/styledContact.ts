import styled, { StyledComponent, css } from 'styled-components'

import ThemeInterface from '../interfaces/themeInterface'

const sharedStyles = css`
    display: grid;
    row-gap: 30px;
`

export const StyledContact : StyledComponent<"div", any> = styled.div`
    padding: 30px 10px;
    position: relative;
    ${sharedStyles};

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

    ${({ theme } : { theme : ThemeInterface }) => theme.media.tablet} {
        padding: 30px 20px;
    }

    ${({ theme } : { theme : ThemeInterface }) => theme.media.desktop} {
        padding: 30px 30px;
    }

    ${({ theme } : { theme : ThemeInterface }) => theme.media.laptop} {
        padding: 30px 50px;
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

export const StyledH3 : StyledComponent<"h3", any> = styled.h3`
    font-size: 20px;
    font-weight: 500;
`

export const StyledP : StyledComponent<"p", any> = styled.p`
    font-size: 22px;
    font-weight: 700;
`

export const StyledContactWrapper : StyledComponent<"div", any> = styled.div`
    ${sharedStyles};

    ${({ theme } : { theme : ThemeInterface }) => theme.media.tablet} {
        align-items: flex-start;
        grid-template-columns: repeat(2, 48%);
        column-gap: 20px;
        justify-content: space-between;
    }

    ${({ theme } : { theme : ThemeInterface }) => theme.media.desktop} {
        grid-template-columns: repeat(2, 45%);
    }

`

export const StyledDiv : StyledComponent<"div", any> = styled.div`
    ${sharedStyles};
`