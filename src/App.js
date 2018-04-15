import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import TradingViewWidget, { Themes, IntervalTypes }  from './TradingViewWidget';
import CoinMarketCapData from './CoinMarketCapData';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      timeInterval: 60,
      chartSize: "m",
      tickers: ['COINBASE:BTCUSD','COINBASE:ETHUSD','COINBASE:LTCUSD', 'BINANCE:EOSBTC'],
      //tickers: ['COINBASE:BTCUSD'],
    }
  }

  displayWidgets = () => {
    if (Object.keys(this.state.tickers))
      return (this.state.tickers.map((ticker, index) =>
        <div key={ticker} className="chart">
          <div className={"item size-" + this.state.chartSize}>
            <TradingViewWidget
              theme={Themes.DARK}
              symbol={ticker}
              timezone="America/Chicago"
              interval={this.state.timeInterval}
              save_image={false}
              allow_symbol_change={false}
              autosize />
          </div>
          <CoinMarketCapData coinName="bitcoin"/>
        </div>))
    return (<div key={666} className="item"><h1>ERROR</h1></div>)
  }

  displayMenu = () => {
    return(
      <Menu isOpen={this.state.isOpen}>
        <h2>Settings</h2>
        <hr/>
        <br/>
        <br/>
        <h3>Time Interval</h3>
        <select id="time-interval-dropdown" value={this.state.timeInterval} onChange={this.updateTimeInterval}>
          <option value={IntervalTypes.M}>Monthly</option>
          <option value={IntervalTypes.W}>Weekly</option>
          <option value={IntervalTypes.D}>Daily</option>
          <option value="240">4 Hour</option>
          <option value="180">3 Hour</option>
          <option value="120">2 Hour</option>
          <option value="60">1 Hour</option>
          <option value="30">30 Minute</option>
          <option value="15">15 Minute</option>
          <option value="5">5 Minute</option>
          <option value="3">3 Minute</option>
          <option value="1">1 Minute</option>
        </select>
        <br/>
        <br/>
        <h3>Chart Size</h3>
        <select id="chart-size-dropdown" value={this.state.chartSize} onChange={this.updateChartSize}>
          <option value="s">Small</option>
          <option value="m">Medium</option>
          <option value="l">Large</option>
          <option value="f">Full Width</option>
        </select>
      </Menu>
    )
  }

  updateTimeInterval = (e) => {
    this.setState({
      timeInterval: e.target.value,
      isOpen: false
    });
  }

  updateChartSize = (e) => {
    this.setState({
      chartSize: e.target.value,
      isOpen: false
    });
  }

  render() {
    return (
      <div id="app-container" className="App">
        {this.displayMenu()}
        <div id="page-container" className={"container size-" + this.state.chartSize}>
          {this.displayWidgets()}
        </div>
      </div>
    );
  }
}
