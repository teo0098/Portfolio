import { useState } from 'react'

import * as SC from '../../../styled-components/styledHamburger'

const Hamburger = () => {

    const [menu, setMenu] = useState<boolean>(false)
  
    return (
        <SC.StyledCircle menu={menu}>
            <SC.StyledHamburgerWrapper onClick={() => setMenu(prevState => !prevState)}>
                <SC.StyledHamburgerDashes menu={menu}></SC.StyledHamburgerDashes>
            </SC.StyledHamburgerWrapper>
        </SC.StyledCircle>
    )
} 

export default Hamburger