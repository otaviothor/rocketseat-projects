import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

const AppIndex = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
    <Routes />
  </>
);

export default AppIndex;