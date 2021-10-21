import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button
} from "react-native";

// notes from lecture
// use Dimentions.width to get the perfect width for the image

// assignment: create some app that returns a random color

const App: React.FC = () => {
  
  // uses state to hold the value
  const [colour, setColour] = useState("rgb(170, 71, 246)")

  const changeColor = () => {
    // uses Math.random with Math.floor, specified
    // 256 because 255 is the highest number for rgb generation of colors
    // here, it will return a random number between 0 and 255
    const calculateColor = Math.floor(Math.random() * 256)

    // this variable creates the sting for rgb, getting back a random color three times
    let colorCode = 'rgb(' + (calculateColor) + ',' + (calculateColor) + ',' + (calculateColor) + ')'

    // here we change the state to the random rgb color the colorCode gets
    setColour(colorCode)
  }


  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: colour }]}></View>
      <Text style={styles.text}>
        {colour}
      </Text>
      <Button title="Change color" onPress={changeColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
  box: {
    width: 100,
    height: 100,
  }
});

export default App