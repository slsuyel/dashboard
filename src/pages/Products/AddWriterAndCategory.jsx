import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const AddWriterAndCategory = ({ show, setShow, addItem }) => {
    const [inputValue, setInputValue] = useState('');

    const handleClose = () => {
        setShow(false);

    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSaveChanges = () => {
        console.log('Input value:', inputValue);
        setInputValue('')
        handleClose();

    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New {addItem}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <label htmlFor="">{addItem}</label>
                <input
                    type="text"
                    className="form-control" // Bootstrap class for styling
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSaveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddWriterAndCategory;
