import styled from 'styled-components'
import { ButtonProps } from '.'
import { theme } from '../../utils'

export const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  display: ${(props) => (props.fullWidth ? 'block' : 'inline-block')};
  text-align: center;
  user-select: none;
  padding: 0.65rem 1rem;
  border-radius: 5px;
  min-width: 100px;
  background-color: ${(props) => {
    if (props.variant === 'primary') {
      return theme.primaryColor
    } else if (props.variant === 'secondary') {
      return theme.textColorOnPrimary
    } else if (props.variant === 'danger') {
      return theme.status.errorColor
    } else if (props.variant === 'success') {
      return theme.status.successColor
    } else if (props.variant === 'warning') {
      return theme.status.warningColor
    } else return theme.primaryColor
  }};
  outline: none;
  border: none;
  line-height: 1.5;
  color: #fff;
`
