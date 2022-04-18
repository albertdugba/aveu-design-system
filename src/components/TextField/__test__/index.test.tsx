import { screen, render } from '@testing-library/react'
import { TextField } from '../index'

describe('Text field', () => {
  it('Form input should have a label', () => {
    render(<TextField label="Full Name" />)
    const input = screen.getByTestId('input-field')
    expect(input).toHaveAttribute('label', 'Full Name')
  })
})
