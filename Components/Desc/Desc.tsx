import Fade from 'react-reveal/Fade'

import DescInterface from '../../interfaces/descInterface'
import * as SC from '../../styled-components/styledDesc'

const Desc : React.FC<DescInterface> = ({ heading, children }) => (
    <Fade fraction={0.8}>
        <SC.StyledDesc>
            <SC.StyledH2> {heading} </SC.StyledH2>
            <SC.StyledP> {children} </SC.StyledP>
        </SC.StyledDesc>
    </Fade>
)

export default Desc