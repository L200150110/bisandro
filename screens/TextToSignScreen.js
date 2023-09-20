import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import HasilScrollView from './../components/HasilScrollView';
import SearchBar from './../components/SearchBar';

export default function TextToSignScreen() {
  const [hasil, setHasil] = useState(null);
  const [inputText, setInputText] = useState('');

  const searchHandler = () => {
    if (inputText == '') {
      setHasil(null);
    } else {
      fetch(
        'http://bisandro.com/api/vocabulary/mass/' +
          inputText.replace(/ /g, '_'),
      )
        .then(response => response.json())
        .then(json => {
          setHasil(json.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar
        image={require('./../assets/icon/transparency.png')}
        searchHandler={() => searchHandler()}
        onChangeText={setInputText}
      />
      <HasilScrollView hasil={hasil} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
