import styled from 'styled-components'
import { Fragment } from 'react'
import { Hand, Wallet, Shirt, HeartHandshake } from 'lucide-react'
import { HelpType, PaymentType } from 'types'
import PaymentForm from 'components/help-form-section/PaymentForm'
import HelpTypeLabel from 'components/help-form-section/HelpTypeLabel'
import Title from 'components/ui/Title'
import Subtitle from 'components/ui/Subtitle'

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0 40px 0;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: fit-content;
  margin: 33px;
  padding: 24px;
  gap: 24px;
  border-radius: 16px;

  @media (min-width: 380px) {
    border: 1px solid ${({ theme }) => theme.colors.slate};
  }
  
  @media ${({ theme }) => theme.media.lg} {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`

const TypesWrapper = styled.div`
  margin-top: 20px;
  display: grid;
  place-items: center;
  gap: 20px;

  @media (min-width: 455px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.media.sm} {
    margin: 0 30px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1108px) {
    padding: 0 10px;
    grid-template-columns: repeat(4, 1fr);
  }
`

const helpTypesLabels = [
  {
    type: HelpType.action,
    icon: Hand,
    text: 'Зробити'
  },
  {
    type: HelpType.financial,
    icon: Wallet,
    text: 'Фінансова допомога'
  },
  {
    type: HelpType.material,
    icon: Shirt,
    text: 'Матеріальна допомога'
  },
  {
    type: HelpType.volunteering,
    icon: HeartHandshake,
    text: 'Волонтерство'
  }
]

interface HelpFormProps {
  helpType: HelpType
  paymentType: PaymentType
  onHelpTypeClick: (type: HelpType) => void
  onPaymentTypeClick: (type: PaymentType) => void
}

function HelpForm({ helpType, paymentType, onHelpTypeClick, onPaymentTypeClick }: HelpFormProps) {
  return (
    <Fragment>
      <SectionHeader>
        <Title>Види допомоги</Title>
        <Subtitle>Ви можете змінити вид допомоги</Subtitle>
      </SectionHeader>
      <TypesWrapper>
        {helpTypesLabels.map((item) => (
          <HelpTypeLabel
            key={item.type}
            icon={item.icon}
            text={item.text}
            isActive={helpType === item.type}
            onClick={() => onHelpTypeClick(item.type)}
          />
        ))}
      </TypesWrapper>
      <ContentWrapper>
        <PaymentForm
          activePaymentType={paymentType}
          onItemClick={(type) => onPaymentTypeClick(type)}
        />
      </ContentWrapper>
    </Fragment>
  )
}

export default HelpForm
