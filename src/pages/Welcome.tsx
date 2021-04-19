import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import wateringImg from '../assets/watering.png';


export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>
        Gerencie
        suas plantas de
        forma fácil
     </Text>

      <Image source={wateringImg} />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <TouchableOpacity style={styles.btn}>
        <Text>
          >
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 32,
  }
});