import { styled } from 'styled-components'

const StyledSubtitle = styled.span`
  font-weight: 300px;
  font-size: 18px;
  padding: 4px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`

interface SubtitleProps {
  children: string
}

function Subtitle({ children }: SubtitleProps) {
  return <StyledSubtitle>{children}</StyledSubtitle>
}

export default Subtitle
