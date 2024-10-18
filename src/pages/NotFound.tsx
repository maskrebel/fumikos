import React from 'react';

const NotFound: React.FC = () => {
    return (
        <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
            <h1 className="display-1">404</h1>
            <h2>This page is not found</h2>
            <p>Sorry, this page your search not found.</p>
        </div>
    );
};

export default NotFound;
