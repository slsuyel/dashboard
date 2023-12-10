import React, { useContext } from 'react';
import '../components/Components.css';
import { AuthContext } from '../providers/AuthProviders';

const NightDay = () => {
    const { handleToggle } = useContext(AuthContext);

    return (
        <div>
            <div style={{ marginBottom: '-5px' }}>
                <input type="checkbox" className="checkbox" id="checkbox" onChange={handleToggle} />
                <label htmlFor="checkbox" className="checkbox-label">
                    <i className="fas fa-moon"></i>
                    <i className="fas fa-sun"></i>
                    <span className="ball"></span>
                </label>
            </div>
        </div>
    );
};

export default NightDay;
