import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from '.'
import * as React from 'react'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button Component</Button>
)

export const Primary = Template.bind({})
Template.args = {
  variant: 'primary',
}

export const Danger = Template.bind({})
Danger.args = {
  variant: 'danger',
}

export const Warning = Template.bind({})
Warning.args = {
  variant: 'warning',
}

export const Success = Template.bind({})
Success.args = {
  variant: 'success',
}
