import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';

function Input() {
  const [email, setEmail] = useState('');

  return (
    <TextInput
      style={styles.input}
      placeholder="Digite seu e-mail para logar ou cadastrar"
      value={email}
      onChangeText={value => setEmail(value)}
      placeholderTextColor={'#A8A8A8'}
      returnKeyType={'next'}
      keyboardType="email-address"
    />
  );
}

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.8,
    borderColor: '#A8A8A8',
    fontSize: 16,
    marginLeft: 25,
    width: 300,
    height: 50,
  },
});
