import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { fetchPokemonDetail } from '../lib/api';
import styles from '../Styles/globalStyles';
import colors from '../Styles/Colors';

export default function HomeDetailScreen({ route }) {
  const { idOrName } = route.params;
  const [poke, setPoke] = useState(null);
  const [state, setState] = useState({ loading: true, error: null });

  useEffect(() => {
    console.log('[HomeDetailScreen] mounted', idOrName);
    let alive = true;
    (async () => {
      try {
        setState({ loading: true, error: null });
        const data = await fetchPokemonDetail(idOrName);
        if (alive) setPoke(data);
      } catch (e) {
        if (alive) setState({ loading: false, error: e });
      } finally {
        if (alive) setState(s => ({ ...s, loading: false }));
      }
    })();
    return () => { alive = false; console.log('[HomeDetailScreen] unmounted'); };
  }, [idOrName]);

  if (state.loading) return <View style={{flex:1, justifyContent:'center', alignItems:'center'}}><Text>Loading…</Text></View>;
  if (state.error)   return <View style={{flex:1, justifyContent:'center', alignItems:'center'}}><Text>Fout bij laden.</Text></View>;
  if (!poke)         return <View style={{flex:1, justifyContent:'center', alignItems:'center'}}><Text>Geen data.</Text></View>;

  const sprite = poke.sprites?.other?.['official-artwork']?.front_default || poke.sprites?.front_default;

  return (
    <ScrollView style={[styles.screen, { paddingBottom: 24 }]}>
      <View style={[styles.card, { alignItems:'center', marginBottom: 12 }]}>
        {sprite ? <Image source={{ uri: sprite }} style={{ width: 200, height: 200 }} resizeMode="contain" /> : null}
        <Text style={[styles.title, { marginTop: 8, textTransform:'capitalize' }]}>{poke.name}  </Text>
        <Text style={styles.subtitle}>#{poke.id}</Text>
      </View>

      <View style={[styles.card, { gap: 8 }]}>
        <Text style={styles.title}>Info</Text>
        <Text>Hoogte: {poke.height}</Text>
        <Text>Gewicht: {poke.weight}</Text>
        <Text>Base XP: {poke.base_experience}</Text>
        <Text>Types: {poke.types?.map(t=>t.type.name).join(', ')}</Text>
        <Text>Abilities: {poke.abilities?.map(a=>a.ability.name).join(', ')}</Text>
      </View>

      <View style={[styles.card, { gap: 8, marginTop: 12 }]}>
        <Text style={styles.title}>Statistieken</Text>
        {poke.stats?.map(s => (
          <View key={s.stat.name} style={{ backgroundColor: colors.bg, borderRadius: 8, padding: 8 }}>
            <Text>{s.stat.name}: {s.base_stat}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
