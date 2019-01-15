import React, { Component } from 'react';
import './Tickers.css';
import Cryptocurrency from './Cryptocurrency';

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

    render() {
        var tickers = this.state.data.map((currency) => {
            return(
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