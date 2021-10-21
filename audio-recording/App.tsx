import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Alert, Button, Linking, StyleSheet, Text, View } from 'react-native'
import { Audio } from 'expo-av'
import AudioScreen from './components/AudioScreen'
import RecordingButton from './components/RecordingButton'

export default function App() {
  return (
    <View style={styles.container}>
      <AudioScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
