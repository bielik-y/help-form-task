import styled, { css } from 'styled-components'
import { LucideIcon } from 'lucide-react'

const Box = styled.div<{ $isActive: boolean }>`
  padding: 8px 8px;
  border-radius: 8px;
  transition: 0.3s;
  background: ${(props) => (props.$isActive ? props.theme.colors.secondary : 'white')};
  border: 3px solid
    ${(props) => (props.$isActive ? props.theme.colors.secondary : props.theme.colors.grayDark)};
  svg {
    width: 24px;
    height: 24px;
    transition: 0.3s;
    color: ${(props) => (props.$isActive ? 'white' : props.theme.colors.grayDark)};
  }

  @media ${({ theme }) => theme.media.md} {
    svg {
      width: 40px;
      height: 40px;
    }
    padding: 16px 16px;
    border-radius: 8px;
  }
`
const StyledText = styled.span<{ $isActive: boolean }>`
  width: 130px;
  font-size: 18px;
  font-weight: 800;
  line-height: 18px;
  transition: 0.3s;
  color: ${(props) => (props.$isActive ? props.theme.colors.primary : props.theme.colors.grayDark)};
  @media ${({ theme }) => theme.media.lg} {
  }
`

const Wrapper = styled.div<{ $isActive: boolean }>`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;

  ${({ $isActive }) =>
    $isActive &&
    css`
      &:after {
        content: none;
        cursor: auto;
        position: absolute;
        width: 40px;
        height: 40px;
        background: white;
        border-radius: 2px;
        border-left: 1px solid ${({ theme }) => theme.colors.slate};
        border-top: 1px solid ${({ theme }) => theme.colors.slate};
        border-top-right-radius: 0px;
        border-bottom-left-radius: 0px;
        transform: translate(50%, 180%) rotate(45deg);

        @media ${({ theme }) => theme.media.lg} {
          content: '';
        }
      }
    `}

  &:hover {
    ${Box} {
      border: 3px solid
        ${(props) => (props.$isActive ? props.theme.colors.secondary : props.theme.colors.primary)};

      svg {
        color: ${(props) => (props.$isActive ? 'white' : props.theme.colors.primary)};
      }
    }
    ${StyledText} {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`

interface HelpTypeLabelProps {
  icon: LucideIcon
  text: string
  isActive: boolean
  onClick: () => void
}

function HelpTypeLabel({ icon, text, isActive, onClick }: HelpTypeLabelProps) {
  const Icon = icon
  return (
    <Wrapper $isActive={isActive} onClick={onClick} tabIndex={0}>
      <Box $isActive={isActive}>
        <Icon />
      </Box>
      <StyledText $isActive={isActive}>{text}</StyledText>
    </Wrapper>
  )
}

export default HelpTypeLabel
