import styled, { StyledComponent, css } from 'styled-components'

import ThemeInterface from '../interfaces/themeInterface'

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

const sharedStyles = css`
    outline: none;
    padding: 10px;
    color: ${({ theme } : {theme : ThemeInterface}) => theme.colors.dark};
    border-radius: 5px;
    border: ${({ theme } : {theme : ThemeInterface}) => `2px solid ${theme.colors.dark}`};
    background-color: ${({ theme } : {theme : ThemeInterface}) => theme.colors.light};
`

export const StyledInput : StyledComponent<"input", any> = styled.input`
    ${sharedStyles};
`

export const StyledTextarea : StyledComponent<"textarea", any> = styled.textarea`
    resize: none;
    height: 150px;
    ${sharedStyles};
`

export const StyledLabel : StyledComponent<"label", any> = styled.label`
    font-family: ${({ theme } : { theme : ThemeInterface }) => theme.fonts.balsam};
`