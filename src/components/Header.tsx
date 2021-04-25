import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import colors from '../styles/colors';

export function Header() {
  return (
    <View style={styles.container}>
      <Text>Selecionar planta</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
  }
});

