import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from './context'


const Home = () => {
  // approach1  by usecontext
  // const data = useContext(AppContext)
  // approach2 by custom hook
  const {openSidebar, openModal} = useGlobalContext()

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}>Show Button</button>
    </main>
  );
};

export default Home;
