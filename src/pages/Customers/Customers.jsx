import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../Utilites/Breadcrumb';
import SortIcon from '../../Utilites/SortIcon';
const data = [
    {
        id: 1,
        customerName: 'John Doe',
        email: 'john.doe@example.com',
        contactNo: '1234567890',
        district: 'Sample District',
        thana: 'Sample Thana',
        totalOrders: 5,
    },

];
const Customers = () => {
    const [districts, setDistricts] = useState([]);
    const [thanas, setThanas] = useState([]);
    const [selectedDistrictId, setSelectedDistrictId] = useState(null);
    const [searchQuery, setSearchQuery] = useState({
        customerName: '',
        contactNo: '',
        email: '',
        orderQuantity: '',
    });

    useEffect(() => {
        // Fetch district data
        fetch("/bd-districts.json")
            .then((res) => res.json())
            .then((data) => {
                setDistricts(data.districts);
            });
    }, []);

    useEffect(() => {
        if (selectedDistrictId) {
            fetch(`/bd-upazilas.json`)
                .then((res) => res.json())
                .then((data) => {
                    const filteredThanas = data.upazilas.filter(
                        (thana) => thana.district_id === selectedDistrictId
                    );
                    setThanas(filteredThanas);
                });
        }
    }, [selectedDistrictId]);

    const handleDistrictChange = (event) => {
        const selectedDistrictId = event.target.value;
        setSelectedDistrictId(selectedDistrictId);
    };

    const handleThanaChange = (event) => {
        const selectedThanaId = event.target.value;
        setSearchQuery({ ...searchQuery, thanaId: selectedThanaId });
    };

    const handleSearch = () => {
        const selectedDistrict = districts.find(district => district.id === selectedDistrictId);
        const districtName = selectedDistrict ? selectedDistrict.name : "N/A";

        const selectedThana = thanas.find(thana => thana.id === searchQuery.thanaId);
        const thanaName = selectedThana ? selectedThana.name : "N/A";

        console.log('Search Query:', {
            ...searchQuery,
            districtName,
            thanaName,
        });
    };



    return (
        <div className="content-wrapper">
            <div className="content-header">
                <Breadcrumb page={'customers'} />

                <div class="container my-5">
                    <form class="d-flex">
                        <div class="custom-form-group custom-flex-fill">
                            <input
                                type="text"
                                class="custom-form-control form-control p-1"
                                id="customerName"
                                placeholder="Customer Name"
                                value={searchQuery.customerName}
                                onChange={(e) => setSearchQuery({ ...searchQuery, customerName: e.target.value })}
                            />
                        </div>
                        <div class="custom-form-group custom-flex-fill">
                            <input
                                type="text"
                                class="custom-form-control form-control p-1"
                                id="contactNo"
                                placeholder="Contact No."
                                value={searchQuery.contactNo}
                                onChange={(e) => setSearchQuery({ ...searchQuery, contactNo: e.target.value })}
                            />
                        </div>
                        <div class="custom-form-group custom-flex-fill">
                            <input
                                type="text"
                                class="custom-form-control form-control p-1"
                                id="email"
                                placeholder="Email"
                                value={searchQuery.email}
                                onChange={(e) => setSearchQuery({ ...searchQuery, email: e.target.value })}
                            />
                        </div>
                        <div className="custom-form-group custom-flex-fill">
                            <select
                                className="custom-form-control form-control p-1"
                                id="district"
                                placeholder="District"
                                onChange={handleDistrictChange}
                            >
                                <option value="">Select District</option>
                                {districts.map((district) => (
                                    <option key={district.id} value={district.id}>
                                        {district.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="custom-form-group custom-flex-fill">
                            <select
                                className="custom-form-control form-control p-1"
                                id="thana"
                                placeholder="Thana"
                                disabled={!selectedDistrictId}
                                onChange={handleThanaChange}
                            >
                                <option value="">Select Thana</option>
                                {thanas.map((thana) => (
                                    <option key={thana.id} value={thana.id}>
                                        {thana.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div class="custom-form-group custom-flex-fill">
                            <input
                                type="text"
                                class="custom-form-control form-control p-1"
                                id="orderQuantity"
                                placeholder="Order Quantity"
                                value={searchQuery.orderQuantity}
                                onChange={(e) => setSearchQuery({ ...searchQuery, orderQuantity: e.target.value })}
                            />
                        </div>
                        <button
                            className="border btn btn-sm mb-0 text-nowrap text-white"
                            style={{ background: "#48b7d7", width: '110px' }}
                            type="button"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </form>
                </div>
                <hr />

                <div className='d-flex justify-content-between mx-auto px-1 w-100'>
                    <div className="align-items-center d-flex gap-1">
                        <label htmlFor="showDropdown" className="form-label mb-0 text-secondary">Show:</label>
                        <select className="form-select" id="showDropdown">
                            <option>10</option>
                            <option>20</option>
                            <option>30</option>
                        </select>
                    </div>


                </div>
                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th>#</th>
                            <th className='text-nowrap text-secondary'>Cusomer Name <SortIcon /></th>
                            <th className='text-nowrap text-secondary'>Email <SortIcon /></th>
                            <th className='text-nowrap text-secondary'>Contact No.<SortIcon /></th>
                            <th className='text-nowrap text-secondary'>District <SortIcon /></th>
                            <th className='text-nowrap text-secondary'>Thana <SortIcon /></th>
                            <th className='text-nowrap text-secondary'>Total Orders <SortIcon /></th>

                            <th className='text-nowrap text-secondary'>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((customer, index) => (
                            <tr className='text-center' key={customer.id}>
                                <td>{index + 1}</td>
                                <td>{customer.customerName}</td>
                                <td>{customer.email}</td>
                                <td>{customer.contactNo}</td>
                                <td>{customer.district}</td>
                                <td>{customer.thana}</td>
                                <td>{customer.totalOrders}</td>
                                <td>
                                    <button
                                        className="border btn btn-sm mb-0 text-nowrap text-white"
                                        style={{ background: "#48b7d7", width: '110px' }}
                                    >
                                        Order Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>



            </div>
        </div>
    );
};

export default Customers;