import { NavItemProps} from '../../models/props.d'

export const NavItem: React.FC<NavItemProps> = ({text}:NavItemProps) => {
  return (
    <li className='text-secondary active:border-b-[2px] active:border-solid active:border-[#333]'>{text}</li>
  )
}
