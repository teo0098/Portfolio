import * as SC from '../../styled-components/styledNavigation'
import Logo from './Logo/Logo'
import Hamburger from './Hamburger/Hamburger'
import Menu from './Menu/Menu'

const Navigation : React.FC = () => (
    <SC.StyledNavigation>
        <Logo />
        <Hamburger />
        <SC.StyledMenuWrapper>
            <Menu />
        </SC.StyledMenuWrapper>
    </SC.StyledNavigation>
)

export default Navigation