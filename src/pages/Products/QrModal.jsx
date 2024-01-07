import React, { useEffect, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';
import qr from '../../assets/icons/png/QR-icon.png';

const QrModal = ({ showModal, handleShow, handleClose, product }) => {
    const qrCodeRef = useRef();

    useEffect(() => {
        if (showModal && product) {
            const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(JSON.stringify(product))}&size=300x300`;
            qrCodeRef.current.src = qrCodeUrl;
        }
    }, [showModal, product]);

    return (
        <>
            <Modal show={showModal} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title className='mx-auto'>Flipping Book QR code</Modal.Title>
                </Modal.Header>
                <Modal.Body className='mx-auto'>
                    {product && (
                        <img ref={qrCodeRef} src={qr} className='img-fluid' alt="QR Code" />
                    )}
                </Modal.Body>
                <Modal.Footer className='justify-content-around'>
                    <Button className='fw-bold text-white' variant="warning" >
                        Download
                    </Button>
                    <Button className='fw-bold text-white ' style={{ background: '#22a6bb' }} >
                        Flipping Book preview
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default QrModal;
