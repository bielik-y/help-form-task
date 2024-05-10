import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      primaryLight: string
      primaryDark: string
      secondary: string
      secondaryLight: string
      secondaryDark: string
      gray: string
      grayLight: string
      grayDark: string
      grayExtraDark: string
      coral: string
      purple: string
      slate: string
      link: string
    }
    media: {
      sm: string
      md: string
      lg: string
      xl: string
    }
  }
}
