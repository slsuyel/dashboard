import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import qr from '../../assets/icons/png/QR-icon.png';

const QrModal = ({ showModal, handleShow, handleClose, product }) => {
    const [qrCodeUrl, setQrCodeUrl] = useState('');

    useEffect(() => {
        if (showModal && product) {
            const newQrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(JSON.stringify(product))}&size=300x300`;
            setQrCodeUrl(newQrCodeUrl);
        }
    }, [showModal, product]);

    const downloadQrCodeImage = () => {
        fetch(qrCodeUrl)
            .then(response => response.blob())
            .then(blob => {
                const a = document.createElement('a');
                a.href = window.URL.createObjectURL(blob);
                a.download = 'qr_code.png';
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            })
            .catch(error => console.error('Error downloading QR code image:', error));
    };



    return (
        <>
            <Modal show={showModal} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title className='mx-auto'>Flipping Book QR code</Modal.Title>
                </Modal.Header>
                <Modal.Body className='mx-auto'>
                    {product && (
                        <img src={qrCodeUrl || qr} className='img-fluid' alt="QR Code" />
                    )}
                </Modal.Body>
                <Modal.Footer className='justify-content-around'>
                    <Button className='fw-bold text-white' variant="warning" onClick={downloadQrCodeImage}>
                        Download
                    </Button>
                    <Button className='fw-bold text-white' style={{ background: '#22a6bb' }}>
                        Flipping Book preview
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default QrModal;
