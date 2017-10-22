import React from 'react';
import { View } from 'react-native';

const CardSection2 = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'column',
    flexWrap: 'wrap',
    borderColor: '#ddd',
    height: 100
  }
};

export { CardSection2 };
