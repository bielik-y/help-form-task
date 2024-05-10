import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Title from 'components/ui/Title'
import PersonForm from 'components/data-form-section/PersonForm'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 16px;
`

const SwitchButton = styled.div<{ $isSelected?: boolean }>`
  background: ${(props) => (props.$isSelected ? props.theme.colors.primary : 'white')};
  color: ${(props) => (props.$isSelected ? 'white' : props.theme.colors.primary)};
  font-size: 14px;
  font-weight: 700;
  padding: 10px 20px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: ${(props) =>
      props.$isSelected ? props.theme.colors.primary : props.theme.colors.gray};
  }
`

const LeftSwitchButton = styled(SwitchButton)`
  border-right: none;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`

const RightSwitchButton = styled(SwitchButton)`
  border-left: none;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`

function DataForm() {
  const [mode, setMode] = useState<'person' | 'entity'>('person')

  useEffect(() => {
    console.log(mode)
  }, [mode])

  return (
    <Wrapper>
      <Title>Заповніть форму</Title>
      <ButtonsWrapper>
        <LeftSwitchButton
          tabIndex={0}
          $isSelected={mode === 'person'}
          onClick={() => setMode('person')}
        >
          Фіз. особа
        </LeftSwitchButton>
        <RightSwitchButton
          tabIndex={0}
          $isSelected={mode === 'entity'}
          onClick={() => setMode('entity')}
        >
          Юр. особа
        </RightSwitchButton>
      </ButtonsWrapper>
      <PersonForm />
    </Wrapper>
  )
}

export default DataForm
