import React, { useState } from 'react';
import SearchUpdate from './searchUpdate';

const Search = () => {
  const [isUpdateVisible, setUpdateVisible] = useState(false);

  const handleToggle = () => {
    setUpdateVisible(!isUpdateVisible);
  };

  const handleRemove = () => {
    setUpdateVisible(false);
  };

  return (
    <div >
      <button className='bata'  style={{border:"none", textDecorationColor:"transparent" }} onClick={handleToggle}>Search for places</button>

      <SearchUpdate isVisible={isUpdateVisible} handleRemove={handleRemove} />
    </div>
  );
};

export default Search;

