import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

type Props = {
  recording: boolean
  start: (event: GestureResponderEvent) => void
  stop: (event: GestureResponderEvent) => void
}

export default function RecordingButton({ recording, start, stop }: Props) {
  return (
    <TouchableOpacity onPress={recording ? stop : start}>
      <MaterialCommunityIcons
        name={recording ? 'stop-circle-outline' : 'microphone'}
        size={200}
        color="maroon"
      />
    </TouchableOpacity>
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
