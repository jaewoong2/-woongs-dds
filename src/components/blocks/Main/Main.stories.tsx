import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Main } from '../index'
import { MainComponent } from './Main.stories.component'
export default {
  title: 'Blocks/Main',
  component: Main,
  argTypes: {},
} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = (args) => {
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <MainComponent {...args} />
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
