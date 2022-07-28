import React, { useState, useEffect } from 'react';
import { View, Text, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import FetchUser from '../services/FetchUser';
import SearchBar from './Account/SearchBar';
import StatList from './Account/StatList';

const Account = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState({});

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem('userData', value);
      await AsyncStorage.setItem('username', username);
    } catch (e) {
      console.error(e);
    }
  };

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


  useEffect(() => {
    getData();
  }, []);


  const handleUsernameChange = (value) => {
    if (typeof value === 'undefined') {
      return;
    }
    setUsername(value);
  };

  const handleSubmit = async () => {
    Keyboard.dismiss();
    
    let data = await FetchUser(username);

    if (Object.keys(data).length && typeof data !== 'undefined') {
      storeData('userData', JSON.stringify(data));
      setUserData(data);
    }
  };

  if (Object.keys(userData).length) {
    return (
      <View>
        <Text>Set your account here</Text>
        <SearchBar
          handleSubmit={handleSubmit}
          setUsername={handleUsernameChange}
          username={username}
        />
        <StatList data={userData} />
      </View>
    );
  } else {
    return (
      <View>
        <Text>Set your account here</Text>
        <SearchBar
          handleSubmit={handleSubmit}
          setUsername={handleUsernameChange}
        />
      </View>
    );
  }
};

export default Account;
