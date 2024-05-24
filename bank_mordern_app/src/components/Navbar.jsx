import { useState } from 'react'
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='hoobank' className='w-[124px] h-[32px]'/>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.lenght - 1 ? 'mr-0' : 'mr-20'} text-white`}>
          {/* the last element will have a margin (mr) of 0 else 20 */ }
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu /* if toggle is turned on show a close icon else show a menu icon*/}
          alt='menu'
          className='w-[]28px h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? 'flex' : 'hidden' /* if toggle is turned on then flex else hidden */}
          p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[240px] rounded-xl sidebar `}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.lenght - 1 ? 'mr-0' : 'mb-4'} text-white`}>
              {/* the last element will have a margin (mr) of 0 else 20 */ }
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </nav>
  )
};

export default Navbar