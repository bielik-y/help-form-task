import { Fragment } from 'react'
import styled from 'styled-components'
import visaLogo from 'assets/images/visa-logo.png'
import privatLogo from 'assets/images/privat-logo.png'
import terminalLogo from 'assets/images/terminal-logo.png'
import webmoneyLogo from 'assets/images/webmoney-logo.png'
import paypalLogo from 'assets/images/paypal-logo.png'
import PaymentTypeLabel from './PaymentTypeLabel'
import Card from 'components/help-form-section/Card'

const Variants = styled.div`
  display: flex;
  max-width: 550px;
  flex-wrap: wrap;
  gap: 22px;
`
const TypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Text = styled.span`
  color: ${({ theme }) => theme.colors.slate};
  font-weight: 700;
  font-size: 14px;
`

const CardWrapper = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
`

enum PaymentType {
  privat = 'privat24',
  terminal = 'terminal',
  webMoney = 'webmoney',
  paypal = 'paypal',
  visa = 'visa'
}

const paymentTypes = [
  {
    type: PaymentType.visa,
    description: 'Карта Visa/MasterCard',
    image: visaLogo
  },
  {
    type: PaymentType.privat,
    description: 'Приват24',
    image: privatLogo
  },
  {
    type: PaymentType.terminal,
    description: 'Термінал України',
    image: terminalLogo
  },
  {
    type: PaymentType.webMoney,
    description: 'WebMoney',
    image: webmoneyLogo
  },
  {
    type: PaymentType.paypal,
    description: 'PayPal',
    image: paypalLogo
  }
]

interface PaymentFormProps {
  activePaymentType: PaymentType
  onItemClick: (type: PaymentType) => void
}

function PaymentForm({ activePaymentType, onItemClick }: PaymentFormProps) {
  return (
    <Fragment>
      <TypeWrapper>
        <Text>Спосіб оплати</Text>
        <Variants>
          {paymentTypes.map((item) => (
            <PaymentTypeLabel
              key={item.type}
              image={item.image}
              description={item.description}
              isActive={activePaymentType === item.type}
              onClick={() => onItemClick(item.type)}
            />
          ))}
        </Variants>
      </TypeWrapper>
      <CardWrapper>
        <Text>Введіть наступні данні</Text>
        <Card />
      </CardWrapper>
    </Fragment>
  )
}

export default PaymentForm
