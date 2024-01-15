import React, { useState } from 'react';
import Breadcrumb from '../../Utilites/Breadcrumb';
import { Button, Modal } from 'react-bootstrap';
const book_categories = [
    "একাডেমিক বই",
    "সৃজনশীল বই",
    "নার্সারী",
    "মাল্টিমিডিয়া",
    "শিশুতোষ",
    "উপন্যাস",
    "শিক্ষা বিষয়ক",
    "শিল্প ও সংস্কৃতি",
    "কেজি শ্রেণী",
    "ঐতিহ্য",
    "শিশু বিকাশ",
    "একাডেমিক বই"
]

const FeaturedCategory = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="content-wrapper">
            <div className="content-header">
                <Breadcrumb page={'Featured Category'} />
                <div className='d-flex gap-2 ms-5 my-4'>
                    <button className="border btn btn-sm mb-0 text-nowrap text-white" style={{ background: "#48b7d7", width: '110px' }}>বই সর্বোত্তম উপহার</button>
                    <button className="border btn btn-sm mb-0 text-nowrap text-white" style={{ background: "#48b7d7", width: '110px' }}>পুথিপ্রকাশের বই</button>
                </div>
                <hr />
                <div className='my-4'>
                    <button className="border fw-bold btn btn-sm btn-warning mb-0 ms-5 text-nowrap text-dark" style={{ width: '110px' }} onClick={openModal}>
                        Add or edit
                    </button>
                </div>

                <div className='table-responsive'>
                    <table className="table table-striped">
                        <thead>
                            <tr className='text-start'>
                                <th>#</th>
                                <th>Selected Category Name</th>
                            </tr>
                        </thead>

                        <tbody>
                            {book_categories.map((ct, index) => (
                                <tr key={index} className='text-start'>
                                    <td>{index + 1}</td>
                                    <td>{ct}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <Modal show={isModalOpen} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add or Edit Category</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Add/Edit form or content */}
                        <h2>Your  Content Goes Here</h2>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>
                            Close
                        </Button>
                        {/* Additional buttons if needed */}
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default FeaturedCategory;