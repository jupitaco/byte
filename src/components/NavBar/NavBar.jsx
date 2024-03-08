import React from 'react';
import './NavBar.scss';
import bConnect from '../../assets/bConnect.png';

const NavBar = () => {
  return (
    <main className='container NavBar d-flex flex-wrap align-items-center justify-content-between  gap-4 gap-md-0 col-12 col-md-11 mx-auto'>
      <hgroup className='col-12 col-md-4 text-center'>
        <h2>$BYTE =</h2>
      </hgroup>

      <section className='d-flex  justify-content-end  col-12 col-md-7 '>
        <section className='d-flex align-items-center justify-content-center gap-2  '>
          <div>
            <button className='main-btn'>
              <svg
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M17 17H4C2.34315 17 1 15.6569 1 14V1M4 8L6.28602 4.85672C7.16673 3.64575 8.94121 3.55887 9.93601 4.67801C10.9707 5.84208 12.8318 5.69296 13.6679 4.37898L15.5 1.5M4 11V14M8 8V14M12 9V14M16 6V14'
                  stroke='#FFDA5D'
                  stroke-width='1.5'
                  stroke-linecap='round'
                />
              </svg>
              dexview.com
            </button>
          </div>
          <div>
            <button className='main-btn'>
              <img src={bConnect} alt='' />
              Connect
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default NavBar;
