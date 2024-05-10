import { styled, ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import GlobalFonts from 'styles/fonts'
import Form from 'components/Form'

const Container = styled.div`
  margin: auto;
  margin-bottom: 80px;
  padding: 20px 20px;
  max-width: 1280px;

  @media ${({ theme }) => theme.media.sm} {
    padding: 10px 40px;
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <Container>
        <Form />
      </Container>
    </ThemeProvider>
  )
}

export default App
