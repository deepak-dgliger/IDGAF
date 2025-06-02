import React from 'react'
import {Helmet} from "react-helmet";

const NotFound: React.FC = () => {
    
    const loadHelmet = () => {
        return (
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Learn React and JavaScript" />
                <meta name="keywords" content="Improving skills" />
                <title>IDGAF : Dashboard Page</title>
            </Helmet>
        )
    }

    return (
        <>{loadHelmet()}
            <canvas id="canvas" hidden></canvas>
            <div className="center">
                <h1>404</h1>
                <p>PAGE NOT FOUND.</p>
            </div>
        </>
    )
}

export default NotFound