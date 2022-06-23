import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Sound from 'react-native-sound';


// música local
let musciPath = require('./src/sounds/song1.mp3');
var music = new Sound(musciPath, (error) => {
  if (error) {
    Alert.alert("Falló la reproducción ...");
  }
});

// Recursos de Internet 
// let musciPath = require('Enlace de canción en línea');
// var music = new Sound(musciPath, null, (error) => {
//   if (error) {
//     Alert.alert("Falló la reproducción ...");
//   }
// });


export default class Me extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{ marginTop: 15 }} onPress={() => { music.play() }}>
          <Text style={{ color: '#4398ff', fontSize: 20 }}>
            Pon música local
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 15 }} onPress={() => { music.pause() }}>
          <Text style={{ color: '#4398ff', fontSize: 20 }}>
            se acabó el tiempo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 15 }} onPress={() => { music.stop(() => { music.play() }) }}>
          <Text style={{ color: '#4398ff', fontSize: 20 }}>
            reiniciar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 15 }} onPress={() => { music.stop(() => { music.release() }) }}>
          <Text style={{ color: '#4398ff', fontSize: 20 }}>
            detener
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
})