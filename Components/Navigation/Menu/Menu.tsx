import { memo } from 'react'

import MenuInterface from '../../../interfaces/menuInterface'
import * as SC from '../../../styled-components/styledNavMenu'
import useMenu from '../../customHooks/useMenu'
import { ulVariant, liVariant } from './animationVariants'

const links : Array<string> = ['Home', 'Abilities', 'Projects', 'Contact']

const Menu : React.FC<MenuInterface> = ({ setMenu, mobile }) => {

    const { active } = useMenu()

    if (mobile) return (
        <nav>
            <SC.StyledUL key='ul' variants={ulVariant} initial='hidden' animate='visible' exit='hidden'>
                {links.map((link, index : number) => (
                    <SC.StyledLI key={link} variants={liVariant}>
                        <SC.StyledScrollLink
                            className={active === index ? 'activeLink' : ''}
                            onClick={() => setMenu ? setMenu(false) : null}
                            to={link}
                            smooth={true}
                            offset={index === 0 ? -90 : -20}
                            delay={1000}
                            duration={1000}>
                                {link}
                        </SC.StyledScrollLink>
                    </SC.StyledLI>
                ))}
            </SC.StyledUL>
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
                            offset={-100}
                            duration={1000}>
                                {link}
                        </SC.StyledScrollLink>
                    </SC.StyledLI>
                ))}
            </SC.StyledUL>
        </nav>
    )
}

export default memo(Menu)