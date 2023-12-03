import React, { useState } from 'react';
import { Space, Tag } from 'antd';
const { CheckableTag } = Tag;
import { pairItems } from '../../../constants/pairItems';
import { pairCategory } from '../../../constants/pairCategory';
import { useAppDispatch } from '../../../store/storeHooks';
import { setCurrentSymbol } from '../../../store/slices/authSlice';
import PairCoinItem from './PairCoinItem';
import { useTranslation } from 'react-i18next';

const PairCoin = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(pairCategory[0]);
  const dispath = useAppDispatch();
  const { t } = useTranslation();
  const handleChange = (tag: string, checked: boolean) => {
    dispath(setCurrentSymbol(tag))
    if (checked) {
      setSelectedTag(tag);
      console.log('You are interested in: ', tag);
    } else {
      setSelectedTag(null);
      console.log('No category selected');
    }
  };

  return (
    <>
      <Space size={[0, 10]}>
        {pairCategory.map((pair, index) => (
          <CheckableTag
            key={index}
            checked={selectedTag === pair}
            onChange={(checked) => handleChange(pair, checked)}
          >
            {t(pair)}
          </CheckableTag>
        ))}
      </Space>
      <div style={{ display: 'flex', gap: 20, flexDirection: 'column', marginTop: 20}}>
        {pairItems.map((pair, index) => (
          <PairCoinItem pairItem={pair} key={index} />
        ))}
      </div>
    </>
  );
}

export default PairCoin