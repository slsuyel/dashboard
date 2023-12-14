import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddNewUser = () => {
    // State variables to store form input values
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [email, setEmail] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [date, setDate] = useState('');
    const [id, setId] = useState('');
    const [role, setRole] = useState('');
    const [accessDays, setAccessDays] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const currentDate = new Date().toISOString().split('T')[0];
        setDate(currentDate);
        setId('2023123456')
    }, []);


    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            name,
            designation,
            email,
            contactNo,
            date,
            id,
            role,
            accessDays,
            username,
            password,
        });
        resetForm();
    };


    const resetForm = () => {
        setName('');
        setDesignation('');
        setEmail('');
        setContactNo('');
        setDate('');
        setId('');
        setRole('');
        setAccessDays('');
        setUsername('');
        setPassword('');
    };

    return (

        <div className="content-wrapper">
            <div className="content-header">

                <div className=' mx-auto w-100 text-secondary'>
                    <h2>Add New User</h2>
                    <Form onSubmit={handleSubmit} className='row mx-3'>


                        <Form.Group controlId="date" className='col-md-6 mx-auto'>
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="text"
                                value={date}
                                readOnly
                            />
                        </Form.Group>

                        <Form.Group className='col-md-6 mx-auto' controlId="id">
                            <Form.Label>ID</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter ID"
                                value={id}
                                readOnly
                            />
                        </Form.Group>



                        <Form.Group className='col-md-6 mx-auto' controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>



                        <Form.Group className='col-md-6 mx-auto' controlId="designation">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Designation"
                                value={designation}
                                onChange={(e) => setDesignation(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className='col-md-6 mx-auto' controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className='col-md-6 mx-auto' controlId="contactNo">
                            <Form.Label>Contact No.</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Contact No."
                                value={contactNo}
                                onChange={(e) => setContactNo(e.target.value)}
                                required
                            />
                        </Form.Group>




                        <Form.Group className='col-md-6 mx-auto' controlId="role">
                            <Form.Label>Role</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className='col-md-6 mx-auto' controlId="accessDays">
                            <Form.Label>Access Days</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Access Days"
                                value={accessDays}
                                onChange={(e) => setAccessDays(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className='col-md-6 mx-auto' controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className='col-md-6 mx-auto' controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
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


                </div>
            </div>
        </div>
    );
};

export default AddNewUser;
