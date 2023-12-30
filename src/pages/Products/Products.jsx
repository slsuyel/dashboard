import React, { useState } from 'react';
import SortIcon from '../../Utilites/SortIcon';
import Breadcrumb from '../../Utilites/Breadcrumb';
import addIcon from '../../assets/icons/png/+Add.png';
import flip from '../../assets/icons/png/Flip-icon.png';
import qr from '../../assets/icons/png/QR-icon.png';
import add from '../../assets/icons/png/Add-icon.png';

import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import TableHeader from '../../Utilites/TableHeader';

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

                <Breadcrumb page={'Products'} />

                <TableHeader slug={'products/new'} selectedIds={selectedIds} setSelectedIds={setSelectedIds} />

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