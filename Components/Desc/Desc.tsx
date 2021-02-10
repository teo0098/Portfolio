import DescInterface from '../../interfaces/descInterface'
import * as SC from '../../styled-components/styledDesc'

const Desc : React.FC<DescInterface> = ({ heading, children }) => (
    <SC.StyledDesc>
        <SC.StyledH1> {heading} </SC.StyledH1>
        <SC.StyledP> {children} </SC.StyledP>
    </SC.StyledDesc>
)

export default Desc