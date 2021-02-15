import { Form as FinalForm } from 'react-final-form'
import createDecorator from 'final-form-focus'

import * as SC from '../../../styled-components/styledForm'
import useForm from '../../customHooks/useForm'
import StyledButton from '../../../styled-components/styledButton'
import Name from './Inputs/Name/Name'
import Email from './Inputs/Email/Email'
import Message from './Inputs/Message/Message'
import Modal from '../../Modal/Modal'
import Loader from '../../Loader/Loader'

const focusOnErrorDecorator = createDecorator()

const Form : React.FC = () => {

    const { handleOnSubmit, state: { loading, success, error } } = useForm()

    const renderStatus = () => {
        if (loading) return (
            <SC.StyledRenderStatus>
                <Loader />
            </SC.StyledRenderStatus>
        )
        if (success) return (
            <Modal timeout={6000}>
                <SC.StyledInfo success>
                    <SC.StyledP>Email has been sent successfully. I'm truly grateful for your offer and I will reply as fast as I can.</SC.StyledP>
                </SC.StyledInfo>
            </Modal>
        )
        if (error) return (
            <Modal timeout={8000}>
                <SC.StyledInfo error>
                    <SC.StyledP>Something went wrong with sending email... Please try again later or use other method from the contacts' list.</SC.StyledP>
                </SC.StyledInfo>
            </Modal>
        )
        return null
    }

    return (
        <SC.StyledFormWrapper>
            <FinalForm onSubmit={handleOnSubmit} decorators={[focusOnErrorDecorator]}>
                {({ handleSubmit }) =>
                    <SC.StyledForm onSubmit={handleSubmit}>
                        <Name />
                        <Email />
                        <Message />
                        {renderStatus()}
                        <StyledButton type='submit'>Send</StyledButton>
                    </SC.StyledForm>
                }
            </FinalForm>
        </SC.StyledFormWrapper>
    )
}

export default Form