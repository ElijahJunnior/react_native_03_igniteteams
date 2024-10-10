import styled from "styled-components/native"

export const Container = styled.View`
  background-color: ${(({theme}) => theme.COLORS.GRAY_600)};
  flex: 1;
  padding: 24px;
`

export const Form = styled.View`
  background-color: ${(({theme}) => theme.COLORS.GRAY_700)};
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`