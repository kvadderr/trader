import { Typography } from "antd";
import { PairItem } from "../../../@types/constants/PairItem";
import s from './PairCoin.module.scss';
import { useAppDispatch } from "../../../store/storeHooks";
import { setCurrentSymbol } from "../../../store/slices/authSlice";
const { Text } = Typography;

type Props = {
  pairItem: PairItem
}
const PairCoinItem = ({pairItem}: Props) => {

  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(setCurrentSymbol(pairItem.symbol))
  }
  

  return (
    <div className={s.itemContainer} onClick={onClick}>
      <Text>{pairItem.name}</Text>
      <Text type="success">0.005</Text>
    </div>
  )
}

export default PairCoinItem;