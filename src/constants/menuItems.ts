import { faDollar, faHouse } from '@fortawesome/free-solid-svg-icons'
import { Menu } from '../@types/constants/Menu'

export const menuItem: Menu[] = [
  {
    id: 1,
    name: "home",
    icon: faHouse,
    key: '/'
  },
  {
    id: 2,
    name: "profile",
    icon: faDollar,
    key: '/profile'
  },
  {
    id: 3,
    name: "referral",
    icon: faDollar,
    key: '/referral'
  },
  {
    id: 4,
    name: "settings",
    icon: faDollar,
    key: '/settings'
  }
]