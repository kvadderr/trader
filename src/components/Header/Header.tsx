import s from './Header.module.scss'

import { Typography, Button } from 'antd';
import logo from '../../assets/logo.svg'
import { menuItem } from '../../constants/menuItems';
import i18n from '../../i18n';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../store/storeHooks';
import { selectCurrentLang, setCurrentLang } from '../../store/slices/authSlice';

const { Text } = Typography;

const Header = () => {

  const dispatch = useAppDispatch();
  const locale = useAppSelector(selectCurrentLang);
  
  const { t } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(locale === 'en' ? 'ru' : 'en')
    dispatch(setCurrentLang(locale === 'en' ? 'ru' : 'en'));
  }

  return (
    <div className={s.container}>
      <img src={logo} height={20} />
      <div className={s.menuContainer}>
        {
          menuItem.map(item => (
            <div className={s.menuItem} key={item.id}><Text>{t(item.name)}</Text></div>
          ))
        }
      </div>
      <Button type="primary" onClick={changeLanguage}>{t("lng")}</Button>

    </div>
  )
}

export default Header;