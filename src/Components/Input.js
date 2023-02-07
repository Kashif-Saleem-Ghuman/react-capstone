import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { fetchData } from '../redux/slice/Country';

function Input() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = () => {
    dispatch(fetchData({ key: 'min_gdp', value: inputValue }));
  };
  return (
    <>
      <div className="p-2 d-flex">
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" className="form my-2" placeholder="Enter Your Country" />
        <button onClick={handleSubmit} aria-label="Save" type="submit" className="button my-2"><FontAwesomeIcon icon={faSearch} /></button>
      </div>

    </>
  );
}

export default Input;
