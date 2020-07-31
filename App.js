import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class App extends React.Component {
  state = {
    peso: 0,
    altura: 0,
    imc: 0,
    legenda: 'Indeterminado',
    cor: '#b2bec3',
  };

  calcularIMC = () => {
    const resultado = this.state.peso / (this.state.altura * this.state.altura);


    this.setState({
      imc: Math.ceil(resultado)
    });


    if(resultado < 18.5) {
      this.setState({
        legenda: 'Magreza',
        cor: '#d63031'
      });
    } else if(resultado >= 18.5 && resultado < 25) {
      this.setState({
        legenda: 'Normal',
        cor: '#2ecc71'
      });
    } else if(resultado >= 25 && resultado < 30) {
      this.setState({
        legenda: 'Sobrepeso',
        cor: '#f1c40f'
      });
    } else if(resultado >= 30 && resultado < 40) {
      this.setState({
        legenda: 'Obesidade',
        cor: '#e67e22'
      });
    } else if(resultado >= 40) {
      this.setState({
        legenda: 'Obesidade Grave',
        cor: ''
      });
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.legenda}>Seu IMC</Text>

        <View style={[styles.painel, {backgroundColor: this.state.cor}]}>
          <Text style={styles.resultado}>{this.state.imc}</Text>
          <Text style={styles.diagnostico}>{this.state.legenda}</Text>
        </View>

        <View>
          <TextInput 
            style={styles.peso} 
            placeholder="Peso"
            onChangeText={value => {
              this.setState({peso: value.replace(',', '.')});
            }}
          />
          <TextInput 
            style={styles.altura} 
            placeholder="Altura"
            onChangeText={value => {
              this.setState({altura: value.replace(',', '.')});
            }}
          />

          <TouchableOpacity onPress={this.calcularIMC} style={styles.button}>
            <Text style={styles.buttonText}>Calcular</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }


}


