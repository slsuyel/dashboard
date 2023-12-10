import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddNewCharge = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const deliveredToValue = event.target.elements.deliveredTo.value;
        const weightFromValue = event.target.elements.weightFrom.value;
        const weightToValue = event.target.elements.weightTo.value;
        const chargeValue = event.target.elements.charge.value;
        console.log({ deliveredToValue, weightFromValue, weightToValue, chargeValue });

        Swal.fire({
            title: "Ok!",
            text: "Your file has been Saved.",
            icon: "success"
        });

    };


    return (

        <div className="content-wrapper">
            <div className="content-header">

                <div className='bg-secondary-subtle mx-auto my-3 py-3 col-md-9'>

                    <Form onSubmit={handleSubmit} className=' mx-auto'>

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


                        <div className='align-items-center d-flex gap-3 my-2'>
                            <div>
                                <Button className='border-0 btn btn-primary px-3 py-1 rounded-0 text-white' type="submit">
                                    Save
                                </Button>
                            </div>

                            <div>
                                <button className='btn-danger border-0 py-1 text-white'>
                                    <Link to='/dashboard/settings' className='p-1 text-decoration-none text-white'>
                                        Cancel
                                    </Link>
                                </button>
                            </div>
                        </div>


                    </Form>

                </div >
            </div >
        </div >
    );
};

export default AddNewCharge;