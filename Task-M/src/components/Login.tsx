import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'react-bootstrap';
import React from "react";

const Login: React.FC = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const handleLogin = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: "/protected",
            },
            authorizationParams: {
                prompt: "login",
            },
        });
    };

    if(!isAuthenticated) return (<Button onClick={handleLogin}>Log in</Button>)
        return null;
};

export default Login;