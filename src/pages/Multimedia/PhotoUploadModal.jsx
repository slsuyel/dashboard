import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const PhotoUploadModal = ({ show, handleClose, activeTab }) => {
    const [photoFormData, setPhotoFormData] = useState({
        selectedCategory: '',
        photoTitle: '',
        videoUrl: '',
        uploadFile: null,
    });

    const handleInputChange = (field, value) => {
        setPhotoFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleSave = () => {
        // Replace the console.log with your save logic
        console.log('Saving photo data:', photoFormData);

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
                <Modal.Title> {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Upload </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="selectedCategory">Select Category:</label>
                    <select
                        className="form-select"
                        id="selectedCategory"
                        value={photoFormData.selectedCategory}
                        onChange={(e) => handleInputChange('selectedCategory', e.target.value)}
                    >

                        <option value="category1">Category 1</option>
                        <option value="category2">Category 2</option>
                    </select>
                    <br />
                    <label htmlFor="photoTitle"> {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Title:</label>
                    <input
                        type="text"
                        id="photoTitle"
                        className="form-control"
                        value={photoFormData.photoTitle}
                        onChange={(e) => handleInputChange('photoTitle', e.target.value)}
                    />
                    <br />
                    {
                        activeTab == 'video' ? <>
                            <label htmlFor="uploadFile"> Video File:</label>
                            <input
                                type="text"
                                id="videoUrl"
                                className="form-control"
                                value={photoFormData.videoUrl}
                                onChange={(e) => handleInputChange('videoUrl', e.target.value)}
                            />

                        </> : <>
                            <label htmlFor="uploadFile"> {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} File:</label>
                            <input
                                className="form-control"
                                type="file"
                                id="uploadFile"
                                onChange={(e) => handleInputChange('uploadFile', e.target.files[0])}
                            /></>
                    }
                    <br />
                    <div className=' text-center'> <Button className='btn btn-secondary active-btn' type="submit">
                        Save Changes
                    </Button></div>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default PhotoUploadModal;
