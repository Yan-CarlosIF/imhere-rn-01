import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { homeStyles } from "./styles";

export function Home() {
  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar");
  }

  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.eventName}>Nome do evento</Text>
      <Text style={homeStyles.eventDate}>Sábado, 23 de agosto de 2025</Text>

      <View style={homeStyles.form}>
        <TextInput
          style={homeStyles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity
          style={homeStyles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={homeStyles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
