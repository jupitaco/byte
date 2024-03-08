import React, { useState } from 'react';

import './Sidebar.scss';
import { SidebarData } from './SidebarData';
import { NavLink } from 'react-router-dom';
import BrandLogo from '../BrandLogo';

function Sidebar() {
  const [toggle, setToggle] = useState(false);

  const handleShow = (id) => {
    setToggle((prev) => ({ ...prev, [id]: !prev }));
  };

  const Employer = SidebarData.Employer;
  return (
    <main className=' sidebarContainer'>
      <article className={`sidebar `}>
        <div className='col-8 mx-auto mt-5 '>
          <BrandLogo />
        </div>
        <ul className='mt-5 mt-lg-0  d-flex flex-column justify-content-between'>
          {Employer.map((tab) => (
            <NavLink
              key={tab.id}
              to={tab.url}
              className={({ isActive }) =>
                isActive ? 'sidebarActive' : 'sidebarNotActive'
              }
            >
              <li>
                <hgroup className='d-flex flex-row align-items-center col-6 mx-auto tabTitle'>
                  <h4 className='me-2'>{tab.icon} </h4>
                  <h4>{tab.title}</h4>
                </hgroup>
              </li>
            </NavLink>
          ))}
        </ul>
      </article>
    </main>
  );
}

export default Sidebar;
