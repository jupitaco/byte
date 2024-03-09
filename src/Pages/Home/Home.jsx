import { useEffect } from 'react';
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
import { init } from 'ityped';

const Home = () => {
  const data = [
    { id: 1, title: '1 Billion $BYTE  ', subtitle: 'TOTAL SUPPLY' },
    { id: 2, title: '50%  ', subtitle: 'BURNT' },
    { id: 3, title: '8%', subtitle: 'KOLs ALLOCATION' },
    { id: 4, title: '24%', subtitle: 'PUBLIC PRESALE' },
    { id: 5, title: '12%', subtitle: 'LIQUIDITY' },
    { id: 6, title: '4%', subtitle: 'MARKETING' },
    { id: 7, title: '2%', subtitle: 'AIRDROP' },
    {
      id: 8,
      title: '6%',
      subtitle: 'BUY AND SELL TAX',
      desc: '(6% Buy and Sell Tax (2% for $ETH Rewards | 1% AutoLiquidity | 3% Team/Development/Marketing)',
    },
    { id: 9, title: '1%', subtitle: 'AUTO-LIQUIDITY' },
    { id: 10, title: '3%', subtitle: 'TEAM' },
  ];

  useEffect(() => {
    const myElement = document.querySelector('#ityped');
    init(myElement, {
      showCursor: true,
      strings: ['BYTE'],
    });
  }, []);

  return (
    <main className='body'>
      <section className='one pt-lg-2 mb-5'>
        <section className='d-flex justify-content-between align-items-center container mt-4'>
          <div className=''>
            <button className='dashboard-button text-white text-center '>
              <Link to='/connect-wallet' className=''>
                Dashboard
              </Link>
            </button>
          </div>
          <div className='d-flex justify-content-end gap-2 gap-md-3'>
            <a
              href='https://twitter.com/byteonblast'
              target='https://twitter.com/byteonblast'
              data-aos='fade-in'
              data-aos-duration='500'
              data-aos-delay='900'
            >
              <img src={twitter} className='hover-img' alt='' />
            </a>
            <a
              href='https://t.me/byteonblast'
              target='https://t.me/byteonblast'
              className='ml-5'
              data-aos='fade-in'
              data-aos-duration='500'
              data-aos-delay='1700'
            >
              <img src={telegram} alt='' />
            </a>
          </div>
        </section>

        <figure className='mt-lg-5 pt-lg-5 d-flex justify-content-center mx-auto'>
          <img src={logo} className='mt-5 pt-5 element image' alt='' />
        </figure>
      </section>

      <section
        className='container mt-5'
        // style={{ position: 'relative bottom: 60px' }}
      >
        <div className='d-flex text-white justify-content-center gap-2 gap-md-5 mx-auto menu'>
          <a href='/' style={{ color: '#B88E00' }}>
            <h2>HOME</h2>
          </a>
          <a href='/#Roadmap'>
            <h2 className=''>ROADMAP</h2>
          </a>
          <a href='/#PRESALE'>
            <h2 className=''>PRESALE</h2>
          </a>
        </div>
      </section>

      <figure className='mt-2'>
        <img
          src={grundgeBg}
          className='d-flex img-fluid w-100 justify-content-center mx-auto'
          alt=''
        />
      </figure>

      <section className='d-lg-flex mt-5'>
        <article className='col-lg-6 container '>
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
          <p className='pt-4 text'>
            Once upon a time in the digital realm of Blast, a loyal and
            adventurous blockchain explorer named{' '}
            <span style={{ color: '#FFDB60' }}>Byte</span> embarked on a quest
            to discover the hidden treasures of decentralized possibilities.
            Byte, a <span style={{ color: '#FFDB60' }}>spirited canine</span>{' '}
            with a fur coat resembling the hues of a blockchain, roamed through
            the data fields and encrypted forests with unwavering curiosity.
          </p>

          <p className='text'>
            {' '}
            Byte&apos;s journey led to encounters with smart contracts that
            twinkled like constellations in the vast blockchain sky. Each
            contract became a milestone in his tale, etching the history of
            Blast with paws of exploration. From the Solidity Mountains to the
            Ether Valley, Byte left his mark in the form of paw prints,
            symbolizing the transactions of trust and transparency.
          </p>

          <p className='text'>
            {' '}
            In the heart of Blast, Byte discovered the{' '}
            <span style={{ color: '#FFDB60' }}>Token Grove</span> , where the
            leaves whispered tales of decentralized finance and blockchain
            innovation. It was here that he encountered other blockchain
            companions forming a fellowship bound by the shared mission of
            unleashing the potential of Blast.
          </p>

          <p className='text'>
            As Byte continued his journey, he became a symbol of{' '}
            <span style={{ color: '#FFDB60' }}>
              rewards, loyalty and security
            </span>{' '}
            in the blockchain realm. His story, a narrative of trust, echoed
            through the decentralized lands, inspiring users to embrace the
            boundless possibilities of Blast. And so, the legend of Byte, the
            blockchain explorer, became an integral part of Blast&apos;s
            history, reminding everyone that even in the digital wilderness,
            loyalty and adventure pave the way for a decentralized future.
          </p>
        </article>

        <figure
          className='d-flex justify-content-end ml-auto'
          data-aos='fade-left'
          data-aos-duration='500'
          data-aos-easing='ease-in-out-cubic'
          data-aos-mirror='true'
          data-aos-anchor-placement='top-center'
        >
          <img src={byteImage} alt='' className='bytee-img' />
        </figure>
      </section>

      <h1 className='mt-5 hold text-center px-5 ml-lg-5'>
        Hold $BYTE as we embark on this journey to explore the Blast Universe
        and get rewarded $ETH.
      </h1>

      <figure className='mt-5 pt-4'>
        <img
          src={grundgeBg}
          className='d-flex img-fluid w-100 justify-content-center mx-auto w-full'
          alt=''
        />
      </figure>

      <h1 className='mt-4 tokess  text-center px-5 '>tokenomics</h1>

      <section className='container mt-4 pt-4 d-flex flex-wrap justify-content-center gap-5'>
        {data.map(({ title, subtitle, id, desc }) => (
          <article
            className=' box-img '
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='200'
            key={id}
          >
            <h2 className=''> {title} </h2>
            <p>{subtitle}</p>
            {desc && <small className='col-10 mx-auto m-0'> {desc}</small>}
          </article>
        ))}
      </section>

      <figure
        id='PRESALE'
        className='d-flex justify-content-center mx-auto w-full'
      >
        <img src={grundgeBg} className='img-fluid w-100' alt='' />
      </figure>

      <section id='PRESALE' className='container'>
        <h1
          style={{ color: '#C9A732', fontSize: '38px', fontWeight: 'bolder' }}
          className='mt-4 text-center px-5 '
        >
          PRESALE
        </h1>
        <p className='dateToBe'>Date: To be Announced</p>

        <div className='d-flex flex-column flex-md-row col-11 col-md-8 mx-auto gap-3 justify-content-center mt-5'>
          <figure className=' col-12 col-md-5 m-0'>
            <img src={eth100} className=' col-12' alt='' />
          </figure>
          <figure className='col-12 col-md-5 m-0 '>
            <img src={eth200} className='col-12 ' alt='' />
          </figure>
        </div>

        <div className='d-flex justify-content-center mx-auto mt-5'>
          <button className='button text-white'>Enter Presale Portal</button>
        </div>
      </section>

      <figure className='my-5'>
        <img src={bytes2} className='col-12' alt='' />
      </figure>

      <figure id='Roadmap' className='text-center mt-4 col-8 col-md-3 mx-auto'>
        <img src={roadmap} alt='' />
      </figure>

      <section className='container mt-5 pb-5 d-flex flex-wrap justify-content-center gap-3 col-11 col-md-11 col-lg-8 mx-auto'>
        <article className=' col-12 col-md-5'>
          <div className='roadmap d-flex flex-column justify-content-between '>
            <hgroup className='phaseCard col-11 mx-auto '>
              <h2>PHASE 1</h2>
            </hgroup>

            <div className='phaseDeets text-center'>
              <p className=''>Build the $BYTE Community</p>
              <p>Onboard KOLs and Marketing plans </p>
              <p>Blast Blockchain Launch </p>
            </div>
          </div>
        </article>

        <article className=' col-12 col-md-5'>
          <div className='roadmap d-flex flex-column justify-content-between'>
            <hgroup className='phaseCard col-11 mx-auto '>
              <h2>PHASE 2</h2>
            </hgroup>

            <div className='phaseDeets text-center'>
              <p className=''>$BYTE Public Presale</p>
              <p>$BYTE Launch </p>
              <p>1000 Holders Milestone</p>
            </div>
          </div>
        </article>

        <article className=' col-12 col-md-5'>
          <div className='roadmap d-flex flex-column justify-content-between'>
            <hgroup className='phaseCard col-11 mx-auto '>
              <h2>PHASE 3</h2>
            </hgroup>

            <div className='phaseDeets text-center'>
              <p>Development of the BYTE™️ LaunchPad </p>
              <p>Airdrop to OG $BYTE Holders </p>
              <p>5000 Holders Milestone</p>
              <p></p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Home;
