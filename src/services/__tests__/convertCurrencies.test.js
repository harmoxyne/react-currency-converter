import {convertCurrencies} from '../convertCurrencies';

describe('convertCurrencies', function() {
  beforeEach(() => {
    fetch.resetMocks();
  });

  const currencyFrom = 'EUR';
  const currencyTo = 'USD';
  const amountFrom = 1;
  const expectedAmount = 15;

  it('should return response result', async () => {
    fetch.mockResponseOnce(JSON.stringify({result: expectedAmount}));

    expect(await convertCurrencies(currencyFrom, currencyTo, amountFrom))
        .toEqual(expectedAmount);
  });

  it('should call endpoint once', () => {
    fetch.mockResponseOnce(JSON.stringify({result: expectedAmount}));

    convertCurrencies(currencyFrom, currencyTo, amountFrom);

    expect(fetch).toBeCalled();
  });

  it('should call endpoint with expected parameters', function() {
    fetch.mockResponseOnce(JSON.stringify({result: expectedAmount}));

    convertCurrencies(currencyFrom, currencyTo, amountFrom);

    const expectedURL = 'https://api.exchangerate.host/convert?from=EUR&to=USD&amount=1';
    expect(fetch).toBeCalledWith(expectedURL);
  });
});
