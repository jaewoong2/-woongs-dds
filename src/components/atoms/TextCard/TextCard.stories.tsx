import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TextCard } from '../index'

export default {
  title: 'Block/TextCard',
  component: TextCard,
  argTypes: {},
} as ComponentMeta<typeof TextCard>

const Template: ComponentStory<typeof TextCard> = (args) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TextCard {...args} />
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  title: '우리동네 케이크',
  children: '240개',
}
