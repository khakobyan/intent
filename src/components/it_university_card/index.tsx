import React, { FC } from 'react';
import { Linking, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

interface Props {
  title: string
  web_page: string
}  

export const ITUniversityCard: FC<Props> = ({title, web_page}) => {
 
  return (
    <View style={styles.container}>
      <Text style={styles.title} >{title}</Text>
      <TouchableOpacity 
        style={styles.linkContainer}
        onPress={() => Linking.openURL(web_page)}
      >
        <Icon name='web' size={40} color='#2051ab'/>
        <Text style={styles.linkTitle}>Webpage</Text>
      </TouchableOpacity>
    </View>
  );
}
