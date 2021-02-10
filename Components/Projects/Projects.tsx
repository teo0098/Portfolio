import Fade from 'react-reveal/Fade'

import * as SC from '../../styled-components/styledProjects'
import Desc from '../Desc/Desc'

const Projects : React.FC = () => (
    <SC.StyledProjects>
        <Fade right fraction={0.8}>
            <Desc heading='Projects'>
                bla bla bla
            </Desc>
        </Fade>
    </SC.StyledProjects>
)

export default Projects