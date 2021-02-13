import * as SC from '../../styled-components/styledContact'
import Desc from '../Desc/Desc'
import Form from './Form/Form'

const Contact : React.FC = () => (
    <SC.StyledContact id='Contact'>
        <Desc heading='Contact'>
            Do you have any doubts or questions or maybe are you interested in cooperation with me? Do not hesitate and contact me.
        </Desc>
        <SC.StyledStatus open={process.env.NEXT_PUBLIC_STATUS === 'open'}>
            <SC.StyledSpan>Status</SC.StyledSpan>
            {process.env.NEXT_PUBLIC_STATUS === 'open' ?
                <SC.StyledP> Open for jobs' offers </SC.StyledP>
                :
                <SC.StyledP> Closed for jobs' offers </SC.StyledP>
            }
        </SC.StyledStatus>
        <Form />
    </SC.StyledContact>
)

export default Contact