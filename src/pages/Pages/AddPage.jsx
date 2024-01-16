import { useState } from "react";
import Breadcrumb from "../../Utilites/Breadcrumb";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddPage = () => {
    const [pageName, setPageName] = useState('')
    const [pageSlug, setPageSlug] = useState('')
    const [content, setContent] = useState('')

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'font': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            ['link',],
            [{ 'color': [] }, { 'background': [] }], [{ 'align': [] }],
            ['clean']
        ],
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'pageName') {
            setPageName(value);
        } else if (name === 'pageSlug') {
            setPageSlug(value);
        }
    };

    const handleContentChange = (value) => {
        console.log(`Content changed: ${value}`);
        setContent(value);
    };

    const handleSubmit = () => {
        console.log('Form submitted:');
        console.log('Page Name:', pageName);
        console.log('Page Slug:', pageSlug);
        console.log('Content:', content);
        // Add any further logic for form submission if needed
    };

    return (
        <div className="content-wrapper">
            <div className="content-header">
                <Breadcrumb page={'New Page'} />

                <div className="align-items-center d-flex flex-wrap justify-content-between px-3 w-100 my-3">
                    <div className="align-items-baseline d-flex gap-3">
                        <label className="text-nowrap" htmlFor="pageName">Page Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="pageName"
                            id="pageName"
                            value={pageName}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="align-items-baseline d-flex gap-3">
                        <label className="text-nowrap" htmlFor="pageSlug"> Page Slug</label>
                        <input
                            className="form-control"
                            type="text"
                            name="pageSlug"
                            id="pageSlug"
                            value={pageSlug}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="form-group px-3">
                    <label htmlFor="details">Content</label>
                    <ReactQuill
                        theme="snow"
                        className='form-control'
                        style={{ height: '260px', paddingBottom: '61px' }}
                        value={content}
                        onChange={handleContentChange}
                        modules={modules}
                    />
                </div>

                <div className="text-center">
                    <button className="btn active-btn" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default AddPage;
