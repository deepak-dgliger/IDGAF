import React from 'react'
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';

const ReactHooksIndex: React.FC = () => {
  const navigate = useNavigate();

  const loadHelmet = () => {
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Hooks Index page" />
        <meta name="keywords" content="Improving Hooks skills" />
        <title>IDGAF : Hooks Page</title>
      </Helmet>
    )
  }

  const layoutComponent = [
    { name: "Use Memo", link: 'MemoHook' },
    { name: "Daynamic Form", link: 'jsonForm' },
    { name: "Api Calling", link: 'ApiCalling' }, 
    { name: "Debounce Throttling", link: 'DebounceThrottling' }, 
    { name: "Shallow & DeepCopy", link: 'ShallowDeepCopy' }, 
    { name: "UseRef Hook", link: 'UseRefhook' }, 
    { name: "Json Server", link: 'JsonServer' }, 
  ]
      
  const pageRoute=(item)=>{ navigate(`/react-Components/${item?.link}`) }

  return (
    <>{loadHelmet()}
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

export default ReactHooksIndex