import { AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'

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
                            <Link
                                key={link}
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-90}
                                delay={1200}
                                duration={1000}>
                                <SC.StyledLI variants={liVariant} onClick={() => setMenu ? setMenu(false) : null}> {link} </SC.StyledLI>
                            </Link>
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
                    <Link
                        key={link}
                        to={link}
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration={1000}>
                        <SC.StyledLI> {link} </SC.StyledLI>
                    </Link>
                ))}
            </SC.StyledUL>
        </nav>
    )
}

export default Menu