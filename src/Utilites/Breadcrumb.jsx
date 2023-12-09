import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ page }) => {
    return (
        <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                    <h1 className="m-0">{page}</h1>
                </div>
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item">
                            {/* <a href="#">Home</a> */}
                            <Link to='/dashboard'>Home</Link>
                        </li>
                        <li className="breadcrumb-item active">{page}</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
