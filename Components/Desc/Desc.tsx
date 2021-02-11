import DescInterface from '../../interfaces/descInterface'
import * as SC from '../../styled-components/styledDesc'

const Desc : React.FC<DescInterface> = ({ heading, children }) => (
    <SC.StyledDesc>
        <SC.StyledH2> {heading} </SC.StyledH2>
        <SC.StyledP> {children} </SC.StyledP>
    </SC.StyledDesc>
)

export default Desc