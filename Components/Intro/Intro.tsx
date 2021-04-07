import * as SC from '../../styled-components/styledIntro'
import StyledButton from '../../styled-components/styledButton'
import Slider from './Slider/Slider'
import CHARACTER_1 from '../../assets/character_1.svg'

const Intro : React.FC = () => (
    <SC.StyledIntroWrapper id='Home' className='scroll__point' data-index='0'>
        <SC.StyledIntro>
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
        <SC.StyledSVG>
            <CHARACTER_1 />
        </SC.StyledSVG>
    </SC.StyledIntroWrapper>
)

export default Intro