import React from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';


export default function App() {

  return (
    <View style={styles.app}>
      <Text style={styles.legenda}>Seu IMC</Text>

      <View>
        <Text style={styles.resultado}>25</Text>
        <Text style={styles.diagnostico}>Normal</Text>
      </View>

      <View>
        <TextInput style={styles.peso} />
        <TextInput style={styles.altura} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    padding: 30,
  },
  legenda: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  resultado: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  diagnostico: {
    textAlign: 'center',
    fontSize: 16,
  },
  peso: {
    borderColor: '#000',
    borderWidth: 1,
  },
  altura: {
    borderColor: '#000',
    borderWidth: 1,
  }
});
