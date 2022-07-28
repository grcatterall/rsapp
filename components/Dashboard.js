import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SwipeableModal from './Modal';
import cardStyles from '../assets/CardStyles';
import FormatUserData from '../services/FormatUserData';

const Dashboard = ({ route, navigation }) => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState({});
  
  const { data, name } = route.params;
  const skills = data.skills;
  const other = data.other;

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('userData');
      if (value !== null) {
        setUserData(JSON.parse(value));
        setUsername(await AsyncStorage.getItem('username'));
      }
    } catch (e) {
      // error reading value
    }
  };

  const compareAccounts = () => {
    navigation.navigate('Compare', {
      'searchData': {
        'name': name, 
        'skills': skills,
        'other': other
      },
      'userdata': {...FormatUserData(userData), 'name': username}
    });
  };

  useEffect(() => {
    getData();
  }, []);

  let button = <Text></Text>;

  if (username !== '') {
    button = <Button title="Compare with your account" onPress={() => { compareAccounts() }} />
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.header}>Skills</Text>
        {button}
      </View>
      {Object.keys(skills).map(function (key) {
        skills[key].name = key;
        return <SwipeableModal data={skills[key]} />;
      })}
      <View style={styles.row}>
        <Text style={styles.header}>Minigames</Text>
      </View>
      {Object.keys(other).map(function (key) {
        if (typeof other[key] !== 'undefined') {
          return (
            <View style={styles.card}>
              <View style={styles.row}>
                <Text style={styles.defaultText} key={key}>
                  {key}:{' '}
                </Text>
                <Text style={styles.defaultLevel}>{other[key].score}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.defaultTextSmall}>Rank: </Text>
                <Text style={styles.defaultTextSmall}>{other[key].rank}</Text>
              </View>
            </View>
          );
        }
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBCBA3',
    paddingLeft: 10,
    paddingRight: 10,
  },
  row: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginTop: 4,
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    margin: 4,
    padding: 8,
    fontFamily: 'Arial-BoldMT',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4.5,
    elevation: 1,
    marginTop: 10,
  },
  header: {
    fontSize: 40,
    margin: 8,
    fontWeight: 'bold',
  },
  defaultText: {
    color: 'black',
    fontSize: 28,
    alignSelf: 'stretch',
    flex: 1,
    fontWeight: 'bold',
  },
  defaultLevel: {
    color: 'black',
    fontSize: 28,
    alignSelf: 'stretch',
    fontWeight: 'bold',
  },
  defaultTextSmall: {
    color: 'black',
    fontSize: 20,
    alignSelf: 'stretch',
    flex: 1,
    fontWeight: 'bold',
  },
});

export default Dashboard;
