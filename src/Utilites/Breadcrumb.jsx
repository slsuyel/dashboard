import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ page }) => {



    return (
        <div className="container-fluid ">
            <div className="row mb-2">
                <div className="col-sm-6 ">
                    <h1 className="m-0 text-nil">{page}</h1>
                </div>
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item text-nil">
                            {/* <a href="#">Home</a> */}
                            <Link to='/dashboard' className='text-nil'>Home</Link>
                        </li>
                        <li className="breadcrumb-item  text-nil">{page}</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
