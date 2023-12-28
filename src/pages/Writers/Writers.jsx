import React, { useState } from 'react';
import SortIcon from '../../Utilites/SortIcon';
import Breadcrumb from '../../Utilites/Breadcrumb';
import addIcon from '../../assets/icons/png/+Add.png';
import Modal from 'react-bootstrap/Modal';

import Swal from 'sweetalert2';
import { Button } from 'react-bootstrap';
const data = [
    {
        "id": 1,

        "writersNameEn": "John Doe",
        "writersNameBn": "জন ডো",
        "contact_no": "+1 (555) 123-4567",
        "image": "https://picsum.photos/500/300?random=1",
        'writerType': 'কবি',
        "checkbox": false
    },
    {
        "id": 2,

        "writersNameEn": "Jane Smith",
        "writersNameBn": "জেন স্মিথ",
        "contact_no": "+44 20 7946 0958",
        "image": "https://picsum.photos/500/300?random=12",
        'writerType': 'গল্পকার',
        "checkbox": false
    },
    {
        "id": 3,

        "writersNameEn": "Ahmed Khan",
        "writersNameBn": "আহমেদ খান",
        "contact_no": "+91 98765 43210",
        "image": "https://picsum.photos/500/300?random=14",
        'writerType': 'সাহিত্যিক',
        "checkbox": false
    },
    {
        "id": 4,

        "writersNameEn": "Maria Rodriguez",
        "writersNameBn": "মারিয়া রড্রিগেজ",
        "contact_no": "+55 11 98765-4321",
        "image": "https://picsum.photos/500/300?random=15",
        'writerType': 'প্রাবন্ধিক',
        "checkbox": false
    }
]

const Writers = () => {
    const [selectedOption, setSelectedOption] = useState('Edit');
    const [selectedIds, setSelectedIds] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [showAddWritterModal, setShowAddWritterModal] = useState(false);

    const [formData, setFormData] = useState({

        writersNameEnglish: '',
        writersNameBengali: '',
        contactNumber: '',
        writerType: '',
        photo: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);

        // Rest of your form submission logic
    };




    const handleClose = () => setShowAddWritterModal(false);
    const handleShow = () => setShowAddWritterModal(true);


    const handleCheckboxChange = (id) => {
        const updatedIds = [...selectedIds];
        const index = updatedIds.indexOf(id);
        if (index === -1) {
            updatedIds.push(id);
        } else {
            updatedIds.splice(index, 1);
        }
        setSelectedIds(updatedIds);
        setSelectAll(false); // Uncheck "Select All" when any individual checkbox is clicked
    };

    const handleSelectAllChange = () => {
        setSelectAll(!selectAll);
        setSelectedIds(selectAll ? [] : data.map(writer => writer.id));
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

    return (
        <div className="content-wrapper">
            <div className="content-header">

                <Breadcrumb page={'Writers'} />

                <div className='mt-3 '>
                    <img src={addIcon} onClick={handleShow} alt="" className="btn m-2 p-1" width={50} />
                </div>

                <div className='d-flex justify-content-between mx-auto px-1 w-100'>
                    <div className="align-items-center d-flex gap-1">
                        <label htmlFor="showDropdown" className="form-label w-50 mb-0 mb-0 text-secondary">Show:</label>
                        <select className="form-select" id="showDropdown">
                            <option>10</option>
                            <option>20</option>
                            <option>30</option>
                        </select>
                    </div>

                    <div className="align-items-center d-flex gap-1">
                        <label htmlFor="actionDropdown" className="form-label w-50 mb-0 mb-0 text-secondary">Action:</label>
                        <select className="form-select" id="actionDropdown" onChange={handleDropdownChange}>
                            <option value="Edit">Edit</option>
                            <option value="Delete">Delete</option>
                        </select>
                        <button className="border btn rounded" disabled={selectedIds.length === 0} onClick={handleApplyClick}>Apply</button>
                    </div>
                </div>

                <div className='table-responsive'>




                    <table className="table">
                        <thead>
                            <tr className='text-center'>
                                <th className='text-nowrap text-secondary'>ID  <SortIcon /></th>

                                <th className='text-nowrap text-secondary'>Writers Name (English) <SortIcon /></th>
                                <th className='text-nowrap text-secondary'>Writers Name (Bengali) <SortIcon /></th>
                                <th className='text-nowrap text-secondary'>Type <SortIcon /></th>
                                <th className='text-nowrap text-secondary'>Contact Number <SortIcon /></th>
                                <th className='text-nowrap text-secondary'>Photo <SortIcon /></th>
                                <th className='text-nowrap text-secondary'>
                                    <input
                                        type="checkbox"
                                        checked={selectAll}
                                        onChange={handleSelectAllChange}
                                    />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(writer => (
                                <tr className='text-center' key={writer.id}>
                                    <td>{writer.id}</td>

                                    <td>{writer.writersNameEn}</td>
                                    <td>{writer.writersNameBn}</td>
                                    <td>{writer.writerType}</td>
                                    <td>{writer.contact_no}</td>
                                    <td><img src={writer.image} alt={`Photo of ${writer.name}`} style={{ width: '50px', height: '50px' }} /></td>
                                    <td>
                                        {/* Individual checkbox */}
                                        <input
                                            type="checkbox"
                                            checked={selectedIds.includes(writer.id)}
                                            onChange={() => handleCheckboxChange(writer.id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>


                    {/*  */}

                    <Modal show={showAddWritterModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Writer</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={handleSubmit} id="yourFormId">


                                <div className="align-items-center d-flex gap-1 justify-content-around mb-3">
                                    <label htmlFor="writersNameEnglish" className="form-label w-50 mb-0">
                                        Writers Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="writersNameEnglish"
                                        name="writersNameEnglish"
                                        value={formData.writersNameEnglish}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="align-items-center d-flex gap-1 justify-content-around mb-3">
                                    <label htmlFor="writersNameBengali" className="form-label w-50 mb-0">
                                        লেখকের নাম
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="writersNameBengali"
                                        name="writersNameBengali"
                                        value={formData.writersNameBengali}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="align-items-center d-flex gap-1 justify-content-around mb-3">
                                    <label htmlFor="writerType" className="form-label w-50 mb-0">
                                        Writer Type
                                    </label>
                                    <select
                                        className="form-select"
                                        id="writerType"
                                        name="writerType"
                                        value={formData.writerType}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Writer Type</option>
                                        <option value="কবি">কবি</option>
                                        <option value="গল্পকার">গল্পকার</option>
                                        <option value="প্রাবন্ধিক">প্রাবন্ধিক</option>
                                        <option value="সাহিত্যিক">সাহিত্যিক</option>
                                        <option value="অন্যান্য">অন্যান্য</option>
                                    </select>
                                </div>

                                <div className="align-items-center d-flex gap-1 justify-content-around mb-3">
                                    <label htmlFor="contactNumber" className="form-label w-50 mb-0">
                                        Contact Number
                                    </label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="contactNumber"
                                        name="contactNumber"
                                        value={formData.contactNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="align-items-center d-flex gap-1 justify-content-around mb-3">
                                    <label htmlFor="photo" className="form-label w-50 mb-0">
                                        Photo
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="photo"
                                        name="photo"
                                        accept="image/*"
                                        onChange={handleChange}
                                    />
                                </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={handleSubmit}>
                                Save
                            </Button>

                        </Modal.Footer>
                    </Modal>





                    {/*  */}
                </div>
            </div>
        </div >
    );
};

export default Writers;
