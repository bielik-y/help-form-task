import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-image: linear-gradient(to right, #e63757, #8b68ad, #e63757);
  background-size: 200% auto;
  border: none;
  color: white;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.04rem;
  padding: 18px 80px;
  transition: 0.6s;
  border-radius: 8px;
  box-shadow: 0 0 16px ${({ theme }) => theme.colors.coral};

  &:hover {
    background-position: right center;
  }
`

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
