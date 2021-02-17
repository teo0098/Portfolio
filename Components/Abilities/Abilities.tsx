import Fade from 'react-reveal/Fade'

import * as SC from '../../styled-components/styledAbilities'
import Desc from '../Desc/Desc'
import HTML from '../../assets/html-5.svg'
import CSS from '../../assets/css-3.svg'
import JS from '../../assets/javascript.svg'
import REACT from '../../assets/react.svg'
import REDUX from '../../assets/redux.svg'
import SASS from '../../assets/sass.svg'
import TS from '../../assets/typescript-icon.svg'
import STYLED_COMPONENTS from '../../assets/styled-components.svg'
import REACT_SPRING from '../../assets/react-spring.svg'
import FRAMER_MOTION from '../../assets/framer.svg'
import MATERIAL_UI from '../../assets/material-ui.svg'
import NODE from '../../assets/nodejs.svg'
import EXPRESS from '../../assets/express.svg'
import MONGO from '../../assets/mongodb.svg'
import PHP from '../../assets/php.svg'
import MYSQL from '../../assets/mysql.svg'
import JWT from '../../assets/jsonwebtokens.svg'
import APOLLO from '../../assets/apollostack.svg'
import GRAPHQL from '../../assets/graphql.svg'
import NEXTJS from '../../assets/nextjs-icon.svg'
import CYPRESS from '../../assets/cypress.svg'
import SUCCESS from '../../assets/success.svg'
import GIT from '../../assets/git-icon.svg'
import AbilityAnimation from './AbilityAnimation/AbilityAnimation'
import CHARACTER_2 from '../../assets/character_2.svg'

const Abilities : React.FC = () => (
    <SC.StyledAbilities id='Abilities'>
        <Fade left friction={0.8}>
            <SC.StyledSVGCharacter>
                <CHARACTER_2 />
            </SC.StyledSVGCharacter>
        </Fade>
        <SC.StyledAbilitiesWrapper>
            <Desc heading='Abilities'>
                Abilities listed below have taken me some time to assimilate and to be honest I'm still learning and practising them.
                These abilities have been learnt during making my own projects or performing some programming assignments. 
            </Desc>
            <SC.StyledUL>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> HTML 5 </SC.StyledSpan> <SC.StyledSVG> <HTML /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> CSS 3 </SC.StyledSpan> <SC.StyledSVG> <CSS /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> SASS/SCSS </SC.StyledSpan> <SC.StyledSVG> <SASS /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> Styled Components </SC.StyledSpan> <SC.StyledSVG> <STYLED_COMPONENTS /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> JavaScript </SC.StyledSpan> <SC.StyledSVG> <JS /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> TypeScript </SC.StyledSpan> <SC.StyledSVG> <TS /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> React </SC.StyledSpan> <SC.StyledSVG> <REACT /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> React Spring </SC.StyledSpan> <SC.StyledSVG> <REACT_SPRING /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> Framer Motion </SC.StyledSpan> <SC.StyledSVG> <FRAMER_MOTION /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> Material UI </SC.StyledSpan> <SC.StyledSVG> <MATERIAL_UI /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> Redux </SC.StyledSpan> <SC.StyledSVG> <REDUX /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> Node.js </SC.StyledSpan> <SC.StyledSVG> <NODE /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> Express.js </SC.StyledSpan> <SC.StyledSVG> <EXPRESS /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> MongoDB </SC.StyledSpan> <SC.StyledSVG> <MONGO /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> Json Web Tokens </SC.StyledSpan> <SC.StyledSVG> <JWT /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> PHP </SC.StyledSpan> <SC.StyledSVG> <PHP /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> MySQL </SC.StyledSpan> <SC.StyledSVG> <MYSQL /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> Apollo Client </SC.StyledSpan> <SC.StyledSVG> <APOLLO /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> GraphQL </SC.StyledSpan> <SC.StyledSVG> <GRAPHQL /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> Next.js </SC.StyledSpan> <SC.StyledSVG> <NEXTJS /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> Cypress </SC.StyledSpan> <SC.StyledSVG> <CYPRESS /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> Git </SC.StyledSpan> <SC.StyledSVG> <GIT /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> Mobile First Design </SC.StyledSpan> <SC.StyledSVG> <SUCCESS /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> BEM </SC.StyledSpan> <SC.StyledSVG> <SUCCESS /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> CSS Modules </SC.StyledSpan> <SC.StyledSVG> <SUCCESS /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> Redux Persist </SC.StyledSpan> <SC.StyledSVG> <SUCCESS /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> Redux Thunk </SC.StyledSpan> <SC.StyledSVG> <SUCCESS /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> Mongoose </SC.StyledSpan> <SC.StyledSVG> <SUCCESS /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> REST API </SC.StyledSpan> <SC.StyledSVG> <SUCCESS /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> Final Form </SC.StyledSpan> <SC.StyledSVG> <SUCCESS /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> React Hook Form </SC.StyledSpan> <SC.StyledSVG> <SUCCESS /> </SC.StyledSVG> </AbilityAnimation>
                </li>
                <li>
                    <AbilityAnimation> <SC.StyledSpan> Axios </SC.StyledSpan> <SC.StyledSVG> <SUCCESS /> </SC.StyledSVG> </AbilityAnimation>
                </li>
            </SC.StyledUL>
        </SC.StyledAbilitiesWrapper>
    </SC.StyledAbilities>
)

export default Abilities