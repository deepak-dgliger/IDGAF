import React from 'react';
import { Helmet } from "react-helmet";

const JavaScriptIndex: React.FC = () => {
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
  return (
    <>
      {loadHelmet()}
      JavaScriptIndex
    </>
  )
}

export default JavaScriptIndex