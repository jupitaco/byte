import React, { useState } from 'react';
import './Token.scss';
import Search from '../../components/Search/Search';
import { MovinText } from '../../components/MovingText/MovinText';
import TabTitle from '../../components/Tabs/TabTitle';
import { TabsData } from '../../components/Tabs/TabsData';
import TabContents from '../../components/Tabs/TabContents';

const Token = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <main className='token col-12 col-md-11 mx-auto'>
      <MovinText />

      <section className='tokenContent'>
        <Search placeholder='Search by token address...' />
        <section className='my-5 d-flex align-items-center justify-content-between'>
          <div>
            <button className='demoBtn'>
              {' '}
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z'
                  fill='#FF9175'
                  stroke='white'
                  stroke-width='1.5'
                />
              </svg>
              Demo
            </button>
          </div>
          <div className='d-flex align-items-center justify-content-between gap-2'>
            {TabsData.TabTitle.map((tab) => (
              <section key={tab.id} className=''>
                <TabTitle
                  title={tab.title}
                  id={tab.id}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </section>
            ))}
          </div>
        </section>
        <section className='d-flex flex-column'>
          {TabsData.TabContents.map((tab) => (
            <section key={tab.id} className=''>
              <TabContents id={tab.id} activeTab={activeTab} comps={tab.comp} />
            </section>
          ))}
        </section>
      </section>
    </main>
  );
};

export default Token;
