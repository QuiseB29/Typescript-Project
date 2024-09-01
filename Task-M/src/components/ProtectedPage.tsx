import PageLayout from "./Page-layout";
import React from "react";

const ProtectedPage: React.FC = () => {
    return (
        <PageLayout>
            <h1>Protected Page</h1>
        </PageLayout>
    );
};

export default ProtectedPage;