export default async function convertCurrencies(
    currencyFrom,
    currencyTo,
    amount,
    callback
) {
  const requestURL = 'https://api.exchangerate.host/convert?from=' +
      currencyFrom + '&to=' + currencyTo + '&amount=' + amount;
  const response = fetch(requestURL)
      .then(response => response.json())
      .then(data => callback(data.result));
}
