import React from 'react';
import { Text, View, Image } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Image source={require('./images/Bellatorum-App-Header.png')} />
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#164d9a',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

export { Header };
