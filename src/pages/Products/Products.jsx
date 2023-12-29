import React, { useState } from 'react';
import SortIcon from '../../Utilites/SortIcon';
import Breadcrumb from '../../Utilites/Breadcrumb';
import addIcon from '../../assets/icons/png/+Add.png';
import flip from '../../assets/icons/png/Flip-icon.png';
import qr from '../../assets/icons/png/QR-icon.png';
import add from '../../assets/icons/png/Add-icon.png';

import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const data = [
    {
        "id": 1,
        "name": "Product A",
        "price": 19.99,
        "stock": 50,
        "categories": ["Electronics", "Gadgets"],
        "image": "https://picsum.photos/200/350",
        "date": "2023-01-01"
    },
    {
        "id": 2,
        "name": "Product B",
        "price": 29.99,
        "stock": 30,
        "categories": ["Clothing", "Accessories"],
        "image": "https://picsum.photos/200/303",
        "date": "2023-02-15"
    },
    {
        "id": 3,
        "name": "Product C",
        "price": 39.99,
        "stock": 20,
        "categories": ["Home", "Decor"],
        "image": "https://picsum.photos/280/300",
        "date": "2023-03-20"
    }
]
const Products = () => {
    const [selectedOption, setSelectedOption] = useState('Edit');
    const [selectedIds, setSelectedIds] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    const [formData, setFormData] = useState({

        writersNameEnglish: '',
        writersNameBengali: '',
        contactNumber: '',
        writerType: '',
        photo: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);

        // Rest of your form submission logic
    };



    const handleCheckboxChange = (id) => {
        const updatedIds = [...selectedIds];
        const index = updatedIds.indexOf(id);
        if (index === -1) {
            updatedIds.push(id);
        } else {
            updatedIds.splice(index, 1);
        }
        setSelectedIds(updatedIds);
        setSelectAll(false); // Uncheck "Select All" when any individual checkbox is clicked
    };

    const handleSelectAllChange = () => {
        setSelectAll(!selectAll);
        setSelectedIds(selectAll ? [] : data.map(writer => writer.id));
    };


    const handleApplyClick = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, ${selectedOption} it!`
        }).then((result) => {
            if (result.isConfirmed) {
                if (selectedOption === 'Edit' && selectedIds.length > 0) {
                    console.log('Edit IDs:', selectedIds);
                } else if (selectedOption === 'Delete' && selectedIds.length > 0) {
                    console.log('Delete IDs:', selectedIds);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    };
    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="content-wrapper">
            <div className="content-header">

                <Breadcrumb page={'Products'} />

                <div className='mt-3 '>
                    <Link to={'/dashboard/products/new'}>

                        <img src={addIcon} alt="" className="btn m-2 p-1" width={50} />
                    </Link>
                </div>

                <div className='d-flex justify-content-between mx-auto px-1 w-100'>
                    <div className="align-items-center d-flex gap-1">
                        <label htmlFor="showDropdown" className="form-label w-50 mb-0 mb-0 text-secondary">Show:</label>
                        <select className="form-select" id="showDropdown">
                            <option>10</option>
                            <option>20</option>
                            <option>30</option>
                        </select>
                    </div>

                    <div className="align-items-center d-flex gap-1">
                        <label htmlFor="actionDropdown" className="form-label w-50 mb-0 mb-0 text-secondary">Action:</label>
                        <select className="form-select" id="actionDropdown" onChange={handleDropdownChange}>
                            <option value="Edit">Edit</option>
                            <option value="Delete">Delete</option>
                        </select>
                        <button className="border btn rounded" disabled={selectedIds.length === 0} onClick={handleApplyClick}>Apply</button>
                    </div>
                </div>

                <div className='table-responsive'>

                    {/*      Quick Action */}
                    <div className='table-responsive '>
                        <table className="table table-striped">
                            <thead>
                                <tr className='text-center'>
                                    <th>#</th>
                                    <th className='text-nowrap text-secondary'>P. ID <SortIcon /></th>

                                    <th className='text-nowrap text-secondary'>P. Name <SortIcon /></th>
                                    <th className='text-nowrap text-secondary'>Price <SortIcon /></th>
                                    <th className='text-nowrap text-secondary'>Stock<SortIcon /></th>
                                    <th className='text-nowrap text-secondary'>Categories  <SortIcon /></th>
                                    <th className='text-nowrap text-secondary'>Image <SortIcon /></th>
                                    <th className='text-nowrap text-secondary'>Date <SortIcon /></th>
                                    <th className='text-nowrap text-secondary'>Quick Action <SortIcon /></th>
                                    <th className='text-nowrap text-secondary'>
                                        <input
                                            type="checkbox"
                                            checked={selectAll}
                                            onChange={handleSelectAllChange}
                                        />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((product, index) => (
                                    <tr className='text-center' key={product.id}>
                                        <td>{index + 1}</td>
                                        <td>{product.id}</td>

                                        <td>{product.name}</td>
                                        <td>{product.price} <button className='border-0'><img src={add} width={18} alt="" /></button></td>
                                        <td>{product.stock}<button className='border-0'><img src={add} width={18} alt="" /></button></td>

                                        <td> {product.categories.map(category => (
                                            <span key={category}>{category},</span>))}<button className='border-0'><img src={add} width={18} alt="" /></button>
                                        </td>
                                        <td><img src={product.image} alt={`Photo of ${product.name}`} style={{ width: '50px', height: '50px' }} /></td>
                                        <td>{product.date}</td>
                                        <td className='d-flex gap-2'>
                                            <button className='border-0'>  <img src={qr} alt="" className='img-fluid' width={50} /></button>
                                            <button className='border-0'><img src={flip} alt="" className='img-fluid' width={50} /></button>
                                        </td>
                                        <td>
                                            {/* Individual checkbox */}
                                            <input
                                                type="checkbox"
                                                checked={selectedIds.includes(product.id)}
                                                onChange={() => handleCheckboxChange(product.id)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div >
    );
};
export default Products;