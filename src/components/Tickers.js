import React, { Component } from 'react';
import './Tickers.css';
import Cryptocurrency from './Cryptocurrency';
import axios from 'axios';


class Tickers extends Component {
    state = {
        data: [
            {
                id: "bitcoin",
                name: "Bitcoin",
                symbol: "BTC",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7d: "0",
            },
            {
                id: "ethereum",
                name: "Ethereum",
                symbol: "ETH",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7d: "0",
            },
            {
                id: "litecoin",
                name: "Litecoin",
                symbol: "LTC",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7d: "0",
            }
        ]
    };

    componentDidMount() {
        this.fetchCryptocurrencyData();
        this.interval = setInterval(() => this.fetchCryptocurrencyData(), 60 * 100);
    }

    fetchCryptocurrencyData() {
        axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
            .then(response => {
                // Choosing which Cryptocurrencies we want to select
               var wanted = ['bitcoin', 'ethereum', 'litecoin'];
               // Filtering fetched data by setting wanted array as parameter for three currencies only
               var result = response.data.filter(currency => wanted.includes(currency.id));
               this.setState({
                  data: result
               });
            })
            .catch(err => console.log(err));
    }

    render() {
        // Mapping child component three times as there are three objects
        var tickers = this.state.data.map((currency) => {
            return(
                // Passing props to Cryptocurrency child component
                <Cryptocurrency data={currency} key={currency.id} />
            )
        });
        return(
            <div className='tickers-container'>
                <ul className='tickers'>{tickers}</ul>
                <p>Information updated every minute courtesy of coinmarketcap.com</p>
            </div>
        )
    }
}

export default Tickers;