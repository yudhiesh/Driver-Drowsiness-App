import * as React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import * as tf from "@tensorflow/tfjs";

import styles from "../styles/style.js";

function Video({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.appButtonText}>
        please click the start button to start tracking your awareness levels.
      </Text>
      <Text style={styles.appButtonText2}>
        Please keep the camera close to your face for accurate model predictions
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Start Driving!"
          color="green"
          onPress={() => navigation.navigate("VideoScreen")}
        />
      </View>
    </View>
  );
}
export default Video;
