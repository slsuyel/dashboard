import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const NewCategoryModal = ({ show, handleClose }) => {
    const [categoryFormData, setCategoryFormData] = useState({
        categoryName: '',
        categorySlug: '',
    });

    const handleInputChange = (field, value) => {
        setCategoryFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleSave = () => {
        // Replace the console.log with your save logic
        console.log('Saving category data:', categoryFormData);

        // Optionally, you can perform additional logic here before closing the modal
        handleClose();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSave();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>New Category </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="categoryName">Category Name:</label>
                    <input
                        className="form-control"
                        type="text"
                        id="categoryName"
                        value={categoryFormData.categoryName}
                        onChange={(e) => handleInputChange('categoryName', e.target.value)}
                    />

                    <label htmlFor="categorySlug">Category Slug:</label>
                    <input
                        className="form-control"
                        type="text"
                        id="categorySlug"
                        value={categoryFormData.categorySlug}
                        onChange={(e) => handleInputChange('categorySlug', e.target.value)}
                    />
                    <br />
                    <div className="text-center">
                        <Button className='btn btn-secondary active-btn' type="submit">
                            Save Changes
                        </Button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default NewCategoryModal;
