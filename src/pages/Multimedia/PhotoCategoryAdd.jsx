import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Multimedia from './Multimedia';
import BackBtn from '../Download/BackBtn';

const PhotoCategoryAdd = () => {
    const [showNewCategoryModal, setShowNewCategoryModal] = useState(false);
    const [showPhotoUploadModal, setShowPhotoUploadModal] = useState(false);
    const [newCategoryFormData, setNewCategoryFormData] = useState({
        categoryName: '',
        categorySlug: '',
    });
    const [photoUploadFormData, setPhotoUploadFormData] = useState({
        selectedCategory: '',
        photoTitle: '',
        uploadFile: null,
    });

    const handleNewCategoryModal = () => setShowNewCategoryModal(!showNewCategoryModal);
    const handlePhotoUploadModal = () => setShowPhotoUploadModal(!showPhotoUploadModal);

    const handleNewCategorySave = () => {
        const slug = newCategoryFormData.categorySlug.toLowerCase().replace(/[^\w-]+/g, '-');
        console.log(newCategoryFormData.categoryName, slug);
        alert(JSON.stringify({ categoryName: newCategoryFormData.categoryName, slug: slug }));
        handleNewCategoryModal();
    };

    const handlePhotoUploadSave = () => {
        // Perform any necessary actions with photoUploadFormData
        console.log('Photo Upload Form Data:', photoUploadFormData);
        handlePhotoUploadModal(); // Close the modal
    };

    return (
        <>
            <Multimedia>
                <div className='align-items-center d-flex gap-3'>
                    <BackBtn slug={'multimedia'} />
                    <div className='mb-2'>
                        <Button variant="primary" onClick={handleNewCategoryModal}>
                            <i className="fa-solid fa-circle-plus"></i>  New Category
                        </Button>{' '}
                        <Button variant="success" onClick={handlePhotoUploadModal}>
                            <i className="fa-solid fa-circle-plus"></i>  Photo Upload
                        </Button>
                    </div>
                </div>
            </Multimedia>

            {/* New Category Modal */}
            <Modal show={showNewCategoryModal} onHide={handleNewCategoryModal}>
                <Modal.Header closeButton>
                    <Modal.Title>New Category Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Form fields for New Category */}
                    <label htmlFor="categoryName">Category Name:</label>
                    <input
                        class="form-control"
                        type="text"
                        id="categoryName"
                        value={newCategoryFormData.categoryName}
                        onChange={(e) => setNewCategoryFormData({ ...newCategoryFormData, categoryName: e.target.value })}
                    />
                    <br />
                    <label htmlFor="categorySlug">Category Slug:</label>
                    <input
                        class="form-control"
                        type="text"
                        id="categorySlug"
                        placeholder='Accept english letters and numbers only'
                        value={newCategoryFormData.categorySlug}
                        onChange={(e) => {
                            const inputValue = e.target.value;
                            const englishLettersAndNumbers = /^[a-zA-Z0-9\s]+$/;;

                            if (englishLettersAndNumbers.test(inputValue) || inputValue === "") {
                                // If the input is valid or empty, update the state
                                setNewCategoryFormData({ ...newCategoryFormData, categorySlug: inputValue });
                            }


                        }}
                    />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleNewCategoryModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleNewCategorySave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Photo Upload Modal */}
            <Modal show={showPhotoUploadModal} onHide={handlePhotoUploadModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Photo Upload Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Form fields for Photo Upload */}
                    <label htmlFor="selectedCategory">Select Category:</label>
                    <select
                        class="form-select"
                        id="selectedCategory"
                        value={photoUploadFormData.selectedCategory}
                        onChange={(e) => setPhotoUploadFormData({ ...photoUploadFormData, selectedCategory: e.target.value })}
                    >
                        {/* Populate options dynamically based on available categories */}
                        <option value="category1">Category 1</option>
                        <option value="category2">Category 2</option>
                        {/* Add more options as needed */}
                    </select>
                    <br />
                    <label htmlFor="photoTitle">Photo Title:</label>
                    <input
                        type="text"
                        id="photoTitle"
                        class="form-control"
                        value={photoUploadFormData.photoTitle}
                        onChange={(e) => setPhotoUploadFormData({ ...photoUploadFormData, photoTitle: e.target.value })}
                    />
                    <br />
                    <label htmlFor="uploadFile">Upload File:</label>
                    <input
                        class="form-control"
                        type="file"
                        id="uploadFile"
                        onChange={(e) => setPhotoUploadFormData({ ...photoUploadFormData, uploadFile: e.target.files[0] })}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handlePhotoUploadModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handlePhotoUploadSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default PhotoCategoryAdd;
