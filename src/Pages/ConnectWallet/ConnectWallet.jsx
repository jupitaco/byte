import { useState } from 'react';
import connect from '../../assets/connect.svg';
import connectWallet from '../../assets/ConnectWallet.svg';
import iconHead from '../../assets/icon-head.png';
import logo from '../../assets/logo.svg';
import logoFooter from '../../assets/logo-footer.svg';
// import logoSmall from '../../assets/logo-small.svg';
import copy from '../../assets/copyright.svg';
// import copySmall from '../../assets/copyright-small.svg';
import tF from '../../assets/twitter-footer.svg';
// import tFSmall from '../../assets/twitter-small.svg';
import teleF from '../../assets/telegram-footer.svg';
// import teleSmall from '../../assets/telegram-small.svg';
import { Link } from 'react-router-dom';
import { BsList, BsXLg } from 'react-icons/bs';

const ConnectWallet = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <section className='walletPage  pt-lg-4 d-flex flex-column'>
        <nav className=' navbar navbar-expand-lg container mt-4 px-2 px-md-5'>
          <Link className='navbar-brand' to='/'>
            <img src={logo} alt='' />
          </Link>
          <button
            className='toggleBtn d-flex d-lg-none'
            type='button'
            onClick={toggleNavbar}
            // data-toggle='collapse'
            // data-target='#navbarSupportedContent'
            // aria-controls='navbarSupportedContent'
            // aria-expanded='false'
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
              <img
                src={connect}
                className='col-6 mt-2 mt-lg-0 col-lg-12'
                alt=''
              />
            </div>
          </div>
        </nav>

        <article className='container col-11 col-md-8 mx-auto mt-5 pt-5'>
          <ul
            data-aos='fade-left'
            className='d-flex flex-wrap justify-content-center mx-auto gap-5'
          >
            <li className='boxCard'>
              <div>
                <button className='buy-button text-black text-center w-full w-fit'>
                  TOTAL DIVIDENDS
                </button>
              </div>
              <div
                className='box-img-buy d-flex flex-column justify-content-end pb-2'
                style={{ color: '#C9A732' }}
              >
                <figure className=' big text-center'>
                  <img src={connectWallet} className='pt-5' alt='' />
                </figure>
                <figure className='big-sub mx-3  '>
                  <img src={iconHead} className='' alt='' />
                </figure>
                {/* <!-- <div>Price 0.00143$</div> --> */}
              </div>
            </li>

            <li className='boxCard'>
              <div className=' '>
                <button className='buy-button text-black text-center w-full w-fit'>
                  PENDING REWARDS
                </button>
              </div>
              <div
                className='box-img-buy d-flex flex-column justify-content-end pb-2'
                style={{ color: '#C9A732' }}
              >
                <figure className=' big text-center'>
                  <img src={connectWallet} className='pt-5' alt='' />
                </figure>
                <figure
                  className='big-sub mx-3  '
                  //   data-aos='fade-in'
                  //   data-aos-duration='1200'
                  //
                >
                  <img src={iconHead} className='' alt='' />
                </figure>
                {/* <!-- <div>Price 0.00143$</div> --> */}
              </div>
            </li>

            <li className='boxCard'>
              <div>
                <button className='buy-button  '>$BYTE IN WALLET</button>
              </div>
              <div
                className='box-img-buy d-flex flex-column justify-content-end pb-2'
                style={{ color: '#C9A732' }}
              >
                <figure className=' big text-center'>
                  <img src={connectWallet} className='pt-5' alt='' />
                </figure>
                <figure
                  className='big-sub mx-3  '
                  //   data-aos='fade-in'
                  //   data-aos-duration='1200'
                  //
                >
                  <img src={iconHead} className='' alt='' />
                </figure>
                {/* <!-- <div>Price 0.00143$</div> --> */}
              </div>
            </li>

            <li className='boxCard'>
              <div className=' '>
                <button className='buy-button text-black text-center w-full w-fit'>
                  TOTAL $ETH EARNED
                </button>
              </div>
              <div
                className='box-img-buy d-flex flex-column justify-content-end pb-2'
                style={{ color: '#C9A732' }}
              >
                <figure className=' big text-center'>
                  <img src={connectWallet} className='pt-5' alt='' />
                </figure>
                <figure
                  className='big-sub mx-3  '
                  //   data-aos='fade-in'
                  //   data-aos-duration='1200'
                  //
                >
                  <img src={iconHead} className='' alt='' />
                </figure>
                {/* <!-- <div>Price 0.00143$</div> --> */}
              </div>
            </li>
          </ul>
        </article>

        <article className=' white-bg '>
          <div className='col-11 col-md-9 mx-auto '>
            <div className='d-flex justify-content-between align-items-center'>
              <div className=' '>
                <img src={logoFooter} className='big-screen' alt='' />
                {/* <img src={logoSmall} className='small-screen' alt='' /> */}
              </div>

              <div className='text-center'>
                <img
                  src={copy}
                  className='big-screen col-8 col-md-12 text-center'
                  alt=''
                />
                {/* <img
                  src={copySmall}
                  className='small-screen'
                  style={{ width: '290px' }}
                  alt=''
                /> */}
              </div>

              <div className=' '>
                <div className='d-flex justify-content-end  '>
                  <a
                    href='https://twitter.com/byteonblast'
                    target='https://twitter.com/byteonblast'
                  >
                    <img src={tF} className='hover-img big-screen' alt='' />
                    {/* <img
                      src={tFSmall}
                      className='hover-img small-screen'
                      alt=''
                    /> */}
                  </a>
                  <a
                    href='https://t.me/byteonblast'
                    target='https://t.me/byteonblast'
                    className='ml-3'
                  >
                    <img src={teleF} className='hover-img big-screen' alt='' />
                    {/* <img src={teleSmall} className='small-screen' alt='' /> */}
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
