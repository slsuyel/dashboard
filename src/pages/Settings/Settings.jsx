import React, { useState, useEffect } from 'react';
import Breadcrumb from '../../Utilites/Breadcrumb.jsx';
import GeneralSettings from './GeneralSettings/GeneralSettings.jsx';
import DeliverySettings from './DeliverySettings/DeliverySettings.jsx';
import SliderSettings from './SliderSetting/SliderSettings.jsx';
import UserControlSettings from './UserControlSettings/UserControlSettings.jsx';

const tabConfig = [
    { id: 'General', label: 'General', component: <GeneralSettings /> },
    { id: 'Delivery', label: 'Delivery', component: <DeliverySettings /> },
    { id: 'Slider', label: 'Slider', component: <SliderSettings /> },
    { id: 'UserControl', label: 'User Control', component: <UserControlSettings /> },
];

const Settings = () => {
    const [activeTab, setActiveTab] = useState(localStorage.getItem('activeTab') || tabConfig[0].id);

    useEffect(() => {
        // Save the activeTab to localStorage whenever it changes
        localStorage.setItem('activeTab', activeTab);
    }, [activeTab]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="content-wrapper">
            <div className="content-header">
                <Breadcrumb page={"Setting"} />

                <div className="d-flex flex-wrap gap-3 justify-content-center tab-buttons">
                    {tabConfig.map((tab) => (
                        <button
                            key={tab.id}
                            className={` px-3 py-2 ${activeTab === tab.id
                                ? 'active-btn'
                                : 'btn btn-secondary'
                                }`}
                            onClick={() => handleTabClick(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {tabConfig.find((tab) => tab.id === activeTab)?.component}
            </div>
        </div>
    );
};

export default Settings;
