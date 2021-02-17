import styled, { StyledComponent } from 'styled-components'

const StyledAbilityAnimation : StyledComponent<"div", any> = styled.div`
    display: grid;
    grid-template-columns: repeat(2, max-content);
    column-gap: 10px;
    align-items: center;
`

export default StyledAbilityAnimation