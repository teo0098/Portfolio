import { memo } from 'react'

import * as SC from '../../../styled-components/styledLogo'

const Logo : React.FC = () => (
    <SC.StyledSection>
        <SC.StyledLogo src='/logo.png' alt='Teodor Tkaczyk logo' />
        <SC.StyledH3>Teodor<br/>Tkaczyk</SC.StyledH3>
    </SC.StyledSection>
)

export default memo(Logo)