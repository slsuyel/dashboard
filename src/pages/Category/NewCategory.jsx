import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewCategory = () => {
    const [formData, setFormData] = useState({
        categoryName: '',
        categorySlug: '',
        categoryType: '',
        category: '',
        about: '',
        image: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div className="content-wrapper">
            <div className="content-header">
                <h2 className='fs-4 m-2'>Add New Category</h2>
            </div>
            <div className="content-body row w-100 mx-auto ">
                <form onSubmit={handleSubmit} className='row col-10 mx-auto'>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="categoryName" className="form-label text-66 ">
                            Category Name:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="categoryName"
                            name="categoryName"
                            value={formData.categoryName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="categorySlug" className="form-label text-66 ">
                            Category Slug:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="categorySlug"
                            name="categorySlug"
                            value={formData.categorySlug}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="categoryType" className="form-label text-66 ">
                            Category Type:
                        </label>
                        <select
                            className="form-select"
                            id="categoryType"
                            name="categoryType"
                            value={formData.categoryType}
                            onChange={handleChange}
                        >
                            <option value="" disabled defaultValue>
                                Select a category
                            </option>
                            <option value="Primary">Primary</option>
                            <option value="Sub-Category">Sub-Category</option>
                            <option value="Child Category">Child Category</option>
                        </select>
                    </div>
                    {formData.categoryType !== 'Primary' && (
                        <div className="mb-3 col-md-6">
                            <label htmlFor="category" className="form-label text-66 ">
                                Category:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                            />
                        </div>
                    )}
                    <div className="mb-3 col-md-6">
                        <label htmlFor="about" className="form-label text-66 ">
                            About:
                        </label>
                        <textarea
                            className="form-control"
                            id="about"
                            name="about"
                            value={formData.about}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="file" className="form-label text-66 ">
                            Upload Image:
                        </label>
                        <input
                            type="file"
                            className="form-control"
                            id="file"
                            name="file"
                            accept="image/*"
                            onChange={handleChange}
                        />
                    </div>

                    <div className='align-items-center d-flex gap-3 my-2'>
                        <div>
                            <Button className='border-0 btn btn-success fw-bold px-3 py-1' type="submit">
                                Save
                            </Button>
                        </div>
                        <div>
                            <button className='rounded btn-danger border-0 py-1 text-white'>
                                <Link to='/dashboard/category' className='p-1 text-decoration-none text-white'>
                                    Cancel
                                </Link>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewCategory;
