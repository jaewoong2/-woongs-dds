import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SearchInput } from '../index'

export default {
  title: 'Block/SearchInput',
  component: SearchInput,
  argTypes: {},
} as ComponentMeta<typeof SearchInput>

const Template: ComponentStory<typeof SearchInput> = (args) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}
    >
      <SearchInput {...args} />
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  placeholder: '내 위치로 케이크집 찾아보세요',
  color: 'black',
  fontSize: '18px',
}
