import React from 'react';
import { Text, TextInput, View, TouchableOpacity, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';

import styles from './styles';

export default class Main extends React.Component {
  state = {
    peso: 0,
    altura: 0,
    imc: 0,
    legenda: 'Indeterminado',
    cor: '#ffeaa7',
  };

  calcularIMC = () => {
    const resultado = this.state.peso / (this.state.altura * this.state.altura);


    this.setState({
      imc: Math.ceil(resultado)
    });


    if (resultado < 18.5) {
      this.setState({
        legenda: 'Magreza',
        cor: '#d63031'
      });
    } else if (resultado >= 18.5 && resultado < 25) {
      this.setState({
        legenda: 'Normal',
        cor: '#2ecc71'
      });
    } else if (resultado >= 25 && resultado < 30) {
      this.setState({
        legenda: 'Sobrepeso',
        cor: '#f1c40f'
      });
    } else if (resultado >= 30 && resultado < 40) {
      this.setState({
        legenda: 'Obesidade',
        cor: '#e67e22'
      });
    } else if (resultado >= 40) {
      this.setState({
        legenda: 'Obesidade Grave',
        cor: '#ff6348'
      });
    }
  }


  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
          <Text style={styles.legenda}>Seu IMC</Text>

          <View style={[styles.painel, { backgroundColor: this.state.cor }]}>
            <Text style={styles.resultado}>{this.state.imc}</Text>
            <Text style={styles.diagnostico}>{this.state.legenda}</Text>
          </View>

          <View style={styles.form}>

            <TextInput
              style={styles.input}
              placeholder="Coloque seu peso"
              keyboardType="numeric"
              onChangeText={value => {
                this.setState({ peso: value.replace(',', '.') });
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Coloque sua altura"
              keyboardType="numeric"
              onChangeText={value => {
                this.setState({ altura: value.replace(',', '.') });
              }}
            />

            <TouchableOpacity onPress={this.calcularIMC} style={styles.button}>
              <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>

          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );

  }
}


