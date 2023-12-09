import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import addIcon from '../../../../assets/icons/png/+Add.png';
import AddNewUser from "./AddNewUser";


const data = [
    { id: 1, name: 'Md. Shahidul Islam', designation: 'Editor', email: 'shahidul@gmail.com', contact: '01918171652', role: 'Admin', access: '30 days', isChecked: false },
    { id: 2, name: 'Hasanur Rahman', designation: 'Publisher', email: 'hrahman@gmail.com', contact: '01918171652', role: 'Publicity', access: '30 days', isChecked: false },
    { id: 3, name: 'Mehedi Hasan', designation: 'Publisher', email: 'hasanmeh@gmail.com', contact: '01918171652', role: 'Publicity', access: '30 days', isChecked: false },
    { id: 4, name: 'Zahid', designation: 'Publisher', email: 'zahid20349@gmail.com', contact: '01918171652', role: 'Publicity', access: '30 days', isChecked: false },
];

const UserControlSettings = () => {
    // State variables
    const [selectedOption, setSelectedOption] = useState('Edit');
    const [checkedId, setCheckedId] = useState(null);
    const [show, setShow] = useState(false);
    const [add, setAdd] = useState(false);

    // Event handlers
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCheckboxChange = (id) => {
        setCheckedId(id);
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
                if (selectedOption === 'Edit') {
                    handleShow();
                } else {
                    // Handle delete logic here
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

    const handleSubmit = (event) => {
        event.preventDefault();
        const nameValue = event.target.elements.name.value;
        const designationValue = event.target.elements.designation.value;
        const emailValue = event.target.elements.email.value;
        const contactValue = event.target.elements.contact.value;
        const roleValue = event.target.elements.role.value;
        const accessValue = event.target.elements.access.value;

        console.log({ nameValue, designationValue, emailValue, contactValue, roleValue, accessValue });

        handleClose();

        Swal.fire({
            title: "Ok!",
            text: "Your file has been Saved.",
            icon: "success"
        });
    };

    const handleAddItem = () => {
        setAdd(true);
    };

    return (
        <>
            {add ? <AddNewUser /> :
                <div className='bg-white mt-3 px-2'>
                    <div>
                        <img src={addIcon} onClick={handleAddItem} alt="" className="btn m-2" width={70} />
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
                            <button className="border btn rounded" disabled={checkedId == null} onClick={handleApplyClick}>Apply</button>
                        </div>
                    </div>

                    <div className='table-responsive'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className='text-nowrap'>#</th>
                                    <th className='text-nowrap'>Name</th>
                                    <th className='text-nowrap'>Designation</th>
                                    <th className='text-nowrap'>Email</th>
                                    <th className='text-nowrap'>Contact</th>
                                    <th className='text-nowrap'>Role</th>
                                    <th className='text-nowrap'>Access</th>
                                    <th className='text-nowrap'>Checkbox</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(item => (
                                    <tr key={item.id}>
                                        <td className='text-nowrap'>{item.id}</td>
                                        <td className='text-nowrap'>{item.name}</td>
                                        <td className='text-nowrap'>{item.designation}</td>
                                        <td className='text-nowrap'>{item.email}</td>
                                        <td className='text-nowrap'>{item.contact}</td>
                                        <td className='text-nowrap'>{item.role}</td>
                                        <td className='text-nowrap'>{item.access}</td>
                                        <td className='text-nowrap'>
                                            <input
                                                type="checkbox"
                                                onChange={() => handleCheckboxChange(item.id)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Modal show={show} onHide={handleClose} className="w-100 mx-auto">
                            <Modal.Header closeButton>
                                <Modal.Title>Delivery Charge Settings</Modal.Title>
                            </Modal.Header>

                            {/* Form with input fields */}
                            <Form onSubmit={handleSubmit}>
                                <Modal.Body>
                                    <Form.Group controlId="name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name" />
                                    </Form.Group>

                                    <Form.Group controlId="designation">
                                        <Form.Label>Designation</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Designation" />
                                    </Form.Group>

                                    <Form.Group controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Email" />
                                    </Form.Group>

                                    <Form.Group controlId="contact">
                                        <Form.Label>Contact</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Contact" />
                                    </Form.Group>

                                    <Form.Group controlId="role">
                                        <Form.Label>Role</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Role" />
                                    </Form.Group>

                                    <Form.Group controlId="access">
                                        <Form.Label>Access</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Access" />
                                    </Form.Group>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" type="submit">
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Form>
                        </Modal>
                    </div>
                </div>
            }
        </>
    );
};

export default UserControlSettings;
