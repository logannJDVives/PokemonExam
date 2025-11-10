import React from 'react';
import { TextInput, View } from 'react-native';
import styles from '../styling/globalStyles';

export default function SearchBar({ value, onChange }) {
  return (
    <View style={[styles.row, { marginBottom: 10, gap: 10 }]}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="Zoek op naam…"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
      />
    </View>
  );
}
