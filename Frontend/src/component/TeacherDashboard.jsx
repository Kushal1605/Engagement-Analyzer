import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import {Link} from 'react-router-dom'
import "./Mydatepicker.css";
import { Link, NavLink } from "react-router-dom";
import Gap from "./Gap";



function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const TeacherDashboard = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (

        <div className="flex items-center justify-center">
        <NavLink
          to="/Session"
          className={(isActive) =>
            `block w-28 py-2 pr-4 pl-3 duration-200 ${
              isActive ? "gray" : "orange"
            } text-black hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium 
            rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none`
          }
        >
          <button>Start a session</button>
        </NavLink>
      
        <NavLink
          to="/TeacherSession"
          className={(isActive) =>
            `block w-28 py-2 pr-4 pl-3 duration-200 ${
              isActive ? "gray" : "orange"
            } text-black hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium 
            rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none`
          }
        >
          <button>Choose a session</button>
        </NavLink>
        <Gap x={96}/>
      </div>
      
    );
};

export default TeacherDashboard;