import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { FranceIcon, GBIcon, GermanyIcon, PolandIcon, SpainIcon } from '../../assets/icons';
import styles from './styles';

interface Props {
  title: string
  onPress: any
}  

export const ITCountryCard: FC<Props> = ({title, ...rest}) => {
  const setIcon = () => {
    switch (title) {
      case 'Poland':
        return <PolandIcon />;
      case 'Germany':
        return <GermanyIcon />;
      case 'France':
        return <FranceIcon />
      case 'Spain':
        return <SpainIcon />
      case 'United Kingdom':
        return <GBIcon />
      default:
        return <GBIcon />;
    }
  }
  
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      {setIcon()}
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
