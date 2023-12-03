import { useEffect, useRef } from 'react';
import { useAppSelector } from '../../../store/storeHooks';
import { selectCurrentSymbol, selectCurrentLang } from '../../../store/slices/authSlice';

interface TradingViewWidgetProps {}

const TradingViewWidget: React.FC<TradingViewWidgetProps> = () => {
  const onLoadScriptRef = useRef<(() => void) | null>(null);
  const symbol = useAppSelector(selectCurrentSymbol);
  const lang = useAppSelector(selectCurrentLang);
  console.log('symbol', symbol);

  useEffect(() => {
    onLoadScriptRef.current = createWidget;
    let tvScriptLoadingPromise;
    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement('script');
        script.id = 'tradingview-widget-loading-script';
        script.src = 'https://s3.tradingview.com/tv.js';
        script.type = 'text/javascript';
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

    return () => {
      if (onLoadScriptRef.current) {
        onLoadScriptRef.current = null;
      }
    };

    function createWidget() {
      if (document.getElementById('tradingview_5ea2e') && 'TradingView' in window) {
        new window.TradingView.widget({
          autosize: true,
          symbol: symbol,
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '3',
          locale: lang,
          enable_publishing: false,
          hide_legend: true,
          hide_side_toolbar: true,
          container_id: 'tradingview_5ea2e',
        });
      }
    }
  }, [symbol, lang]);

  return (
    <div className='tradingview-widget-container' style={{ height: '100%', width: '100%' }}>
      <div id='tradingview_5ea2e' style={{ height: 'calc(100% - 32px)', width: '100%' }} />
    </div>
  );
};

export default TradingViewWidget;