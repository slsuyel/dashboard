import React, { useState } from "react";
import Swal from "sweetalert2";
import { useTable, useSortBy, usePagination } from 'react-table';
import { Button, Modal, Form } from "react-bootstrap";
import addIcon from '../../../assets/icons/png/+Add.png';
import { Link } from "react-router-dom";

const data = [
    { id: 1, Title: 'Package 1', image: 'https://user-images.githubusercontent.com/17277013/88412566-a4134d80-cd8e-11ea-9f03-4e6870b4630a.png', isChecked: false },
    { id: 2, Title: 'Package 2', image: 'https://dummyimage.com/150x150', isChecked: false },
    { id: 3, Title: 'Package 3', image: 'https://dummyimage.com/150x150', isChecked: false },
];


const SliderSetting = () => {
    const [selectedOption, setSelectedOption] = useState('Edit');
    const [selectedIds, setSelectedIds] = useState([]);
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        image: null,
    });

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        handleClose();
    };

    const handleInputChange = (e) => {
        const { id, value, files } = e.target;

        setFormData((prevData) => {
            if (id === 'Image') {
                return {
                    ...prevData,
                    image: files[0],
                };
            } else if (id === 'Title') {
                return {
                    ...prevData,
                    title: value,
                };
            }

            return prevData;
        });
    };

    const handleAddItem = () => {
        console.log('Add new item logic');
    };

    const columns = React.useMemo(
        () => [
            { Header: 'ID', accessor: 'id' },
            { Header: 'Title', accessor: 'Title', sortType: 'basic' },
            {
                Header: 'Image',
                accessor: 'image',
                Cell: ({ cell: { value } }) => (
                    <img src={value} alt="Image" style={{ width: '50px', height: '50px' }} />
                ),
            },
            {
                Header: 'Is Checked',
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
                <Link to='new-sliders'>  <img src={addIcon} alt="" className=" m-2" width={50} /></Link>
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

            <div className='table-responsive '>
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

                    <Form onSubmit={handleSubmit}>
                        <Modal.Body>
                            <Form.Group controlId="Title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="Image">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" onChange={handleInputChange} />
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

export default SliderSetting;
