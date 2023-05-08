import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Alert} from 'react-native';
import axios from 'axios';
import {Picker} from '@react-native-picker/picker';
import {BASE_URL} from '../../utils/consts';

const FormScreen = ({
  currency,
  crypto,
  setCurrency,
  setCrypto,
  setQueryAPI,
}) => {
  const [cryptos, setCryptos] = useState([]);

  async function fetchData() {
    const {data} = await axios.get(BASE_URL);
    setCryptos(data?.Data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handlerQuote() {
    if (currency.trim() === '' || crypto.trim() === '') {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }
    setQueryAPI(true);
  }

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        itemStyle={{height: 120}}
        selectedValue={currency}
        onValueChange={itemValue => setCurrency(itemValue)}>
        <Picker.Item label="--Seleccione--" value="" />
        <Picker.Item label="Dólar USA" value="USD" />
        <Picker.Item label="Peso Mexicano" value="MXN" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
      </Picker>
      <Text style={styles.label}>Criptomoneda</Text>
      <Picker
        itemStyle={{height: 120}}
        selectedValue={crypto}
        onValueChange={itemValue => setCrypto(itemValue)}>
        <Picker.Item label="--Seleccione--" value="" />
        {cryptos?.map(crypto => (
          <Picker.Item
            label={crypto?.CoinInfo?.FullName}
            value={crypto?.CoinInfo?.Name}
            key={crypto?.CoinInfo?.Id}
          />
        ))}
      </Picker>
      <TouchableHighlight
        style={styles.btnQuote}
        onPress={() => handlerQuote()}>
        <Text style={styles.btnText}>Cotizar</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    fontSize: 22,
    marginVertical: 20,
  },
  btnQuote: {
    backgroundColor: '#5e49e2',
    padding: 10,
    marginTop: 20,
  },
  btnText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Lato-Black',
  },
});

export default FormScreen;
