import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';

import styles from './styles';

export default function Main() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState(0);
  const [legenda, setLegenda] = useState('indeterminado');
  const [cor, setCor] = useState('#ffeaa7');

  function calcularIMC() {
    const resultado = peso / (altura * altura);


    setImc(Math.ceil(resultado));


    if (resultado < 18.5) {      
        setLegenda('Magreza'),
        setCor('#d63031');
      
    } else if (resultado >= 18.5 && resultado < 25) {
        setLegenda('Normal'),
        setCor('#2ecc71');

    } else if (resultado >= 25 && resultado < 30) {
        setLegenda('Sobrepeso'),
        setCor('#f1c40f')
      ;
    } else if (resultado >= 30 && resultado < 40) {
        setLegenda('Obesidade'),
        setCor('#e67e22');
    } else if (resultado >= 40) {
        setLegenda('Obesidade Grave'),
        setCor('#ff6348');
    }
  }

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
          <Text style={styles.legenda}>Seu IMC</Text>

          <View style={[styles.painel, { backgroundColor: cor }]}>
            <Text style={styles.resultado}>{imc}</Text>
            <Text style={styles.diagnostico}>{legenda}</Text>
          </View>

          <View style={styles.form}>

            <TextInput
              style={styles.input}
              placeholder="Coloque seu peso"
              keyboardType="numeric"
              onChangeText={value => {
                setPeso(value.replace(',', '.') );
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Coloque sua altura"
              keyboardType="numeric"
              onChangeText={value => {
                setAltura(value.replace(',', '.') );
              }}
            />

            <TouchableOpacity onPress={calcularIMC} style={styles.button}>
              <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>

          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );

  }



