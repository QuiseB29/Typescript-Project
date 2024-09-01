import ReactDOM from "react-dom/client";
import React from "react";
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithNavigate from "./components/Auth0Provider";


const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <BrowserRouter>
    <Auth0ProviderWithNavigate>
        <App />
    </Auth0ProviderWithNavigate>
    
    </BrowserRouter>
)
