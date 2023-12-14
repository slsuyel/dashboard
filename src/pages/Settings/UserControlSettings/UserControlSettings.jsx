import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import addIcon from '../../../assets/icons/png/+Add.png';
import { useTable, useSortBy, usePagination } from 'react-table';
import { Link } from "react-router-dom";

const data = [
    { id: 1, name: 'Md. Shahidul Islam', designation: 'Editor', email: 'shahidul@gmail.com', contact: '01918171652', role: 'Admin', access: '30 days', isChecked: false },
    { id: 2, name: 'Hasanur Rahman', designation: 'Publisher', email: 'hrahman@gmail.com', contact: '01918171652', role: 'Publicity', access: '30 days', isChecked: false },
    { id: 3, name: 'Mehedi Hasan', designation: 'Publisher', email: 'hasanmeh@gmail.com', contact: '01918171652', role: 'Publicity', access: '30 days', isChecked: false },
    { id: 4, name: 'Zahid', designation: 'Publisher', email: 'zahid20349@gmail.com', contact: '01918171652', role: 'Publicity', access: '30 days', isChecked: false },
];

const UserControlSettings = () => {
    // State variables
    const [selectedOption, setSelectedOption] = useState('Edit');
    const [selectedIds, setSelectedIds] = useState([]);
    const [show, setShow] = useState(false);
    const [add, setAdd] = useState(false);

    // Event handlers
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCheckboxChange = (id) => {
        const updatedIds = [...selectedIds];
        const index = updatedIds.indexOf(id);
        if (index === -1) {
            updatedIds.push(id);
        } else {
            updatedIds.splice(index, 1);
        }
        setSelectedIds(updatedIds);
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
                    // Log the selected IDs for editing
                    console.log('Edit IDs:', selectedIds);
                    handleShow();
                } else if (selectedOption === 'Delete' && selectedIds.length > 0) {
                    // Log the selected IDs for deletion
                    console.log('Delete IDs:', selectedIds);
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


    const columns = React.useMemo(
        () => [
            { Header: 'ID', accessor: 'id' },
            { Header: 'Name', accessor: 'name', sortType: 'basic' },
            { Header: 'Designation', accessor: 'designation', sortType: 'basic' },
            { Header: 'Email', accessor: 'email', sortType: 'basic' },
            { Header: 'Contact', accessor: 'contact', sortType: 'basic' },
            { Header: 'Role', accessor: 'role', sortType: 'basic' },
            {
                Header: 'Checkbox',
                accessor: 'isChecked',
                Cell: ({ row }) => (
                    <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange(row.original.id)}
                        checked={selectedIds.includes(row.original.id)}
                    />
                ),
            },
        ],
        [selectedIds]
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        state: { pageIndex, pageSize },
        gotoPage,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
    } = useTable(
        {
            columns,
            data,
        },
        useSortBy,
        usePagination
    );


    return (

        <div className='bg-white mt-3 px-2'>
            <div>
                <Link to='user-control'>  <img src={addIcon} alt="" className=" m-2" width={50} /></Link>
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
                <table {...getTableProps()} className="table table-striped">
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())} className="text-nowrap">
                                        {column.render('Header')}
                                        <span className="ms-2">
                                            {column.isSorted ? (column.isSortedDesc ? <i className="fas fa-sort-down"></i> : <i className="fas fa-sort-up"></i>) : <i className="fas fa-sort"></i>}
                                        </span>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map(row => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => (
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    ))}
                                </tr>
                            );
                        })}
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

    );
};

export default UserControlSettings;
