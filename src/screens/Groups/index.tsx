import { StyleSheet, View, Text } from "react-native";
import { Container } from "./styles";

export function Groups() {
  return (
    <Container>
      <Text style={styles.text}>Groups</Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#FFF",
    fontSize: 32,
  },
});
