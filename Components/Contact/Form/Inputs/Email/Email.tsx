import { Field } from 'react-final-form'

import * as SC from '../../../../../styled-components/styledForm'
import emailValidation from './emailValidation'

const Email : React.FC = () => (
    <Field name='email' validate={emailValidation}>
        {({ input, meta }) => (
            <SC.StyledInputWrapper>
                <SC.StyledLabel success={!meta.error && meta.touched} error={meta.error && meta.touched} htmlFor='email'>
                    {meta.error && meta.touched ? meta.error : 'Email'}
                </SC.StyledLabel>
                <SC.StyledInput success={!meta.error && meta.touched} error={meta.error && meta.touched} {...input} id='email' type='text' />
            </SC.StyledInputWrapper>
        )}
    </Field>
)

export default Email