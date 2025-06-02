import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MemoHook from './ReactHooks/components/MemoHook';
const JavaScriptIndex = React.lazy(() => import('./javaScript/JavaScriptIndex'));
const ReactHooksIndex = React.lazy(() => import('./ReactHooks/ReactHooksIndex'));
const NotFound = React.lazy(() => import('./components/NotFound'));
const Dashboard = React.lazy(() => import('./components/Dashboard'));

const AppRoutes: React.FC<any> = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/javaScript" element={<JavaScriptIndex />} />
                    <Route path="/javaScript/:id" element={<JavaScriptIndex />} />
                    <Route path="/react-hooks" element={<ReactHooksIndex />} />
                    <Route path="/react-hooks/:id" element={<ReactHooksIndex />} />
                    <Route path="/react-hooks/MemoHook" element={<MemoHook />} />
                    
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes