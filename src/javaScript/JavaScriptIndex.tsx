import React from 'react';
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';

const JavaScriptIndex: React.FC = () => {
  const navigate = useNavigate();

  const loadHelmet = () => {
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="JavaScript Index page" />
        <meta name="keywords" content="Improving javaScript skills" />
        <title>IDGAF : JavaScript Page</title>
      </Helmet>
    )
  }

    const layoutComponent = [
    { name: "Infinite Scroll", link: 'IntersectionObserverExample' },
    { name: "Array Delete", link: 'ArrayDelete' },
  ]
      
  const pageRoute=(item)=>{ navigate(`/JavaScript-Components/${item?.link}`) }
  return (
    <>
      {loadHelmet()}
      <h1 className="page-title">JavaScript</h1>
      <main className="card-container">
        {layoutComponent?.map((item, index) => (
          <div className="card-section" key={index} onClick={() => pageRoute(item)}>
            <div className="ag-courses-item_bg">
            </div>
            <h1>{item?.name}</h1>
          </div>
        ))}
      </main>
    </>
  )
}

export default JavaScriptIndex