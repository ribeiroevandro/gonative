import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: colors.bgHeader,
    shadowColor: colors.sombra,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
