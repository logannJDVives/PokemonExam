import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../Styles/globalStyles';

export default function ProfileScreen() {
  useEffect(() => {
    console.log('[ProfileScreen] mounted');
    return () => console.log('[ProfileScreen] unmounted');
  }, []);

  return (
    <View style={[styles.screen, { justifyContent:'center', alignItems:'center' }]}>
      <Image source={require('../assets/adaptive-icon.png')} style={{ width: 96, height: 96, borderRadius: 48, marginBottom: 12 }} />
      <Text style={styles.title}>Logann Jankowski-Devriendt</Text>
      <Text style={[styles.subtitle, { textAlign:'center', marginTop: 6 }]}>
        Student Graudaat Programmeren logann.jankowski.d@outlook.com
      </Text>
    </View>
  );
}
