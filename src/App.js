import React, { Component } from 'react';
import TradingViewWidget, { Themes, IntervalTypes }  from './TradingViewWidget';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="item">
            <TradingViewWidget
              theme={Themes.DARK}
              symbol="COINBASE:BTCUSD"
              timezone="America/Chicago"
              interval={IntervalTypes.D}
              save_image={false}
              allow_symbol_change={false}
              autosize
            />
          </div>
          <div className="item">
            <TradingViewWidget
              theme={Themes.DARK}
              symbol="COINBASE:ETHUSD"
              timezone="America/Chicago"
              interval={IntervalTypes.D}
              save_image={false}
              autosize
            />
          </div>
          <div className="item">
            <TradingViewWidget
              theme={Themes.DARK}
              symbol="COINBASE:LTCUSD"
              timezone="America/Chicago"
              interval={IntervalTypes.D}
              save_image={false}
              autosize
            />
          </div>
          <div className="item">
            <TradingViewWidget
              theme={Themes.DARK}
              symbol="BINANCE:XMRBTC"
              timezone="America/Chicago"
              interval={IntervalTypes.D}
              save_image={false}
              autosize
            />
          </div>
          <div className="item">
            <TradingViewWidget
              theme={Themes.DARK}
              symbol="BINANCE:EOSBTC"
              timezone="America/Chicago"
              interval={IntervalTypes.D}
              save_image={false}
              autosize
            />
          </div>
          <div className="item">
            <TradingViewWidget
              theme={Themes.DARK}
              symbol="BINANCE:SUBBTC"
              timezone="America/Chicago"
              interval={IntervalTypes.D}
              save_image={false}
              autosize
            />
          </div>
          <div className="item">
            <TradingViewWidget
              theme={Themes.DARK}
              symbol="BINANCE:NANOBTC"
              timezone="America/Chicago"
              interval={IntervalTypes.D}
              save_image={false}
              autosize
            />
          </div>
          <div className="item">
            <TradingViewWidget
              theme={Themes.DARK}
              symbol="BINANCE:BNBBTC"
              timezone="America/Chicago"
              interval={IntervalTypes.D}
              save_image={false}
              autosize
            />
          </div>
          <div className="item">
            <TradingViewWidget
              theme={Themes.DARK}
              symbol="BINANCE:OMGBTC"
              timezone="America/Chicago"
              interval={IntervalTypes.D}
              save_image={false}
              autosize
            />
          </div>
          <div className="item">
            <TradingViewWidget
              theme={Themes.DARK}
              symbol="BINANCE:LSKBTC"
              timezone="America/Chicago"
              interval={IntervalTypes.D}
              save_image={false}
              autosize
            />
          </div>
          <div className="item">
            <TradingViewWidget
              theme={Themes.DARK}
              symbol="BINANCE:ADABTC"
              timezone="America/Chicago"
              interval={IntervalTypes.D}
              save_image={false}
              autosize
            />
          </div>
          <div className="item">
            <TradingViewWidget
              theme={Themes.DARK}
              symbol="BINANCE:STEEMBTC"
              timezone="America/Chicago"
              interval={IntervalTypes.D}
              save_image={false}
              autosize
            />
          </div>
          <div className="item">
            <TradingViewWidget
              theme={Themes.DARK}
              symbol="BINANCE:BQXBTC"
              timezone="America/Chicago"
              interval={IntervalTypes.D}
              save_image={false}
              autosize
            />
          </div>
          <div className="item">
            <TradingViewWidget
              theme={Themes.DARK}
              symbol="BINANCE:BATBTC"
              timezone="America/Chicago"
              interval={IntervalTypes.D}
              save_image={false}
              autosize
            />
          </div>
          <div className="item">
            <TradingViewWidget
              theme={Themes.DARK}
              symbol="BINANCE:VENBTC"
              timezone="America/Chicago"
              interval={IntervalTypes.D}
              save_image={false}
              autosize
            />
          </div>
          <div className="item">
            <TradingViewWidget
              theme={Themes.DARK}
              symbol="BINANCE:NEOBTC"
              timezone="America/Chicago"
              interval={IntervalTypes.D}
              save_image={false}
              autosize
            />
          </div>
          <div className="item">
            <TradingViewWidget
              theme={Themes.DARK}
              symbol="BINANCE:XRPBTC"
              timezone="America/Chicago"
              interval={IntervalTypes.D}
              save_image={false}
              autosize
            />
          </div>
          <div className="item">
            <TradingViewWidget
              theme={Themes.DARK}
              symbol="BINANCE:GASBTC"
              timezone="America/Chicago"
              interval={IntervalTypes.D}
              save_image={false}
              autosize
            />
          </div>
          <div className="item">
            <TradingViewWidget
              theme={Themes.DARK}
              symbol="BINANCE:KNCBTC"
              timezone="America/Chicago"
              interval={IntervalTypes.D}
              save_image={false}
              autosize
            />
          </div>
          <div className="item">
            <TradingViewWidget
              theme={Themes.DARK}
              symbol="BINANCE:NEBLBTC"
              timezone="America/Chicago"
              interval={IntervalTypes.D}
              save_image={false}
              autosize
            />
          </div>
          <div className="item">
            <TradingViewWidget
              theme={Themes.DARK}
              symbol="BINANCE:BCPTBTC"
              timezone="America/Chicago"
              interval={IntervalTypes.D}
              save_image={false}
              autosize
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
