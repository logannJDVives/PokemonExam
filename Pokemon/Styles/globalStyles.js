import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  screen: { flex:1, backgroundColor: colors.bg, paddingHorizontal: 16, paddingTop: 12 },
  row: { flexDirection:'row', alignItems:'center' },
  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  title: { fontSize: 18, fontWeight: '700', color: colors.text },
  subtitle: { fontSize: 14, color: colors.subtext },
  chip: {
    paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999,
    borderWidth: 1, borderColor: colors.border, backgroundColor: colors.chip,
  },
  btn: {
    paddingHorizontal: 12, paddingVertical: 10, borderRadius: 10,
    borderWidth: 1, borderColor: colors.border, backgroundColor: colors.card,
    marginHorizontal: 4,
  },
  btnActive: { borderColor: colors.primary },
  btnText: { color: colors.text, fontWeight: '600' },
  input: {
    backgroundColor: '#fff', borderWidth: 1, borderColor: colors.border,
    borderRadius: 10, paddingHorizontal: 12, paddingVertical: 10, fontSize: 16, flex:1,
  },
});
