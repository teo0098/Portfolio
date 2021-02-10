import styled, { StyledComponent, keyframes } from 'styled-components'

import ThemeInterface from '../interfaces/themeInterface'

const animateButton = (color : string) => keyframes`
    0% {
        box-shadow: 0 0 0 0 ${color};
    }

    70% {
        box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
    }

    100% {
        box-shadow: 0 0 0 0 0 rgba(0, 0, 0, 0);
    }
`

const StyledButton : StyledComponent<"button", any> = styled.button`
    outline: none;
    border: none;
    justify-self: center;
    padding: 15px 30px;
    font-size: 20px;
    border-radius: 40px;
    background-color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.dark};
    color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.light};
    cursor: pointer;
    letter-spacing: 1px;
	animation: ${({ theme } : { theme : ThemeInterface }) => animateButton(theme.colors.darkTransparent)} 3s infinite;
`

export default StyledButton