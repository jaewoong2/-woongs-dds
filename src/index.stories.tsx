import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
// import ModalButton from './index'
// import { useToast } from '@jaewoong2/toast'
// import { ModalButtonOptions, useModalButton } from '../../../hooks/useModalButton'

const Div = () => <div style={{ color: 'red' }}>RED</div>

export default {
  title: 'Block/Div',
  component: Div,
  argTypes: {},
} as ComponentMeta<typeof Div>

const Template: ComponentStory<typeof Div> = () => {
  return (
    <div style={{ width: '400px', height: '400px', background: '#d9d9d9', position: 'relative' }}>
      <Div />
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  message: 'ModalButton Message',
}
