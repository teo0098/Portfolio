import styled, { StyledComponent } from 'styled-components'
import { motion } from 'framer-motion'

import ThemeInterface from '../interfaces/themeInterface'

export const StyledSlider : StyledComponent<"div", any> = styled.div`
    background-color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.dark};
    border-radius: 3px;
    padding: 10px;
`

export const StyledSpan = styled(motion.span)`
    color: ${({ theme } : { theme : ThemeInterface }) => theme.colors.light};
    text-align: center;
    display: block;
    font-size: 30px;
    letter-spacing: 1px;
    font-weight: 700;
`