import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { ITContainer, ITCountryCard } from '../../components';
import styles from './styles';

function CountriesScreen() {
  const [countries, setcountries] = useState([])

  useEffect(() => {
    async function getCountries() {
      const response = await AsyncStorage.getItem('countries');
      if (response) {
        const countriesArr = await JSON.parse(response);
        setcountries(countriesArr)
      }
    }
    getCountries()
  }, [])
  
  return (
    <ITContainer>
      <ScrollView contentContainerStyle={styles.container}>
        { countries.map(country => (<ITCountryCard key={country} title={country}/>))}
      </ScrollView>
    </ITContainer>
  )
}

export default CountriesScreen;
