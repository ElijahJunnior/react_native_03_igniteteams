import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStylesProps = "PRIMARY" | "SECONDARY";

type ContainerProps = {
  type: ButtonTypeStylesProps;
};

export const Container = styled(TouchableOpacity)<ContainerProps>`
  align-items: center;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
  border-radius: 6px;
  flex: 1;
  justify-content: center;
  min-height: 56px;
  max-height: 56px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;
