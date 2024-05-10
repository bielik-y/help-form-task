import { useRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { styled } from 'styled-components'
import { formatCardCvv, formatCardExpiryDate } from 'utils/formatters'
import Input from 'components/ui/Input'

const Container = styled.div`
  height: 198px;
  max-width: 404px;
  background: ${({ theme }) => theme.colors.grayDark};
  border-radius: 14px;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 500px) {
    padding: 14px;
    input {
      height: 40px;
    }
  }
`

const CardNumber = styled.div`
  gap: 12px;
  display: flex;
  justify-content: space-between;
  input {
    width: 80px;
  }
  @media (max-width: 500px) {
    gap: 6px;
    input {
      width: 60px;
    }
  }
`

const CardNumberInput = styled(Input)`
  display: none;
`

const CardExpiry = styled.div`
  gap: 4px;
  display: flex;
  flex-direction: column;
`

const CardCvv = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
`

const BottomSection = styled.div`
  display: flex;
  gap: 6px;
  justify-content: space-between;
  input {
    width: 136px;
    @media (max-width: 500px) {
      width: 88px;
    }
  }
`
const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Label = styled.label`
  color: white;
`

function Card() {
  const { register, setValue, setFocus } = useFormContext()

  // Card number sections of XXXX format
  const firstRef = useRef<HTMLInputElement>(null)
  const secondRef = useRef<HTMLInputElement>(null)
  const thirdRef = useRef<HTMLInputElement>(null)
  const fourthRef = useRef<HTMLInputElement>(null)

  const focusOrder = [firstRef, secondRef, thirdRef, fourthRef]

  function handleCardNumberChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value)
  }

  function updateCardNumberValue() {
    const cardNumber = `${firstRef.current?.value || ''}${
      secondRef.current?.value || ''
    }${thirdRef.current?.value || ''}${fourthRef.current?.value || ''}`
    setValue('cardNumber', cardNumber)
  }

  function handleCardNumberSectionChange(
    event: React.ChangeEvent<HTMLInputElement>,
    order: number
  ) {
    const value = event.target.value.replace(/[^0-9]/g, '').slice(0, 4)
    event.target.value = value
    updateCardNumberValue()

    if (value.length === 4 && order !== 4) focusOrder[order].current?.focus()
    else if (!value.length && order !== 1) focusOrder[order - 1].current?.focus()
    else if (value.length === 4 && order === 4) setFocus('cardExpiry')
  }

  function handleCardExpiryChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    const formattedValue = formatCardExpiryDate(value)
    setValue('cardExpiry', formattedValue)
    if (value.length === 5) setFocus('cardCvv')
  }

  function handleCardCvvChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    const formattedValue = formatCardCvv(value)
    setValue('cardCvv', formattedValue)
  }

  return (
    <Container>
      <TopSection>
        <Label htmlFor="cardNumber">Номер карти</Label>
        <CardNumber>
          <CardNumberInput
            type="number"
            {...register('cardNumber', {
              required: true,
              minLength: 16,
              onChange: handleCardNumberChange
            })}
          />
          <Input
            ref={firstRef}
            type="text"
            minLength={4}
            onChange={(e) => handleCardNumberSectionChange(e, 1)}
          />
          <Input
            ref={secondRef}
            type="text"
            onChange={(e) => handleCardNumberSectionChange(e, 2)}
          />
          <Input ref={thirdRef} type="text" onChange={(e) => handleCardNumberSectionChange(e, 3)} />
          <Input
            ref={fourthRef}
            type="text"
            onChange={(e) => handleCardNumberSectionChange(e, 4)}
          />
        </CardNumber>
      </TopSection>
      <BottomSection>
        <CardExpiry>
          <Label htmlFor="cardExpiry">Темін дії</Label>
          <Input
            type="text"
            {...register('cardExpiry', {
              required: true,
              onChange: handleCardExpiryChange,
              minLength: 5
            })}
          />
        </CardExpiry>
        <CardCvv>
          <Label htmlFor="cardCvv">CVC/CVV</Label>
          <Input
            type="text"
            {...register('cardCvv', {
              required: true,
              onChange: handleCardCvvChange,
              minLength: 3
            })}
          />
        </CardCvv>
      </BottomSection>
    </Container>
  )
}

export default Card
