import React, { useEffect, useRef, useState } from 'react';
import { useDebounce } from '../../utills/useDebounce';

const DebounceThrottling: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputref = useRef(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 1000); // 500ms delay

  useEffect(() => {
    if (debouncedSearchTerm) {
      // call API or filter data
      console.log("API call with:", debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const handleSubmit = () => {
    let data = inputref.current.focus();
  }

  return (
    <>
      <input ref={inputref} type="text" />
      <button onClick={handleSubmit}>check useRef</button>

      <input
        type="text"
        placeholder="Search here..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </>
  )
}

export default DebounceThrottling