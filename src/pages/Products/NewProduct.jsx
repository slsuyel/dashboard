import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../Utilites/Breadcrumb';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const NewProduct = () => {
    const [productName, setProductName] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState(false);
    const [discountType, setDiscountType] = useState('');
    const [category, setCategory] = useState('');
    const [writers, setWriters] = useState('');
    const [coverBy, setCoverBy] = useState('');
    const [totalPages, setTotalPages] = useState('');
    const [stock, setStock] = useState('');
    const [weight, setWeight] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [isbn, setIsbn] = useState('');
    const [featuresImage, setFeaturesImage] = useState(null);

    useEffect(() => {
        const draftData = JSON.parse(localStorage.getItem('draftData'));

        if (draftData) {
            setProductName(draftData.productName || '');
            setShortDescription(draftData.shortDescription || '');
            setContent(draftData.content || '');
            setPrice(draftData.price || '');
            setDiscount(draftData.discount || false);
            setDiscountType(draftData.discountType || '');
            setCategory(draftData.category || '');
            setWriters(draftData.writers || '');
            setCoverBy(draftData.coverBy || '');
            setTotalPages(draftData.totalPages || '');
            setStock(draftData.stock || '');
            setWeight(draftData.weight || '');
            setPublishedDate(draftData.publishedDate || '');
            setIsbn(draftData.isbn || '');
            setFeaturesImage(draftData.featuresImage || null);
        }
    }, []);

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'font': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            ['link', 'image'],
            [{ 'color': [] }, { 'background': [] }], [{ 'align': [] }],
            ['clean']
        ],
    };


    const handleDraftNow = () => {
        // Save form data to localStorage
        const draftData = {
            productName,
            shortDescription,
            content,
            price,
            discount,
            discountType,
            category,
            writers,
            coverBy,
            totalPages,
            stock,
            weight,
            publishedDate,
            isbn,
            featuresImage,
        };

        localStorage.setItem('draftData', JSON.stringify(draftData));
        alert('Draft saved successfully!');
    };

    const handlePublishNow = () => {
        console.log('Product Name:', productName);
        console.log('Short Description:', shortDescription);
        console.log('Details:', content);
        console.log('Price:', price);
        console.log('Discount:', discount);
        console.log('Discount Type:', discountType);
        console.log('Category:', category);
        console.log('Writers:', writers);
        console.log('Cover By:', coverBy);
        console.log('Total Pages:', totalPages);
        console.log('Stock:', stock);
        console.log('Weight:', weight);
        console.log('Published Date:', publishedDate);
        console.log('ISBN:', isbn);
        console.log('featuresImage:', featuresImage);

    };


    return (
        <div className="content-wrapper">
            <div className="content-header">
                <Breadcrumb page={'New Product'} />
                <div className='row w-100 mx-auto'>
                    <div className='col-md-7'>
                        <form className="form">
                            <div className="form-group">
                                <label style={{ color: '#48b7d7' }} htmlFor="productName">Products Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="productName"
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label style={{ color: '#48b7d7' }} htmlFor="shortDescription">Short Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="shortDescription"
                                    value={shortDescription}
                                    onChange={(e) => setShortDescription(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label style={{ color: '#48b7d7' }} htmlFor="details">Details</label>
                                <ReactQuill theme="snow" className='form-control'
                                    style={{ height: '260px', paddingBottom: '61px' }}
                                    value={content} onChange={setContent} modules={modules} />
                            </div>
                        </form>
                    </div>

                    <div className='col-md-5'>
                        <div className='d-flex my-2 gap-4 justify-content-center my-2'>
                            <button onClick={handleDraftNow} className='border-white btn btn-warning fs-5 fw-bold text-white'>Draft Now</button>
                            <button className='border-white btn btn-success fs-5 fw-bold text-white' onClick={handlePublishNow}>
                                Publish Now
                            </button>
                        </div>

                        <div className='align-items-center d-flex my-2'>
                            <label className='mb-0 w-50' style={{ color: '#48b7d7' }} htmlFor="">Price:</label>
                            <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className="align-items-center d-flex my-2">
                            <label className='mb-0 w-50' style={{ color: '#48b7d7' }} htmlFor="">Discount:</label>
                            <label className="dis-switch">
                                <input type="checkbox" checked={discount} onChange={(e) => setDiscount(e.target.checked)} />
                                <span className="dis-slider dis-round"></span>
                            </label>
                        </div>

                        <div className='align-items-center d-flex my-2'>
                            <label className='mb-0 w-50' style={{ color: '#48b7d7' }} htmlFor="">Discount: Type</label>
                            <select className="form-select" value={discountType} onChange={(e) => setDiscountType(e.target.value)}>
                                <option value="">Flat Discount:</option>
                                <option value="">Percentage:</option>
                            </select>
                        </div>

                        <div className='align-items-center d-flex my-2'>
                            <label className='mb-0 w-50' style={{ color: '#48b7d7' }} htmlFor="">Category:</label>
                            <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="">Academic Book</option>
                                <option value="">Creative Book</option>
                                <option value="">Others</option>
                            </select>
                        </div>
                        <div className='align-items-center d-flex my-2'>
                            <label className='mb-0 w-50' style={{ color: '#48b7d7' }} htmlFor="">Writers:</label>
                            <select className="form-select" value={writers} onChange={(e) => setWriters(e.target.value)}>
                                <option value="">Writers 1</option>
                                <option value="">Writers 2</option>
                                <option value="">Writers 3</option>
                            </select>
                        </div>

                        <div className='align-items-center d-flex my-2'>
                            <label className='mb-0 w-50' style={{ color: '#48b7d7' }} htmlFor="">Cover by:</label>
                            <input type="text" className="form-control" value={coverBy} onChange={(e) => setCoverBy(e.target.value)} />
                        </div>


                        <div className='align-items-center d-flex my-2'>
                            <label className='mb-0 w-50' style={{ color: '#48b7d7' }} htmlFor="">Total Page:</label>
                            <input type="text" className="form-control" value={totalPages} onChange={(e) => setTotalPages(e.target.value)} />
                        </div>

                        <div className='align-items-center d-flex my-2'>
                            <div className='align-items-center d-flex my-2'>
                                <label className='mb-0' style={{ color: '#48b7d7' }} htmlFor="">Stock:</label>
                                <input type="number" className="form-control mx-4" value={stock} onChange={(e) => setStock(e.target.value)} />
                            </div>
                            <div className='align-items-center d-flex my-2'>
                                <label className='mb-0 ' style={{ color: '#48b7d7' }} htmlFor="">Weight:</label>
                                <input type="number" className="form-control mx-4" value={weight} onChange={(e) => setWeight(e.target.value)} />
                            </div>
                        </div>


                        <div className='align-items-center d-flex my-2'>
                            <label className='mb-0 w-50' style={{ color: '#48b7d7' }} htmlFor="">Published Date:</label>
                            <input type="date" className="form-control" value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)} />
                        </div>

                        <div className='align-items-center d-flex my-2'>
                            <label className='mb-0 w-50' style={{ color: '#48b7d7' }} htmlFor="">ISBN:</label>
                            <input type="text" className="form-control" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
                        </div>

                        <div className='align-items-center d-flex my-2'>
                            <label className='mb-0 w-50' style={{ color: '#48b7d7' }} htmlFor="">Features Image:</label>
                            <input type="file" className="form-control" onChange={(e) => setFeaturesImage(e.target.files[0])} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewProduct;
