import React, { useState } from 'react';
import SortIcon from '../../Utilites/SortIcon';
import Breadcrumb from '../../Utilites/Breadcrumb';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import TableHeader from '../../Utilites/TableHeader';
import { Link } from 'react-router-dom';
import SearchOrder from './SearchOrder';

const data = [
    {
        "id": 1,
        "document": "invoice ",
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
        "document": "invoice ",
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
        "document": "invoice ",
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



const Orders = () => {

    const [selectedOption, setSelectedOption] = useState('Edit');
    const [selectedIds, setSelectedIds] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [statusBtn, setStatusBtn] = useState('All');


    const [showOrderDetailsModal, setShowOrderDetailsModal] = useState(false);

    const handleChangeStatus = (event, orderId) => {
        const newStatus = event.target.value;

        updateOrderStatus(orderId, newStatus);
    };

    const updateOrderStatus = (orderId, newStatus) => {
        // Implement your logic to update the order status, e.g., make an API call
        console.log(`Updating order ${orderId} status to ${newStatus}`);
    };

    const handleApplyClick = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, ${selectedOption} it!`
        }).then((result) => {
            if (result.isConfirmed) {
                if (selectedOption === 'Edit' && selectedIds.length > 0) {
                    console.log('Edit IDs:', selectedIds);
                } else if (selectedOption === 'Delete' && selectedIds.length > 0) {
                    console.log('Delete IDs:', selectedIds);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    };
    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleOrderDetails = (orderId) => {
        const order = data.find((order) => order.id === orderId);
        setSelectedOrder(order);
        setShowOrderDetailsModal(true);
    };

    const handleCloseOrderDetailsModal = () => {
        setShowOrderDetailsModal(false);
        setSelectedOrder(null);
    };

    const handleStatusBtn = (params) => {
        setStatusBtn(params)
    }

    console.log(statusBtn);

    return (
        <div className="content-wrapper">
            <div className="content-header">
                <Breadcrumb page={'Orders'} />

                <div className="container d-flex gap-4 flex-wrap justify-content-center my-3">
                    <button
                        type="button"
                        onClick={() => handleStatusBtn('All')}
                        className={`btn btn-secondary ${statusBtn === 'All' ? 'active-btn' : ''}`}
                    >
                        All
                    </button>
                    <button
                        type="button"
                        onClick={() => handleStatusBtn('Pending')}
                        className={`btn btn-secondary ${statusBtn === 'Pending' ? 'active-btn' : ''}`}
                    >
                        Pending
                    </button>
                    <button
                        type="button"
                        onClick={() => handleStatusBtn('Ready to ship')}
                        className={`btn btn-secondary ${statusBtn === 'Ready to ship' ? 'active-btn' : ''}`}
                    >
                        Ready to ship
                    </button>
                    <button
                        type="button"
                        onClick={() => handleStatusBtn('Shipped')}
                        className={`btn btn-secondary ${statusBtn === 'Shipped' ? 'active-btn' : ''}`}
                    >
                        Shipped
                    </button>
                    <button
                        type="button"
                        onClick={() => handleStatusBtn('Delivered')}
                        className={`btn btn-secondary ${statusBtn === 'Delivered' ? 'active-btn' : ''}`}
                    >
                        Delivered
                    </button>
                    <button
                        type="button"
                        onClick={() => handleStatusBtn('Returned')}
                        className={`btn btn-secondary ${statusBtn === 'Returned' ? 'active-btn' : ''}`}
                    >
                        Returned
                    </button>
                    <button
                        type="button"
                        onClick={() => handleStatusBtn('Refund')}
                        className={`btn btn-secondary ${statusBtn === 'Refund' ? 'active-btn' : ''}`}
                    >
                        Refund
                    </button>
                </div>
                <SearchOrder />

                <TableHeader /* slug={'products/new'}  */ selectedIds={selectedIds} setSelectedIds={setSelectedIds} />


                <div className='table-responsive'>
                    <table className="table table-striped">
                        <thead>
                            <tr className='text-center'>
                                <th>#</th>
                                <th className='text-nowrap text-66 '>Document <SortIcon /></th>
                                <th className='text-nowrap text-66 '>Order No <SortIcon /></th>
                                <th className='text-nowrap text-66 '>Order Date <SortIcon /></th>
                                <th className='text-nowrap text-66 '>Product Name <SortIcon /></th>
                                <th className='text-nowrap text-66 '>Items <SortIcon /></th>
                                <th className='text-nowrap text-66 '>Price <SortIcon /></th>
                                <th className='text-nowrap text-66 '>Payment Method <SortIcon /></th>
                                <th className='text-nowrap text-66 '>Status <SortIcon /></th>
                                <th className='text-nowrap text-66 '>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {data.map((order, index) => (
                                <tr className='text-center' key={order.id}>
                                    <td className='font-td'>{index + 1}</td>
                                    <td className='font-td'>


                                        <a target='_blank' href="https://dwdqz3611m4qq.cloudfront.net/heroes/_1600x2065_crop_center-center_82_line/invoice_example_01.png"> {order.document}</a>

                                    </td>
                                    <td className='font-td'>{order.OrderNo}</td>
                                    <td className='font-td'>{order.OrderDate}</td>
                                    <td className='font-td'>{order.productName}</td>
                                    <td className='font-td'>{order.items}</td>
                                    <td className='font-td'>{order.price}</td>
                                    <td className='text-start'>{order.paymentMethod}</td>
                                    <td className='font-td'>{order.status}</td>
                                    <td className='font-td'>
                                        <button
                                            onClick={() => handleOrderDetails(order.id)}
                                            className="border btn btn-sm mb-0 text-nowrap text-white" style={{ background: "#48b7d7", width: '110px' }}
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

            <Modal show={showOrderDetailsModal} onHide={handleCloseOrderDetailsModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedOrder && (
                        <>
                            <p>Document: {selectedOrder.document}</p>
                            <p>Order No: {selectedOrder.OrderNo}</p>
                            Products Name: <br />
                            1.<br />
                            2.<br />
                            Total Price:<br />
                            Order Date:<br />
                            Customer Name: Suhael Ahmed<br />
                            Contact No.:<br />
                            Email: puthiprokash@gmail.com<br />
                            Address: Baneshorpara, Tepriganj, Debiganj, Panchagarh<br />
                            City: Panchagarh<br />
                            Country: Bangladesh<br />
                            State: Rangpur<br />
                            Zip: 5020<br />
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer className='mx-auto'>
                    <Button variant="secondary" onClick={handleCloseOrderDetailsModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Orders;