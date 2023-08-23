import { Logo } from './Logo'
import NavCollaps from './nav/NavCollaps'

export const Header = () => {
  return (
    <div className="flex items-center justify-between w-full  gap-[25px]">

            <Logo/>
            <NavCollaps/>
    


    </div>
  )
}
