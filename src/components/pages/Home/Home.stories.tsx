import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Home } from './index'
import { Header } from '../../blocks'
import { Logo, NavigationContainer, SearchInputContainer } from '../../blocks/Header/Header.stories.component'
import { MainComponent } from '../../blocks/Main/Main.stories.component'
export default {
  title: 'Pages/Home',
  component: Home,
  argTypes: {},
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = (args) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Header {...args}>
          <div style={{ display: 'flex', width: '100%', alignItems: 'center', gap: '10px' }}></div>
          <NavigationContainer />
        </Header>
      </div>
      <MainComponent {...args} />
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
