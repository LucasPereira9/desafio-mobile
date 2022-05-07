import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {TopContainer, Container, ImageContainer} from '../login/Login/styles';
import {
  SwitchContainer,
  NameContainer,
  PhoneContainer,
  EmailContainer,
  CountryContainer,
} from './styles';
import {LogOut} from 'react-native-feather';
import MaskInput from 'react-native-mask-input';

function Login({navigation}: any) {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const [name, setName] = useState('Lucas Pereira de Almeida');
  const [email, setEmail] = useState('lucas@qesh.com');

  const [phone, setPhone] = React.useState('');
  function Sair() {
    navigation.navigate('EmailValidator');
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
          padding: 12,
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

      <NameContainer>
        <Text style={styles.textInputs}>Nome</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={value => setName(value)}
          returnKeyType={'next'}
          keyboardType="default"
          editable={isSwitchOn ? true : false}
        />
      </NameContainer>

      <PhoneContainer>
        <Text style={styles.textInputs}>Telefone</Text>
        <MaskInput
          style={styles.input}
          value={phone}
          editable={isSwitchOn ? true : false}
          onChangeText={masked => {
            setPhone(masked);
          }}
          mask={[
            '(',
            /\d/,
            /\d/,
            ')',
            ' ',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
          ]}
        />
      </PhoneContainer>

      <EmailContainer>
        <Text style={styles.textInputs}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={value => setEmail(value)}
          returnKeyType={'next'}
          keyboardType="email-address"
          editable={false}
        />
      </EmailContainer>

      <TouchableOpacity
        // eslint-disable-next-line react-native/no-inline-styles
        style={{bottom: '12%'}}
        disabled={isSwitchOn ? false : true}>
        <Text style={styles.textInputs}>Nacionalidade</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={value => setName(value)}
          returnKeyType={'next'}
          keyboardType="email-address"
          editable={false}
        />
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
  textInputs: {
    paddingLeft: 25,
    color: '#000000',
    marginBottom: 10,
  },
  LogOut: {
    width: 50,
    height: 50,
    zIndex: 50,
    positon: 'absolute',
    bottom: '44%',
    left: '87%',
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#A8A8A8',
    fontSize: 15,
    marginLeft: 25,
    width: 300,
    height: 50,
    color: '#393939',
  },
});
