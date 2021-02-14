const nameValidation = (value : string) => {
    if (!value) return 'Field required'
    else if (!/^[A-Za-zĘÓĄŚŁŻŹĆŃęóąśłżźćń]+$/.test(value)) return 'Only letters allowed'
    else if (value.trim().length > 20) return 'Name is too long'
    else if (value.trim().length < 2) return 'Name is too short'
    return undefined
}

export default nameValidation