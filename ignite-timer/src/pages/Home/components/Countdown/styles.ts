import styled from 'styled-components'

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
    border-radius: 8px;
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
