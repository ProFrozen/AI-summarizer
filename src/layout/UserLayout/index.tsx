import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import "./index.css";

const UserLayout = () => {
  return <div className="bg-white">
    <Header />
      {/* <AlarmTextBar>
        LIVE YOUR ESPORTS PASSION AND BECOME AN ESPORTS PRO!
      </AlarmTextBar> */}
      <Outlet />
      {/* <AlarmTextBar>
        LIVE YOUR ESPORTS PASSION AND BECOME AN ESPORTS PRO!
      </AlarmTextBar> */}
      <Footer />
  </div>
}

export default UserLayout;