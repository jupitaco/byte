import React from 'react';
import { BiSearch } from 'react-icons/bi';
import './Search.scss';

const Search = ({ placeholder }) => {
  return (
    <div className='search d-flex flex-row align-items-center col-12'>
      <BiSearch className='searchIcon' />
      <input type='text' placeholder={placeholder} className='form-control' />
    </div>
  );
};

export default Search;
