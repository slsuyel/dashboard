import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import defultSlider from '../../../assets/images/multiple-image-slider-wordpress.png';

const AddNewSlider = () => {
    const [formData, setFormData] = useState({
        title: '',
        image: null,
    });

    const handleChange = (event) => {
        const { id, value, type } = event.target;
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
        <div className="content-wrapper">
            <div className="content-header">
                <div className="bg-secondary-subtle mx-auto my-3 py-3 col-md-9">
                    <Form onSubmit={handleSubmit} className="mx-auto row">
                        <div className="col-md-6 mx-auto">
                            <Form.Group controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter title"
                                    value={formData.title}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <br />
                            <Form.Group controlId="image">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" onChange={handleChange} />
                            </Form.Group>
                        </div>
                        <div className="col-md-6 mx-auto">
                            <img
                                src={formData.image ? URL.createObjectURL(formData.image) : defultSlider}
                                alt=""
                                width={300}
                                height={200}
                            />
                        </div>
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
                </div>
            </div>
        </div>
    );
};

export default AddNewSlider;
