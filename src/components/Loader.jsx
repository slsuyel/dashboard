
import React, { useState, useEffect } from 'react';

const Loader = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 200);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div className={`${!showLoader ? 'd-none ' : ''}`}>
            <div className="content-header">
                {showLoader && (
                    <div className="d-flex justify-content-center align-items-center text-center w-100" style={{ height: "80vh" }}>
                        <img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif" width={100} alt="" className='img-fluid' />
                    </div>
                )}

            </div>
        </div>
    );
};

export default Loader;
