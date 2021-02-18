import { useState, memo } from 'react'
import { AnimatePresence } from 'framer-motion'

import * as SC from '../../../styled-components/styledHamburger'
import Logo from '../Logo/Logo'
import logoVariants from './animationVariants'
import Menu from '../Menu/Menu'

const Hamburger : React.FC = () => {

    const [menu, setMenu] = useState<boolean>(false)
  
    return (
        <SC.StyledShadow>
            <SC.StyledCircle menu={menu}>
                <SC.StyledHamburgerWrapper onClick={() => setMenu(prevState => !prevState)}>
                    <SC.StyledHamburgerDash item={1} menu={menu}></SC.StyledHamburgerDash>
                    <SC.StyledHamburgerDash item={2} menu={menu}></SC.StyledHamburgerDash>
                    <SC.StyledHamburgerDash item={3} menu={menu}></SC.StyledHamburgerDash>
                </SC.StyledHamburgerWrapper>
                <SC.StyledWrapper>
                    <AnimatePresence>
                        {menu && (
                            <SC.StyledLogoWrapper key='menu' variants={logoVariants} initial='hidden' animate='visible' exit='hidden'>
                                <Logo />
                            </SC.StyledLogoWrapper>
                        )}
                    </AnimatePresence>
                    <SC.StyledMenuWrapper>
                        <Menu mobile menu={menu} setMenu={setMenu} />
                    </SC.StyledMenuWrapper>
                </SC.StyledWrapper>
            </SC.StyledCircle>
        </SC.StyledShadow>
    )
} 

export default memo(Hamburger)