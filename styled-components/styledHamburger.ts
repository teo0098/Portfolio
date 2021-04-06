import styled, { StyledComponent, css } from 'styled-components'
import { motion } from 'framer-motion'

import ThemeInterface from '../interfaces/themeInterface'

const sharedStyles = css`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1000;
`

export const StyledHamburgerWrapper : StyledComponent<"div", any> = styled.div`
    width: 60px;
    height: ${({ theme } : { theme : ThemeInterface }) => theme.heights.navigation};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
`

interface StyledCircleProps { menu : boolean }

export const StyledCircle : StyledComponent<"div", any, StyledCircleProps> = styled.div<StyledCircleProps>`
    ${sharedStyles};

    ::after {
        content: '';
        width: 1000px;
        height: 1000px;
        position: fixed;
        top: 0;
        right: 0;
        z-index: -1000;
        transition: all 500ms ease-out;
        transition-delay: ${({ menu }) => menu ? '0' : '500ms'};
        background-color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.orange};
        transform: ${({ menu }) => menu ? 'translate(0, 0)' : 'translate(900px, -840px)'};
        border-bottom-left-radius: 20%;
    }

    ${({ theme } : { theme : ThemeInterface }) => theme.media.tablet} {
        display: none;
    }
`

interface StyledHamburgerDashProps extends StyledCircleProps { item : number }

export const StyledHamburgerDash : StyledComponent<"div", any, StyledHamburgerDashProps> = styled('div')<StyledHamburgerDashProps>`
    width: 35px;
    height: 5px;
    border-radius: 5px;
    background-color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.dark};
    position: relative;
    transition: all 300ms ease-out;
    ${({ menu, item }) => !menu && item === 1 && `
        margin-bottom: 3px;
    `}
    ${({ menu, item }) => !menu && item === 3 && `
        margin-top: 3px;
    `}
    ${({ menu, item }) => menu && item === 2 && `
        margin-right: 200%;
    `}
    ${({ menu, item }) => !menu && item === 2 && `
        transition-delay: 150ms;
    `}
    ${({ menu, item }) => menu && item === 1 && `
        transform: rotate(45deg) translateY(6px);
    `}
    ${({ menu, item }) => menu && item === 3 && `
        transform: rotate(-45deg) translateY(-6px);
    `}
    ${({ menu, item }) => menu && (item === 3 || item === 1) && `
        transition-delay: 150ms;
    `}
`

export const StyledWrapper : StyledComponent<"div", any> = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    overflow-y: auto;
`

export const StyledLogoWrapper = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    padding: 15px 10px;
`

export const StyledMenuWrapper : StyledComponent<"div", any> = styled.div`
    position: absolute;
    top: ${({ theme } : { theme : ThemeInterface }) => `calc(${theme.heights.navigation} + 30px)`};
    padding-bottom: 10px;
    left: 0;
    width: 100%;
`

export const StyledShadow : StyledComponent<"div", any> = styled.div`
    ${sharedStyles};
    width: 100%;
    filter: ${({ theme } : { theme : ThemeInterface }) =>  `drop-shadow(-1px 1px 2px ${theme.colors.dark})`};
`