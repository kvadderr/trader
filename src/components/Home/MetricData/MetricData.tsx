import s from './MetricData.module.scss'
import { Typography } from 'antd';

const { Text } = Typography;

const MetricData = () => {
  return (
    <div className={s.container}>
      <div className={s.metricContainer}>
        <Text>Итоговый баланс</Text>
        <Text type='success'>0 <span>USD</span></Text>
      </div>
      <div className={s.metricContainer}>
        <Text>Доступные средства</Text>
        <Text type='success'>0 <span>USD</span></Text>
      </div>
      <div className={s.metricContainer}>
        <Text>Использованная маржа</Text>
        <Text type='success'>0 <span>USD</span></Text>
      </div>
      <div className={s.metricContainer}>
        <Text>Доступная маржа</Text>
        <Text type='success'>0 <span>USD</span></Text>
      </div>
      <div className={s.metricContainer}>
        <Text>Уровень маржи</Text>
        <Text type='success'>0%</Text>
      </div>
      <div className={s.metricContainer}>
        <Text>Нереализованный PNL</Text>
        <Text type='success'>0 <span>USD</span></Text>
      </div>
    </div>
  )
}

export default MetricData;