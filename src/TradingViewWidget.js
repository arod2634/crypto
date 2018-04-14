//Forked from https://www.npmjs.com/package/react-tradingview-widget

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export const IntervalTypes = {
  D: 'D',
  W: 'W',
  M: 'M'
};

export const Themes = {
  LIGHT: 'Light',
  DARK: 'Dark'
};

export const BarStyles = {
  BARS: '0',
  CANDLES: '1',
  HOLLOW_CANDLES: '9',
  HEIKIN_ASHI: '8',
  LINE: '2',
  AREA: '3',
  RENKO: '4',
  LINE_BREAK: '7',
  KAGI: '5',
  POINT_AND_FIGURE: '6'
};

export const Studies = {
  RSI: "RSI@tv-basicstudies",
  EMA: "MAExp@tv-basicstudies",
  MACD: "MACD@tv-basicstudies",
  IC: "IchimokuCloud@tv-basicstudies",
  DEMA: "DoubleEMA@tv-basicstudies",
  BB: "BB@tv-basicstudies",
  MOM: "MOM@tv-basicstudies",
  MA: "MASimple@tv-basicstudies",
  PO: "PriceOsc@tv-basicstudies",
  PVT: "PriceVolumeTrend@tv-basicstudies",
  SRSI: "StochasticRSI@tv-basicstudies",
  TEMA: "TripleEMA@tv-basicstudies",
  VOL: "Volume@tv-basicstudies"
}

const SCRIPT_ID = 'tradingview-widget-script';
const CONTAINER_ID = 'tradingview-widget';

export default class TradingViewWidget extends PureComponent {
  static propTypes = {
    widgetType: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    autosize: PropTypes.bool,
    symbol: PropTypes.string.isRequired,
    interval: PropTypes.oneOf([1, 3, 5, 15, 30, 60, 120, 180, 240, '1', '3', '5', '15', '30', '60', '120', '180', '240', IntervalTypes.D,  IntervalTypes.W, IntervalTypes.M ]),
    timezone: PropTypes.string,
    theme: PropTypes.oneOf([Themes.LIGHT, Themes.DARK]),
    style: PropTypes.oneOf([
      BarStyles.BARS,
      BarStyles.CANDLES,
      BarStyles.HOLLOW_CANDLES,
      BarStyles.HEIKIN_ASHI,
      BarStyles.LINE,
      BarStyles.AREA,
      BarStyles.RENKO,
      BarStyles.LINE_BREAK,
      BarStyles.KAGI,
      BarStyles.POINT_AND_FIGURE
    ]),
    locale: PropTypes.string,
    toolbar_bg: PropTypes.string,
    enable_publishing: PropTypes.bool,
    allow_symbol_change: PropTypes.bool,
    withdateranges: PropTypes.bool,
    hide_side_toolbar: PropTypes.bool,
    hideideas: PropTypes.bool,
    watchlist: PropTypes.arrayOf(PropTypes.string),
    details: PropTypes.bool,
    hotlist: PropTypes.bool,
    calendar: PropTypes.bool,
    news: PropTypes.arrayOf(PropTypes.string),
    show_popup_button: PropTypes.bool,
    popup_width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    popup_height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    no_referral_id: PropTypes.bool,
    referral_id: PropTypes.string,
    studies: PropTypes.oneOf(
      [
        Studies.RSI,
        Studies.EMA,
        Studies.MACD,
        Studies.IC,
        Studies.DEMA,
        Studies.BB,
        Studies.MOM,
        Studies.MA,
        Studies.PO,
        Studies.PVT,
        Studies.SRSI,
        Studies.TEMA,
        Studies.VOL
      ]
    )
  };

  static defaultProps = {
    widgetType: 'widget',
    width: 980,
    height: 610,
    autosize: false,
    interval: IntervalTypes.D,
    timezone: 'Etc/UTC',
    theme: Themes.LIGHT,
    style: BarStyles.CANDLES,
    locale: 'en',
    toolbar_bg: '#F1F3F6',
    enable_publishing: false,
    allow_symbol_change: true,
    //studies: [],
    hideideas: true
  };

  containerId = `${CONTAINER_ID}-${Math.random()}`;

  componentDidMount = () => this.appendScript(this.initWidget);

  componentDidUpdate = () => {
    this.cleanWidget();
    this.initWidget();
  };

  appendScript = (onload) => {
    if (this.scriptExists()) {
      /* global TradingView */
      if (typeof TradingView === 'undefined') {
        this.updateOnloadListener(onload);
        return;
      }
      onload();
      return;
    }
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/tv.js';
    script.onload = onload;
    document.getElementsByTagName('head')[0].appendChild(script);
  };

  getScriptElement = () =>
    document.getElementById(SCRIPT_ID);

  scriptExists = () =>
    this.getScriptElement() !== null;

  updateOnloadListener = (onload) => {
    const script = this.getScriptElement();
    const oldOnload = script.onload;
    return script.onload = () => {
      oldOnload();
      onload();
    };
  };

  initWidget = () => {
    /* global TradingView */
    if (typeof TradingView === 'undefined') return;

    const { widgetType, ...widgetConfig } = this.props;
    const config = { ...widgetConfig, container_id: this.containerId };

    if (config.autosize) {
      delete config.width;
      delete config.height;
      const container = document.getElementById(this.containerId);
      container.style.width = '100%';
      container.style.height = '100%';
    }

    if (typeof config.interval === 'number') {
      config.interval = config.interval.toString();
    }

    if (config.popup_width && typeof config.popup_width === 'number') {
      config.popup_width = config.popup_width.toString();
    }

    if (config.popup_height && typeof config.popup_height === 'number') {
      config.popup_height = config.popup_height.toString();
    }

    /* global TradingView */
    new TradingView[widgetType](config);
  };

  cleanWidget = () => {
    document.getElementById(this.containerId).innerHTML = '';
  };

  render = () => <article id={this.containerId} />;
}
