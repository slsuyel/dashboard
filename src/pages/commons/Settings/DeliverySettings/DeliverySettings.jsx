import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import addIcon from '../../../../assets/icons/png/+Add.png'
import AddNewCharge from "./AddNewCharge";
const data = [
    { id: 1, deliveredTo: 'Recipient 1', weightFrom: 100, weightTo: 200, charge: 50, isChecked: false },
    { id: 2, deliveredTo: 'Recipient 2', weightFrom: 150, weightTo: 250, charge: 70, isChecked: false },
    { id: 3, deliveredTo: 'Recipient 3', weightFrom: 200, weightTo: 300, charge: 90, isChecked: false },
]


const DeliverySettings = () => {
    const [selectedOption, setSelectedOption] = useState('Edit');
    const [checkedId, setCheckedId] = useState(null)

    const [show, setShow] = useState(false);
    const [add, setAdd] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleCheckboxChange = (id) => {
        setCheckedId(id)
    };

    const handleApplyClick = () => {
        // console.log('Selected Option:', selectedOption, checkedId);

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

                if (selectedOption == 'Edit') {
                    handleShow()
                }

                else {
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
        const deliveredToValue = event.target.elements.deliveredTo.value;
        const weightFromValue = event.target.elements.weightFrom.value;
        const weightToValue = event.target.elements.weightTo.value;
        const chargeValue = event.target.elements.charge.value;


        console.log({ deliveredToValue, weightFromValue, weightToValue, chargeValue });

        handleClose();

        Swal.fire({
            title: "Ok!",
            text: "Your file has been Saved.",
            icon: "success"
        });

    };


    const handleAddItem = () => {
        setAdd(true)
    }


    return (

        <>

            {
                add ? <AddNewCharge /> :

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
                                        <th className='text-nowrap'>Delivered to</th>
                                        <th className='text-nowrap'>Weight from (Gram)</th>
                                        <th className='text-nowrap'>Weight to (Gram)</th>
                                        <th className='text-nowrap'>Charge (bdt)</th>
                                        <th className='text-nowrap'>Checkbox</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(item => (
                                        <tr key={item.id}>
                                            <td className='text-nowrap'>{item.id}</td>
                                            <td className='text-nowrap'>{item.deliveredTo}</td>
                                            <td className='text-nowrap'>{item.weightFrom}</td>
                                            <td className='text-nowrap'>{item.weightTo}</td>
                                            <td className='text-nowrap'>{item.charge}</td>
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
                                        <Form.Group controlId="deliveredTo">
                                            <Form.Label>Delivered To</Form.Label>
                                            <Form.Control type="text" placeholder="Enter deliveredTo" />
                                        </Form.Group>

                                        <Form.Group controlId="weightFrom">
                                            <Form.Label>Weight From</Form.Label>
                                            <Form.Control type="text" placeholder="Enter weightFrom" />
                                        </Form.Group>

                                        <Form.Group controlId="weightTo">
                                            <Form.Label>Weight To</Form.Label>
                                            <Form.Control type="text" placeholder="Enter weightTo" />
                                        </Form.Group>

                                        <Form.Group controlId="charge">
                                            <Form.Label>Charge</Form.Label>
                                            <Form.Control type="text" placeholder="Enter charge" />
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

export default DeliverySettings;
