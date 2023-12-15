import React from "react";
import {Link } from "react-router-dom"

const StudentsPortal = () => {
  return (
    <div>
      <div className="relative overflow-x-auto my-8 ml-52">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Student name
              </th>
              <th scope="col" className="px-6 py-3">
                Roll Number
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Progress
              </th>
              <th scope="col" className="px-6 py-3">
                Status 
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                dsflflajfl
              </td>
              <td className="px-6 py-4">12345</td>
              <td className="px-6 py-4">Male</td>
              <td className="px-6 py-4">
                <div className="relative pt-1">
                  <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-emerald-200">
                    <div
                      style={{ width: "30%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                    ></div>
                  </div>
                </div>
              </td>
             <Link to="/data"><td className="px-6 py-4">View</td></Link> 
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                dsflflajfl
              </td>
              <td className="px-6 py-4">12345</td>
              <td className="px-6 py-4">Male</td>
              <td className="px-6 py-4">
                <div className="relative pt-1">
                  <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-emerald-200">
                    <div
                      style={{ width: "80%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                    ></div>
                  </div>
                </div>
              </td>
              <Link to="/data"><td className="px-6 py-4">View</td></Link>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                dsflflajfl
              </td>
              <td className="px-6 py-4">12345</td>
              <td className="px-6 py-4">Male</td>
              <td className="px-6 py-4">
                <div className="relative pt-1">
                  <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-emerald-200">
                    <div
                      style={{ width: "40%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                    ></div>
                  </div>
                </div>
              </td>
              <Link to="/data"><td className="px-6 py-4">View</td></Link>


            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                fksldfjklsfj
              </td>
              <td className="px-6 py-4">67890</td>
              <td className="px-6 py-4">Female</td>
              <td className="px-6 py-4">
                <div className="relative pt-1">
                  <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-emerald-200">
                    <div
                      style={{ width: "15%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"
                    ></div>
                  </div>
                </div>
              </td>
              <Link to="/data"><td className="px-6 py-4">View</td></Link>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsPortal;