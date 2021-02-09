import styled from 'styled-components'
import { motion } from 'framer-motion'

import ThemeInterface from '../interfaces/themeInterface'

export const StyledUL = styled(motion.ul)`
    list-style-type: none;
    display: grid;
    row-gap: 20px;
    justify-content: center;

    ${({ theme } : { theme : ThemeInterface }) => theme.media.tablet} {
        grid-template-columns: repeat(4, min-content);
        column-gap: 30px;
    }
`

export const StyledLI = styled(motion.li)`
    color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.dark};
    font-size: 30px;
    font-weight: 700;

    ${({ theme } : { theme : ThemeInterface }) => theme.media.tablet} {
        font-size: 17px;
    }
`