import React, { useState } from 'react';
import Breadcrumb from '../../Utilites/Breadcrumb';
import Loader from '../../components/Loader';
import Multimedia from './Multimedia';
import VideoGallary from './VideoGallary';
import addIcon from '../../assets/icons/png/+Add.png';
import NewCategoryModal from './NewCategoryModal';
import PhotoUploadModal from './PhotoUploadModal';

const MultimediaMainLayout = () => {
    const [activeTab, setActiveTab] = useState('photo');
    const [showNewCategoryModal, setShowNewCategoryModal] = useState(false);
    const [showPhotoUploadModal, setShowPhotoUploadModal] = useState(false);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    // console.log(activeTab);

    const handleNewCategoryClick = () => {
        setShowNewCategoryModal(true);
    };

    const handlePhotoUploadClick = () => {
        setShowPhotoUploadModal(true);
    };

    return (
        <div className="content-wrapper">
            <div className="content-header">
                <Loader />
                <Breadcrumb page={'Multimedia'} />
                <div className='d-flex gap-3 my-3 mb-4'>
                    <button
                        className={`btn btn-secondary ${activeTab === 'photo' ? 'active-btn' : ''}`}
                        onClick={() => handleTabChange('photo')}
                    >
                        Photo Gallery
                    </button>
                    <button
                        className={`btn btn-secondary ${activeTab === 'video' ? 'active-btn' : ''}`}
                        onClick={() => handleTabChange('video')}
                    >
                        Video Gallery
                    </button>
                </div>
                <hr />
                <div className='d-flex gap-3 my-3 mt-4'>
                    <button className='border-0 fw-bold text-nil' onClick={handleNewCategoryClick}>
                        <img src={addIcon} alt="" className="btn m-2 p-1" width={50} />
                        New Category
                    </button>
                    <button className='border-0 fw-bold text-nil' onClick={handlePhotoUploadClick}>
                        <img src={addIcon} alt="" className="btn m-2 p-1" width={50} />
                        {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Upload
                    </button>
                </div>

                {activeTab === 'photo' ? <Multimedia /> : null}
                {activeTab === 'video' ? <VideoGallary /> : null}

                <NewCategoryModal
                    show={showNewCategoryModal}
                    handleClose={() => setShowNewCategoryModal(false)}
                />
                <PhotoUploadModal
                    show={showPhotoUploadModal}
                    activeTab={activeTab}
                    handleClose={() => setShowPhotoUploadModal(false)}
                />

            </div>
        </div>
    );
};

export default MultimediaMainLayout;
