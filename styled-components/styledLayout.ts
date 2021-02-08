import styled, { StyledComponent } from 'styled-components'

const StyledLayout : StyledComponent<"div", any> = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
`

export default StyledLayout