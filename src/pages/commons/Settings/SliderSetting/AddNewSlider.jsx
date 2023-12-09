import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddNewSlider = () => {
    const [formData, setFormData] = useState({
        title: '',
        image: null, // Change to null for file input
    });

    const handleChange = (event) => {
        const { id, value, type } = event.target;

        // Handle file input separately
        const newValue = type === 'file' ? event.target.files[0] : value;

        setFormData((prevData) => ({
            ...prevData,
            [id]: newValue,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { title, image } = formData;

        // Add your logic to handle the form data (e.g., save to database)

        console.log({ title, image });

        Swal.fire({
            title: 'Ok!',
            text: 'Your file has been Saved.',
            icon: 'success',
        });
    };

    return (
        <div className="bg-secondary-subtle mx-auto my-3 py-3 col-md-9">
            <Form onSubmit={handleSubmit} className="mx-auto">
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="image">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="file" // Change to file input
                        onChange={handleChange}
                    />
                </Form.Group>

                <div className="text-center">
                    <Button className="bg-nil border-0 mt-2 py-1 text-white w-50" type="submit">
                        Save
                    </Button>
                </div>
            </Form>

            <div className="text-center">
                <Link to="/dashboard/" className="bg-danger d-block mx-auto my-2 py-1 rounded text-decoration-none text-white w-50">
                    Cancel or Back to Home
                </Link>
            </div>
        </div>
    );
};

export default AddNewSlider;
