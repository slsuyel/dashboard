import React from 'react';
import Breadcrumb from '../../Utilites/Breadcrumb';
import CustomerSearch from './CustomerSearch';
import SortIcon from '../../Utilites/SortIcon';
import { Link } from 'react-router-dom';
import BackBtn from '../Download/BackBtn';
const data = [
    {
        "id": 1,
        "document": "ABC123",
        "OrderNo": "ORD001",
        "OrderDate": "2023-01-15",
        "updateDate": "2023-01-20",
        "productName": "Example Product",
        "items": 1,
        "price": 150.99,
        "paymentMethod": "Credit Card",
        "status": "Shipped"
    },
    {
        "id": 2,
        "document": "XYZ456",
        "OrderNo": "ORD002",
        "OrderDate": "2023-02-10",
        "updateDate": "2023-02-15",
        "productName": "Another Product",
        "items": 3,
        "price": 99.95,
        "paymentMethod": "PayPal",
        "status": "Processing"
    },
    {
        "id": 3,
        "document": "DEF789",
        "OrderNo": "ORD003",
        "OrderDate": "2023-03-05",
        "updateDate": "2023-03-10",
        "productName": "New Item",
        "items": 5,
        "price": 249.99,
        "paymentMethod": "Bank Transfer",
        "status": "Delivered"
    }
];
const OrdersListView = () => {



    return (
        <div className="content-wrapper">
            <div className="content-header">
                <Breadcrumb page={'Customers details'} />
                {/*  <Link className="border btn btn-sm mb-0 text-nowrap text-white"
                    style={{ background: "#48b7d7", width: '110px' }} to={'/dashboard/customers'}><i class="fa-solid fa-chevron-left"></i> Back </Link> */}

                <BackBtn slug={'customers'} />

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

                    <div className="align-items-center d-flex gap-1">
                        <label htmlFor="actionDropdown" className="form-label mb-0 text-secondary">Action:</label>
                        <select className="form-select" id="actionDropdown" >
                            <option value="Edit">Edit</option>
                            <option value="Delete">Delete</option>
                        </select>
                        <button className="border btn rounded">Apply</button>
                    </div>
                </div>

                <div className='table-responsive '>
                    <table className="table table-striped">
                        <thead>
                            <tr className='text-center'>
                                <th>#</th>
                                <th className='text-nowrap text-secondary'>Document <SortIcon /></th>
                                <th className='text-nowrap text-secondary'>Order No <SortIcon /></th>
                                <th className='text-nowrap text-secondary'>Order Date <SortIcon /></th>
                                <th className='text-nowrap text-secondary'>Product Name <SortIcon /></th>
                                <th className='text-nowrap text-secondary'>Items <SortIcon /></th>
                                <th className='text-nowrap text-secondary'>Price <SortIcon /></th>
                                <th className='text-nowrap text-secondary'>Payment Method <SortIcon /></th>
                                <th className='text-nowrap text-secondary'>Status <SortIcon /></th>
                                <th className='text-nowrap text-secondary'>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {data.map((order, index) => (
                                <tr className='text-center' key={order.id}>
                                    <td>{index + 1}</td>
                                    <td>{order.document}</td>
                                    <td>{order.OrderNo}</td>
                                    <td>{order.OrderDate}</td>
                                    <td>{order.productName}</td>
                                    <td>{order.items}</td>
                                    <td>{order.price}</td>
                                    <td>{order.paymentMethod}</td>
                                    <td>{order.status}</td>
                                    <td>
                                        <button
                                            onClick={() => handleOrderDetails(order.id)}
                                            className="border btn btn-sm mb-0 text-nowrap text-white"
                                            style={{ background: "#48b7d7", width: '110px' }}
                                        >
                                            Order Details
                                        </button>
                                        <select name="statusDropdown" className='bg-warning border-secondary p-1 rounded-1' id="statusDropdown" onChange={(e) => handleChangeStatus(e, order.id)}
                                            style={{ width: '110px', fontSize: '12px' }}>
                                            <option value="" selected disabled>Change Status</option>
                                            <option value="Ready to ship">Ready to ship</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Returned">Returned</option>
                                            <option value="Refund">Refund</option>
                                        </select>
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

export default OrdersListView;