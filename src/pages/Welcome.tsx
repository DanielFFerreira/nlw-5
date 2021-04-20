import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';

import { Entypo } from '@expo/vector-icons';
import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';


export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil
     </Text>

      <Image
        source={wateringImg}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>


      {/* Component button */}
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.7}
      >
        <Text style={styles.btnText}>
          <Entypo
            name="chevron-right"
            size={32}
          />
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
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
  btnText: {
    color: colors.white,
    fontSize: 21,
  },

  image: {
    height: Dimensions.get('window').width * 0.7
  },
});