import React from 'react';
import {Image, StyleSheet, Switch, Text, TouchableOpacity} from 'react-native';
import {TopContainer, Container, ImageContainer} from '../login/Login/styles';
import {SwitchContainer} from './styles';
import {LogOut} from 'react-native-feather';

function Login({navigation}: any) {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  function Sair() {
    // navigation.navigate('EmailValidator');
  }

  return (
    <Container>
      <TopContainer />

      <ImageContainer>
        <Image
          style={styles.image}
          source={require('../../assets/lucas2.0.jpg')}
        />
      </ImageContainer>
      <Switch
        trackColor={{true: '#521AA3', false: 'grey'}}
        thumbColor={'#E0E0E0'}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          marginRight: '82%',
          padding: 20,
          transform: [{scaleX: 1.5}, {scaleY: 1.5}],
          zIndex: 30,
        }}
        value={isSwitchOn}
        onValueChange={() => {
          setIsSwitchOn(!isSwitchOn);
        }}
      />
      <SwitchContainer>
        <Text style={styles.text}>Modo Editor</Text>
      </SwitchContainer>
      <TouchableOpacity style={styles.LogOut} onPress={Sair}>
        <LogOut width={33} height={33} color={'#000000'} />
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
    paddingLeft: 23,
    color: '#393939',
    zIndex: 22,
    marginBottom: 120,
  },
  LogOut: {
    width: 50,
    height: 50,
    zIndex: 50,
    positon: 'absolute',
    bottom: '44%',
    left: '87%',
  },
});
