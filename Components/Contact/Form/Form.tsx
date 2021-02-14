import { Form as FinalForm } from 'react-final-form'
import createDecorator from 'final-form-focus'

import * as SC from '../../../styled-components/styledForm'
import useForm from '../../customHooks/useForm'
import StyledButton from '../../../styled-components/styledButton'
import Name from './Inputs/Name/Name'
import Email from './Inputs/Email/Email'
import Message from './Inputs/Message/Message'

const focusOnErrorDecorator = createDecorator()

const Form : React.FC = () => {

    const { handleOnSubmit } = useForm()

    return (
        <SC.StyledFormWrapper>
            <FinalForm onSubmit={handleOnSubmit} decorators={[focusOnErrorDecorator]}>
                {({ handleSubmit }) =>
                    <SC.StyledForm onSubmit={handleSubmit}>
                        <Name />
                        <Email />
                        <Message />
                        <StyledButton type='submit'>Send</StyledButton>
                    </SC.StyledForm>
                }
            </FinalForm>
        </SC.StyledFormWrapper>
    )
}

export default Form