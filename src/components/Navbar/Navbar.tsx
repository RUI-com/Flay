import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import { Button } from ".."
import {CgMenuRight} from 'react-icons/cg'
const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
        <Link href='/'>
        <Image src="./logo/logo-w-c.svg" alt="Flay" width={54} height={29}/>
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link)=>{
          return(
            <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            
            </Link>
          )
          })}
        </ul>
        <div className="hidden lg:flex ">
        <Button 
          type="button"
          title="Login"
          icon="/image/user.svg"
          variant="btn_dark_green"
        />
          </div>
          <CgMenuRight className="inline-block cursor-pointer lg:hidden w-[30px] h-[30px]"/>

    </nav>
  )
}

export default Navbar
