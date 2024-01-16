import React, { useState } from 'react';
import Breadcrumb from '../../Utilites/Breadcrumb';
import { Button, Modal } from 'react-bootstrap';
import PuthiBoi from './PuthiBoi';
import BoiSorbottom from './BoiSorbottom';

const FetureLayout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeComponent, setActiveComponent] = useState('BoiSorbottom');


    const openComponent = (component) => {
        setActiveComponent(component);
    };

    const closeModal = () => {
        setActiveComponent(activeComponent);
        setIsModalOpen(false);
    };

    const isActiveButton = (component) => {
        return activeComponent === component ? 'active-btn' : '';
    };

    return (
        <div className="content-wrapper">
            <div className="content-header">
                <Breadcrumb page={'Featured Category'} />
                <div className='d-flex gap-2 ms-5 my-4'>
                    <button className={`btn btn-secondary ${isActiveButton('BoiSorbottom')}`} onClick={() => openComponent('BoiSorbottom')}   >
                        বই সর্বোত্তম উপহার </button>
                    <button className={`btn btn-secondary ${isActiveButton('PuthiBoi')}`} onClick={() => openComponent('PuthiBoi')} >  পুথিপ্রকাশের বই </button>
                </div>
                <hr />
                <div className='my-4'>
                    <button
                        className="border fw-bold btn btn-sm btn-warning mb-0 ms-5 text-nowrap text-dark"
                        style={{ width: '110px' }}
                        onClick={() => setIsModalOpen(true)}
                    >
                        Add or edit
                    </button>
                </div>

                {activeComponent === 'BoiSorbottom' && <BoiSorbottom />}
                {activeComponent === 'PuthiBoi' && <PuthiBoi />}

                <Modal show={isModalOpen} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add or Edit Category</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Add/Edit form or content */}
                        <h2>Your Content Goes Here</h2>
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

export default FetureLayout;
