import React, { useState } from 'react';

const GeneralSettings = () => {
    const [headerLogo1, setHeaderLogo1] = useState(null);
    const [footerLogo, setFooterLogo] = useState(null);
    const [socialMediaLinks, setSocialMediaLinks] = useState({
        facebook: '',
        twitter: '',
        instagram: '',
        youtube: '',
        whatsapp: '',
        phone1: '',
        phone2: '',
        email: ''
    });
    const [address, setAddress] = useState({
        line1: '',
        line2: '',
    });
    const [footerAbout, setFooterAbout] = useState('');
    const [homeAbout, setHomeAbout] = useState('');
    const [smtpSettings, setSmtpSettings] = useState({
        host: '',
        username: '',
        password: '',
    });

    const handleLogo1Change = (e) => {
        const file = e.target.files[0];
        setHeaderLogo1(file);
    };

    const handleLogo2Change = (e) => {
        const file = e.target.files[0];
        setFooterLogo(file);
    };

    const handleSocialMediaChange = (platform, value) => {
        setSocialMediaLinks((prevLinks) => ({
            ...prevLinks,
            [platform]: value,
        }));
    };

    const handleAddressChange = (field, value) => {
        setAddress((prevAddress) => ({
            ...prevAddress,
            [field]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Header Logo:', headerLogo1);
        console.log('Footer Logo:', footerLogo);
        console.log('Social Media Links:', socialMediaLinks);
        console.log('Address:', address);
        console.log('Footer About:', footerAbout);
        console.log('Home About:', homeAbout);
        console.log('SMTP Settings:', smtpSettings);

        // Clear the form if needed
        setHeaderLogo1(null);
        setFooterLogo(null);
        setSocialMediaLinks({
            facebook: '',
            twitter: '',
            instagram: '',
            youtube: '',
            whatsapp: '',
            phone1: '',
            phone2: '',
            email: ''
        });
        setAddress({
            line1: '',
            line2: '',
        });
        setFooterAbout('');
        setHomeAbout('');
        setSmtpSettings({
            host: '',
            username: '',
            password: '',
        });
    };


    return (

        <div className='bg-white row w-100 mx-auto mt-3 '>
            <h2 className='my-4 text-center'>General Settings</h2>

            <form className='col-md-11 mx-auto text-secondary' onSubmit={handleSubmit}>
                <div className='border mb-3 mx-auto py-3 row w-100'>
                    <div className='col-md-6 '>
                        <label htmlFor="headerLogo1">Header Logo</label>
                        <br />
                        <br />
                        <input
                            type="file"
                            id="headerLogo1"
                            onChange={handleLogo1Change}
                        />
                        <br />
                        {headerLogo1 && (
                            <img
                                width={300}
                                height={200}
                                src={URL.createObjectURL(headerLogo1)}
                                alt="Header Logo 1"
                                className="selected-image"
                            />
                        )}
                    </div>
                    <div className='col-md-6 text-center'>
                        <label htmlFor="footerLogo">Footer Logo</label>
                        <br />
                        <br />
                        <input
                            type="file"
                            id="footerLogo"
                            onChange={handleLogo2Change}
                        />
                        <br />
                        {footerLogo && (
                            <img
                                width={300}
                                height={200}
                                src={URL.createObjectURL(footerLogo)}
                                alt="Footer Logo"
                                className="selected-image"
                            />
                        )}
                    </div>
                </div>

                <div className='mb-3 row w-100 mx-auto'>
                    <div className='mb-3 col-md-6'>
                        <label htmlFor='facebook'>Facebook</label>
                        <input
                            type='text'
                            id='facebook'
                            className='border-danger-subtle form-control'
                            value={socialMediaLinks.facebook}
                            onChange={(e) =>
                                handleSocialMediaChange('facebook', e.target.value)
                            }
                        />
                    </div>
                    <div className='mb-3 col-md-6'>
                        <label htmlFor='twitter'>Twitter</label>
                        <input
                            type='text'
                            id='twitter'
                            className='border-danger-subtle form-control'
                            value={socialMediaLinks.twitter}
                            onChange={(e) =>
                                handleSocialMediaChange('twitter', e.target.value)
                            }
                        />
                    </div>
                    <div className='mb-3 col-md-6'>
                        <label htmlFor='youtube'>Youtube</label>
                        <input
                            type='text'
                            id='youtube'
                            className='border-danger-subtle form-control'
                            value={socialMediaLinks.youtube}
                            onChange={(e) =>
                                handleSocialMediaChange('youtube', e.target.value)
                            }
                        />
                    </div>


                    <div className='mb-3 col-md-6'>
                        <label htmlFor='instagram'>Instagram</label>
                        <input
                            type='text'
                            id='instagram'
                            className='border-danger-subtle form-control'
                            value={socialMediaLinks.instagram}
                            onChange={(e) =>
                                handleSocialMediaChange('instagram', e.target.value)
                            }
                        />
                    </div>
                    <div className='mb-3 col-md-6'>
                        <label htmlFor='whatsapp'>Whatsapp</label>
                        <input
                            type='text'
                            id='whatsapp'
                            className='border-danger-subtle form-control'
                            value={socialMediaLinks.whatsapp}
                            onChange={(e) =>
                                handleSocialMediaChange('whatsapp', e.target.value)
                            }
                        />
                    </div>
                    <div className='mb-3 col-md-6'>
                        <label htmlFor='phone1'>Phone1</label>
                        <input
                            type='number'
                            id='phone1'
                            className='border-danger-subtle form-control'
                            value={socialMediaLinks.phone1}
                            onChange={(e) =>
                                handleSocialMediaChange('phone1', e.target.value)
                            }
                        />
                    </div>
                    <div className='mb-3 col-md-6'>
                        <label htmlFor='phone2'>Phone2</label>
                        <input
                            type='number'
                            id='phone2'
                            className='border-danger-subtle form-control'
                            value={socialMediaLinks.phone2}
                            onChange={(e) =>
                                handleSocialMediaChange('phone2', e.target.value)
                            }
                        />
                    </div>

                    <div className='mb-3 col-md-6'>
                        <label htmlFor='email'>email</label>
                        <input
                            type='text'
                            id='email'
                            className='border-danger-subtle form-control'
                            value={socialMediaLinks.email}
                            onChange={(e) =>
                                handleSocialMediaChange('email', e.target.value)
                            }
                        />
                    </div>




                </div>

                <div className=' mb-3 row w-100 mx-auto'>
                    <h4>Address</h4>
                    <div className='mb-3 col-md-6'>
                        <label htmlFor='line1'>Address Line 1</label>
                        <input
                            type='text'
                            id='line1'
                            className='border-danger-subtle form-control'
                            value={address.line1}
                            onChange={(e) =>
                                handleAddressChange('line1', e.target.value)
                            }
                        />
                    </div>
                    <div className='mb-3 col-md-6'>
                        <label htmlFor='line2'>Address Line 2</label>
                        <input
                            type='text'
                            id='line2'
                            className='border-danger-subtle form-control'
                            value={address.line2}
                            onChange={(e) =>
                                handleAddressChange('line2', e.target.value)
                            }
                        />
                    </div>
                </div>

                {/* Footer and Home About */}
                <div className='mb-3 row w-100 mx-auto'>

                    <div className='mb-3 col-md-6'>
                        <label htmlFor='footerAbout'>Footer About</label>
                        <textarea
                            id='footerAbout'
                            className='border-danger-subtle form-control'
                            value={footerAbout}
                            onChange={(e) => setFooterAbout(e.target.value)}
                        />
                    </div>
                    <div className='mb-3 col-md-6'>
                        <label htmlFor='homeAbout'>Home About</label>
                        <textarea
                            id='homeAbout'
                            className='border-danger-subtle form-control'
                            value={homeAbout}
                            onChange={(e) => setHomeAbout(e.target.value)}
                        />
                    </div>
                </div>


                <div className='row w-100 mx-auto'>
                    <h4>SMTP Settings</h4>
                    <div className='mb-3 col-md-6'>
                        <label htmlFor='smtpHost'>SMTP Host</label>
                        <input
                            type='text'
                            id='smtpHost'
                            className='border-danger-subtle form-control'
                            value={smtpSettings.host}
                            onChange={(e) =>
                                setSmtpSettings({
                                    ...smtpSettings,
                                    host: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className='mb-3 col-md-6'>
                        <label htmlFor='smtpPort'>SMTP Port</label>
                        <input
                            type='text'
                            id='smtpPort'
                            className='border-danger-subtle form-control'
                            value={smtpSettings.port}
                            onChange={(e) =>
                                setSmtpSettings({
                                    ...smtpSettings,
                                    port: e.target.value,
                                })
                            }
                        />
                    </div>



                    <div className='mb-3 col-md-6'>
                        <label htmlFor='smtpUsername'>SMTP Username</label>
                        <input
                            type='text'
                            id='smtpUsername'
                            className='border-danger-subtle form-control'
                            value={smtpSettings.username}
                            onChange={(e) =>
                                setSmtpSettings({
                                    ...smtpSettings,
                                    username: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className='mb-3 col-md-6'>
                        <label htmlFor='smtpPassword'>SMTP Password</label>
                        <input
                            type='password'
                            id='smtpPassword'
                            className='border-danger-subtle form-control'
                            value={smtpSettings.password}
                            onChange={(e) =>
                                setSmtpSettings({
                                    ...smtpSettings,
                                    password: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>

                <div className='me-3 text-end mb-3'>
                    <button type="submit" className="active-btn px-4 py-2">
                        Save
                    </button>
                </div>
            </form>
        </div>



    );
};

export default GeneralSettings;
