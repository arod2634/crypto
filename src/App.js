import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import TradingViewWidget, { Themes, IntervalTypes }  from './TradingViewWidget';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: true,
      coinData: []
    }
  }

  componentDidMount() {
    fetch('https://api.coinmarketcap.com/v1/ticker/bitcoin/')
      .then(response => response.json())
      .then(data => this.setState({ coinData: data }));
  }

  render() {

    let isMenuOpen = function(state) {
      console.log("Menu is open");
      return state.isOpen;
    };

    let styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '20px',
        height: '16px',
        left: '16px',
        top: '26px'
      },
      bmBurgerBars: {
        background: '#FFFFFF'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: '#FFFFFF'
      },
      bmMenu: {
        background: '#363c4e',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
      },
      bmMorphShape: {
        fill: '#363c4e'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      },
      bmMenuWrap: {
        marginTop: '-20px',
        marginLeft: '-8px'
      }
    }

    return (
      <div id="app-container" className="App">
        <Menu onStateChange={ isMenuOpen } styles={ styles }>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
        <div id="page-container" className="container">
          <div className="item">
            {this.state.coinID}
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
        </div>
      </div>
    );
  }
}
