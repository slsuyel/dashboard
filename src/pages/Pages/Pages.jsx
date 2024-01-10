import React, { useState } from 'react';
import Breadcrumb from '../../Utilites/Breadcrumb';
import addIcon from '../../assets/icons/png/+Add.png';
import { Link } from 'react-router-dom';
import SortIcon from '../../Utilites/SortIcon';
import Swal from 'sweetalert2';
const data = [
    { id: 1, name: 'Page 1', slug: 'page-1', modifiedDate: '2023-01-01' },
    { id: 2, name: 'Page 2', slug: 'page-2', modifiedDate: '2023-01-02' },
];
const Pages = () => {

    const [selectedOption, setSelectedOption] = useState('Edit');
    const [selectedIds, setSelectedIds] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

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
                <Breadcrumb page={'Pages'} />

                <div className='mt-3 '>
                    <Link to={'/dashboard/pages/new'}>

                        <img src={addIcon} alt="" className="btn m-2 p-1" width={50} />
                    </Link>
                </div>

                <div className='d-flex justify-content-between mx-auto px-1 w-100 mb-2'>
                    <div className="align-items-center d-flex gap-1">
                        <label htmlFor="showDropdown" className="form-label w-50 mb-0 mb-0 text-66">Show:</label>
                        <select className="form-select" id="showDropdown">
                            <option>10</option>
                            <option>20</option>
                            <option>30</option>
                        </select>
                    </div>

                    <div className="align-items-center d-flex gap-1">
                        <label htmlFor="actionDropdown" className="form-label w-50 mb-0 mb-0 text-66">Action:</label>
                        <select className="form-select" id="actionDropdown" onChange={handleDropdownChange}>
                            <option selected disabled>select</option>
                            <option value="Edit">Edit</option>
                            <option value="Delete">Delete</option>
                        </select>
                        <button className="border btn rounded action-btn" disabled={selectedIds.length === 0} onClick={handleApplyClick}>Apply</button>
                    </div>
                </div>


                <div className='table-responsive'>

                    <div className='table-responsive '>
                        <table className="table table-striped">
                            <thead>
                                <tr className='text-start font-td'>
                                    <th>#</th>
                                    <th className='text-nowrap text-66'>Page Name<SortIcon /></th>
                                    <th className='text-nowrap text-66'>Slug<SortIcon /></th>
                                    <th className='text-nowrap text-66'>Modied Date<SortIcon /></th>

                                    <th className='text-nowrap text-66'>
                                        <input
                                            type="checkbox"
                                            checked={selectAll}
                                            onChange={handleSelectAllChange}
                                        />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((page) => (
                                    <tr className='text-start font-td' key={page.id}>
                                        <td>{page.id}</td>
                                        <td>{page.name}</td>
                                        <td>{page.slug}</td>
                                        <td>{page.modifiedDate}</td>
                                        <td>
                                            <input
                                                type="checkbox"
                                                checked={selectedIds.includes(page.id)}
                                                onChange={() => handleCheckboxChange(page.id)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default Pages;