import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Header } from '../index'
import { Navigation, SearchInput } from '../../atoms'
import { LightColor } from '../../../styles/theme/constant'

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
      }}
    >
      <Header {...args}>
        <div style={{ display: 'flex', width: '100%', alignItems: 'center', gap: '10px' }}>
          <div style={{ padding: '0 20px', width: 'fit-content', wordBreak: 'keep-all' }}>달다</div>
          <SearchInput
            size="lg"
            borderRadius="8px"
            maxWidth="450px"
            type="text"
            boxShadow={false}
            backgroundColor={LightColor.serachSmallBackGround}
          />
        </div>
        <div
          style={{
            display: 'flex',
            padding: '0 10px',
            width: 'fit-content',
            wordBreak: 'keep-all',
            alignItems: 'center',
            gap: '10px',
            justifyContent: 'flex-end',
          }}
        >
          <Navigation>
            <Navigation.Anchor href="/">로그인</Navigation.Anchor>
            <Navigation.Anchor href="/">회원가입</Navigation.Anchor>
            <Navigation.Anchor href="/">문의하기</Navigation.Anchor>
          </Navigation>
        </div>
      </Header>
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
