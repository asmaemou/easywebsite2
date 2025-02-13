import React, { Fragment } from 'react';
import { Disclosure} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../logoeasy.jpeg';
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import ChangeLanguage from './ChangeLanguage';

const navigation = [
  { name: 'Home', to: '/', current: true },
  { name: 'About', to: '/about', current: false },
  { name: 'Services', to: '/services', current: false },
  { name: 'Contact', to: '/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const {t} = useTranslation() 
  return (
    <Disclosure as="nav" className="bg-[#079e7c] static">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink 
                        key={item.name}
                        to={item.to}
                        className={({ isActive, isPending }) =>(
                          classNames(isActive ? 'bg-[#fec23f] text-white' : 'text-gray-300 hover:bg-[#ffdb91] hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium')
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {t(`${item.name}`)}
                        {/* {t("Services")} */}
                        </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               <ChangeLanguage/>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
