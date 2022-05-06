import React from 'react';
import {Image, StatusBar} from 'react-native';
import {Container, ImageContainer} from './styles';

function Login() {
  return (
    <Container>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <ImageContainer>
        <Image
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: 100, height: 90, marginTop: 105}}
          source={require('../../assets/qesh-blue.png')}
        />
      </ImageContainer>
    </Container>
  );
}

export default Login;
