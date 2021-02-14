import validator from 'validator'

const emailValidation = (value : string) => {
    if (!value) return 'Field required'
    else if (!validator.isEmail(value)) return 'Invalid email'
    return undefined
}

export default emailValidation