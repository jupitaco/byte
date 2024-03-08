import React from 'react';
import './CreateLock.scss';
import { MovinText } from '../../components/MovingText/MovinText';

export const CreateLock = () => {
  return (
    <main className='createLock col-12 col-md-11 mx-auto'>
      <MovinText />

      <form className='createLockForm'>
        <hgroup className='mb-3'>
          <h4>Create your lock</h4>
        </hgroup>

        <section>
          <label>Token or LP Token address*</label>
          <input
            name='token'
            id='token'
            type='text'
            placeholder='Enter Token or LP Token address'
            className='form-control'
            required
          />
          <div className='d-flex align-items-center gap-2 mt-3'>
            <input
              name='token'
              id='token'
              type='checkbox'
              placeholder='Enter Token or LP Token address'
            />
            <small className='checkSmall'>Use another owner</small>
          </div>
        </section>
        <section className='mt-3'>
          <label>Lock Name</label>
          <input
            name='token'
            id='token'
            type='text'
            placeholder='Enter Token or LP Token address'
            className='form-control'
          />
        </section>
        <section className='my-3'>
          <label>Amount*</label>
          <input
            name='token'
            id='token'
            type='text'
            placeholder='Amount'
            className='form-control'
          />
          <div className='d-flex align-items-center gap-2 mt-3'>
            <input name='token' id='token' type='checkbox' />
            <small className='checkSmall'>Use vesting</small>
          </div>
        </section>

        <section>
          <label>Lock Until</label>
          <input
            name='token'
            id='token'
            type='date'
            placeholder='Select date'
            className='form-control'
          />
        </section>

        <section className='my-3 text-center'>
          <button type='submit'>LOCK</button>
        </section>
      </form>
    </main>
  );
};
