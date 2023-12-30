import { Link } from 'react-router-dom';
import addIcon from '../assets/icons/png/+Add.png';
const TableHeader = ({ slug }) => {
    return (
        <>

            <div className='mt-3 '>
                <Link to={`/dashboard/${slug}`}>

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
        </>
    );
};

export default TableHeader;