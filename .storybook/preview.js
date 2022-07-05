import { Global } from '@emotion/react'
import { GlobalStyles } from '../src/styles/GlobalStyle'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <>
      <Global styles={GlobalStyles} />
      <Story />
    </>
  ),
]
