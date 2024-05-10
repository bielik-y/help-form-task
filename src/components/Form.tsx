import { useState, KeyboardEvent, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { CardData, HelpType, PaymentType, UserData } from 'types'
import DataForm from 'components/data-form-section/DataFormSection'
import Button from 'components/ui/Button'
import styled from 'styled-components'
import HelpForm from 'components/help-form-section/HelpFormSection'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledButton = styled(Button)`
  margin-top: 20px;
`

type FormData = UserData &
  CardData & {
    helpType: HelpType
    paymentType: PaymentType
  }

function Form() {
  const [helpType, setHelpType] = useState<HelpType>(HelpType.financial)
  const [paymentType, setPaymentType] = useState<PaymentType>(PaymentType.privat)

  const methods = useForm<FormData>()
  const {
    formState: { errors }
  } = methods

  useEffect(() => {
    if (errors.cardNumber?.type === 'minLength') {
      alert('Incorrect card number')
    }
  }, [errors])

  function onSubmit(data: FormData) {
    console.log(data)
    alert(`The form was submitted! Data: ${JSON.stringify(data)}`)
  }

  function preventEnterKeySubmission(e: KeyboardEvent<HTMLFormElement>) {
    const target = e.target
    if (e.key === 'Enter' && target instanceof HTMLInputElement) e.preventDefault()
  }

  return (
    <FormProvider {...methods}>
      <StyledForm
        autoComplete="off"
        onSubmit={methods.handleSubmit(onSubmit)}
        onKeyDown={preventEnterKeySubmission}
      >
        <DataForm />
        <HelpForm
          helpType={helpType}
          paymentType={paymentType}
          onHelpTypeClick={(type) => setHelpType(type)}
          onPaymentTypeClick={(type) => setPaymentType(type)}
        />
        <StyledButton type="submit">Допомогти</StyledButton>
      </StyledForm>
    </FormProvider>
  )
}

export default Form
