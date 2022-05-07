import React from 'react';
import {Image, StatusBar, StyleSheet, Text} from 'react-native';
import {Container, ImageContainer} from './styles';
import Input from '../../components/inputs/input';

function Login() {
  return (
    <Container>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <ImageContainer>
        <Image
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: 100, height: 90, marginTop: 70}}
          source={require('../../assets/qesh-blue.png')}
        />
      </ImageContainer>
      <Text style={styles.text}>E-mail</Text>
      <Input />
      <Image
        style={styles.image1}
        source={require('../../assets/Baixo-azul.png')}
      />
      <Image
        style={styles.image2}
        source={require('../../assets/Baixo-roxo.png')}
      />
    </Container>
  );
}

export default Login;

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
});
