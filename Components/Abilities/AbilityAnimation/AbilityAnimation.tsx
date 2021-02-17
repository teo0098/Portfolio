import Fade from 'react-reveal/Fade'

import StyledAbilityAnimation from '../../../styled-components/styledAbilityAnimation'

const AbilityAnimation : React.FC = ({ children }) => (
    <Fade bottom friction={1}>
        <StyledAbilityAnimation>
            {children}
        </StyledAbilityAnimation>
    </Fade>
)

export default AbilityAnimation