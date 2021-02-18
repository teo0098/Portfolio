import Fade from 'react-reveal/Fade'

import TechnologiesInterface from '../../../../interfaces/technologiesInterface'
import * as SC from '../../../../styled-components/styledTechnologies'

const Technologies : React.FC<TechnologiesInterface> = ({ technologies }) => (
    <SC.StyledTechnologies>
        {technologies.map(({ icon, name, size }) => (
            <li key={name}>
                <Fade bottom friction={1}>
                    <SC.StyledTechnology size={size}>
                        {icon}
                        <SC.StyledSpan> {name} </SC.StyledSpan>
                    </SC.StyledTechnology>
                </Fade>
            </li>
        ))}
    </SC.StyledTechnologies>
)

export default Technologies