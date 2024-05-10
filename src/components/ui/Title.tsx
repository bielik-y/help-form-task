import styled from 'styled-components'

interface TitleProps {
  children: string
}

const StyledTitle = styled.h2`
  font-weight: 800;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};

  @media ${({ theme }) => theme.media.sm} {
    font-size: 40px;
  }
  @media ${({ theme }) => theme.media.md} {
    font-size: 56px;
  }
`

function Title({ children }: TitleProps) {
  return <StyledTitle>{children}</StyledTitle>
}

export default Title
