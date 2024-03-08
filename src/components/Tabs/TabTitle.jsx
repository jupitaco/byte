import React from 'react';

function TabTitle({ id, title, activeTab, setActiveTab, icon }) {
  const handTabSwitch = () => {
    setActiveTab(id);
  };

  return (
    <main
      onClick={handTabSwitch}
      className={activeTab === id ? 'active' : 'notActive'}
    >
      <ul className='tabTitle'>
        <li id={id} className='d-flex flex-row align-items-center '>
          <h4 className='me-2 '>{icon}</h4>
          <h4>{title}</h4>
        </li>
      </ul>
    </main>
  );
}

export default TabTitle;
