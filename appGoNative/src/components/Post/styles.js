import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  post: {
    backgroundColor: colors.bgPost,
    margin: 20,
    padding: 20,
    borderRadius: 5,
    shadowColor: colors.sombra,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
  },
  postHeader: {
    borderBottomWidth: 1,
    borderBottomColor: colors.borda,
    marginBottom: 10,
  },
  postTitle: {
    color: colors.header,
    fontSize: 16,
    fontWeight: 'bold',
  },
  postAutor: {
    color: colors.autor,
    fontSize: 14,
    marginTop: 5,
    marginBottom: 10,
  },
  postText: {
    color: colors.post,
  },
});

export default styles;
