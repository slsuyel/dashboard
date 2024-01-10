import { Link } from 'react-router-dom';
import addIcon from '../assets/icons/png/+Add.png';
import { useState } from 'react';
import Swal from 'sweetalert2';

const TableHeader = ({ slug, selectedIds, children }) => {
    const [selectedOption, setSelectedOption] = useState();

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
        <>

            <div className='mt-3 '>

                {
                    slug && (
                        children ? (
                            children
                        ) : (
                            <Link to={`/dashboard/${slug}`}>
                                <img src={addIcon} alt="" className="btn m-2 p-1" width={50} />
                            </Link>
                        )
                    )
                }


            </div>

            <div className='d-flex justify-content-between mx-auto px-1 w-100 mb-2'>
                <div className="align-items-center d-flex gap-1">
                    <label htmlFor="showDropdown" className="form-label w-50 mb-0 mb-0 text-secondary">Show:</label>
                    <select className="form-select" id="showDropdown">
                        <option className='text-66 '>10</option>
                        <option className='text-66 '>20</option>
                        <option className='text-66 '>30</option>
                    </select>
                </div>

                <div className="align-items-center d-flex gap-1">
                    <label htmlFor="actionDropdown" className="form-label w-50 mb-0 mb-0 text-secondary">Action:</label>
                    <select className="form-select" id="actionDropdown" onChange={handleDropdownChange}>
                        <option selected disabled>select</option>
                        <option value="Edit">Edit</option>
                        <option value="Delete">Delete</option>
                    </select>
                    <button className="border btn rounded action-btn" disabled={selectedIds.length === 0} onClick={handleApplyClick}>Apply</button>
                </div>
            </div>
        </>
    );
};

export default TableHeader;