'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classnames from 'classnames';
import { TfiClose } from 'react-icons/tfi';
import { CiMenuFries } from 'react-icons/ci';
import { useRef } from 'react';

interface NavBarProps {
  scrollToSection: (section: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ scrollToSection }) => {
  const currentPath = usePathname();
  const navLinks = [
    { label: 'Home', key: 'reservations', href: 'HomePage' },
    { label: 'About', key: 'about', href: 'AboutPage' },
    { label: 'Explore', key: 'explore', href: 'ExplorePage' },
  ];

  const [toggleMenu, settoggleMenu] = useState(false);

  return (
    <>
      <nav className='fixed top-0 left-0 w-full z-50 flex text-2l px-10 lg:px-20 sm:px-10 py-10 h-20 justify-between items-center cursor-pointer'>
        <Link href='/' className='text-primary text-md'>
          DDR Project
        </Link>

        <div className='hidden space-x-10 text-sm justify-center items-end lg:flex'>
          {navLinks.map(link => (
            <a
              key={link.key}
              className={classnames({
                'text-light-grey': link.href !== currentPath,
                'text-primary': link.href === currentPath,
                'hover:text-primary transition-colors': true
              })}
              onClick={() => scrollToSection(link.href)}
            >
              {link.label}
            </a>
          ))}
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
              {navLinks.map(link => (
                <li key={link.key} className={currentPath === link.href ? 'text-primary' : 'text-light-grey'}>
                  <a onClick={() => { scrollToSection(link.href); settoggleMenu(!toggleMenu); }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <span className='fixed block w-full h-px bg-dark-grey mt-20'></span>
    </>
  );
};

export default NavBar;
