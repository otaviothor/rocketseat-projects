import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import { MaterialIcons } from '@expo/vector-icons'

import api from '../services/api'
import { connect, disconnect, subscribeToNewDevs } from '../services/socket'

import PointMap from '../components/PointMap'

function Main({ navigation }) {

  const [currentRegion, setCurrentRegion] = useState(null)
  const [devs, setDevs] = useState([])
  const [techs, setTechs] = useState('')

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync()

      if (granted) {
        const { coords } = await getCurrentPositionAsync({ enableHighAccuracy: true })

        const { latitude, longitude } = coords

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        })
      }
    }

    loadInitialPosition()
  }, [])

  useEffect(() => {
    subscribeToNewDevs(dev => setDevs([...devs, dev]))
  }, [devs])

  function setupWebSocket() {
    disconnect()

    const { latitude, longitude } = currentRegion

    connect(
      latitude,
      longitude,
      techs
    )


  }

  async function loadDevs() {

    const { latitude, longitude } = currentRegion

    const response = await api.get('/search', {
      params: {
        latitude,
        longitude,
        techs
      }
    })

    setDevs(response.data.devs)

    setupWebSocket()
  }

  function handleRegionChanged(region) {
    setCurrentRegion(region)
  }

  if (!currentRegion) {
    return null
  }

  return (
    <>
      <MapView
        onRegionChangeComplete={handleRegionChanged}
        style={styles.map}
        initialRegion={currentRegion}
      >
        {devs.map((dev, i) => (
          <PointMap key={i} dev={dev} navigation={navigation}/>
        ))}
      </MapView>

      <View style={styles.searchForm}>
        <TextInput
          style={styles.searchInput}
          placeholder='Digite as tecnologias'
          placeholderTextColor='#999'
          autoCapitalize='words'
          autoCorrect={false} 
          value={techs} 
          onChangeText={setTechs}
        />
        <TouchableOpacity
          style={styles.searchLoadButton}
          onPress={loadDevs}
        >
          <MaterialIcons name='my-location' size={20} color='#fff' />
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  searchForm: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row'
  },
  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 2
  },
  searchLoadButton: {
    width: 50,
    height: 50,
    backgroundColor: '#8e4dff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15
  }
})

export default Main