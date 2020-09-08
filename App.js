import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Home";
import Video from "./screens/Video";
import VideoScreen from "./screens/CameraView"

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Video" component={Video} />
        <Stack.Screen name="VideoScreen" component={VideoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
