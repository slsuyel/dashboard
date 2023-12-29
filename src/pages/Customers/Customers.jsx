import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../Utilites/Breadcrumb';
import SortIcon from '../../Utilites/SortIcon';
import { Link } from 'react-router-dom';
import CustomerSearch from './CustomerSearch';
const data = [
    {
        id: 1,
        customerName: 'John Doe',
        email: 'john.doe@example.com',
        contactNo: '1234567890',
        district: 'Sample District',
        thana: 'Sample Thana',
        totalOrders: 5,
    },

];
const Customers = () => {




    return (
        <div className="content-wrapper">
            <div className="content-header">
                <Breadcrumb page={'customers'} />

                <CustomerSearch />
                <hr />

                <div className='d-flex justify-content-between mx-auto px-1 w-100'>
                    <div className="align-items-center d-flex gap-1">
                        <label htmlFor="showDropdown" className="form-label mb-0 text-secondary">Show:</label>
                        <select className="form-select" id="showDropdown">
                            <option>10</option>
                            <option>20</option>
                            <option>30</option>
                        </select>
                    </div>


                </div>
                <div className='table-responsive '>

                    <table className="table table-striped">
                        <thead>
                            <tr className='text-center'>
                                <th>#</th>
                                <th className='text-nowrap text-secondary'>Cusomer Name <SortIcon /></th>
                                <th className='text-nowrap text-secondary'>Email <SortIcon /></th>
                                <th className='text-nowrap text-secondary'>Contact No.<SortIcon /></th>
                                <th className='text-nowrap text-secondary'>District <SortIcon /></th>
                                <th className='text-nowrap text-secondary'>Thana <SortIcon /></th>
                                <th className='text-nowrap text-secondary'>Total Orders <SortIcon /></th>

                                <th className='text-nowrap text-secondary'>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {data.map((customer, index) => (
                                <tr className='text-center' key={customer.id}>
                                    <td>{index + 1}</td>
                                    <td>{customer.customerName}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.contactNo}</td>
                                    <td>{customer.district}</td>
                                    <td>{customer.thana}</td>
                                    <td>{customer.totalOrders}</td>
                                    <td>
                                        <Link to={'/dashboard/customers/details'} className="border btn btn-sm mb-0 text-nowrap text-white" style={{ background: "#48b7d7" }}>
                                            Orders List View </Link>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>


            </div>
        </div>
    );
};

export default Customers;