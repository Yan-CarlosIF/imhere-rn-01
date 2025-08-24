import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home() {
  const [participantName, setParticipantName] = useState("");
  const [participants, setParticipants] = useState<string[]>([]);

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante já existe",
        "Já existe um participante na lista com esse nome."
      );
    }

    if (participantName.trim() === "") {
      return Alert.alert(
        "Participante vazio",
        "Informe o nome do participante."
      );
    }

    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => {
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          );
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sábado, 23 de agosto de 2025</Text>

      <View style={styles.form}>
        <TextInput
          onChangeText={setParticipantName}
          value={participantName}
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Participant name={item} onRemove={handleParticipantRemove} />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
