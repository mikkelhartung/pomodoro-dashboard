import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from '../../components/Button'

export default {
  title: 'Example/Button',
  component: Button
} as Meta

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  label: "Click me"
}
