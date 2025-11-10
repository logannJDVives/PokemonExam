import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styling/globalStyles';
export default function EmptyState({ text="Geen resultaten" }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', padding:20 }}>
      <Text style={styles.subtitle}>{text}</Text>
    </View>
  );
}
