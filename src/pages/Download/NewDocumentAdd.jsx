import React, { useEffect, useState } from 'react';
import Download from './Download';
import { Button, Modal } from 'react-bootstrap';
import BackBtn from './BackBtn';

const NewDocumentAdd = () => {
    const [show, setShow] = useState(false);
    const [documentTitle, setDocumentTitle] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleUpdate = () => {

        console.log('Document Title:', documentTitle);
        console.log('Selected File:', selectedFile);

        alert(JSON.stringify({ documentTitle }))

        handleClose();
    };

    useEffect(() => {
        handleShow();
    }, []);

    const handleFileChange = (event) => {
        // Handle file change and set the selectedFile state
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    return (
        <>
            <Download>
                <BackBtn />
            </Download>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Document Add</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="needs-validation" noValidate>
                        <div className="form-group">
                            <label htmlFor="documentTitle">Document Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="documentTitle"
                                value={documentTitle}
                                onChange={(e) => setDocumentTitle(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="file">File</label>
                            <input
                                type="file"
                                className="form-control"
                                id="file"
                                onChange={handleFileChange}
                                required
                            />
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default NewDocumentAdd;
