/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import {TopContainer, Container, ImageContainer} from '../login/Login/styles';
import {
  SwitchContainer,
  NameContainer,
  PhoneContainer,
  EmailContainer,
} from './styles';
import {LogOut} from 'react-native-feather';
import {Edit2} from 'react-native-feather';
import MaskInput from 'react-native-mask-input';
import {launchImageLibrary} from 'react-native-image-picker';

function Login({navigation}: any) {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const [name, setName] = useState('Lucas Pereira de Almeida');
  const [email, setEmail] = useState('lucas@qesh.com');
  const [Nacionalidade, setNacionalidade] = useState('Brasileiro');

  const [phone, setPhone] = React.useState('');
  function Sair() {
    navigation.navigate('EmailValidator');
  }

  const setToastMessage = (msg: string) => {
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };

  const [Pic, setPic] = React.useState(require('../../assets/lucas2.0.jpg'));
  const uploadImage = () => {
    let options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        setToastMessage('cancelada imagem');
      } else if (response.errorCode === 'permission') {
        setToastMessage('permission not provided');
      } else if (response.errorCode === 'others') {
        setToastMessage('errorr');
      } else {
        setPic;
      }
    });
  };

  return (
    <Container>
      <TopContainer />

      <ImageContainer>
        <TouchableOpacity
          style={{
            width: '50%',
            height: '50%',
            alignSelf: 'center',
            right: '8%',
            bottom: '20%',
          }}
          onPress={uploadImage}
          disabled={isSwitchOn ? false : true}>
          <Image style={styles.image} source={Pic} />
          <Edit2
            style={{
              position: 'absolute',
              left: '83%',
              top: '80%',
              zIndex: 2,
              backgroundColor: '#ffffff',
              borderWidth: 1,
              borderColor: '#42C1C7',
              borderRadius: 8,
              opacity: isSwitchOn ? 1 : 0,
            }}
            width={20}
            height={20}
            color={isSwitchOn ? '#000' : '#fff'}
          />
        </TouchableOpacity>
      </ImageContainer>
      <Switch
        trackColor={{true: '#521AA3', false: 'grey'}}
        thumbColor={'#E0E0E0'}
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
        <Edit2
          style={{position: 'absolute', left: '88%', top: '60%', zIndex: -1}}
          width={16}
          height={16}
          color={isSwitchOn ? '#000' : '#fff'}
        />
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
        <Edit2
          style={{position: 'absolute', left: '88%', top: '60%', zIndex: -1}}
          width={16}
          height={16}
          color={isSwitchOn ? '#000' : '#fff'}
        />
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
          value={Nacionalidade}
          onChangeText={value => setNacionalidade(value)}
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
    left: '30%',
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
    width: '90%',
    height: 50,
    color: '#393939',
  },
});
