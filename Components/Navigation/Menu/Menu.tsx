import { AnimatePresence } from 'framer-motion'

import MenuInterface from '../../../interfaces/menuInterface'
import * as SC from '../../../styled-components/styledMenu'
import { ulVariant, liVariant } from './animationVariants'

const links : Array<string> = ['Home', 'Abilities', 'Projects', 'Contact']

const Menu : React.FC<MenuInterface> = ({ menu, setMenu, mobile }) => {

    if (mobile) return (
        <nav>
            <AnimatePresence>
                {menu && (
                    <SC.StyledUL key='ul' variants={ulVariant} initial='hidden' animate='visible' exit='hidden'>
                        {links.map(link => (
                            <SC.StyledLI key={link} variants={liVariant}>
                                <SC.StyledScrollLink
                                    onClick={() => setMenu ? setMenu(false) : null}
                                    activeClass='active'
                                    to={link}
                                    spy={true}
                                    smooth={true}
                                    offset={-90}
                                    delay={1200}
                                    duration={1000}>
                                        {link}
                                </SC.StyledScrollLink>
                            </SC.StyledLI>
                        ))}
                    </SC.StyledUL>
                )}
            </AnimatePresence>
        </nav>
    )

    return (
        <nav>
            <SC.StyledUL>
                {links.map(link => (
                    <SC.StyledLI key={link}>
                         <SC.StyledScrollLink
                            activeClass='active'
                            to={link}
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={1000}>
                                {link}
                        </SC.StyledScrollLink>
                    </SC.StyledLI>
                ))}
            </SC.StyledUL>
        </nav>
    )
}

export default Menu