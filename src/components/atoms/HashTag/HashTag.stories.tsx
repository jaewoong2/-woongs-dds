import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { HashTag } from '../index'

export default {
  title: 'Atoms/HashTag',
  component: HashTag,
  argTypes: {},
} as ComponentMeta<typeof HashTag>

const Template: ComponentStory<typeof HashTag> = (args) => {
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
      <HashTag {...args} />
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  color: 'black',
  fontSize: '18px',
  children: '강남역',
  backgroundColor: '#8bcce2',
}
