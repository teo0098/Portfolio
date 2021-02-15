import * as SC from '../../styled-components/styledIntro'
import StyledButton from '../../styled-components/styledButton'
import Slider from './Slider/Slider'

const Intro : React.FC = () => (
    <SC.StyledIntro id='Home'>
        <SC.StyledName>Teodor<br/>Tkaczyk</SC.StyledName>
        <Slider />
        <SC.StyledP>Frontend Developer</SC.StyledP>
        <SC.StyledScrollLink
            to="Contact"
            spy={true}
            smooth={true}
            offset={-90}
            duration={1000}>
            <StyledButton>Contact</StyledButton>
        </SC.StyledScrollLink>
    </SC.StyledIntro>
)

export default Intro