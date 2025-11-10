const BASE = 'https://pokeapi.co/api/v2';

export async function fetchPokemonList(limit = 300, offset = 0) {
  const res = await fetch(`${BASE}/pokemon?limit=${limit}&offset=${offset}`);
  if (!res.ok) throw new Error('Failed to fetch list');
  const data = await res.json();
  const results = data.results.map(p => {
    const id = Number(p.url.split('/').filter(Boolean).pop());
    return { ...p, id };
  });
  return results;
}

// detail by id or name
export async function fetchPokemonDetail(idOrName) {
  const res = await fetch(`${BASE}/pokemon/${idOrName}`);
  if (!res.ok) throw new Error('Failed to fetch detail');
  return res.json();
}
