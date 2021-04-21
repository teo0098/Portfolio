import * as SC from '../../styled-components/styledNavigation'
import Logo from './Logo/Logo'
import Hamburger from './Hamburger/Hamburger'
import Menu from './Menu/Menu'
import useNavigation from '../customHooks/useNavigation'

const Navigation : React.FC = () => {

    const { scrolled } = useNavigation()

    return (
        <>
            <SC.StyledNavigation scrolled={scrolled}>
                <Logo />
                <Hamburger />
                <SC.StyledMenuWrapper>
                    <Menu />
                </SC.StyledMenuWrapper>
            </SC.StyledNavigation>
            <SC.StyledPoint id='navigation__point'></SC.StyledPoint>
        </>
    )
} 

export default Navigation