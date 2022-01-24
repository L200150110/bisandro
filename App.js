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
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dictionary" component={DictionaryScreen} />
        <Stack.Screen
          name="DetailDictionary"
          component={DetailDictionaryScreen}
        />
        <Stack.Screen
          name="VideoDictionary"
          component={VideoDictionaryScreen}
        />
        <Stack.Screen name="SignToText" component={SignToTextScreen} />
        <Stack.Screen name="VoiceToSign" component={VoiceToSignScreen} />
        <Stack.Screen name="TextToSign" component={TextToSignScreen} />
        <Stack.Screen name="VoiceToText" component={VoiceToTextScreen} />
        <Stack.Screen name="Manual" component={ManualScreen} />
        <Stack.Screen name="DetailManual" component={DetailManualScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
