import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from 'expo-router';

export default function Config() {
 return(
    <View style={styles.container}>
        <Text style={styles.texto}>Config</Text>
    </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  }
});