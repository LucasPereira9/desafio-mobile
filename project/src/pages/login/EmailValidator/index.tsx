/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import {Container, ImageContainer} from './styles';

function EmailValidator({navigation}: any) {
  const [email, setEmail] = useState('');

  const setToastMessage = (msg: string) => {
    ToastAndroid.showWithGravity(msg, ToastAndroid.LONG, ToastAndroid.CENTER);
  };

  const moveAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const inputShow = useRef(new Animated.Value(1)).current;
  const Show = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: Dimensions.get('window').width / 1.6,
        delay: 0,
        useNativeDriver: false,
      }),
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: 1,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(fadeAnim, {
      duration: 2000,
      toValue: 1,
      delay: 2300,
      useNativeDriver: false,
    }).start();
  }, [moveAnim, fadeAnim]);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(inputShow, {
        duration: 2000,
        toValue: 1,
        delay: 0,
        useNativeDriver: false,
      }),
      Animated.timing(inputShow, {
        duration: 2000,
        toValue: 0,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(Show, {
      duration: 2000,
      toValue: Dimensions.get('screen').width / 0.8,
      delay: 2700,
      useNativeDriver: false,
    }).start();
  }, [moveAnim, inputShow, Show]);

  function Login() {
    if (email === '') {
      navigation.navigate('Login');
      setEmail('');
    } else {
      setToastMessage('Email Incorreto!');
    }
  }

  return (
    <Container>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <ImageContainer>
        <Animated.Image
          style={{width: 130, height: 120, marginTop: 40, opacity: fadeAnim}}
          source={require('../../../assets/qesh-blue.png')}
        />
      </ImageContainer>
      <Animated.View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          top: '-20%',
          marginLeft: moveAnim,
        }}>
        <Text style={styles.LogoText}>Q</Text>
        <Animated.Text style={[styles.LogoText, {opacity: fadeAnim}]}>
          esh
        </Animated.Text>
      </Animated.View>
      <Animated.Text style={[styles.text, {opacity: fadeAnim}]}>
        E-mail
      </Animated.Text>
      <Animated.View
        style={{
          borderRadius: 8,
          marginLeft: Show,
          width: 400,
          height: 100,
          bottom: '8%',
          backgroundColor: '#ffffff',
          zIndex: 20,
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail para logar ou cadastrar"
        value={email}
        onChangeText={value => setEmail(value)}
        placeholderTextColor={'#A8A8A8'}
        returnKeyType={'next'}
        keyboardType="email-address"
        onSubmitEditing={() => Login()}
      />
      <Animated.Image
        style={[styles.image1, {opacity: fadeAnim}]}
        source={require('../../../assets/Baixo-azul.png')}
      />
      <Animated.Image
        style={[styles.image2, {opacity: fadeAnim}]}
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
    paddingLeft: 26,
    marginBottom: 10,
    bottom: '3%',
  },
  image1: {
    bottom: '4%',
    width: '100%',
    zIndex: 20,
  },
  image2: {
    width: '100%',
    position: 'relative',
    bottom: 292,
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#A8A8A8',
    fontSize: 15,
    marginLeft: 25,
    width: 300,
    height: 50,
    bottom: '16%',
  },
  Toast: {
    backgroundColor: '#fc2727',
  },
  LogoText: {
    fontSize: 45,
    color: '#42C1C7',
    bottom: '6%',
  },
});
