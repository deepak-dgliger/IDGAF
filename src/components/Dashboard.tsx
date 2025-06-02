import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Helmet} from "react-helmet";

const Dashboard: React.FC = () => {
    const navigate = useNavigate();

    const layoutComponent = [
        { name: "JavaScript", link: '/javaScript' },
        { name: "React Hooks", link: '/react-hooks' },
    ]

    const pageRoute=(item)=>{
        navigate(`${item?.link}`)
    }

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
        <> {loadHelmet()}
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

export default Dashboard