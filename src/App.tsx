import React from 'react';
import './App.css';
import AppRoutes from './AppRoutes';
import IntersectionObserverExample from './javaScript/components/InfiniteScrollExample ';
import DebounceThrottling from './ReactHooks/components/DebounceThrottling';
const App:React.FC<any>=()=> {
  let data = "R/771001/31/2026/PRTL/27214";

  const checkSplit=()=>{
   let result = data.split('/PRTL/');
   console.log('result',result[0]);
  }

  return (
    <>
    {/* <button onClick={checkSplit}>Split Check</button> */}
    {/* <DebounceThrottling/> */}
    {/* <IntersectionObserverExample/> */}
    <AppRoutes/>
    </>
  );
}

export default App;
