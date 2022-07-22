import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Gallery } from '../index'
import { Image } from '../../atoms'

const shortSrc =
  'https://i.ytimg.com/vi/aXTkswSxmQs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjCTJCXnvHyV7fVOinaHDnHwvCgw'

const longSrc = 'https://i.pinimg.com/originals/b5/df/7c/b5df7c3f59cfc4508ab53ce31cfffe71.jpg'
export default {
  title: 'Blocks/Gallery',
  component: Gallery,
  argTypes: {},
} as ComponentMeta<typeof Gallery>

const Template: ComponentStory<typeof Gallery> = (args) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
      }}
    >
      <div style={{ height: '100vh' }}>hi</div>
      <Gallery {...args}>
        <Gallery.Image href="/" src={shortSrc}>
          <div>Hello</div>
        </Gallery.Image>
        <Gallery.Image src={longSrc}>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
        </Gallery.Image>
        <Gallery.Image src={shortSrc} />
        <Gallery.Image src={longSrc} />
        <Gallery.Image src={shortSrc} />
        <Gallery.Image src={longSrc} />
        <Gallery.Image src={shortSrc} />
      </Gallery>
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
