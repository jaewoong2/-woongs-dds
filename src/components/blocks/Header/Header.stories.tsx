import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Header } from '../index'
import { Navigation, SearchInput } from '../../atoms'
import { LightColor } from '../../../styles/theme/constant'
import { useMediaQuery } from '../../../hooks/useMediaQuery'

export default {
  title: 'Blocks/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => {
  const isMobile = useMediaQuery('(max-width: 700px)')
  const [isClicked, setIsClicked] = useState(false)

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
          {isMobile && isClicked ? (
            <div
              style={{
                position: 'absolute',
                width: `100%`,
                height: `100%`,
                top: `10px`,
                zIndex: '999',
                borderColor: 'white',
              }}
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setIsClicked(false)
                }
              }}
            >
              <SearchInput
                borderRadius="8px"
                maxWidth="calc(100% - 40px)"
                type="text"
                boxShadow={false}
                backgroundColor={LightColor.serachSmallBackGround}
              />
            </div>
          ) : (
            <SearchInput
              onClick={() => setIsClicked(true)}
              size="lg"
              borderRadius="8px"
              maxWidth="450px"
              type="text"
              boxShadow={false}
              backgroundColor={LightColor.serachSmallBackGround}
            />
          )}
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
