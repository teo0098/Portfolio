import { Field } from 'react-final-form'

import * as SC from '../../../../../styled-components/styledForm'
import messageValidation from './messageValidation'

const Message : React.FC = () => (
    <Field name='message' validate={messageValidation}>
        {({ input, meta }) => (
            <SC.StyledInputWrapper>
                <SC.StyledLabel success={!meta.error && meta.touched} error={meta.error && meta.touched} htmlFor='message'>
                    {meta.error && meta.touched ? meta.error : 'Message'}
                </SC.StyledLabel>
                <SC.StyledTextarea success={!meta.error && meta.touched} error={meta.error && meta.touched} {...input} id='message'></SC.StyledTextarea>
            </SC.StyledInputWrapper>
        )}
    </Field>
)

export default Message