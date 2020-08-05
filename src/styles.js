import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  legenda: {
    textAlign: 'center',
    color: '#57606f',
    fontWeight: 'bold',
    fontSize: 20,
  },
  painel: {
    alignSelf: 'center',
    width: 200,
    borderRadius: 50,
    padding: 8,
    marginVertical: 15,
  },
  resultado: {
    textAlign: 'center',
    fontSize: 27,
    fontWeight: 'bold',
    color: '#57606f',
  },
  diagnostico: {
    textAlign: 'center',
    fontSize: 20,
    color: '#57606f',
  },
  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 20,
  },
  input: {
    backgroundColor: '#dfe4ea',
    borderColor:'#333',
    borderBottomWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 5,
    fontSize: 16,
    height: 50,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    height: 60,
    backgroundColor: '#fdcb6e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  }
});