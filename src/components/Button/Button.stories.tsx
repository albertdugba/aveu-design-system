import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from '.'

export default {
  title: 'All Buttons',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
)

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
  variant: 'primary',
}

export const DangerButton = Template.bind({})
DangerButton.args = {
  variant: 'danger',
}

export const WarningButton = Template.bind({})
WarningButton.args = {
  variant: 'warning',
}

export const SuccessButton = Template.bind({})
SuccessButton.args = {
  variant: 'success',
}

export const SmallButton = Template.bind({})
SmallButton.args = {
  variant: 'primary',
  size: 'small',
}
