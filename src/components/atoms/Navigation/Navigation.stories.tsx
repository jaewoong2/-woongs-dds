import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Navigation } from '../index'

export default {
  title: 'Atoms/Navigation',
  component: Navigation,
  argTypes: {},
} as ComponentMeta<typeof Navigation>

const Template: ComponentStory<typeof Navigation> = (args) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
      }}
    >
      <Navigation gap="10px" {...args}>
        <Navigation.Anchor href="/">로그인</Navigation.Anchor>
        <Navigation.Anchor href="/">회원가입</Navigation.Anchor>
        <Navigation.Anchor href="/">문의하기</Navigation.Anchor>
      </Navigation>
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
