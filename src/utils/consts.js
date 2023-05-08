export const BASE_URL =
  'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

export const GET_PRICE_URL = (cryptoValue, currencyValue) =>
  `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoValue}&tsyms=${currencyValue}`;
