import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedPage from './components/ProtectedPage';
import AuthenticationGuard from './components/AuthenticationGuard';
import TodoList from './components/TodoList';





const App: React.FC = () => {
    const { isLoading } = useAuth0();

    if( isLoading ) return (<div>Loading....</div>)

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/Todolist"
              element={<AuthenticationGuard component={TodoList} />}
            />
            <Route
              path="/protected"
              element={<AuthenticationGuard component={ProtectedPage} />}
            />
            
        </Routes>
    );
};

export default App;
