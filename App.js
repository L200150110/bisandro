//import modules
import React from "react";
import { View, Text } from "react-native";
// import { useKeepAwake } from "expo-keep-awake";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import screens
import HomeScreen from "./screens/HomeScreen";
import SignToTextScreen from "./screens/SignToTextScreen";
import DictionaryScreen from "./screens/DictionaryScreen";
import DetailDictionaryScreen from "./screens/DetailDictionaryScreen";
import VideoDictionaryScreen from "./screens/VideoDictionaryScreen";
import VoiceToSignScreen from "./screens/VoiceToSignScreen";
import TextToSignScreen from "./screens/TextToSignScreen";
import VoiceToTextScreen from "./screens/VoiceToTextScreen";
import ManualScreen from "./screens/ManualScreen";
import DetailManualScreen from "./screens/DetailManualScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  // useKeepAwake();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // headerShown: false,
          headerStyle: {
            backgroundColor: "#f9b218"
          },
          headerTintColor: "#fff"
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dictionary" component={DictionaryScreen} />
        <Stack.Screen
          name="Detail Dictionary"
          component={DetailDictionaryScreen}
        />
        <Stack.Screen
          name="Video Dictionary"
          component={VideoDictionaryScreen}
        />
        <Stack.Screen name="Sign To Text" component={SignToTextScreen} />
        <Stack.Screen name="Voice To Sign" component={VoiceToSignScreen} />
        <Stack.Screen name="Text To Sign" component={TextToSignScreen} />
        <Stack.Screen name="Voice To Text" component={VoiceToTextScreen} />
        <Stack.Screen name="Manual" component={ManualScreen} />
        <Stack.Screen name="Detail Manual" component={DetailManualScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
