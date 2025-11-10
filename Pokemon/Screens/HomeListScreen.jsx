import React, { useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { fetchPokemonList } from '../lib/api';
import { filterBySearch, sortItems, applySimpleFilter } from '../lib/helpers';
import SearchBar from '../components/SearchBar';
import SortBar from '../components/SortBar';
import PokemonCard from '../components/PokemonCard';
import LoadingState from '../components/LoadingState';
import EmptyState from '../components/EmptyState';
import ErrorState from '../components/ErrorState';
import styles from '../styling/globalStyles';

export default function HomeListScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [sortKey, setSortKey] = useState('nameAsc');
  const [gen1Only, setGen1Only] = useState(false);

  const [data, setData] = useState([]);
  const [state, setState] = useState({ loading: true, error: null });

  useEffect(() => {
    console.log('[HomeListScreen] mounted');
    let alive = true;
    (async () => {
      try {
        setState({ loading: true, error: null });
        const list = await fetchPokemonList(300, 0);
        if (alive) setData(list);
      } catch (e) {
        if (alive) setState({ loading: false, error: e });
      } finally {
        if (alive) setState(s => ({ ...s, loading: false }));
      }
    })();
    return () => { alive = false; console.log('[HomeListScreen] unmounted'); };
  }, []);

  const filtered = useMemo(() => {
    let items = filterBySearch(data, query);
    items = applySimpleFilter(items, gen1Only);
    items = sortItems(items, sortKey);
    return items;
  }, [data, query, sortKey, gen1Only]);

  if (state.loading) return <LoadingState />;
  if (state.error)   return <ErrorState error={state.error.message} />;
  if (!filtered.length) return (
    <View style={styles.screen}>
      <SearchBar value={query} onChange={setQuery} />
      <SortBar sortKey={sortKey} setSortKey={setSortKey} gen1Only={gen1Only} setGen1Only={setGen1Only} />
      <EmptyState text="Niets gevonden. Pas je zoekopdracht of filter aan." />
    </View>
  );

  return (
    <View style={styles.screen}>
      <SearchBar value={query} onChange={setQuery} />
      <SortBar sortKey={sortKey} setSortKey={setSortKey} gen1Only={gen1Only} setGen1Only={setGen1Only} />
      <FlashList
        data={filtered}
        keyExtractor={(item) => String(item.id)}
        estimatedItemSize={72}
        renderItem={({ item }) => (
          <PokemonCard
            item={item}
            onPress={() => navigation.navigate('HomeDetail', { idOrName: item.name, id: item.id })}
          />
        )}
      />
    </View>
  );
}
