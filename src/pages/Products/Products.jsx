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
import QrModal from './QrModal';

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
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});


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




    const handleShow = (product) => {
        setSelectedProduct(product)
        setShowModal(true);
    };
    const handleClose = () => setShowModal(false);


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
                                <tr className=''>
                                    <th>#</th>
                                    <th className='text-nowrap text-66'>P. ID <SortIcon /></th>

                                    <th className='text-nowrap text-66'>P. Name <SortIcon /></th>
                                    <th className='text-nowrap text-66'>Price <SortIcon /></th>
                                    <th className='text-nowrap text-66'>Stock<SortIcon /></th>
                                    <th className='text-nowrap text-66'>Categories  <SortIcon /></th>
                                    <th className='text-nowrap text-66'>Image <SortIcon /></th>
                                    <th className='text-nowrap text-66'>Date <SortIcon /></th>
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
                                    <tr className=' font-td' key={product.id}>
                                        <td className='text-66'>{index + 1}</td>
                                        <td className='text-66'>{product.id}</td>

                                        <td className='text-66'>{product.name}</td>
                                        <td className='text-66'>{product.price} <button className='border-0 bg-transparent'><img src={add} width={18} alt="" /></button></td>
                                        <td className='text-66'>{product.stock}<button className='border-0 bg-transparent'><img src={add} width={18} alt="" /></button></td>

                                        <td className=' text-start text-66'> {product.categories.map(category => (
                                            <span key={category}>{category},</span>))}
                                            <button className='border-0 bg-transparent'><img src={add} width={18} alt="" /></button>
                                        </td>
                                        <td className='text-66'><img src={product.image} alt={`Photo of ${product.name}`} style={{ width: '50px', height: '50px' }} /></td>
                                        <td className='text-66'>{product.date}</td>
                                        <td className='d-flex gap-2'>
                                            <button onClick={() => handleShow(product)} className='border-0'>
                                                <img src={qr} alt="" className='img-fluid' width={50} /></button>


                                            <button className='border-0'><img src={flip} alt="" className='img-fluid' width={50} /></button>
                                        </td>
                                        <td className='text-66'>
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


                <QrModal showModal={showModal} handleShow={handleShow} handleClose={handleClose} product={selectedProduct} />

            </div>
        </div >
    );
};
export default Products;