import { AnimatePresence, motion } from 'framer-motion'

import useModal from '../customHooks/useModal'
import variants from './animationVariants'
import ModalInterface from '../../interfaces/modalInterface'

const Modal : React.FC<ModalInterface> = ({ children, timeout }) => {

    const show = useModal(timeout)

    return (
        <AnimatePresence>
            {show && (
                <motion.div variants={variants} initial="hidden" animate="visible" exit="hidden">
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal