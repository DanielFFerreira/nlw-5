import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import wateringImg from '../assets/watering.png';
import { Button } from '../components/Button';
import colors from '../styles/colors';


export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil
     </Text>

      <Image source={wateringImg} style={styles.image} />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <Button />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    marginTop: 40,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading
  },
  btn: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 20,
    height: 56,
    width: 56,
  },
  image: {
    width: 292,
    height: 284,
  },
  btnText: {
    color: colors.white,
    fontSize: 21,
  }
});