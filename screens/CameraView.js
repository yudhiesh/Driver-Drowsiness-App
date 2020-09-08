import React, { useState, useEffect } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

import styles from "../styles/style"

export default function CameraView() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            justifyContent: "center"
          }}>
          <View style={styles.modelButtonContainer}>
          <Button 
            title= "Flip Screen"
            color ="black"
            style={styles.appButtonText2}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          />
          <Button 
            title= "Start"
            color="green"
          />
          <Button 
            title= "Stop"
            color="red"
          />
          </View>
        </View>
      </Camera>
    </View>
  );
}
// Need to add two buttons for starting the model and one for stopping the model
            //<View style={styles.buttonContainer}>
            //<Button
            //  title="Start Driving!"
            //  color="green"
            //  onPress={()=> navigation.navigate("VideoScreen")}
            ///>
            //<Button
            //  title="Stop Driving!"
            //  color="red"
            //  onPress={()=> navigation.navigate("VideoScreen")}
            ///>
            //</View>
