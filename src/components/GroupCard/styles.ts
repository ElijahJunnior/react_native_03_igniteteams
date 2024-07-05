import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { UsersThree } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  flex-direction: row;
  height: 90px;
  margin-bottom: 12px;
  padding: 24px;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_200};
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
`;

export const Icon = styled(UsersThree).attrs(({theme}) => ({
  color: theme.COLORS.GREEN_700,
  size: 32,
  weight: "fill",
}))`
  margin-right: 20px;
`;