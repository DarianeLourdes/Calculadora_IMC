import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 30,
  },
  painel: {
    alignSelf: 'center',
    width: 150,
    borderRadius: 5,
    padding: 8,
    marginVertical: 10,
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
    borderColor:'#dcdce6',
    borderWidth: 1,
    borderRadius: 8,
    padding: 4,
    paddingHorizontal: 4,
    fontSize: 16,
    height: 50,
    marginTop: 20,
    marginBottom: 20,
  },
  altura: {
    borderColor:'#dcdce6',
    borderWidth: 1,
    borderRadius: 8,
    padding: 4,
    paddingHorizontal: 4,
    fontSize: 16,
    height: 50,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    height: 50,
    backgroundColor: '#00cec9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});