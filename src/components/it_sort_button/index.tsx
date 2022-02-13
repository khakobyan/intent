import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

interface Props {
  onPress: any
  value: string
}  

export const ITSortButton: FC<Props> = ({value = 'asc', ...rest}) => { 
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      <Icon name={value == 'asc' ? 'arrowdown' : 'arrowup'} size={20}/>
    </TouchableOpacity>
  );
}
