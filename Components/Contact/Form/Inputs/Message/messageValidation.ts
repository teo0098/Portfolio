const messageValidation = (value : string) => {
    if (!value) return 'Field required'
    else if (value.trim().length === 0) return 'Only spaces are not allowed'
    else if (value.trim().length < 10) return 'Message is too short'
    return undefined
}

export default messageValidation