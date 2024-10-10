import styled, { css } from "styled-components/native"
import { TouchableOpacity } from "react-native"

export type FilterStyleProps = {
  isActive?: boolean
}

export const Container = styled(TouchableOpacity) <FilterStyleProps>`
  ${({theme, isActive}) => isActive && css`
    border: 1px solid ${theme.COLORS.GREEN_700};
  `};
  
  align-items: center;
  border-radius: 4px;
  height: 38px;
  justify-content: center;
  margin-right: 12px;
  width: 70px;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `};

  text-transform: uppercase;
`;
