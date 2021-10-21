import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View, Alert, Linking, Button } from 'react-native'
import { Audio } from 'expo-av'
import RecordingButton from './RecordingButton'

const AudioScreen: React.FC = () => {
  const [recording, setRecording] = useState<Audio.Recording>()
  const [sound, setSound] = useState<Audio.Sound>()

  async function start() {
    try {
      const granted = await getPermissions()
      if (!granted) return
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      })

      const { recording } = await Audio.Recording.createAsync()
      setRecording(recording)
    } catch (error) {
      console.error(error)
    }
  }

  async function stop() {
    if (!recording) return
    await recording.stopAndUnloadAsync()
    const uri = recording.getURI()
    console.log('Opptak lagret: ' + uri)
    setRecording(undefined)

    if (!uri) return

    const { sound } = await Audio.Sound.createAsync({ uri })
    setSound(sound)
    await sound.playAsync()
  }

  async function getPermissions(): Promise<boolean> {
    const { granted } = await Audio.requestPermissionsAsync()
    if (granted) return true

    Alert.alert('Trenger tilgang til mikrofon', 'Gi tilgang', [
      { text: 'gå til settings', onPress: Linking.openSettings },
    ])
    return false
  }
  return (
    <View style={styles.container}>
      <RecordingButton recording={!!recording} start={start} stop={stop} />
      <Button title="Be om tillatelse" onPress={getPermissions} />
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

export default AudioScreen
