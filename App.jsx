import {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {FormScreen, Header, QuoteScreen} from './src/components';
import {GET_PRICE_URL} from './src/utils/consts';

function App() {
  const [currency, setCurrency] = useState('');
  const [crypto, setCrypto] = useState('');
  const [queryAPI, setQueryAPI] = useState(false);
  const [quoteResult, setQuoteResult] = useState({});
  const [loading, setLoading] = useState(false);

  async function getDataAPI() {
    try {
      setLoading(true);
      const {data} = await axios(GET_PRICE_URL(crypto, currency));
      setQuoteResult(data?.DISPLAY[crypto][currency]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setQueryAPI(false);
    }
  }

  useEffect(() => {
    if (queryAPI) {
      getDataAPI();
    }
  }, [queryAPI]);

  return (
    <ScrollView>
      <Header />
      <Image
        style={styles.image}
        source={require('./assets/img/cryptomonedas.png')}
      />
      <View style={styles.container}>
        <FormScreen
          currency={currency}
          crypto={crypto}
          setCurrency={setCurrency}
          setCrypto={setCrypto}
          setQueryAPI={setQueryAPI}
        />
      </View>
      {loading ? (
        <ActivityIndicator
          style={{marginTop: 20}}
          size="large"
          color="#00ff00"
        />
      ) : (
        <QuoteScreen quoteResult={quoteResult} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
  container: {
    marginHorizontal: '2.5%',
  },
});

export default App;
