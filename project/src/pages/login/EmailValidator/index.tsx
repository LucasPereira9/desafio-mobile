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
import {Container, ImageContainer} from './styles';

function EmailValidator({navigation}: any) {
  const [email, setEmail] = useState('');
  function Login() {
    if (email === 'a') {
      navigation.navigate('Login');
      setEmail('');
    } else {
      Alert.alert('Email ou senha incorretos!');
    }
  }
  return (
    <Container>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <ImageContainer>
        <Image
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: 100, height: 90, marginTop: 70}}
          source={require('../../../assets/qesh-blue.png')}
        />
      </ImageContainer>
      <Text style={styles.text}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail para logar ou cadastrar"
        value={email}
        onChangeText={value => setEmail(value)}
        placeholderTextColor={'#A8A8A8'}
        returnKeyType={'next'}
        keyboardType="email-address"
      />
      <TouchableOpacity onPress={Login}>
        <Text>ENTRAR</Text>
      </TouchableOpacity>
      <Image
        style={styles.image1}
        source={require('../../../assets/Baixo-azul.png')}
      />
      <Image
        style={styles.image2}
        source={require('../../../assets/Baixo-roxo.png')}
      />
    </Container>
  );
}

export default EmailValidator;

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 18,
    paddingTop: 20,
    paddingLeft: 20,
    marginBottom: 10,
  },
  image1: {
    top: 90,
    width: '100%',
    zIndex: 20,
  },
  image2: {
    width: '100%',
    position: 'relative',
    bottom: 180,
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#A8A8A8',
    fontSize: 15,
    marginLeft: 25,
    width: 300,
    height: 50,
  },
});
