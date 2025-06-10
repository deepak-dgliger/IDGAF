import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const ApiCalling = React.lazy(()=> import('./ReactHooks/components/ApiCalling'));
const DebounceThrottling = React.lazy(()=> import('./ReactHooks/components/DebounceThrottling'));
const ShallowDeepCopy = React.lazy(()=> import('./ReactHooks/components/ShallowDeepCopy'));
const UseRefhook = React.lazy(()=> import('./ReactHooks/components/UseRefhook'));
const IntersectionObserverExample = React.lazy(()=> import('./javaScript/components/InfiniteScrollExample '));
const ArrayDelete = React.lazy(()=> import('./javaScript/components/ArrayDelete'));
const MemoHook = React.lazy(()=> import('./ReactHooks/components/MemoHook'));
const DaynamicForm = React.lazy(()=> import('./ReactHooks/components/DaynamicForm'));
const JavaScriptIndex = React.lazy(() => import('./javaScript/JavaScriptIndex'));
const ReactHooksIndex = React.lazy(() => import('./ReactHooks/ReactHooksIndex'));
const NotFound = React.lazy(() => import('./components/NotFound'));
const Dashboard = React.lazy(() => import('./components/Dashboard'));
const JsonServer = React.lazy(()=> import('./ReactHooks/components/JsonServer')) 

const AppRoutes: React.FC<any> = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/javaScript" element={<JavaScriptIndex />} />
                    <Route path="/javaScript/:id" element={<JavaScriptIndex />} />
                    <Route path="/react-hooks" element={<ReactHooksIndex />} />
                    <Route path="/react-hooks" element={<ReactHooksIndex />} />
                    <Route path="/react-Components/MemoHook" element={<MemoHook />} />
                    <Route path="/react-Components/jsonForm" element={<DaynamicForm />} />
                    <Route path="/react-Components/ApiCalling" element={<ApiCalling />} />
                    <Route path="/react-Components/DebounceThrottling" element={<DebounceThrottling />} />
                    <Route path="/react-Components/ShallowDeepCopy" element={<ShallowDeepCopy />} />
                    <Route path="/react-Components/UseRefhook" element={<UseRefhook />} />
                    <Route path="/react-Components/JsonServer" element={<JsonServer />} />
                    <Route path="/JavaScript-Components/UseRefhook" element={<IntersectionObserverExample />} />
                    <Route path="/JavaScript-Components/ArrayDelete" element={<ArrayDelete />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes