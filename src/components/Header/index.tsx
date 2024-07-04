import { Container, Logo } from "./styles";
import { CaretLeft } from "phosphor-react-native";

import LogoImg from "@assets/logo.png";

export function Header() {
  return (
    <Container>
      <CaretLeft color="#cdcdcd" size={32} />
      <Logo source={LogoImg} />
    </Container>
  );
}
