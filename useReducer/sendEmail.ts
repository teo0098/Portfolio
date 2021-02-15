import EmailActions from "./emailActions"

type StateType = {
    loading: boolean,
    error: boolean,
    success: boolean
}

type ActionType = {
    type: string
}

export const initialState : StateType = {
    loading: false,
    error: false,
    success: false
}

export const reducer = (state : StateType, { type } : ActionType) => {
    switch (type) {
        case EmailActions.SENDING:
            return {
                ...initialState,
                loading: true
            }
        case EmailActions.SENT_SUCCESSFULLY:
            return {
                ...initialState,
                success: true
            }
        case EmailActions.SENT_ERROR:
            return {
                ...initialState,
                error: true
            }
        default:
            return state
    }
}