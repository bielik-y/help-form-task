import { forwardRef, InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import Input from './ui/Input'

const Label = styled.label`
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.slate};
`

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  gap: 4px;
  flex-direction: column;
`

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(({ label, ...props }, ref) => {
  return (
    <Wrapper>
      <Label htmlFor={props.name}>{label}</Label>
      <Input ref={ref} {...props} />
    </Wrapper>
  )
})

export default FormField
