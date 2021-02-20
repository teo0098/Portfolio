import styled, { StyledComponent } from 'styled-components'

import ThemeInterface from '../interfaces/themeInterface'

const StyledAbilityAnimation : StyledComponent<"div", any> = styled.div`
    display: grid;
    grid-template-columns: repeat(2, max-content);
    column-gap: 10px;
    align-items: center;

    ${({ theme } : { theme : ThemeInterface }) => theme.media.handWatches} {
        grid-template-columns: repeat(2, min-content);
    }
`

export default StyledAbilityAnimation