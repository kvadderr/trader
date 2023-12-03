import { faDollar, faHouse } from '@fortawesome/free-solid-svg-icons'
import { Menu } from '../@types/constants/Menu'

export const menuItem: Menu[] = [
  {
    id: 1,
    name: "Главная",
    icon: faHouse,
    key: '/'
  },
  {
    id: 2,
    name: "Профиль",
    icon: faDollar,
    key: '/price'
  }
]