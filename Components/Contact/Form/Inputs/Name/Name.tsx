import { Field } from 'react-final-form'

import * as SC from '../../../../../styled-components/styledForm'
import nameValidation from './nameValidation'

const Name : React.FC = () => (
    <Field name='name' validate={nameValidation}>
        {({ input, meta }) => (
            <SC.StyledInputWrapper>
                <SC.StyledLabel success={!meta.error && meta.touched} error={meta.error && meta.touched} htmlFor='name'>
                    {meta.error && meta.touched ? meta.error : 'Name'}
                </SC.StyledLabel>
                <SC.StyledInput success={!meta.error && meta.touched} error={meta.error && meta.touched} {...input} id='name' type='text' />
            </SC.StyledInputWrapper>
        )}
    </Field>
)

export default Name