import NavBtn from "./NavBtn";
import { FiMenu } from "react-icons/fi";
import {  useState } from "react";


function Nav() {
  
  const [status,setStatus] = useState('')


  return (
    <>
      <FiMenu
        className="fixed text-3xl font-bold left-6 top-10 text-white z-40 hover:bg-blue-600 hidden tablet:block "
        onClick={() => {
          (status != "-translate-x-full") ? setStatus("-translate-x-full") : setStatus("translate-x-0");
        }}
      ></FiMenu>
      <nav
        className={`w-screen h-20 z-30 pl-8 absolute left-0 top-0 tablet:flex flex-col tablet:h-screen tablet:bg-amber-500 tablet:w-auto tablet:p-16 tablet:pt-20 tablet:pl-1 tablet:justify-start tablet:items-start tablet:fixed tablet:transition-all tablet:duration-500 tablet:${status} tablet:bg-opacity-80`}
      >
        <NavBtn name="Home" responsive={true} link='HeroSection'/>
        <NavBtn name="Products" responsive={true} link='Products'/>
        <NavBtn name="About Us" responsive={true} link='AboutUs'/>
        <NavBtn name='Our Team' responsive={true} link='OurTeam'/>
      </nav>
    </>
  );
}

export default Nav;
