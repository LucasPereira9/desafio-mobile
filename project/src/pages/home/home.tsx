import React from 'react';
import {Image, View} from 'react-native';

function Login() {
  return (
    <View>
      <Image
        // eslint-disable-next-line react-native/no-inline-styles
        style={{width: 100, height: 100}}
        source={require('../../assets/qesh-blue.png')}
      />
    </View>
  );
}

export default Login;
