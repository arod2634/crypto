import React, { Component } from 'react';
import Request from 'superagent';

export default class CoinMarketCapData extends Component {

  constructor(props) {
    super(props)
    this.state = {
      coinName: props.coinName,
      "symbol": "0",
      "rank": "0",
      "price_usd": "0",
      "price_btc": "0",
      "24h_volume_usd": "0",
      "market_cap_usd": "0",
      "available_supply": "0",
      "total_supply": "0",
      "max_supply": "0",
      "percent_change_1h": "0",
      "percent_change_24h": "0",
      "percent_change_7d": "0",
      "last_updated": "0"
    }
  }

  componentDidMount() {
    this.fetchCoinData();
  }

  fetchCoinData = () => {
    let that = this;
    Request.post('https://floatingstl.com/wp-json/rise/v1/coin-data')
      .set('Content-Type', 'application/json')
      .send({ coinName: this.state.coinName})
      .end(function(err, data){
         if (err || !data.ok) {
           console.log('Error: Could Not Reach Coin Market Cap APIs');
         } else {
           that.setState({
             "symbol": data.body[0].symbol,
             "rank": data.body[0].rank,
             "price_usd": data.body[0].price_usd,
             "price_btc": data.body[0].price_btc,
             "24h_volume_usd": data.body[0]['24h_volume_usd'],
             "market_cap_usd": data.body[0].market_cap_usd,
             "available_supply": data.body[0].available_supply,
             "total_supply": data.body[0].total_supply,
             "max_supply": data.body[0].max_supply,
             "percent_change_1h": data.body[0].percent_change_1h,
             "percent_change_24h": data.body[0].percent_change_24h,
             "percent_change_7d": data.body[0].percent_change_7d,
             "last_updated": data.body[0].last_updated,
           });
           setTimeout(function(){
             that.fetchCoinData();
           }, 10000);
         }
    });
  }

  displayCoinData = () => {
    return(
      <div>
        <div className="item coin-info-headings">
          <strong>Rank</strong>
          <strong>Symbol</strong>
          <strong>USD</strong>
          <strong>BTC</strong>
          <strong>Daily Volume</strong>
          <strong>Hour %</strong>
          <strong>Day %</strong>
          <strong>Week %</strong>
        </div>
        <div className="item coin-info-data">
          <small>{this.state.rank}</small>
          <small>{this.state.symbol}</small>
          <small>${this.state.price_usd}</small>
          <small>{this.state.price_btc}</small>
          <small>${this.state['24h_volume_usd']}</small>
          <small>{this.state.percent_change_1h}%</small>
          <small>{this.state.percent_change_24h}%</small>
          <small>{this.state.percent_change_7d}%</small>
        </div>
      </div>
    );
  }

  render () {
    return (
      <div className="row">
        <div className="col-md-12">
          {this.displayCoinData()}
        </div>
      </div>
    )
  }
}
