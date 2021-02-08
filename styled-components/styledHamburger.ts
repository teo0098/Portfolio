import styled, { StyledComponent } from 'styled-components'
import ThemeInterface from '../interfaces/themeInterface'

export const StyledHamburgerWrapper : StyledComponent<"div", any> = styled.div`
    width: 60px;
    height: ${({ theme } : { theme : ThemeInterface }) => theme.heights.navigation};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
`

interface StyledProps { menu : boolean }

export const StyledCircle : StyledComponent<"div", any, StyledProps> = styled.div<StyledProps>`
    position: fixed;
    top: 0;
    right: 0;
    background-color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.orange};
    width: ${({ theme, menu } : { theme : ThemeInterface, menu : boolean }) => menu ? `200%` : `${theme.heights.navigation}`};
    height: ${({ theme, menu } : { theme : ThemeInterface, menu : boolean }) => menu ? '120vh' : `calc(${theme.heights.navigation} + 30px)`};
    clip-path: ellipse(100% 100% at 100% 0%);
    background-color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.orange};
    transition: all 500ms ease-out;
    display: flex;
    justify-content: flex-end;
`
export const StyledHamburgerDashes : StyledComponent<"div", any, StyledProps> = styled('div')<StyledProps>`
    width: 35px;
    height: 5px;
    border-radius: 5px;
    background-color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.dark};
    position: relative;
    right: ${({ menu }) => menu ? '100px' : '0px' };
    transition: all 300ms ease-out;

    ::before,
    ::after {
        position: absolute;
        width: inherit;
        height: inherit;
        border-radius: inherit;
        background-color: inherit;
        content: '';
        transition: all 300ms ease-out;
        right: ${({ menu }) => menu ? '-100px' : '0px' };
    }

    ::before {
        top: ${({ menu }) => menu ? '0px' : '8px'};
        transform: ${({ menu }) => menu ? 'rotate(45deg)' : 'none'};
    }
    ::after {
        bottom: ${({ menu }) => menu ? '0px' : '8px'};
        transform: ${({ menu }) => menu ? 'rotate(-45deg)' : 'none'};
    }
`