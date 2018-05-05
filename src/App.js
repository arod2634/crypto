import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import config from './config.json';
import TradingViewWidget, { Themes, IntervalTypes }  from './TradingViewWidget';
//import CoinMarketCapData from './CoinMarketCapData';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      timeInterval: config.defaultTimeInterval,
      timezone: config.defaultTimeZone,
      chartSize: config.defaultChartSize,
      tickers: config.symbols,
    }
  }

  displayWidgets = () => {
    if (Object.keys(this.state.tickers))
      return (Object.keys(this.state.tickers).map((ticker, index) =>
        <div key={this.state.tickers[ticker].tradingViewTicker} className="chart">
          <div className={"item size-" + this.state.chartSize}>
            <TradingViewWidget
              theme={Themes.DARK}
              symbol={this.state.tickers[ticker].tradingViewTicker}
              timezone={this.state.timezone}
              interval={this.state.timeInterval}
              save_image={false}
              allow_symbol_change={false}
              autosize />
          </div>
        </div>))
    return (<div key={666} className="item"><h1>ERROR</h1></div>)
    //<CoinMarketCapData coinName={this.state.tickers[ticker].name}/>
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
        <br/>
        <br/>
        <h3>Symbols</h3>
        {this.displaySymbols()}
      </Menu>
    )
  }

  displaySymbols = () => {
    return (Object.keys(config.symbols).map((ticker, index) =>
        <label key={index}>
          {ticker.toUpperCase()}
        </label>))
        //<input type="checkbox" defaultChecked={index === 0 ? true : false} onChange={(e) => this.updateSymbols(e)} value={ticker}/>{ticker.toUpperCase()}
  }

  updateSymbols = (e) => {
    console.log(e.target.value)
    //console.log(delete this.state.tickers[e.target.value])
    let newSymbols = this.state.tickers
    console.log(newSymbols)
    delete newSymbols[e.target.value]
    console.log(newSymbols)

    this.setState({
      tickers: newSymbols,
      isOpen: true
    })
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
