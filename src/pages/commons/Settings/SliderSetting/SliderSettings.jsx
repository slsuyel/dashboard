import { Button, Modal, Form } from "react-bootstrap";
import addIcon from '../../../../assets/icons/png/+Add.png'
import Swal from "sweetalert2";
import { useState } from "react";
import AddNewSlider from "./AddNewSlider";

const data = [
    { id: 1, Title: 'Package 1', image: 'https://dummyimage.com/150x150', isChecked: false },
    { id: 2, Title: 'Package 2', image: 'https://dummyimage.com/150x150', isChecked: false },
    { id: 3, Title: 'Package 3', image: 'https://dummyimage.com/150x150', isChecked: false },
];

const SliderSetting = () => {
    const [selectedOption, setSelectedOption] = useState('Edit');
    const [checkedId, setCheckedId] = useState(null);
    const [show, setShow] = useState(false);
    const [add, setAdd] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        image: null,
    });

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
        setAdd(true);
    };

    return (
        <>
            {add ? (
                <AddNewSlider />
            ) : (
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

                    <div className=' table-responsive'>
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th className='text-nowrap'>#</th>
                                    <th className='text-nowrap'>Title</th>
                                    <th className='text-nowrap'>Image</th>
                                    <th className='text-nowrap'>Checkbox</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(item => (
                                    <tr key={item.id}>
                                        <td className='text-nowrap'>{item.id}</td>
                                        <td className='text-nowrap'>{item.Title}</td>
                                        <td className='text-nowrap'>
                                            <img src={item.image} alt="" width={80} />
                                        </td>
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
            )}
        </>
    );
};

export default SliderSetting;
