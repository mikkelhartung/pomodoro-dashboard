import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Avatar, { AvatarProps } from '../../components/Avatar'

export default {
  title: 'Example/Avatar',
  component: Avatar
} as Meta

const Template: Story<AvatarProps> = (args: AvatarProps) => (
  <Avatar {...args} />
)

export const Default = Template.bind({})
Default.args = {
  image: "https://avatars0.githubusercontent.com/u/21206183?v=4"
}
