import { BackButton, BackIcon, Container, Logo } from "./styles";

import LogoImg from "@assets/logo.png";

type Props = {
  showBackButton?: Boolean;
};

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={LogoImg} />
    </Container>
  );
}
