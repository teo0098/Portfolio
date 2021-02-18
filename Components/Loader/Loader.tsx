import { memo } from 'react'

import StyledLoader from '../../styled-components/styledLoader'

const Loader : React.FC = () => (
    <StyledLoader></StyledLoader>
)

export default memo(Loader)