import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from '..'

export {}
describe('Buttons test', () => {
  it('should apply the default value buttons', () => {
    render(<Button type="button">Button</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
  })
  it('applies the specific type if provided', () => {
    render(<Button type="submit">Submit</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
  })
  it('applies the specific type if provided', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
