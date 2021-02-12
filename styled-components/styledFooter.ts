import styled, { StyledComponent } from 'styled-components'

import ThemeInterface from '../interfaces/themeInterface'

const StyledFooter : StyledComponent<"footer", any> = styled.footer`
    background-color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.dark};
    color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.light};
    height: 60px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
`

export default StyledFooter