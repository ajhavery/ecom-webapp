"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "public/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";

export default function NavbarSm({ value, onChange, className }) {
  const [solutionOpen, setSolutionOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const solutionRef = useRef(null);
  const accountRef = useRef(null);

  // handle dropdown closure on click outside
  const handleSolClickOutside = (e) => {
    if (solutionRef.current.contains(e.target)) {
      return;
    }
    setSolutionOpen(false);
  };

  const handleAccClickOutside = (e) => {
    if (accountRef.current.contains(e.target)) {
      return;
    }
    setAccountOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleSolClickOutside);
    document.addEventListener("mousedown", handleAccClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleSolClickOutside);
      document.removeEventListener("mousedown", handleAccClickOutside);
    };
  }, []);

  return (
    <div className={`${className} px-4 py-3 w-full bg-white`}>
      {/* row #1: Logo and Search */}
      <div className="flex items-center justify-between gap-6">
        {/* left section: Logo */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5">
            <Image src={logo} alt="dhamika" />
          </div>
          <div>
            <Link href="/">
              <h1 className="mb-0 tracking-tight font-roboto text-indigo-700">
                dhamika
              </h1>
            </Link>
          </div>
        </div>
        {/* row #2: Search Bar */}
        <div className="w-full">
          {/* middle section -  search bar */}
          <form className="w-full">
            <div className="relative flex items-center border border-indigo-600 rounded">
              <input
                type="search"
                name="search"
                placeholder="Search here..."
                id="search"
                value={value}
                onChange={onChange}
                className="peer w-full h-10 px-4 bg-transparent focus:cursor-text outline-none placeholder:text-gray-400"
              />
              <button className="text-white bg-indigo-600 absolute -right-0.5 top-0 bottom-0 rounded-r">
                <AiOutlineSearch className="h-8 w-10" />
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* row #1: Navigation and My Account */}

      {/* navigation */}
      <nav className="border-t border-b mt-4 py-3">
        <ul className="flex items-center gap-4 justify-between text-md">
          <li className="hover:text-indigo-600 whitespace-nowrap">
            <Link href="/catalog">Catalog</Link>
          </li>
          <li ref={solutionRef}>
            <div className="relative hover:text-indigo-600 whitespace-nowrap">
              <button
                className="flex items-center gap-1"
                type="button"
                onClick={() => setSolutionOpen(!solutionOpen)}
              >
                Our Solutions
                <FiChevronDown
                  className={
                    solutionOpen
                      ? "rotate-180 transition"
                      : "rotate-0 transition"
                  }
                />
              </button>
            </div>
            {/* solution dropdown section */}
            <ul
              className={`absolute top-[7.5rem] bg-white border rounded shadow text-sm ${
                solutionOpen ? "flex flex-col" : "hidden"
              }`}
            >
              <li
                className="hover:bg-gray-200"
                onClick={() => setSolutionOpen(!solutionOpen)}
              >
                <Link href="/solutions/buyer" className="block px-4 py-2">
                  Solution for Buyers
                </Link>
              </li>

              <li
                className="hover:bg-gray-200"
                onClick={() => setSolutionOpen(!solutionOpen)}
              >
                <Link href="/solutions/exporter" className="block px-4 py-2">
                  Solution for Exporters
                </Link>
              </li>
              <li
                className="hover:bg-gray-200"
                onClick={() => setSolutionOpen(!solutionOpen)}
              >
                <Link href="/help" className="block px-4 py-2">
                  Help
                </Link>
              </li>
            </ul>
          </li>
          <li className="hover:text-indigo-600 whitespace-nowrap">
            <Link href="/account/cart">Cart</Link>
          </li>

          <li ref={accountRef}>
            <div className="relative hover:text-indigo-600 whitespace-nowrap">
              <button
                className="flex items-center gap-1"
                type="button"
                onClick={() => setAccountOpen(!accountOpen)}
              >
                My Account
                <FiChevronDown
                  className={
                    accountOpen
                      ? "rotate-180 transition"
                      : "rotate-0 transition"
                  }
                />
              </button>
            </div>
            {/* my account dropdown section */}
            <ul
              className={`absolute top-[7.5rem] right-4 min-w-[7rem] bg-white border rounded shadow text-sm ${
                accountOpen ? "flex flex-col" : "hidden"
              }`}
            >
              <li
                className="hover:bg-gray-200"
                onClick={() => setAccountOpen(!accountOpen)}
              >
                <Link href="/account/profile" className="block px-4 py-2">
                  Profile
                </Link>
              </li>

              <li
                className="hover:bg-gray-200"
                onClick={() => setAccountOpen(!accountOpen)}
              >
                <Link href="/account/orders" className="block px-4 py-2">
                  Orders
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
