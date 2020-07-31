import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class App extends React.Component {
  state = {
    peso: 0,
    altura: 0,
    imc: 0,
    legenda: 'Indeterminado'
  };

  calcularIMC = () => {
    const resultado = this.state.peso / (this.state.altura * this.state.altura);

    this.setState({
      imc: resultado
    });

    if(resultado < 18.5) {
      this.setState({
        legenda: 'Magreza'
      });
    } else if(resultado >= 18.5 && resultado < 25) {
      this.setState({
        legenda: 'Normal'
      });
    } else if(resultado >= 25 && resultado < 30) {
      this.setState({
        legenda: 'Sobrepeso'
      });
    } else if(resultado >= 30 && resultado < 40) {
      this.setState({
        legenda: 'Obesidade'
      });
    } else if(resultado >= 40) {
      this.setState({
        legenda: 'Obesidade Grave'
      });
    }
  }


  render() {
    return (
      <View style={styles.app}>
        <Text style={styles.legenda}>Seu IMC</Text>

        <View>
          <Text style={styles.resultado}>{this.state.imc}</Text>
          <Text style={styles.diagnostico}>{this.state.legenda}</Text>
        </View>

        <View>
          <TextInput style={styles.peso} />
          <TextInput style={styles.altura} />

          <TouchableOpacity onPress={this.calcularIMC} style={styles.button}>
            <Text style={styles.buttonText}>Calcular</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }


}


