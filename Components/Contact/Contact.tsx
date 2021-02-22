import * as SC from '../../styled-components/styledContact'
import Desc from '../Desc/Desc'
import Form from './Form/Form'
import OtherContacts from './OtherContacts/OtherContacts'

const Contact : React.FC = () => (
    <SC.StyledContact id='Contact'>
        <Desc heading='Contact'>
            Do you have any doubts or questions or maybe you are interested in cooperation with me? Do not hesitate and contact me.
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
            <OtherContacts />
        </SC.StyledContactWrapper>
    </SC.StyledContact>
)

export default Contact