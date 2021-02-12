import { Form as FinalForm } from 'react-final-form'
import createDecorator from 'final-form-focus'

import * as SC from '../../../styled-components/styledForm'
import useForm from '../../customHooks/useForm'

const focusOnErrorDecorator = createDecorator()

const Form : React.FC = () => {

    const { handleOnSubmit } = useForm()

    return (
        <SC.StyledFormWrapper>
            <FinalForm onSubmit={handleOnSubmit} decorators={[focusOnErrorDecorator]}>
                {({ handleSubmit }) =>
                    <SC.StyledForm onSubmit={handleSubmit}>
                        <SC.StyledInput name='name' />
                        <SC.StyledInput name='email' />
                        <SC.StyledTextarea name='message'></SC.StyledTextarea>
                    </SC.StyledForm>
                }
            </FinalForm>
        </SC.StyledFormWrapper>
    )
}

export default Form