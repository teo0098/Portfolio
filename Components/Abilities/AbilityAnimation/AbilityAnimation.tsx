import Fade from 'react-reveal/Fade'

const AbilityAnimation : React.FC = ({ children }) => (
    <Fade bottom friction={1}>
        {children}
    </Fade>
)

export default AbilityAnimation