import * as React from 'react'
import { StyledButton } from './styled'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode
  label?: string
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  startIcon?: React.ReactElement
  endIcon?: React.ReactElement
  disabled?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, label, fullWidth, ...props }, ref) => {
    return (
      <StyledButton
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        label={label}
        ref={ref}
        {...props}
      >
        {children}
      </StyledButton>
    )
  }
)

Button.displayName = 'Button'
