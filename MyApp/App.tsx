/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

type Props = {
  type: 'one' | 'two';
};

class IU extends Component<Props> {
  render() {
    let img;
    if (this.props.type === 'one') {
      img = require('./images/iu.jpeg');
    } else {
      img = require('./images/sample.png');
    }

    return (
      <View>
        <Image source={img} />
      </View>
    );
  }
}

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.hello}>Hello!</Text>
      </View>
      <IU type="two" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hello: {
    color: 'red',
    fontSize: 40,
  },
  image: {
    maxWidth: 100,
    maxHeight: 100,
  },
});

export default App;
