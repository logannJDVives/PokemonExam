import React from 'react';
import { Text, View } from 'react-native';
import styles from '../Styles/globalStyles';
export default function ErrorState({ error }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', padding:20 }}>
      <Text style={styles.title}>Er ging iets mis</Text>
      <Text style={[styles.subtitle, { marginTop: 8 }]}>{String(error || 'Onbekende fout')}</Text>
    </View>
  );
}
