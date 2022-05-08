/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import {TopContainer, Container, ImageContainer} from '../login/Login/styles';
import {
  SwitchContainer,
  NameContainer,
  PhoneContainer,
  EmailContainer,
  CountryContainer,
  ColorsContainer,
} from './styles';
import {LogOut} from 'react-native-feather';
import {Edit2} from 'react-native-feather';
import {ArrowDown} from 'react-native-feather';
import MaskInput from 'react-native-mask-input';
import {launchImageLibrary} from 'react-native-image-picker';

function Login({navigation}: any) {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const [name, setName] = useState('Lucas Pereira de Almeida');
  const [Color, setColor] = useState('#42C1C7');
  const [email, setEmail] = useState('lucas@qesh.com');
  const [Nacionalidade, setNacionalidade] = useState('Brasileiro');
  const [showModal, setShowModal] = useState(false);

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

  function TrocarTema() {
    setColor('#ffee00');
  }
  function TrocarTema2() {
    setColor('#FABC02');
  }

  function TrocarTema3() {
    setColor('#FB9902');
  }
  function TrocarTema4() {
    setColor('#FD5308');
  }
  function TrocarTema5() {
    setColor('#FE2712');
  }
  function TrocarTema6() {
    setColor('#30e020');
  }
  function TrocarTema7() {
    setColor('#42C1C7');
  }

  return (
    <Container>
      <StatusBar backgroundColor={Color} barStyle="white" />
      <TopContainer style={{backgroundColor: Color}} />

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
              left: '82%',
              top: '84%',
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
          pattern="[a-zA-Z0-9]+"
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
          keyboardType="numeric"
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

      <CountryContainer>
        <TouchableOpacity
          onPress={() => {
            setShowModal(!showModal);
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{bottom: '25%'}}
          disabled={isSwitchOn ? false : true}>
          <ArrowDown
            style={{left: '88%', top: '64%'}}
            width={17}
            height={17}
            color={isSwitchOn ? '#000' : '#fff'}
          />
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
      </CountryContainer>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          console.log('Modal has been closed.');
        }}>
        <View style={styles.modal}>
          <View
            style={{
              width: 80,
              height: 10,
              backgroundColor: '#6F6F6F',
              alignSelf: 'center',
              borderRadius: 20,
            }}
          />
          <Text
            style={{
              color: '#000',
              top: '8%',
              alignSelf: 'center',
              marginBottom: 70,
              fontSize: 26,
            }}>
            NACIONALIDADE
          </Text>

          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity
              onPress={() => {
                setShowModal(!showModal);
                setNacionalidade('afegão');
              }}>
              <Text style={styles.modalText}>afegão</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setShowModal(!showModal);
                setNacionalidade('sul-africano');
              }}>
              <Text style={styles.modalText}>sul-africano</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setShowModal(!showModal);
                setNacionalidade('albanês');
              }}>
              <Text style={styles.modalText}>albanês</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setShowModal(!showModal);
                setNacionalidade('alemão');
              }}>
              <Text style={styles.modalText}>alemão</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setShowModal(!showModal);
                setNacionalidade('andorrano');
              }}>
              <Text style={styles.modalText}>andorrano</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setShowModal(!showModal);
                setNacionalidade('angolano');
              }}>
              <Text style={styles.modalText}>angolano</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setShowModal(!showModal);
                setNacionalidade('antiguano');
              }}>
              <Text style={styles.modalText}>antiguano</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setShowModal(!showModal);
                setNacionalidade('Italiano');
              }}>
              <Text style={styles.modalText}>Italiano</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setShowModal(!showModal);
                setNacionalidade('saudito');
              }}>
              <Text style={styles.modalText}>saudito</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setShowModal(!showModal);
                setNacionalidade('argelino');
              }}>
              <Text style={styles.modalText}>argelino</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setShowModal(!showModal);
                setNacionalidade('argentino');
              }}>
              <Text style={styles.modalText}>argentino</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setShowModal(!showModal);
                setNacionalidade('Brasileiro');
              }}>
              <Text style={styles.modalText}>Brasileiro</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>

      <ColorsContainer>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            disabled={isSwitchOn ? false : true}
            onPress={TrocarTema}
            style={{zIndex: 100}}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#FEFE33',
                marginLeft: 30,
                marginTop: 5,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={TrocarTema2}
            disabled={isSwitchOn ? false : true}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#FABC02',
                marginLeft: 30,
                marginTop: 5,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={TrocarTema3}
            disabled={isSwitchOn ? false : true}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#FB9902',
                marginLeft: 30,
                marginTop: 5,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={TrocarTema4}
            disabled={isSwitchOn ? false : true}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#FD5308',
                marginLeft: 30,
                marginTop: 5,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={TrocarTema5}
            disabled={isSwitchOn ? false : true}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#FE2712',
                marginLeft: 30,
                marginTop: 5,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={TrocarTema6}
            disabled={isSwitchOn ? false : true}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#30e020',
                marginLeft: 30,
                marginTop: 5,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={TrocarTema7}
            disabled={isSwitchOn ? false : true}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#42C1C7',
                marginLeft: 30,
                marginTop: 5,
                marginRight: 4,
              }}
            />
          </TouchableOpacity>
        </ScrollView>
      </ColorsContainer>
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
    fontStyle: 'bold',
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
    height: 48,
    color: '#393939',
  },
  colors: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ff0000',
    marginLeft: 30,
    marginTop: 5,
  },
  modal: {
    widht: '100%',
    height: '75%',
    backgroundColor: '#ffffff',
  },
  modalText: {
    color: '#222121da',
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#5f5d5d',
    marginBottom: 20,
    fontSize: 19,
    textAlign: 'center',
  },
});
