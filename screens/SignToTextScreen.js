import {StyleSheet, Text, View, PermissionsAndroid} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {WebView} from 'react-native-webview';

export default function SignToTextScreen({navigation}) {
  const className = ['Aku', 'Apa', 'Apakabar', 'Baik', 'Kamu', 'Nama', 'Siapa'];
  const [hasil, setHasil] = useState('Loading Tensor Flow');

  return (
    <WebView
      allowsInlineMediaPlayback={true}
      cacheEnabled={true}
      geolocationEnabled={false}
      javaScriptEnabled
      javaScriptEnabledAndroid={true}
      mediaPlaybackRequiresUserAction={false}
      mixedContentMode={'compatibility'}
      originWhitelist={['*']}
      scalesPageToFit
      source={{uri: 'https://bisandro.psycopedia.net/'}}
      startInLoadingState={true}
      useWebkit
      userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    height: 50,
    width: 360,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
  },
});
