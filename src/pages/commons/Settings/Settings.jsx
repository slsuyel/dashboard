import React, { useContext, useState } from 'react';
import Breadcrumb from '../../../Utilites/Breadcrumb';
import GeneralSettings from './GeneralSettings/GeneralSettings.jsx';
import DeliverySettings from './DeliverySettings/DeliverySettings.jsx';
import SliderSettings from './SliderSetting/SliderSettings.jsx';
import UserControlSettings from './UserControlSettings/UserControlSettings.jsx';
import { AuthContext } from '../../../providers/AuthProviders.jsx';

const tabConfig = [
    { id: 'General', label: 'General', component: <GeneralSettings /> },
    { id: 'Delivery', label: 'Delivery', component: <DeliverySettings /> },
    { id: 'Slider', label: 'Slider', component: <SliderSettings /> },
    { id: 'UserControl', label: 'User Control', component: <UserControlSettings /> },
];

const Settings = () => {

    const { isNightMode } = useContext(AuthContext);
    console.log(isNightMode);


    const [activeTab, setActiveTab] = useState(tabConfig[0].id);

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
                            className={`p-1 px-2 ${activeTab === tab.id
                                ? 'bg-nil border-2 border-secondary fw-bold rounded text-white'
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
