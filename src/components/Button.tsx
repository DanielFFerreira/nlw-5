import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import colors from '../styles/colors';

export function Button() {
  return (
    <TouchableOpacity
      style={styles.btn}
      activeOpacity={0.7}
    >
      <Text
        style={styles.btnText}
      >
        >
    </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 20,
    height: 56,
    width: 56,
  },

  btnText: {
    color: colors.white,
    fontSize: 21,
  }
});