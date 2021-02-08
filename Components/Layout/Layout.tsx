import Footer from '../Footer/Footer'
import Navigation from '../Navigation/Navigation'
import StyledLayout from '../../styled-components/styledLayout'

const Layout : React.FC = ({ children }) => (
    <StyledLayout>
        <div>
            <Navigation />
            {children}
        </div>
        <Footer />
    </StyledLayout>
)

export default Layout