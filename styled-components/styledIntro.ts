import styled, { StyledComponent, css } from 'styled-components'

import ThemeInterface from '../interfaces/themeInterface'

export const StyledIntro : StyledComponent<"section", any> = styled.section`
    width: 100%;
    min-height: ${({ theme } : { theme : ThemeInterface }) => `calc(100vh - ${theme.heights.navigation})`};
    position: relative;
    display: grid;
    align-content: center;
    justify-content: center;
    gap: 20px;
    padding: 20px;

    ::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 300px 0 0 100vw;
        border-color: ${({ theme } : { theme : ThemeInterface }) => `transparent transparent transparent ${theme.colors.orange}`};
        z-index: -2;
    }
`

const sharedStyles = css`
    font-family: ${({ theme } : { theme : ThemeInterface }) => theme.fonts.kalam};
    text-align: center;
    color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.dark};
    line-height: 1.1;
`

export const StyledName : StyledComponent<"h1", any> = styled.h1`
    font-size: 70px;
    ${sharedStyles};
`

export const StyledP : StyledComponent<"p", any> = styled.p`
    ${sharedStyles};
    font-size: 40px;
    font-weight: 600;
`