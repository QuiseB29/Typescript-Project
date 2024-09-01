import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from 'react-bootstrap'
import Login from "./Login";
import Logout from "./Logout";


const NavBarButtons:React.FC = () => {
    const { isAuthenticated } = useAuth0();

    return(
        <Container>
            {!isAuthenticated && (
                <>
                  <Login />
                
                </>
            )}
            {isAuthenticated && (
                <>
                  <Logout />
                
                </>
            )}
        </Container>
    );
};

export default NavBarButtons;