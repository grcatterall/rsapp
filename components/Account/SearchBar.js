import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

const SearchBar = ({ handleSubmit, setUsername, username }) => {
  return (
    <View style={styles.main}>
      <View>
        <TextInput
          style={styles.searchInput}
          onChange={(e) => setUsername(e.nativeEvent.text)}
          placeholder="Enter Username..."
          defaultValue={typeof username !== 'undefined' ? username : ''}
        />
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} underlayColor="white">
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            underlayColor="white"
            onPress={() => { handleSubmit() }}>
            <Text style={styles.buttonText}>SEARCH</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    // flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    // backgroundColor: '#e5e6ea',
  },
  searchInput: {
    height: 40,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderBottomWidth: 1,
    borderRadius: 8,
    borderBottomColor: '#63B0CD',
    color: '#39393A',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#39393A',
    alignSelf: 'left',
  },
  button: {
    height: 45,
    flexDirection: 'row',
    borderColor: '#e5e6ea',
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'stretch',
  },
});

export default SearchBar;