import StyledNavigation from '../../styled-components/styledNavigation'
import Logo from './Logo/Logo'
import Hamburger from './Hamburger/Hamburger'

const Navigation : React.FC = () => (
    <StyledNavigation>
        <Logo />
        <Hamburger />
    </StyledNavigation>
)

export default Navigation