import React from 'react'
import "./search-update.css";
import { FiDelete } from 'react-icons/fi';

const SearchUpdate = ({ isVisible, handleRemove }) => {
  return (
    <div className={`search-update ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="search-card">

        <button className="remove-icon" >
            <FiDelete className='fi-icon' onClick={handleRemove} />
        </button>

        <div className="input-search">
            
          <form className="form">
            <input className='text-input' type='text' placeholder='city or country' />
            <button className='btn-search' type="submit">Search</button>
            
          </form>
          {/* <ul>
            <li>India</li>
            <li>Lagos</li>
          </ul> */}
        </div>
       
      </div>
    </div>
  );
};

export default SearchUpdate;

