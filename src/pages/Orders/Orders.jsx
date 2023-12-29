import React, { useState } from 'react';
import SortIcon from '../../Utilites/SortIcon';
import Breadcrumb from '../../Utilites/Breadcrumb';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

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



const Orders = () => {

    const [selectedOption, setSelectedOption] = useState('Edit');
    const [selectedIds, setSelectedIds] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const [showOrderDetailsModal, setShowOrderDetailsModal] = useState(false);

    const handleChangeStatus = (event, orderId) => {
        const newStatus = event.target.value;

        // Assuming you have a function to update the status of an order
        // You should replace this with your actual logic for updating the order status
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
    return (
        <div className="content-wrapper">
            <div className="content-header">
                <Breadcrumb page={'Orders'} />

                <div className="container d-flex gap-4 flex-wrap justify-content-center my-3">
                    <button type="button" className="btn btn-secondary">
                        All
                    </button>
                    <button type="button" className="btn btn-secondary">
                        Pending
                    </button>
                    <button type="button" className="btn btn-secondary">
                        Ready to ship
                    </button>
                    <button type="button" className="btn btn-secondary">
                        Shipped
                    </button>
                    <button type="button" className="btn btn-secondary">
                        Delivered
                    </button>
                    <button type="button" className="btn btn-secondary">
                        Returned
                    </button>
                    <button type="button" className="btn btn-secondary">
                        Refund
                    </button>
                </div>

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
                        <select className="form-select" id="actionDropdown" onChange={handleDropdownChange}>
                            <option value="Edit">Edit</option>
                            <option value="Delete">Delete</option>
                        </select>
                        <button className="border btn rounded" disabled={selectedIds.length === 0} onClick={handleApplyClick}>Apply</button>
                    </div>
                </div>
                <div className='table-responsive'>
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