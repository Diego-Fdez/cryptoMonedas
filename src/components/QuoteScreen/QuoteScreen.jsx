import {View, Text, StyleSheet} from 'react-native';

const QuoteScreen = ({quoteResult}) => {
  if (Object.keys(quoteResult).length === 0) return null;

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.price]}>
        <Text style={styles.span}>{quoteResult?.PRICE}</Text>
      </Text>
      <Text style={styles.text}>
        Precio más alto del día:{' '}
        <Text style={styles.span}>{quoteResult?.HIGHDAY}</Text>
      </Text>
      <Text style={styles.text}>
        Precio más bajo del día:{' '}
        <Text style={styles.span}>{quoteResult?.LOWDAY}</Text>
      </Text>
      <Text style={styles.text}>
        variación últimas 24 horas:{' '}
        <Text style={styles.span}>{quoteResult?.CHANGEPCT24HOUR}%</Text>
      </Text>
      <Text style={styles.text}>
        Ultima Actualización:{' '}
        <Text style={styles.span}>{quoteResult?.LASTUPDATE}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5e49e2',
    padding: 20,
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    marginBottom: 10,
  },
  price: {
    fontSize: 38,
  },
  span: {
    fontFamily: 'Lato-Black',
  },
});

export default QuoteScreen;
