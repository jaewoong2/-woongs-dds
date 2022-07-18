import { ThemeProvider } from '@emotion/react'
import { LightColor } from './constant'

type Props = {
  children: React.ReactNode
}

export const DDSThemeProvider = ({ children }: Props) => {
  const lightTheme = {
    color: LightColor,
  }

  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
}
