import { AnimatePresence } from 'framer-motion'

import MenuInterface from '../../../interfaces/menuInterface'
import * as SC from '../../../styled-components/styledMenu'
import useMenu from '../../customHooks/useMenu'
import { ulVariant, liVariant } from './animationVariants'

const links : Array<string> = ['Home', 'Abilities', 'Projects', 'Contact']

const Menu : React.FC<MenuInterface> = ({ menu, setMenu, mobile }) => {

    const { active } = useMenu()

    if (mobile) return (
        <nav>
            <AnimatePresence>
                {menu && (
                    <SC.StyledUL key='ul' variants={ulVariant} initial='hidden' animate='visible' exit='hidden'>
                        {links.map((link, index : number) => (
                            <SC.StyledLI key={link} variants={liVariant}>
                                <SC.StyledScrollLink
                                    className={active === index ? 'activeLink' : ''}
                                    onClick={() => setMenu ? setMenu(false) : null}
                                    to={link}
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
                {links.map((link, index : number) => (
                    <SC.StyledLI key={link}>
                         <SC.StyledScrollLink
                            className={active === index ? 'activeLink' : ''}
                            to={link}
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