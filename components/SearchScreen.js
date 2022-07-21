import React, { useState, useEffect, Component } from 'react';

import FetchUser from '../services/FetchUser';
import Dashboard from './Dashboard';
import SearchBar from './SearchBar';

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
      // console.log(res);
      if (res) {
        console.log('Here')
        navigation.navigate('Dashboard', {
          data: res
        });
      }
    });
  }

  return <SearchBar handleSubmit={handleSubmit} setUsername={handleUsernameChange} />;
};

export default SearchScreen;
