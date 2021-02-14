import styled, { StyledComponent, css } from 'styled-components'

import ThemeInterface from '../interfaces/themeInterface'
import Theme from '../styles/theme'

export const StyledFormWrapper : StyledComponent<"div", any> = styled.div`
    
`

export const StyledForm : StyledComponent<"form", any> = styled.form`
    color: ${({ theme } : {theme : ThemeInterface}) => theme.colors.dark};
    display: grid;
    row-gap: 20px;
`

export const StyledInputWrapper : StyledComponent<"div", any> = styled.div`
    display: grid;
    row-gap: 5px;
`

const renderColor = (success : boolean | undefined, error : boolean | undefined) => {
    if (success) return `3px solid ${Theme.colors.success}`
    if (error) return `3px solid ${Theme.colors.error}`
    return `3px solid ${Theme.colors.dark}`
}

interface InputDataProps { success : boolean | undefined, error : boolean | undefined }

const sharedStyles = css<InputDataProps>`
    outline: none;
    padding: 10px;
    color: ${({ theme } : {theme : ThemeInterface}) => theme.colors.dark};
    border-radius: 5px;
    border: ${({ success, error }) => renderColor(success, error)};
    background-color: ${({ theme } : {theme : ThemeInterface}) => theme.colors.darkerLight};
    font-size: 15px;
    font-weight: 500;
    transition: all 150ms ease-out;

    :focus {
        box-shadow: ${({ theme } : { theme : ThemeInterface }) =>`0 1px 5px 1px ${theme.colors.darkTransparent}`};
    }
`

export const StyledInput : StyledComponent<"input", any, InputDataProps> = styled.input<InputDataProps>`
    ${sharedStyles};
`

export const StyledTextarea : StyledComponent<"textarea", any, InputDataProps> = styled.textarea<InputDataProps>`
    resize: none;
    height: 150px;
    ${sharedStyles};
`

export const StyledLabel : StyledComponent<"label", any, InputDataProps> = styled.label<InputDataProps>`
    font-family: ${({ theme } : { theme : ThemeInterface }) => theme.fonts.balsam};
    font-size: 16px;
`