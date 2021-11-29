import React from 'react';
import { StatusBar } from 'react-native'

import AppIndex from './src'

export default function App() {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='#fafafa'/>
      <AppIndex />
    </>
  );
}

