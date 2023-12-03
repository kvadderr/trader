import s from './Main.module.scss'
import TradingViewWidget from '../../components/Home/TradingViewWidget/TradingViewWidget'
import PairCoin from '../../components/Home/PairCoin/PairCoin';
import { Tabs, Typography } from 'antd';
const { Text } = Typography;
import type { TabsProps } from 'antd';
import { Result } from 'antd';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Открытые позиции',
    children: <Result
      status="404"
      title="В разработке"
    />,
  },
  {
    key: '2',
    label: 'Отложенные ордера',
    children: <Result
      status="404"
      title="В разработке"
    />,
  },
  {
    key: '3',
    label: 'История заказов',
    children: <Result
      status="404"
      title="В разработке"
    />,
  },
  {
    key: '4',
    label: 'Торговая история',
    children: <Result
      status="404"
      title="В разработке"
    />,
  },
];

const itemsPair: TabsProps['items'] = [
  {
    key: '1',
    label: 'USD',
    children: <PairCoin />,
  },
  {
    key: '2',
    label: 'EUR',
    children: <PairCoin />
  },
];

const Main = () => {
  return (
    <div className={s.container}>
      <div className={s.containerMain}>
        <TradingViewWidget />
        <div>
          <PairCoin />
        </div>
      </div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}

export default Main