import { AnimatePresence } from 'framer-motion'

import * as SC from '../../../styled-components/styledSlider'
import useSlider from '../../customHooks/useSlider'
import sliderVariants from './animationVariants'

const Slider : React.FC = () => {

    const { trait } = useSlider()

    return (
        <SC.StyledSlider>
            <AnimatePresence exitBeforeEnter initial={false}>
                <SC.StyledSpan key={trait} variants={sliderVariants} initial='hidden' animate='visible' exit='exit'>
                    {trait}
                </SC.StyledSpan>
            </AnimatePresence>
        </SC.StyledSlider>
    )
}

export default Slider