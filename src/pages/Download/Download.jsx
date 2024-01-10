import React, { useState } from 'react';
import Breadcrumb from '../../Utilites/Breadcrumb';
import TableHeader from '../../Utilites/TableHeader';
import SortIcon from '../../Utilites/SortIcon';

const data = [
    {
        id: '1',
        documentTitle: 'Lorem Ipsum Document',
        modifiedDate: '2023-01-15T08:30:00Z'
    },
    {
        id: '11',
        documentTitle: 'Sample Report',
        modifiedDate: '2023-02-20T14:45:00Z'
    },
    {
        id: '111',
        documentTitle: 'Project Proposal',
        modifiedDate: '2023-03-10T10:00:00Z'
    },
];



const Download = ({ children }) => {
    // console.log(backBtn);
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
                <Breadcrumb page={'Download'} />
                <>
                    {children ? (
                        <TableHeader children={children} selectedIds={selectedIds} setSelectedIds={setSelectedIds} />
                    ) : (
                        <TableHeader slug={'download/new'} selectedIds={selectedIds} setSelectedIds={setSelectedIds} />
                    )}
                </>


                <div className='table-responsive '>
                    <table className="table table-striped">
                        <thead>
                            <tr className='text-start'>
                                <th>#</th>
                                <th className='text-nowrap text-66'>Document Title<SortIcon /></th>
                                <th className='text-nowrap text-66'>Modified Date<SortIcon /></th>
                                <th className='text-nowrap text-66'>Quick Action <SortIcon /></th>

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
                            {data.map((product, index) => (
                                <tr className='text-start' key={`product_${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{product.documentTitle}</td>
                                    <td>{product.modifiedDate}</td>
                                    <td><button className='bg-warning border-warning fw-bold rounded-1 text-white w-50'>View</button></td>
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

export default Download;