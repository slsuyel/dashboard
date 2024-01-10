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
                <Breadcrumb page={'Customer '} />

                <CustomerSearch />
                <hr />

                <div className='d-flex justify-content-between mx-auto px-1 w-100 my-3'>
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
                            <tr className=''>
                                <th>#</th>
                                <th className='text-nowrap text-66'>Customer Name <SortIcon /></th>
                                <th className='text-nowrap text-66'>Email <SortIcon /></th>
                                <th className='text-nowrap text-66'>Contact No.<SortIcon /></th>
                                <th className='text-nowrap text-66'>District <SortIcon /></th>
                                <th className='text-nowrap text-66'>Thana <SortIcon /></th>
                                <th className='text-nowrap text-66'>Total Orders <SortIcon /></th>

                                <th className='text-nowrap text-66'>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {data.map((customer, index) => (
                                <tr className='text-start' key={customer.id}>
                                    <td className='font-td'>{index + 1}</td>
                                    <td className='font-td'>{customer.customerName}</td>
                                    <td className='font-td'>{customer.email}</td>
                                    <td className='font-td'>{customer.contactNo}</td>
                                    <td className='font-td'>{customer.district}</td>
                                    <td className='font-td'>{customer.thana}</td>
                                    <td className='font-td'>{customer.totalOrders}</td>
                                    <td className='font-td'>
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