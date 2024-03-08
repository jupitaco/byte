import React from 'react';
import logo from '../../assets/Property-Frame.svg';
import grundgeBg from '../../assets/white-bg.png';
import byteImage from '../../assets/Bytee.svg';
import twitter from '../../assets/twitter.svg';
import telegram from '../../assets/telegram.svg';
import eth100 from '../../assets/100eth.svg';
import eth200 from '../../assets/200eth.svg';
import bytes2 from '../../assets/BYTE2 1.svg';
import roadmap from '../../assets/ROADMAP.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main classNameName='body'>
      <section classNameName='one pt-lg-2'>
        <section classNameName='d-flex justify-content-between'>
          <div classNameName='pt-lg-5 mt-lg-3 mt-4 mx-lg-5 mx-3'>
            <button classNameName='dashboard-button text-white text-center w-full w-fit'>
              <Link to='/connect-wallet' classNameName='dash'>
                Dashboard
              </Link>
            </button>
          </div>
          <div classNameName='d-flex justify-content-end ml-lg-auto px-5 mx-5 pt-lg-5 pt-4 mt-3 '>
            <a
              href='https://twitter.com/byteonblast'
              target='https://twitter.com/byteonblast'
              data-aos='fade-in'
              data-aos-duration='500'
              data-aos-delay='900'
            >
              <img src={twitter} classNameName='hover-img' alt='' />
            </a>
            <a
              href='https://t.me/byteonblast'
              target='https://t.me/byteonblast'
              classNameName='ml-5'
              data-aos='fade-in'
              data-aos-duration='500'
              data-aos-delay='1700'
            >
              <img src={telegram} alt='' />
            </a>
          </div>
        </section>

        <figure classNameName='mt-lg-5 pt-lg-5 d-flex justify-content-center mx-auto'>
          <img src={logo} classNameName='mt-5 pt-5 element image' alt='' />
        </figure>
      </section>

      <section
        classNameName='container'
        style={{ position: 'relative bottom: 60px' }}
      >
        <div classNameName='d-flex text-white justify-content-center gap-3 mx-auto mt-n5 menu'>
          <a href='' style={{ color: '#B88E00' }}>
            <h2 style={{ fontWeight: 'bolder' }}>HOME</h2>
          </a>
          <a href='#Roadmap'>
            <h2 classNameName='ml-lg-4' style={{ fontWeight: 'bolder' }}>
              ROADMAP
            </h2>
          </a>
          <a href='#PRESALE'>
            <h2 classNameName='ml-lg-4' style={{ fontWeight: 'bolder' }}>
              PRESALE
            </h2>
          </a>
        </div>
      </section>

      <figure classNameName='mt-2'>
        <img
          src={grundgeBg}
          classNameName='d-flex img-fluid w-100 justify-content-center mx-auto'
          alt=''
        />
      </figure>

      <sction classNameName='d-lg-flex mt-5'>
        <article classNameName='col-lg-6 container '>
          <h1
            style={{
              color: 'white',
              fontSize: '57px',
              fontWeight: 'bolder',
              lineHeight: '50px',
            }}
          >
            THE <span id='ityped'></span> <br />
            <span style={{ color: '#FFDB60' }}>STORY</span>{' '}
          </h1>
          <p classNameName='pt-4 text'>
            Once upon a time in the digital realm of Blast, a loyal and
            adventurous blockchain explorer named{' '}
            <span style={{ color: '#FFDB60' }}>Byte</span> embarked on a quest
            to discover the hidden treasures of decentralized possibilities.
            Byte, a <span style={{ color: '#FFDB60' }}>spirited canine</span>{' '}
            with a fur coat resembling the hues of a blockchain, roamed through
            the data fields and encrypted forests with unwavering curiosity.
          </p>

          <p classNameName='text'>
            {' '}
            Byte's journey led to encounters with smart contracts that twinkled
            like constellations in the vast blockchain sky. Each contract became
            a milestone in his tale, etching the history of Blast with paws of
            exploration. From the Solidity Mountains to the Ether Valley, Byte
            left his mark in the form of paw prints, symbolizing the
            transactions of trust and transparency.
          </p>

          <p classNameName='text'>
            {' '}
            In the heart of Blast, Byte discovered the{' '}
            <span style={{ color: '#FFDB60' }}>Token Grove</span> , where the
            leaves whispered tales of decentralized finance and blockchain
            innovation. It was here that he encountered other blockchain
            companions forming a fellowship bound by the shared mission of
            unleashing the potential of Blast.
          </p>

          <p classNameName='text'>
            As Byte continued his journey, he became a symbol of{' '}
            <span style={{ color: '#FFDB60' }}>
              rewards, loyalty and security
            </span>{' '}
            in the blockchain realm. His story, a narrative of trust, echoed
            through the decentralized lands, inspiring users to embrace the
            boundless possibilities of Blast. And so, the legend of Byte, the
            blockchain explorer, became an integral part of Blast's history,
            reminding everyone that even in the digital wilderness, loyalty and
            adventure pave the way for a decentralized future.
          </p>
        </article>

        <figure
          classNameName='d-flex justify-content-end ml-auto'
          data-aos='fade-left'
          data-aos-duration='500'
          data-aos-easing='ease-in-out-cubic'
          data-aos-mirror='true'
          data-aos-anchor-placement='top-center'
        >
          <img src={byteImage} alt='' classNameName='bytee-img' />
        </figure>
      </sction>

      <h1 classNameName='mt-5 hold text-center px-5 ml-lg-5'>
        Hold $BYTE as we embark on this journey to explore the Blast Universe
        and get rewarded $ETH.
      </h1>

      <div classNameName='mt-5 pt-4'>
        <img
          src={grundgeBg}
          classNameName='d-flex img-fluid w-100 justify-content-center mx-auto w-full'
          alt=''
        />
      </div>

      <h1
        style={{ color: '#C9A732', fontSize: '40px', fontWeight: 'bolder' }}
        classNameName='mt-4  text-center px-5 '
      >
        tokenomics
      </h1>

      <section classNameName='container mt-4 pt-4'>
        <div classNameName='row justify-content-center mx-auto pb-4 left'>
          <div
            classNameName='col-lg-4'
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='200'
          >
            <div
              classNameName='box-img text-center'
              style={{ color: '#C9A732' }}
            >
              <h1 classNameName='pt-5 big'>
                {' '}
                1,000, <br /> 000,000 <br /> $BYTE
              </h1>
              <div classNameName='big-sub'>TOTAL SUPPLY</div>
            </div>
          </div>

          <div
            classNameName='col-lg-4 top'
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='200'
          >
            <div
              classNameName='box-img text-center pt-4'
              style={{ color: '#C9A732' }}
            >
              <h1 classNameName='pt-5 big pt-5 '>50%</h1>
              <div classNameName='big-sub'>BURN</div>
            </div>
          </div>

          {/* <div classNameName="col-lg-4 top" data-aos="fade-up"
                data-aos-duration="500" data-aos-delay="200">
                    <div classNameName="box-img text-center" style="color: #C9A732">
                        <h1 classNameName="pt-5 big " >8%</h1>
                        <div classNameName="big-sub">KOLs <br> ALLOCATION</div>
                    </div>
                </div>   */}

          <div
            classNameName='col-lg-4 mt-lg-0 mt-5'
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='700'
          >
            <div
              classNameName='box-img text-center'
              style={{ color: '#C9A732' }}
            >
              <h1 classNameName='pt-5 big'>15%</h1>
              <div classNameName='big-sub'>
                PUBLIC <br /> SALE
              </div>
              {/* <div>100 ETH : 0.00125$</div>  */}
            </div>
          </div>

          <div
            classNameName='col-lg-4 mt-5'
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='700'
          >
            <div
              classNameName='box-img text-center'
              style={{ color: '#C9A732' }}
            >
              <h1 classNameName='pt-5 big'>12%</h1>
              <div classNameName='big-sub'>LIQUIDITY</div>
              {/* <!-- <div>Price 0.00143$</div> --> */}
            </div>
          </div>

          <div
            classNameName='col-lg-4 mt-5'
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='700'
          >
            <div
              classNameName='box-img text-center'
              style={{ color: '#C9A732' }}
            >
              <h1 classNameName='pt-5 big'>5%</h1>
              <div classNameName='big-sub'>MARKETING / DEVELOPMENT</div>
            </div>
          </div>

          <div
            classNameName='col-lg-4 mt-5'
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='1100'
          >
            <div
              classNameName='box-img text-center'
              style={{ color: '#C9A732' }}
            >
              <h1 classNameName='pt-5 big'>5%</h1>
              <div classNameName='big-sub'>
                COMMUNITY/ <br /> AIRDROP
              </div>
            </div>
          </div>

          <div
            classNameName='col-lg-4 mt-5'
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='1100'
          >
            <div
              classNameName='box-img text-center'
              style={{ color: '#C9A732' }}
            >
              <h1 classNameName='pt-5 big'>6%</h1>
              <div classNameName='big-sub '>
                BUY AND SELL <br /> TAX
              </div>
              <div classNameName='texttt'>
                (6% Buy and Sell Tax (2% for $ETH Rewards | 1% AutoLiquidity |
                3% Team/Development/Marketing)
              </div>
            </div>
          </div>

          <div
            classNameName='col-lg-4 mt-5'
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='1100'
          >
            <div
              classNameName='box-img text-center'
              style={{ color: '#C9A732' }}
            >
              <h1 classNameName='pt-5 big'>10%</h1>
              <div classNameName='big-sub'>SEED</div>
            </div>
          </div>

          <div
            classNameName='col-lg-4 mt-5'
            data-aos='fade-in'
            data-aos-duration='500'
            data-aos-delay='1100'
          >
            <div
              classNameName='box-img text-center'
              style={{ color: '#C9A732' }}
            >
              <h1 classNameName='pt-5 big'>3%</h1>
              <div classNameName='big-sub'>TEAM</div>
            </div>
          </div>
        </div>
      </section>

      <div
        id='PRESALE'
        classNameName='d-flex justify-content-center mx-auto w-full'
      >
        <img src={grundgeBg} classNameName='img-fluid w-100' alt='' />
      </div>

      <div classNameName='container'>
        <h1
          style={{ color: '#C9A732', fontSize: '38px', fontWeight: 'bolder' }}
          classNameName='mt-4 text-center px-5 '
        >
          PRESALE
        </h1>
        <div
          classNameName='big-sub text-center pt-4'
          style={{ color: '#C9A732', fontSize: '48px' }}
        >
          Date: To be Announced
        </div>

        <div classNameName='row justify-content-center mx-lg-auto mt-5'>
          <div classNameName='col-lg-4 '>
            <img src={eth100} classNameName='eth img-small' alt='' />
          </div>
          <div classNameName='col-lg-4 top'>
            <img src={eth200} classNameName='img-small' alt='' />
          </div>
        </div>

        <div classNameName='d-flex justify-content-center mx-auto mt-5'>
          <button classNameName='button text-white'>
            Enter Presale Portal
          </button>
        </div>
      </div>

      <div classNameName='d-flex justify-content-center mx-auto mt-4 pt-3'>
        <img src={bytes2} classNameName=' byte' alt='' />
      </div>

      <div id='Roadmap' classNameName='text-center mt-4 '>
        <img src={roadmap} alt='' />
      </div>

      <div classNameName='container mt-5 pb-5'>
        <div classNameName='row justify-content-center mx-lg-auto'>
          <div classNameName='col-lg-5'>
            <div classNameName='roadmap p-1 px-4'>
              <div classNameName='d-flex justify-content-center mx-auto pt-4'>
                <h2
                  classNameName=' p-5 text-center'
                  style={{ border: '1px solid black', width: '400px' }}
                >
                  PHASE 1
                </h2>
              </div>

              <div classNameName='mt-5 pt-2 text-center'>
                <p classNameName='' style={{ color: '#000' }}>
                  Build the $BYTE Community
                </p>
                <p style={{ color: '#000' }}>
                  Onboard KOLs and Marketing plans{' '}
                </p>
                <p style={{ color: '#000' }}>Blast Blockchain Launch </p>
              </div>
            </div>
          </div>

          <div classNameName='col-lg-5 top'>
            <div classNameName='roadmap p-1 px-4'>
              <div classNameName='d-flex justify-content-center mx-auto pt-4'>
                <h2
                  classNameName=' p-5 text-center'
                  style={{ border: '1px solid black', width: '400px' }}
                >
                  PHASE 2
                </h2>
              </div>

              <div classNameName='mt-5 pt-2 text-center'>
                <p classNameName='' style={{ color: '#000' }}>
                  $BYTE Public Presale
                </p>
                <p style={{ color: '#000' }}>$BYTE Launch </p>
                <p style={{ color: '#000' }}>1000 Holders Milestone</p>
              </div>
            </div>
          </div>

          <div classNameName='col-lg-5 mt-5'>
            <div classNameName='roadmap p-1 px-4'>
              <div classNameName='d-flex justify-content-center mx-auto pt-4'>
                <h2
                  classNameName=' p-5 text-center'
                  style={{ border: '1px solid black', width: '400px' }}
                >
                  PHASE 3
                </h2>
              </div>

              <div classNameName='mt-5 pt-2 text-center'>
                <p style={{ color: '#000' }}>
                  Development of the BYTE™️ LaunchPad{' '}
                </p>
                <p style={{ color: '#000' }}>Airdrop to OG $BYTE Holders </p>
                <p style={{ color: '#000' }}>5000 Holders Milestone</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
