import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type ParticipantProps = {
  name: string;
  onRemove: (name: string) => void;
};

export function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity onPress={() => onRemove(name)} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
