import React, { useState } from 'react';

function Sidebar() {
  // const [submenuVisible, setSubmenuVisible] = useState(false);
  // const [sidebarVisible, setSidebarVisible] = useState(true);

  // function dropdown() {
  //   setSubmenuVisible(!submenuVisible);
  // }

  // function openSidebar() {
  //   setSidebarVisible(!sidebarVisible);
  // }

  return (
    <div>
      <span
        className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
        // onClick={openSidebar}
      >
        <i className="bi bi-filter-left px-2 bg-bluedark rounded-md"></i>
      </span>
      <div
        className={`sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-bluedark ${sidebarVisible ? '' : 'hidden'}`}
      >
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-primary"></i>
            <h1 className="font-bold text-white text-[15px] ml-3">TailwindCSS</h1>
            <i
              className="bi bi-x cursor-pointer ml-28 lg:hidden"
              // onClick={openSidebar}
            ></i>
          </div>
          <div className="my-2 bg-bggray h-[1px]"></div>
        </div>
        {/* <div
          className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white"
        >
          <i className="bi bi-search text-sm"></i>
          <input
            type="text"
            placeholder="Search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div> */}
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-primary text-white"
        >
          <i className="bi bi-house-door-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
        </div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-primary text-white"
        >
          <i className="bi bi-bookmark-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Bookmark</span>
        </div>
        <div className="my-4 bg-bggray h-[1px]"></div>
       
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-primary text-white"
        >
          <i className="bi bi-box-arrow-in-right"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
