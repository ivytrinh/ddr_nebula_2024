'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classnames from 'classnames';
import { TfiClose } from 'react-icons/tfi';
import { CiMenuFries } from 'react-icons/ci';

const NavBar = () => {
    const currentPath = usePathname();
    const navLinks = [
      { label: 'Home', key: 'reservations', href: 'HomePage' },
      { label: 'About', key: 'about', href: 'AboutPage' },
      { label: 'Explore', key: 'explore', href: 'ExplorePage' },
    ];
  
    const [toggleMenu, settoggleMenu] = useState(false);
  
    return (
      <>
        <nav className='fixed top-0 left-0 w-full z-50 flex text-2l px-10 lg:px-20 sm:px-10 py-10 h-20 justify-between items-center'>
          <Link href='/' className='text-primary text-md'>
            DDR Project
          </Link>
  
          <div className='hidden space-x-10 text-sm font-thin justify-center items-end lg:flex'>
            {navLinks.map(link => 
              <Link 
                key={link.key} 
                className={classnames({
                  'text-light-grey': link.href !== currentPath,
                  'text-primary': link.href === currentPath,
                  'hover:text-primary transition-colors': true
                })}
                href={link.href}
              >
                {link.label}
              </Link>
            )}
          </div>
  
          <button className='text-primary border border-dark-grey px-3 py-1 text-sm hover:border-primary transition-colors'>
            <Link href='DemoPage'> Try our demo </Link>
          </button>
  
          <div className='inline-block lg:hidden'>
            <button 
              className='text-light-grey hover:text-primary cursor-pointer align-middle transition-all'
              onClick={() => settoggleMenu(!toggleMenu)}
            >
              {toggleMenu ? (
                <TfiClose size={25} />
              ) : (
                <CiMenuFries size={25} />
              )} 
            </button>
  
            <div
              className={`fixed flex flex-col right-0 px-10 z-10 bg-white shadow-md ${
                toggleMenu ? 'py-5' : 'hidden'
              }`}
            >
              <ul className='font-light text-sm text-right lg:px-10 cursor-pointer'>
                <li className={currentPath === 'HomePage' ? 'text-primary' : 'text-primary'}>
                  <Link href='HomePage' onClick={() => settoggleMenu(!toggleMenu)}>
                    Home
                  </Link>
                </li>
                <li className={currentPath === 'AboutPage' ? 'text-primary' : 'text-light-grey'}>
                  <Link href='AboutPage' onClick={() => settoggleMenu(!toggleMenu)}>
                    About
                  </Link>
                </li>
                <li className={currentPath === 'ExplorePage' ? 'text-primary' : 'text-light-grey'}>
                  <Link href='ExplorePage' onClick={() => settoggleMenu(!toggleMenu)}>
                    Explore
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <span className='fixed block w-full h-px bg-dark-grey mt-20'></span>
      </>
    );
  };
  
  export default NavBar;