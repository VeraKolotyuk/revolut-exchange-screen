class RequestSendApi {
    static get exchangeRatesURL() {
        return 'https://openexchangerates.org/api/latest.json';
    }

    static get userWalletURL() {
        return '/utils/wallet.json';
    }

    static fetchRates = () => {
        //const apiKey = 'f3636fa600784ddc8a3d2e295f700c88';
        const apiKey = '';
        return fetch(`${RequestSendApi.exchangeRatesURL}?app_id=${apiKey}`)
            .then(response => response.json());
    };

    static get(url, params = {}, headers = {}) {
        return fetch(url, {qs: params, headers});
    }

    static post(url, params = {}, headers = {}) {
        return fetch(url, {method: 'POST', body: JSON.stringify(params), headers})
    }
}

export default RequestSendApi;