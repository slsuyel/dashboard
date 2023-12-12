import React, { useState } from 'react';
import Breadcrumb from '../../Utilites/Breadcrumb';

const Profile = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChangePassword = (e) => {
        e.preventDefault();
        console.log('Password changed successfully!');
    };

    return (
        <div className="content-wrapper">
            <div className="content-header">
                <Breadcrumb page={'Change Password'} />
                <div className="row w-100 mx-auto">
                    <form onSubmit={handleChangePassword} className='col-md-6 mx-auto'>
                        <div className="mb-3">
                            <label htmlFor="currentPassword" className="form-label">Current Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="currentPassword"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="newPassword" className="form-label">New Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="newPassword"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Change Password</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
