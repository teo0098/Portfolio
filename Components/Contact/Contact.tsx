import * as SC from '../../styled-components/styledContact'
import Desc from '../Desc/Desc'
import Form from './Form/Form'
import contactData from './contactData'

const Contact : React.FC = () => (
    <SC.StyledContact id='Contact'>
        <Desc heading='Contact'>
            Do you have any doubts or questions or maybe are you interested in cooperation with me? Do not hesitate and contact me.
        </Desc>
        <SC.StyledContactWrapper>
            <SC.StyledDiv>
                <SC.StyledStatus open={process.env.NEXT_PUBLIC_STATUS === 'open'}>
                    <SC.StyledH3>Status</SC.StyledH3>
                    {process.env.NEXT_PUBLIC_STATUS === 'open' ?
                        <SC.StyledP> Open for jobs' offers </SC.StyledP>
                        :
                        <SC.StyledP> Closed for jobs' offers </SC.StyledP>
                    }
                </SC.StyledStatus>
                <Form />
            </SC.StyledDiv>
            <SC.StyledOtherContacts>
                {contactData.map(({ icon, name, message, additionalData, href }) => (
                    <SC.StyledOtherContact key={message}>
                        <SC.StyledLink href={href} target='_blank' rel="noopener">
                            {icon}
                        </SC.StyledLink>
                        <SC.StyledProfile>
                            <SC.StyledName> {name} </SC.StyledName>
                            <SC.StyledMessage> {message} {additionalData ? <SC.StyledAdditionalData> {additionalData} </SC.StyledAdditionalData> : null} </SC.StyledMessage>
                        </SC.StyledProfile>
                    </SC.StyledOtherContact>
                ))}
            </SC.StyledOtherContacts>
        </SC.StyledContactWrapper>
    </SC.StyledContact>
)

export default Contact