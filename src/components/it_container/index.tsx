import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

interface Props {
  children: any
}

export const ITContainer: FC<Props> = ({children}) => {
  return (
    <SafeAreaView
      style={styles.container}
      edges={['bottom']}
    >
      {children}
    </SafeAreaView>
  );
}
