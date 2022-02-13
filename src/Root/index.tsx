import * as React from 'react'
import { StatusBar } from 'react-native'
import BootSplash from 'react-native-bootsplash'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Routes } from '../navigation';

export const App = () => {
  const [ countries ] = React.useState(['Poland', 'Germany', 'France', 'Spain', 'United Kingdom'])
  React.useEffect(() => {
    async function setCountries() {
      const currentCountries =  await AsyncStorage.getItem('countries')
      if (!currentCountries) {
        const countriesData = await JSON.stringify(countries)
        await AsyncStorage.setItem('countries', countriesData)
      }
    }

    setCountries()
    BootSplash.hide()
  }, [])

  return (
    <>
      <SafeAreaProvider>
        <StatusBar translucent backgroundColor='transparent' barStyle="dark-content" />
        <Routes />
      </SafeAreaProvider>
    </>
  )
}
