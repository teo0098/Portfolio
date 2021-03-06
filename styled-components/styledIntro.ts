import styled, { StyledComponent, css, keyframes } from 'styled-components'
import { Link } from 'react-scroll'

import ThemeInterface from '../interfaces/themeInterface'

export const StyledIntroWrapper : StyledComponent<"div", any> = styled.div`
    width: 100%;
    min-height: ${({ theme } : { theme : ThemeInterface }) => `calc(100vh - ${theme.heights.navigation})`};
    position: relative;
    overflow-x: hidden;

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

    ${({ theme } : { theme : ThemeInterface }) => theme.media.tablet} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
    }

    ${({ theme } : { theme : ThemeInterface }) => theme.media.desktop} {
        padding: 0 100px;
    }
`

const fadeInIntro = () => keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

export const StyledIntro : StyledComponent<"section", any> = styled.section`
    display: grid;
    align-content: center;
    justify-content: center;
    padding: 20px;
    row-gap: 20px;
    min-height: ${({ theme } : { theme : ThemeInterface }) => `calc(100vh - ${theme.heights.navigation})`};
    animation: ${fadeInIntro} 500ms ease-out 300ms forwards;
    opacity: 0;
    
    ${({ theme } : { theme : ThemeInterface }) => theme.media.tablet} {
        justify-content: flex-start;
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

export const StyledScrollLink = styled(Link)`
    display: block;
    margin: 0 auto;
`

const fadeInSVG = () => keyframes`
    0% {
        opacity: 0;
        margin-right: -100px;
    }
    100% {
        opacity: 1;
        margin-right: 0;
    }
`

export const StyledSVG : StyledComponent<"div", any> = styled.div`
    display: none;
    animation: ${fadeInSVG} 500ms ease-out 800ms forwards;
    opacity: 0;

    ${({ theme } : { theme : ThemeInterface }) => theme.media.tablet} {
        display: block;
        & > * {
            width: 400px;
            height: 100%;
        }
    }
`