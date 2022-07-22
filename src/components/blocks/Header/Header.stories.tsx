import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Header } from '../index'
import { Logo, SearchInputContainer, NavigationContainer } from './Header.stories.component'

export default {
  title: 'Blocks/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#FFF1E3',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '500px',
          height: '100%',
          backgroundColor: '#fff',
          boxShadow:
            '0 0 transparent, 0 0 transparent, 0 0 transparent, 0 0 transparent, 0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)',
        }}
      >
        <Header {...args}>
          <div style={{ display: 'flex', width: '100%', alignItems: 'center', gap: '10px' }}>
            <Logo />
          </div>
          <NavigationContainer />
        </Header>
      </div>
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
