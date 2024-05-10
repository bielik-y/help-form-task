import styled from 'styled-components'

const Block = styled.div<{ $isActive: boolean }>`
  background: ${(props) =>
    props.$isActive ? props.theme.colors.secondary : props.theme.colors.grayDark};
  width: 168px;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  align-items: center;
  border-radius: 8px;
  padding: 8px 8px;
  cursor: pointer;

  div {
    display: flex;
    justify-content: center;
  }

  &:hover {
    background: ${(props) =>
      props.$isActive ? props.theme.colors.secondary : props.theme.colors.grayExtraDark};
  }
`

const Image = styled.img`
  height: 54px;
  width: auto;
`
const Text = styled.span`
  color: white;
  font-weight: 300;
  font-size: 13px;
`

interface PaymentTypeLabelProps {
  image: string
  description: string
  isActive: boolean
  onClick: () => void
}

function PaymentTypeLabel({ image, description, isActive, onClick }: PaymentTypeLabelProps) {
  return (
    <Block $isActive={isActive} onClick={onClick} tabIndex={0}>
      <div>
        <Image src={image} alt={description} />
      </div>
      <Text>{description}</Text>
    </Block>
  )
}

export default PaymentTypeLabel
