import { AnimatePresence } from 'framer-motion'

import MenuInterface from '../../../interfaces/menuInterface'
import * as SC from '../../../styled-components/StyledMenu'
import { ulVariant, liVariant } from './animationVariants'

const Menu : React.FC<MenuInterface> = ({ menu, setMenu }) => (
    <nav>
        <AnimatePresence>
            {menu && (
                <SC.StyledUL variants={ulVariant} initial='hidden' animate='visible' exit='hidden'>
                    <SC.StyledLI variants={liVariant} onClick={() => alert(10)}>Home</SC.StyledLI>
                    <SC.StyledLI variants={liVariant} onClick={() => alert(20)}>Aptitudes</SC.StyledLI>
                    <SC.StyledLI variants={liVariant} onClick={() => alert(30)}>Projects</SC.StyledLI>
                    <SC.StyledLI variants={liVariant} onClick={() => alert(40)}>Contact</SC.StyledLI>
                </SC.StyledUL>
            )}
        </AnimatePresence>
    </nav>
)

export default Menu