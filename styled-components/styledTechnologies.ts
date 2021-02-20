import styled, { StyledComponent } from 'styled-components'

import ThemeInterface from '../interfaces/themeInterface'

export const StyledTechnologies : StyledComponent<"ul", any> = styled.ul`
    list-style-type: none;
    display: grid;
    row-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));
    margin: 20px 0;
    align-items: center;

    ${({ theme } : { theme : ThemeInterface }) => theme.media.tablet} {
        margin: 0;
    }

    ${({ theme } : { theme : ThemeInterface }) => theme.media.handWatches} {
        grid-template-columns: 100%;
    }
`
interface StyledTechnologyProps { size : string }

export const StyledTechnology : StyledComponent<"div", any, StyledTechnologyProps> = styled.div<StyledTechnologyProps>`
    display: grid;
    grid-template-columns: repeat(2, max-content);
    align-items: center;
    column-gap: 10px;

    & > *:nth-child(1) {
        width: ${({ size }) => size};
        height: ${({ size }) => size};
    }
`

export const StyledSpan : StyledComponent<"span", any> = styled.span`
    font-weight: 600;
    font-size: 18px;
`