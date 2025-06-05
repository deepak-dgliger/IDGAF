
// 🔁A shallow copy means:
//  It copies only the top-level values, NOT nested objects or arrays.
//  So if you change the nested part, it affects the original too!


// A deep copy means:
// 🔁 It copies everything — including nested objects or arrays — separately.
// So if you change anything, it doesn’t affect the original.


import React from 'react'

const ShallowDeepCopy: React.FC = () => {

  const original = {
    name: "Deepak",
    address: {
      city: "Delhi"
    }
  };

  const shallowCopy = { ...original };  // using spread operator

  shallowCopy.name = "Cheeku";           // ✅ doesn't affect original
  shallowCopy.address.city = "Noida";    // ❌ changes original too!

  console.log(original.address.city);    // Output: "Noida"





  const original1 = {
    name: "Deepak",
    address: {
      city: "Delhi"
    }
  };

  // Deep copy using JSON
  const deepCopy = JSON.parse(JSON.stringify(original));

  deepCopy.name = "Cheeku";              // ✅ safe
  deepCopy.address.city = "Noida";       // ✅ also safe

  console.log(original.address.city);    // Output: "Delhi"

  return (
    <div>ShallowDeepCopy</div>
  )
}

export default ShallowDeepCopy