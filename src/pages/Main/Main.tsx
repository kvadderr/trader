import s from './Main.module.scss'
import TradingViewWidget from '../../components/Home/TradingViewWidget/TradingViewWidget'
import PairCoin from '../../components/Home/PairCoin/PairCoin';
import { Tabs, Result } from 'antd';
import type { TabsProps } from 'antd';
import { useTranslation } from 'react-i18next';


const onChange = (key: string) => {
  console.log(key);
};

const Main = () => {

  const { t } = useTranslation();

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: t('active_order'),
      children: <Result
        status="404"
        title="В разработке"
      />,
    },
    {
      key: '2',
      label: t('wait_order'),
      children: <Result
        status="404"
        title="В разработке"
      />,
    },
    {
      key: '3',
      label: t('order_history'),
      children: <Result
        status="404"
        title="В разработке"
      />,
    },
    {
      key: '4',
      label: t('trade_history'),
      children: <Result
        status="404"
        title="В разработке"
      />,
    },
  ];

  return (
    <div className={s.container}>
      <div className={s.containerMain}>
        <div style={{flex: 1}}>
          <TradingViewWidget />
        </div>  
        <div>
          <PairCoin />
        </div>
      </div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}

export default Main