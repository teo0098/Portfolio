import contactData from '../contactData'
import * as SC from '../../../styled-components/styledOtherContacts'

const OtherContacts : React.FC = () => (
    <SC.StyledOtherContacts>
        {contactData.map(({ icon, name, message, additionalData, href }) => (
            <SC.StyledOtherContact key={message}>
                <div> {icon} </div>
                <SC.StyledProfile>
                    <SC.StyledLink href={href} target='_blank' rel="noopener"> {name} </SC.StyledLink>
                    <SC.StyledMessage> {message} {additionalData ? <SC.StyledAdditionalData> {additionalData} </SC.StyledAdditionalData> : null} </SC.StyledMessage>
                </SC.StyledProfile>
            </SC.StyledOtherContact>
        ))}
    </SC.StyledOtherContacts>
)

export default OtherContacts