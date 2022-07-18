export function convertCurrencies(
    currencyFrom,
    currencyTo,
    amount,
) {
  const requestURL = 'https://api.exchangerate.host/convert?'
      + new URLSearchParams({
        from: currencyFrom,
        to: currencyTo,
        amount: amount,
      });

  return fetch(requestURL)
      .then(response => response.json())
      .then(data => data.result);
}
