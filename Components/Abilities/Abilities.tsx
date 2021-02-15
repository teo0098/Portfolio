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
        <SC.StyledSVGCharacter>
            <CHARACTER_2 />
        </SC.StyledSVGCharacter>
        <SC.StyledAbilitiesWrapper>
            <Desc heading='Abilities'>
                Abilities listed below have taken me some time to assimilate and to be honest I'm still learning and practising them.
                These abilities have been learnt during making my own projects or performing some programming assignments. 
            </Desc>
            <SC.StyledUL>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> HTML 5 </SC.StyledSpan> <SC.StyledSVG> <HTML /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> CSS 3 </SC.StyledSpan> <SC.StyledSVG> <CSS /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> SASS/SCSS </SC.StyledSpan> <SC.StyledSVG> <SASS /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> Styled Components </SC.StyledSpan> <SC.StyledSVG> <STYLED_COMPONENTS /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> JavaScript </SC.StyledSpan> <SC.StyledSVG> <JS /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> TypeScript </SC.StyledSpan> <SC.StyledSVG> <TS /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> React </SC.StyledSpan> <SC.StyledSVG> <REACT /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> React Spring </SC.StyledSpan> <SC.StyledSVG> <REACT_SPRING /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> Framer Motion </SC.StyledSpan> <SC.StyledSVG> <FRAMER_MOTION /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> Material UI </SC.StyledSpan> <SC.StyledSVG> <MATERIAL_UI /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> Redux </SC.StyledSpan> <SC.StyledSVG> <REDUX /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> Node.js </SC.StyledSpan> <SC.StyledSVG> <NODE /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> Express.js </SC.StyledSpan> <SC.StyledSVG> <EXPRESS /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> MongoDB </SC.StyledSpan> <SC.StyledSVG> <MONGO /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> Json Web Tokens </SC.StyledSpan> <SC.StyledSVG> <JWT /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> PHP </SC.StyledSpan> <SC.StyledSVG> <PHP /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> MySQL </SC.StyledSpan> <SC.StyledSVG> <MYSQL /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> Apollo Client </SC.StyledSpan> <SC.StyledSVG> <APOLLO /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> GraphQL </SC.StyledSpan> <SC.StyledSVG> <GRAPHQL /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> Next.js </SC.StyledSpan> <SC.StyledSVG> <NEXTJS /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> Cypress </SC.StyledSpan> <SC.StyledSVG> <CYPRESS /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> Git </SC.StyledSpan> <SC.StyledSVG> <GIT /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> Mobile First Design </SC.StyledSpan> <SC.StyledSVG> <SUCCESS /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> BEM </SC.StyledSpan> <SC.StyledSVG> <SUCCESS /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> CSS Modules </SC.StyledSpan> <SC.StyledSVG> <SUCCESS /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> Redux Persist </SC.StyledSpan> <SC.StyledSVG> <SUCCESS /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> Redux Thunk </SC.StyledSpan> <SC.StyledSVG> <SUCCESS /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> Mongoose </SC.StyledSpan> <SC.StyledSVG> <SUCCESS /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> REST API </SC.StyledSpan> <SC.StyledSVG> <SUCCESS /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> Final Form </SC.StyledSpan> <SC.StyledSVG> <SUCCESS /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> React Hook Form </SC.StyledSpan> <SC.StyledSVG> <SUCCESS /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
                <AbilityAnimation>
                    <SC.StyledLI> <SC.StyledSpan> Axios </SC.StyledSpan> <SC.StyledSVG> <SUCCESS /> </SC.StyledSVG> </SC.StyledLI>
                </AbilityAnimation>
            </SC.StyledUL>
        </SC.StyledAbilitiesWrapper>
    </SC.StyledAbilities>
)

export default Abilities