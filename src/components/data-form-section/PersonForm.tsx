import styled from 'styled-components'
import { useFormContext } from 'react-hook-form'
import { formatPhone, formatPostcode, formatText } from 'utils/formatters'
import FormField from 'components/FormField'

const Wrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${({ theme }) => theme.media.lg} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 460px;
  width: 100%;
  gap: 20px;
`
const RowSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${({ theme }) => theme.media.sm} {
    flex-direction: row;
    gap: 18px;
  }
`

function PersonForm() {
  const { register, setValue } = useFormContext()

  function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setValue('phone', formatPhone(value))
  }

  function handlePostcodeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setValue('postcode', formatPostcode(value))
  }

  function handleFirstNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setValue('firstName', formatText(value))
  }

  function handleLastNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setValue('lastName', formatText(value))
  }

  function handleCountryChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setValue('country', formatText(value))
  }

  function handleCityChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setValue('city', formatText(value))
  }

  return (
    <Wrapper>
      <FormSection>
        <RowSection>
          <FormField
            label="Ім'я"
            type="text"
            autoFocus
            {...register('firstName', {
              required: true,
              onChange: handleFirstNameChange
            })}
          />
          <FormField
            label="Прізвище"
            type="text"
            {...register('lastName', {
              required: true,
              onChange: handleLastNameChange
            })}
          />
        </RowSection>
        <FormField label="Назва компанії, організації" type="text" {...register('company')} />
        <FormField label="Email-aдреса" type="email" {...register('email', { required: true })} />
        <FormField
          label="Номер телефону"
          type="text"
          defaultValue={'+38 '}
          {...register('phone', {
            required: true,
            onChange: handlePhoneChange,
            minLength: 17
          })}
        />
      </FormSection>
      <FormSection>
        <FormField
          label="Країна"
          type="text"
          {...register('country', {
            required: true,
            onChange: handleCountryChange
          })}
        />
        <RowSection>
          <FormField
            label="Місто"
            type="text"
            {...register('city', {
              required: true,
              onChange: handleCityChange
            })}
          />
          <FormField
            label="Штат, район"
            type="text"
            {...register('district', { required: true })}
          />
        </RowSection>
        <FormField label="Адреса" type="text" {...register('address', { required: true })} />

        <FormField
          style={{ width: '221px' }}
          label="Поштовий індекс"
          type="text"
          {...register('postcode', {
            required: true,
            onChange: handlePostcodeChange,
            minLength: 5
          })}
        />
      </FormSection>
    </Wrapper>
  )
}

export default PersonForm
