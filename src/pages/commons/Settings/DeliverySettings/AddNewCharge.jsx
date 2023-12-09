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


                <div className='text-center'>
                    <Button className='bg-nil border-0 mt-2 py-1 text-white w-50' type="submit">
                        Save
                    </Button>
                </div>

            </Form>
            <div className='text-center'>


                <Link to='/dashboard/' className='bg-danger d-block mx-auto my-2 py-1 rounded text-decoration-none text-white w-50'>Cancel or Back to Home </Link>


            </div>
        </div >
    );
};

export default AddNewCharge;