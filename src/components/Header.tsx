import React from 'react';
import {
  View,
  Text,
  Image,
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
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.red,
  }
});

