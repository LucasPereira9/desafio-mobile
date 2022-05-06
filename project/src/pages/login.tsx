import React from 'react';
import {Image, View} from 'react-native';

const Login: React.FC = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d41d1d',
      }}>
      <Image source={require('./assets/logo.png')} />
    </View>
  );
};

export default Login;
