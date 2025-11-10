import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../Styles/globalStyles';

const SortBtn = ({ label, active, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.btn, active && styles.btnActive]}>
    <Text style={styles.btnText}>{label}</Text>
  </TouchableOpacity>
);

export default function SortBar({ sortKey, setSortKey, gen1Only, setGen1Only }) {
  return (
    <View style={[styles.row, { flexWrap:'wrap', marginBottom: 12 }]}>
      <SortBtn label="Naam ↑" active={sortKey==='nameAsc'} onPress={()=>setSortKey('nameAsc')} />
      <SortBtn label="Naam ↓" active={sortKey==='nameDesc'} onPress={()=>setSortKey('nameDesc')} />
      <SortBtn label="ID ↑"   active={sortKey==='idAsc'}   onPress={()=>setSortKey('idAsc')} />
      <SortBtn label="ID ↓"   active={sortKey==='idDesc'}  onPress={()=>setSortKey('idDesc')} />
      <TouchableOpacity onPress={()=>setGen1Only(v=>!v)} style={[styles.btn, gen1Only && styles.btnActive]}>
        <Text style={styles.btnText}>{gen1Only ? 'Gen1: aan' : 'Gen1: uit'}</Text>
      </TouchableOpacity>
    </View>
  );
}
