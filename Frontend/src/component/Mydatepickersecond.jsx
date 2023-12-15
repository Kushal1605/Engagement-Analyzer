import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {Link} from 'react-router-dom'
import "./Mydatepicker.css";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Mydatepickersecond = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    
    <div className=" ml-52 flex flex-col items-center shadow-xl">
      <img src="src/component/img/p1.png" className="h-60 home-animation " alt="Logo" />


      <span className="font-medium text-2xl"> DashBoard</span>
      <div className="flex flex-col items-center justify-start min-h-screen ">

        <div className="border-2 border-orange-900 my-5 p-20 rounded-md flex flex-col items-center justify-center shadow ">
          <h1 className="text-xl font-medium">Choose the date and lecture.</h1>
          <div className="relative max-w-md mt-8 w-52 ">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select a date"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-slate-900 text-white hover:bg-gray-700 w-54 font-medium text-lg"
            />
          </div>
          <div className=" m-6  flex flex-col items-center justify-center  ">
          <Menu as="div" className="relative inline-block text-left ">
      <div >
        <Menu.Button className="inline-flex text-lg w-full gap-x-14 rounded-md bg-slate-900 px-3 py-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-700 font-medium  h-11">
          Select Lecture
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 bg-slate-900">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 DAA
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  OOSD
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Compiler
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                   Maths
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    </div>
          <Link to='#'>
          <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 flex flex-col items-center justify-start m-24">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mydatepickersecond;