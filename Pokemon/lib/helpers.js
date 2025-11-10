export function filterBySearch(items, q) {
  if (!q) return items;
  const s = q.trim().toLowerCase();
  return items.filter(p => p.name.toLowerCase().includes(s));
}

export function sortItems(items, sortKey) {
  const copy = [...items];
  switch (sortKey) {
    case 'nameAsc':  return copy.sort((a,b)=>a.name.localeCompare(b.name));
    case 'nameDesc': return copy.sort((a,b)=>b.name.localeCompare(a.name));
    case 'idAsc':    return copy.sort((a,b)=>a.id - b.id);
    case 'idDesc':   return copy.sort((a,b)=>b.id - a.id);
    default:         return copy;
  }
}

// filter for first generation
export function applySimpleFilter(items, onlyGen1) {
  return onlyGen1 ? items.filter(p => p.id <= 151) : items;
}
