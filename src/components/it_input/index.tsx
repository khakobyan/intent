import React, { FC } from 'react';
import { TextInput, View } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

interface Props {
  value: string,
  placeholder: string,
}

export const ITInput: FC<Props> = ({value, placeholder, ...rest}) => {
  return (
    <View style={styles.container}>
      <TextInput 
        value={value}
        style={styles.input}
        placeholder={placeholder}
        {...rest}
      />
      <Icon name='search1' size={20}/>
    </View>
  );
}
