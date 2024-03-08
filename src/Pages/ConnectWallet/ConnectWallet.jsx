import React, { useState } from 'react';
import connect from '../../assets/connect.svg';
import connectWallet from '../../assets/ConnectWallet.svg';
import iconHead from '../../assets/icon-head.png';
import logo from '../../assets/logo.svg';
import logoFooter from '../../assets/logo-footer.svg';
import logoSmall from '../../assets/logo-small.svg';
import copy from '../../assets/copyright.svg';
import copySmall from '../../assets/copyright-small.svg';
import tF from '../../assets/twitter-footer.svg';
import tFSmall from '../../assets/twitter-small.svg';
import teleF from '../../assets/telegram-footer.svg';
import teleSmall from '../../assets/telegram-small.svg';
import { Link } from 'react-router-dom';
import { BsList, BsXLg } from 'react-icons/bs';

const ConnectWallet = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <section className='one-buy pt-lg-4'>
        <nav className='navbar navbar-expand-lg container mt-4'>
          <Link className='navbar-brand' to='/'>
            <img src={logo} alt='' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            onClick={toggleNavbar}
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'>
              {isOpen ? <BsXLg /> : <BsList />}
            </span>
          </button>

          <div
            className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav mx-auto pt-2 d-flex flex-col flex-lg-row gap-3'>
              <li className='nav-item active'>
                <Link to='/' style={{ opacity: '.75' }}>
                  <h5 className='ml-lg-4' style={{ fontWeight: 'bolder' }}>
                    Home
                  </h5>
                </Link>
              </li>
              <li className='nav-item ml-lg-2'>
                <Link to='#' style={{ opacity: '.75' }}>
                  <h5 className='ml-lg-4' style={{ fontWeight: 'bolder' }}>
                    {' '}
                    Buy <span style={{ color: '#FFC500' }}>$BYTE</span>{' '}
                  </h5>
                </Link>
              </li>
            </ul>

            <div
              className='navbar-text'
              style={{ cursor: 'pointer' }}
              data-aos='fade-in'
              data-aos-duration='1200'
              data-aos-delay='1000'
            >
              <img src={connect} alt='' />
            </div>
          </div>
        </nav>

        <article className='container spacing move-left'>
          <div className='row justify-content-center mx-auto'>
            <div className='col-lg-4 mt-5'>
              <div className='box-img-buy ' style={{ color: '#C9A732' }}>
                <div>
                  <button className='buy-button text-black text-center w-full w-fit'>
                    TOTAL DIVIDENDS
                  </button>
                </div>
                <h1 className='pt-5 big pt-5 text-center'>
                  <img
                    src={connectWallet}
                    className='pt-5'
                    style={{ width: '210px' }}
                    alt=''
                  />
                </h1>
                <div
                  className='big-sub mx-3 mt-4'
                  data-aos='fade-in'
                  data-aos-duration='1200'
                  data-aos-delay='500'
                >
                  <img
                    src={iconHead}
                    className=''
                    style={{ width: '118px' }}
                    alt=''
                  />
                </div>
                {/* <!-- <div>Price 0.00143$</div> --> */}
              </div>
            </div>

            <div className='col-lg-4 mt-5'>
              <div className='box-img-buy-2 top' style={{ color: '#C9A732' }}>
                <div className='d-flex justify-content-end ml-auto'>
                  <button className='buy-button text-black text-center w-full w-fit'>
                    PENDING REWARDS
                  </button>
                </div>
                <h1 className='pt-5 big pt-5 text-center'>
                  <img
                    src={connectWallet}
                    className='pt-5'
                    style={{ width: '210px' }}
                    alt=''
                  />
                </h1>
                <div className='big-sub mx-3 mt-4'>
                  <img
                    src={iconHead}
                    className=''
                    style={{ width: '118px' }}
                    alt=''
                  />
                </div>
                {/* <!-- <div>Price 0.00143$</div> --> */}
              </div>
            </div>
          </div>

          <div className='row justify-content-center mx-auto mt-5'>
            <div className='col-lg-4 mt-5'>
              <div className='box-img-buy ' style={{ color: '#C9A732' }}>
                <div>
                  <button className='buy-button text-black text-center w-full w-fit'>
                    $BYTE IN WALLET
                  </button>
                </div>
                <h1 className='pt-5 big pt-5 text-center'>
                  <img
                    src={connectWallet}
                    className='pt-5'
                    style={{ width: '210px' }}
                    alt=''
                  />
                </h1>
                <div className='big-sub mx-3 mt-4'>
                  <img
                    src={iconHead}
                    className=''
                    style={{ width: '118px' }}
                    alt=''
                  />
                </div>
                {/* <!-- <div>Price 0.00143$</div> --> */}
              </div>
            </div>

            <div className='col-lg-4 mt-5'>
              <div className='box-img-buy-2 top' style={{ color: '#C9A732' }}>
                <div className='d-flex justify-content-end ml-auto'>
                  <button className='buy-button text-black text-center w-full w-fit'>
                    TOTAL $BYTE EARNED
                  </button>
                </div>
                <h1 className='pt-5 big pt-5 text-center'>
                  <img
                    src={connectWallet}
                    className='pt-5'
                    style={{ width: '210px' }}
                    alt=''
                  />
                </h1>
                <div className='big-sub mx-3 mt-4'>
                  <img
                    src={iconHead}
                    className=''
                    style={{ width: '118px' }}
                    alt=''
                  />
                </div>
                {/* <!-- <div>Price 0.00143$</div> --> */}
              </div>
            </div>
          </div>
        </article>

        <article className='spacing white-bg pt-lg-5 pt-3'>
          <div className='container pt-lg-3'>
            <div className='row'>
              <div className='col-lg-4 ml-lg-5'>
                <img src={logoFooter} className='big-screen' alt='' />
                <img src={logoSmall} className='small-screen' alt='' />
              </div>

              <div className='col-lg-4 pt-4'>
                <img
                  src={copy}
                  className='big-screen'
                  style={{ width: '290px' }}
                  alt=''
                />
                <img
                  src={copySmall}
                  className='small-screen'
                  style={{ width: '290px' }}
                  alt=''
                />
              </div>

              <div className='col-lg-3 pt-4'>
                <div className='d-lg-flex justify-content-end ml-lg-auto'>
                  <a
                    href='https://twitter.com/byteonblast'
                    target='https://twitter.com/byteonblast'
                  >
                    <img src={tF} className='hover-img big-screen' alt='' />
                    <img
                      src={tFSmall}
                      className='hover-img small-screen'
                      alt=''
                    />
                  </a>
                  <a
                    href='https://t.me/byteonblast'
                    target='https://t.me/byteonblast'
                    className='ml-3'
                  >
                    <img src={teleF} className='hover-img big-screen' alt='' />
                    <img src={teleSmall} className='small-screen' alt='' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default ConnectWallet;
