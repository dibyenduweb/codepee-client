/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from 'react';
import loadingImage from '../assets/images/loading.png';

// Lazy load your Home component
const MyComponent = lazy(() => import('./Home'));

const LazyLoading = () => {
    return (
        <div>
            <h1>Welcome to the Other Component!</h1>
            <Suspense
                fallback={
                    <div style={{ textAlign: 'center' }}>
                        <img src={loadingImage} alt="Loading..." />
                    </div>
                }
            >
                <MyComponent />
            </Suspense>
        </div>
    );
};

export default LazyLoading;
