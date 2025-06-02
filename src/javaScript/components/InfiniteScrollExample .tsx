import React, { useEffect, useRef, useState } from 'react';

const IntersectionObserverExample = () => {
  const [items, setItems] = useState(Array.from({length:20},(_,index)=>({name:`item ${index+1}`})));
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  // Fake fetch function
  const fetchMore = () => {
    setTimeout(() => {
      setItems((prev) => [...prev, ...Array.from({ length: 10 },(_,index)=>({name:`item ${items?.length+index}`}))]);
      setPage((prev) => prev + 1);
    }, 1000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          fetchMore();
        }
      },
      { threshold: 1 }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, []);

  return (
    <div>
      <h2 style={{color:'white'}}>🔁 Infinite Scroll with IntersectionObserver</h2>

      {items.map((item, index) => (
        <div key={index} style={{ padding: 20, border: '1px solid #ccc',color:'white'}}>
          {item.name}
        </div>
      ))}

      <div ref={loader} style={{ height: '100px', textAlign: 'center',color:'white' }}>
        <p>Loading more...</p>
      </div>
    </div>
  );
};

export default IntersectionObserverExample;