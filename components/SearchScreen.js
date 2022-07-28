import React, { useState, useEffect, Component } from 'react';

import FetchUser from '../services/FetchUser';
import Dashboard from './Dashboard';
import SearchBar from './Account/SearchBar';
import FormatUserData from '../services/FormatUserData';

const SearchScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (value) => {
    if (typeof value === 'undefined') {
      return;
    }
    setUsername(value);
  }

  const handleSubmit = () => {
    FetchUser(username).then((res) => {
      if (res) {
        navigation.navigate('Dashboard', {
          data: FormatUserData(res),
          'name': username,
        }).setOptions({ title: username });
      }
    });
  }

  return <SearchBar handleSubmit={handleSubmit} setUsername={handleUsernameChange} />;
};

export default SearchScreen;
