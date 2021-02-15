import axios from 'axios'
import { useReducer } from 'react'
import EmailActions from '../../useReducer/emailActions'

import { initialState, reducer } from '../../useReducer/sendEmail'

const useForm = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleOnSubmit = async (values : any) => {
        dispatch({ type: EmailActions.SENDING })
        try {
            const { status } = await axios.post('/api/email', values)
            if (status !== 201) throw new Error()
            dispatch({ type: EmailActions.SENT_SUCCESSFULLY })
        }
        catch {
            dispatch({ type: EmailActions.SENT_ERROR })
        }
    }

    return { handleOnSubmit, state }
}

export default useForm