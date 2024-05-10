import { forwardRef, InputHTMLAttributes } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  font-size: 16px;
  outline: none;
  font-family: 'Geometria';
  background: ${({ theme }) => theme.colors.grayLight};
  padding: 12px 10px;
  border: none;
  border-radius: 6px;

  &:focus {
    box-shadow: 0px 0px 5px rgba(0, 128, 255, 0.4);
  }
`

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ ...props }, ref) => {
    return <StyledInput ref={ref} {...props} />
  }
)

export default Input
