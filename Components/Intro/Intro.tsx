import * as SC from '../../styled-components/styledIntro'
import StyledButton from '../../styled-components/styledButton'
import Slider from './Slider/Slider'

const Intro : React.FC = () => (
    <SC.StyledIntro>
        <SC.StyledName>Teodor<br/>Tkaczyk</SC.StyledName>
        <Slider />
        <SC.StyledP>Frontend Developer</SC.StyledP>
        <StyledButton>Contact</StyledButton>
    </SC.StyledIntro>
)

export default Intro