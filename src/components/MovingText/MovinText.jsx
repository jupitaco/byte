import React from 'react';
import './MovingText.scss';

const movingText = [
  { num: '#1', title: '$BYTE ' },
  { num: '#2', title: '$BYTE ' },
  { num: '#3', title: '$BYTE ' },
  { num: '#4', title: '$BYTE ' },
  { num: '#5', title: '$BYTE ' },
  { num: '#6', title: '$BYTE ' },
  { num: '#7', title: '$BYTE ' },
  { num: '#8', title: '$BYTE ' },
  { num: '#9', title: '$BYTE ' },
  { num: '#10', title: '$BYTE ' },
  { num: '#11', title: '$BYTE ' },
  { num: '#12', title: '$BYTE ' },
  { num: '#13', title: '$BYTE ' },
  { num: '#14', title: '$BYTE ' },
  { num: '#15', title: '$BYTE ' },
];
export const MovinText = () => {
  return (
    <section className='movingText d-flex align-items-center'>
      <article className='col-4 col-md-3 col-lg-2 d-flex align-items-center  gap-2'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M19 9V6H16M4 15L9 10L12 13L18.5 6.5M4 5V17C4 18.1046 4.89543 19 6 19H20'
            stroke='#FFDA5D'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>

        <h4 className='trending'>Trending</h4>
      </article>

      <article className='movingTextContainer col-8 col-md-9 col-lg-10'>
        <div className='movingTextWrapper '>
          {movingText.map((text, index) => (
            <h4 key={index} className='movingTextItem'>
              <span> {text.num} </span> {text.title}
            </h4>
          ))}
        </div>
      </article>
    </section>
  );
};
