import React from 'react';
import { Link } from 'react-router-dom';

const BackBtn = ({ slug }) => {
    return (
        <Link to={`/dashboard/${slug}`} className='border btn btn-sm mb-2 text-nowrap text-white' style={{ background: "#48b7d7", width: '110px' }}>
            <i className="fa-solid fa-chevron-left"></i>  Back
        </Link>

    );
};

export default BackBtn;
