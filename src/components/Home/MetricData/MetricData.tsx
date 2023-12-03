import s from './MetricData.module.scss'
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
const { Text } = Typography;

const MetricData = () => {

  const { t } = useTranslation();

  return (
    <div className={s.container}>
      <div className={s.metricContainer}>
        <Text>{t('balance')}</Text>
        <Text type='success'>0 <span>USD</span></Text>
      </div>
      <div className={s.metricContainer}>
        <Text>{t('available_funds')}</Text>
        <Text type='success'>0 <span>USD</span></Text>
      </div>
      <div className={s.metricContainer}>
        <Text>{t('used_margin')}</Text>
        <Text type='success'>0 <span>USD</span></Text>
      </div>
      <div className={s.metricContainer}>
        <Text>{t('available_margin')}</Text>
        <Text type='success'>0 <span>USD</span></Text>
      </div>
      <div className={s.metricContainer}>
        <Text>{t('level_margin')}</Text>
        <Text type='success'>0%</Text>
      </div>
    </div>
  )
}

export default MetricData;