class RequestSendApi {
    static get exchangeRatesURL() {
        return 'https://openexchangerates.org/api/latest.json';
    }

    static fetchRates = () => {
        //TODO:: Replace it
        //const apiKey = 'f3636fa600784ddc8a3d2e295f700c88';
        const apiKey = '';
        return fetch(`${RequestSendApi.exchangeRatesURL}?app_id=${apiKey}`)
            .then(response => response.json());
    };
}

export default RequestSendApi;