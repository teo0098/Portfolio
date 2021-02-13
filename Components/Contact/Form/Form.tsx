import { Form as FinalForm } from 'react-final-form'
import createDecorator from 'final-form-focus'

import * as SC from '../../../styled-components/styledForm'
import useForm from '../../customHooks/useForm'
import StyledButton from '../../../styled-components/styledButton'

const focusOnErrorDecorator = createDecorator()

const Form : React.FC = () => {

    const { handleOnSubmit } = useForm()

    return (
        <SC.StyledFormWrapper>
            <FinalForm onSubmit={handleOnSubmit} decorators={[focusOnErrorDecorator]}>
                {({ handleSubmit }) =>
                    <SC.StyledForm onSubmit={handleSubmit}>
                        <SC.StyledInputWrapper>
                            <SC.StyledLabel htmlFor='name'>Name</SC.StyledLabel>
                            <SC.StyledInput id='name' name='name' type='text' />
                        </SC.StyledInputWrapper>
                        <SC.StyledInputWrapper>
                            <SC.StyledLabel htmlFor='email'>Email</SC.StyledLabel>
                            <SC.StyledInput id='email' name='email' type='text' />
                        </SC.StyledInputWrapper>
                        <SC.StyledInputWrapper>
                            <SC.StyledLabel htmlFor='message'>Message</SC.StyledLabel>
                            <SC.StyledTextarea id='message' name='message'></SC.StyledTextarea>
                        </SC.StyledInputWrapper>
                        <StyledButton>Send</StyledButton>
                    </SC.StyledForm>
                }
            </FinalForm>
        </SC.StyledFormWrapper>
    )
}

export default Form