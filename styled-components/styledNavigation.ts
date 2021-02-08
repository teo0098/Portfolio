import styled, { StyledComponent } from 'styled-components'

import ThemeInterface from '../interfaces/themeInterface'

const StyledNavigation : StyledComponent<"header", any> = styled.header`
    height: ${({ theme } : { theme : ThemeInterface }) => theme.heights.navigation};
    padding: 10px 0 10px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export default StyledNavigation