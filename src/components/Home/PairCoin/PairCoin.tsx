import React, { useState } from 'react';
import { Space, Tag } from 'antd';
const { CheckableTag } = Tag;
import { pairItems } from '../../../constants/pairItems';
import { useAppDispatch } from '../../../store/storeHooks';
import { setCurrentSymbol } from '../../../store/slices/authSlice';

const PairCoin = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(pairItems[0].symbol);
  const dispath = useAppDispatch();

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
      <Space size={[0, 8]} wrap>
        {pairItems.map((pair) => (
          <CheckableTag
            key={pair.key}
            checked={selectedTag === pair.symbol}
            onChange={(checked) => handleChange(pair.symbol, checked)}
          >
            {pair.name}
          </CheckableTag>
        ))}
      </Space>
    </>
  );
}

export default PairCoin