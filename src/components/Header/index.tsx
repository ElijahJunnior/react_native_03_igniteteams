import { useNavigation } from "@react-navigation/native";
import { BackButton, BackIcon, Container, Logo } from "./styles";

import LogoImg from "@assets/logo.png";

type Props = {
  showBackButton?: Boolean;
};

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    // voltar para tela anterior
    // navigation.goBack();

    // voltar para tela inicial
    navigation.navigate("groups");
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={LogoImg} />
    </Container>
  );
}
