import React, { useState } from 'react';
import SortIcon from '../../Utilites/SortIcon';
import Breadcrumb from '../../Utilites/Breadcrumb';
import TableHeader from '../../Utilites/TableHeader';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';

const data = [
    {
        id: '1',
        categoryName: 'Lorem Ipsum Document',
        photoQuantity: 10,
        modifiedDate: '2023-01-15T08:30:00Z'
    },
    {
        id: '11',
        categoryName: 'Sample Report',
        photoQuantity: 10,
        modifiedDate: '2023-02-20T14:45:00Z'
    },
    {
        id: '111',
        categoryName: 'Project Proposal',
        photoQuantity: 10,
        modifiedDate: '2023-03-10T10:00:00Z'
    },
];



const Multimedia = ({ children }) => {
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
        setSelectAll(false);
    };

    const handleSelectAllChange = () => {
        setSelectAll(!selectAll);
        setSelectedIds(selectAll ? [] : data.map(writer => writer.id));
    };



    return (
        <div className="content-wrapper">
            <div className="content-header">
                <Loader />
                <Breadcrumb page={'Multimedia'} />
                <>
                    {children ? (
                        <TableHeader children={children} selectedIds={selectedIds} setSelectedIds={setSelectedIds} />
                    ) : (
                        <TableHeader slug={'multimedia/add'} selectedIds={selectedIds} setSelectedIds={setSelectedIds} />
                    )}
                </>


                <div className='table-responsive '>
                    <table className="table table-striped">
                        <thead>
                            <tr className='text-center'>
                                <th>#</th>
                                <th className='text-nowrap text-secondary'>Category Name<SortIcon /></th>
                                <th className='text-nowrap text-secondary'>Photo Quantity<SortIcon /></th>
                                <th className='text-nowrap text-secondary'>Modified Date<SortIcon /></th>
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
                                <tr className='text-center' key={`product_${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{product.categoryName}</td>
                                    <td>{product.photoQuantity}</td>
                                    <td>{product.modifiedDate}</td>
                                    <td>
                                        <Link className='bg-warning border-secondary-subtle border-warning btn btn-sm fw-bold px-3 rounded-2 text-decoration-none text-white' to={'/dashboard/multimedia/photo-gallery'} >   View</Link>
                                    </td>
                                    <td>
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
    );
};

export default Multimedia;