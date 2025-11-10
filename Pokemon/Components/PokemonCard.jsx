import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styling/globalStyles';

export default function PokemonCard({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, { marginBottom: 10 }]}>
      <View style={[styles.row, { justifyContent:'space-between' }]}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.chip}><Text>#{item.id}</Text></View>
      </View>
    </TouchableOpacity>
  );
}
