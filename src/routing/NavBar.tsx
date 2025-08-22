"use client";

import Link from "next/link";
import { routes } from "./routes";
import { useState } from "react";
import Image from "next/image";

function Routes(props: { closeMenu: () => void, isOpen?: boolean }) {
  const className = "block hover:bg-zinc-400 hover:text-zinc-950 rounded-lg p-2 transition-all duration-200";

  const routes_list = [
    { href: routes.home, label: "Home" },
    { href: routes.events, label: "Eventi" },
    { href: routes.about, label: "Chi sono" },
    { href: routes.contacts, label: "Contatti" },
    { href: routes.gallery, label: "Gallery" }
  ];

  return (
    <>
      {routes_list.map((route, index) => (
        <Link
          key={route.href}
          href={route.href}
          className={className}
          style={{
            animationDelay: props.isOpen ? `${index * 50}ms` : '0ms'
          }}
          onClick={props.closeMenu}
        >
          {route.label}
        </Link>
      ))}
    </>
  );
}

export default function NavBar() {
  const [isClick, setIsClick] = useState<boolean>(false);
  const toggleNavBar = (): void => {
    setIsClick(!isClick);
  };

  const closeMenu = (): void => {
    setIsClick(false);
  };

  return (
    <>
      <nav className="bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" onClick={closeMenu}>
                  <div className="flex items-center gap-2 text-xl font-serif">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={48}
                      height={48}
                    />
                    SENTIERO YOGA
                  </div>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Routes closeMenu={closeMenu} isOpen={true} />
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-insert focus-ring-white transition-all duration-300"
                onClick={toggleNavBar}
              >
                <div className="relative w-6 h-6">
                  <svg
                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isClick ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                  <svg
                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isClick ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor" >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isClick ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Routes closeMenu={closeMenu} isOpen={isClick} />
          </div>
        </div>
      </nav>
    </>
  );
}
