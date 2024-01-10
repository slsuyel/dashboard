import React, { useState } from "react";
import Swal from "sweetalert2";
import addIcon from '../../assets/icons/png/+Add.png';
import { Link } from "react-router-dom";
import { useTable, useSortBy, usePagination } from 'react-table';
import Breadcrumb from "../../Utilites/Breadcrumb";

const data = [
    {
        "id": "1",
        "primaryCategory": "Electronics",
        "subCategory": "Smartphones",
        "childCategory": "Android",
        "image": "https://picsum.photos/500/300?random=1",
        "about": "Explore the latest Android smartphones with cutting-edge features.",
        "isChecked": false
    },
    {
        "id": "2",
        "primaryCategory": "Clothing",
        "subCategory": "Men's",
        "childCategory": "Casual Wear",
        "image": "https://picsum.photos/500/300?random=2",
        "about": "Discover comfortable and stylish casual wear for men.",
        "isChecked": false
    },
    {
        "id": "3",
        "primaryCategory": "Home & Living",
        "subCategory": "Furniture",
        "childCategory": "Living Room",
        "image": "https://picsum.photos/500/300?random=3",
        "about": "Upgrade your living room with our elegant furniture collection.",
        "isChecked": false
    },
    {
        "id": "4",
        "primaryCategory": "Books",
        "subCategory": "Fiction",
        "childCategory": "Mystery",
        "image": "https://picsum.photos/500/300?random=5",
        "about": "Immerse yourself in gripping mystery novels that keep you on the edge.",
        "isChecked": false
    }
]

const Category = () => {
    const [selectedOption, setSelectedOption] = useState();
    const [selectedIds, setSelectedIds] = useState([]);

    const handleCheckboxChange = (id) => {
        const updatedIds = [...selectedIds];
        const index = updatedIds.indexOf(id);
        if (index === -1) {
            updatedIds.push(id);
        } else {
            updatedIds.splice(index, 1);
        }
        setSelectedIds(updatedIds);
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
                    // Log the selected IDs for editing
                    console.log('Edit IDs:', selectedIds);
                } else if (selectedOption === 'Delete' && selectedIds.length > 0) {
                    // Log the selected IDs for deletion
                    console.log('Delete IDs:', selectedIds);
                    // Handle delete logic here
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


    const columns = React.useMemo(
        () => [
            { Header: 'ID', accessor: 'id' },
            { Header: 'Primary Category', accessor: 'primaryCategory', sortType: 'basic' },
            { Header: 'subCategory', accessor: 'subCategory', sortType: 'basic' },
            { Header: 'childCategory', accessor: 'childCategory', sortType: 'basic' },
            {
                Header: 'Image',
                accessor: 'image',
                Cell: ({ cell: { value } }) => (
                    <img src={value} alt="Image" style={{ width: '50px', height: '50px' }} />
                ),
            },
            { Header: 'about', accessor: 'about', sortType: 'basic' },

            {
                Header: 'Checkbox',
                accessor: 'isChecked',
                Cell: ({ row }) => (
                    <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange(row.original.id)}
                        checked={selectedIds.includes(row.original.id)}
                    />
                ),
            },
        ],
        [selectedIds]
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        state: { pageIndex, pageSize },
        gotoPage,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
    } = useTable(
        {
            columns,
            data,
        },
        useSortBy,
        usePagination
    );


    return (
        <div className="content-wrapper">
            <div className="content-header">
                <Breadcrumb page={'Category'} />
                <div className='bg-white mt-3 px-2'>
                    <div>
                        <Link to='add-new'>  <img src={addIcon} alt="" className=" m-2" width={50} /></Link>
                    </div>
                    <div className='d-flex justify-content-between mx-auto px-1 w-100 mb-2'>
                        <div className="align-items-center d-flex gap-1">
                            <label htmlFor="showDropdown" className="form-label mb-0 text-secondary">Show:</label>
                            <select className="form-select" id="showDropdown">
                                <option>10</option>
                                <option>20</option>
                                <option>30</option>
                            </select>
                        </div>

                        <div className="align-items-center d-flex gap-1 ">
                            <label htmlFor="actionDropdown" className="form-label mb-0 text-secondary">Action:</label>
                            <select className="form-select" id="actionDropdown" onChange={handleDropdownChange}>
                                <option selected disabled>select</option>
                                <option value="Edit">Edit</option>
                                <option value="Delete">Delete</option>
                            </select>
                            <button className="border btn rounded action-btn" disabled={selectedIds.length === 0} onClick={handleApplyClick}>Apply</button>
                        </div>
                    </div>

                    <div className='table-responsive'>
                        <table {...getTableProps()} className="table table-striped">
                            <thead>
                                {headerGroups.map(headerGroup => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map(column => (
                                            <th {...column.getHeaderProps(column.getSortByToggleProps())} className="text-nowrap text-66 ">
                                                {column.render('Header')}
                                                <span className="ms-2">
                                                    {column.isSorted ? (column.isSortedDesc ?
                                                        <i className="fas fa-sort-down"></i> :
                                                        <i className="fas fa-sort-up"></i>)
                                                        :
                                                        <i className="fas fa-sort"></i>
                                                    }
                                                </span>
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                                {page.map(row => {
                                    prepareRow(row);
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map(cell => (
                                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            ))}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;