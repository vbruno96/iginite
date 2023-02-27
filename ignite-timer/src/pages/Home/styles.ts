import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: 700;
`

const BaseInput = styled.input`
  height: 2.5rem;
  background: transparent;
  color: ${(props) => props.theme['gray-100']};
  padding: 0 0.5rem;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-size: 1.125rem;
  font-weight: 700;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

export const CountdownContainer = styled.div`
  display: flex;
  gap: 1rem;
  color: ${(props) => props.theme['gray-100']};
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;

  span {
  background: ${(props) => props.theme['gray-700']};
  padding: 2rem 1rem;
  border - radius: 8px;
}
`

export const Separator = styled.div`
  width: 4rem;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
  overflow: hidden;
`

export const StartCountdownButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;

  &: not(: disabled):hover {
  background: ${(props) => props.theme['green-700']};
}

  &:disabled {
  opacity: 0.7;
  cursor: not - allowed;
}
`
