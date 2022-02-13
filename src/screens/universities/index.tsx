import React from 'react';
import { View } from 'react-native';
import { ITInput, ITSortButton } from '../../components';
import styles from './styles';

function UniversitiesScreen() {
  return (
    <View>
      <View style={styles.topContainer}>
        <ITInput value='' placeholder='University Name'/>
        <ITSortButton value='des' onPress={() => console.log('1111')}/>
      </View>

    </View>
  )
}

export default UniversitiesScreen;
