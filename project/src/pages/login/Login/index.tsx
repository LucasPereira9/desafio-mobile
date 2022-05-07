import React, {useState} from 'react';
import {
  Alert,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  TopContainer,
  ImageContainer,
  EmailContainer,
} from './styles';

function Login({navigation}: any) {
  const [senha, setSenha] = useState('');
  function Logar() {
    if (senha === '1') {
      navigation.navigate('Home');
      setSenha('');
    } else {
      Alert.alert('Senha incorreta!');
    }
  }

  return (
    <Container>
      <StatusBar backgroundColor="#42C1C7" barStyle="white" />
      <TopContainer />
      <ImageContainer>
        <Image
          style={styles.image}
          source={require('../../../assets/lucas2.0.jpg')}
        />
      </ImageContainer>
      <Text style={styles.text}>E-mail</Text>
      <EmailContainer>
        <Text style={styles.emailText}>lucas@gmail.com</Text>
      </EmailContainer>
      <Text style={styles.text2}>Senha</Text>
      <TextInput
        style={styles.input}
        value={senha}
        placeholder="Insira sua senha"
        placeholderTextColor={'#A8A8A8'}
        onChangeText={value => setSenha(value)}
        returnKeyType={'next'}
        keyboardType="numeric"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.LoginButton} onPress={Logar}>
        <Text style={styles.text3}>Logar</Text>
      </TouchableOpacity>
    </Container>
  );
}

export default Login;

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 130,
    borderRadius: 100,
    borderWidth: 2.8,
    borderColor: '#ffffff',
    alignSelf: 'center',
  },
  text: {
    color: 'black',
    fontSize: 15,
    paddingTop: 90,
    paddingLeft: 25,
    marginBottom: 15,
  },
  text2: {
    color: 'black',
    fontSize: 15,
    paddingTop: 28,
    paddingLeft: 25,
    marginBottom: 15,
  },
  text3: {
    alignSelf: 'center',
    fontSize: 16,
    color: '#000',
  },
  emailText: {
    color: '#393939',
    fontSize: 16,
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#A8A8A8',
    fontSize: 15,
    marginLeft: 20,
    width: '90%',
    height: 50,
  },
  LoginButton: {
    backgroundColor: '#42C1C7',
    justifyContent: 'center',
    borderRadius: 8,
    margin: 40,
    marginTop: 80,
    width: '90%',
    height: 48,
    alignSelf: 'center',
  },
});
