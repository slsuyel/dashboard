import React from 'react';
import { Link } from 'react-router-dom';

const BackBtn = ({ slug }) => {
    return (
        <Link to={`/dashboard/${slug}`} className='bg-warning border-warning btn fw-bold mb-2 text-white'>
            <i className="fa-solid fa-rotate-left"></i>  Back
        </Link>
    );
};

export default BackBtn;