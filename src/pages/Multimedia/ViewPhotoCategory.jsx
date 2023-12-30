import React, { useState } from 'react';
import Breadcrumb from '../../Utilites/Breadcrumb';
import TableHeader from '../../Utilites/TableHeader';
import SortIcon from '../../Utilites/SortIcon';

const data = [
    {
        id: '1',
        categoryName: 'Lorem Ipsum Document',
        photoTitle: 'Lorem Ipsum Document',
        photo: 'https://picsum.photos/500/300?random=1'
    },
    {
        id: '11',
        categoryName: 'Sample Report',
        photoTitle: 'Lorem Ipsum Document',
        photo: 'https://picsum.photos/500/300?random=1'
    },
    {
        id: '111',
        categoryName: 'Project Proposal',
        photoTitle: 'Lorem Ipsum Document',
        photo: 'https://picsum.photos/500/300?random=1'
    },
];
const ViewPhotoCategory = () => {

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

                <Breadcrumb page={'Multimedia-Photo Gallery'} />

                <TableHeader slug={'multimedia/add'} selectedIds={selectedIds} setSelectedIds={setSelectedIds} />

                <div className='table-responsive '>
                    <table className="table table-striped">
                        <thead>
                            <tr className='text-center'>
                                <th>#</th>
                                <th className='text-nowrap text-secondary'>Category Name<SortIcon /></th>
                                <th className='text-nowrap text-secondary'>Photo Title<SortIcon /></th>
                                <th className='text-nowrap text-secondary'>Photo<SortIcon /></th>


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
                                    <td>{product.photoTitle}</td>
                                    <td>
                                        <img src={product.photo} width={50} alt="" />
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

export default ViewPhotoCategory;