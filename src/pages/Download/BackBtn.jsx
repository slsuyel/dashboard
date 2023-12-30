import React from 'react';
import { Link } from 'react-router-dom';

const BackBtn = () => {
    return (
        <Link to={'/dashboard/download'} className='bg-warning border-warning btn fw-bold mb-2 text-white'>
            <i className="fa-solid fa-rotate-left"></i>  Back to Download
        </Link>
    );
};

export default BackBtn;