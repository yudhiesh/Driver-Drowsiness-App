import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import styles from "../styles/style.js";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.screenContainerHome}>
      <Button
        title="Welcome to DriveSafe"
        onPress={() => navigation.navigate("Video")}
        style={styles.appButtonContainer}
      />
    </View>
  );
}
