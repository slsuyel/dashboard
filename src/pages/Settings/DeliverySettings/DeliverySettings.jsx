import React, { useState } from "react";
import Swal from "sweetalert2";
import { useTable, useSortBy, usePagination } from 'react-table';
import addIcon from '../../../assets/icons/png/+Add.png';
import { Link } from 'react-router-dom';

const data = [
    { id: 1, deliveredTo: 'Recipient 1', weightFrom: 1000, weightTo: 200, charge: 50, isChecked: false },
    { id: 2, deliveredTo: 'Recipient 2', weightFrom: 150, weightTo: 2500, charge: 70, isChecked: false },
    { id: 3, deliveredTo: 'Recipient 3', weightFrom: 200, weightTo: 300, charge: 910, isChecked: false },
];

const DeliverySettings = () => {
    const [selectedOption, setSelectedOption] = useState('Edit');
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
            { Header: 'Delivered to', accessor: 'deliveredTo', sortType: 'basic' },
            { Header: 'Weight from (Gram)', accessor: 'weightFrom', sortType: 'basic' },
            { Header: 'Weight to (Gram)', accessor: 'weightTo', sortType: 'basic' },
            { Header: 'Charge (bdt)', accessor: 'charge', sortType: 'basic' },
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

    // Table instance with pagination
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
        <div className='bg-white mt-3 px-2'>
            <div>
                <Link to='new-delivery'>  <img src={addIcon} alt="" className=" m-2" width={50} /></Link>
            </div>
            <div className='d-flex justify-content-between mx-auto px-1 w-100'>
                <div className="align-items-center d-flex gap-1">
                    <label htmlFor="showDropdown" className="form-label mb-0 text-secondary">Show:</label>
                    <select className="form-select" id="showDropdown">
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                    </select>
                </div>

                <div className="align-items-center d-flex gap-1">
                    <label htmlFor="actionDropdown" className="form-label mb-0 text-secondary">Action:</label>
                    <select className="form-select" id="actionDropdown" onChange={handleDropdownChange}>
                        <option value="Edit">Edit</option>
                        <option value="Delete">Delete</option>
                    </select>
                    <button className="border btn rounded" disabled={selectedIds.length === 0} onClick={handleApplyClick}>Apply</button>
                </div>
            </div>
            <div className='table-responsive '>


                <table {...getTableProps()} className="table table-striped">
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())} className="text-nowrap">
                                        {column.render('Header')}
                                        <span className="ms-2">
                                            {column.isSorted ? (column.isSortedDesc ? <i className="fas fa-sort-down"></i> : <i className="fas fa-sort-up"></i>) : <i className="fas fa-sort"></i>}
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
                {/* Pagginations */}
                <div className="p-1 text-end w-100">
                    <div className="d-inline ">
                        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                            {'<<'}
                        </button>
                        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                            {'<'}
                        </button>
                        <span>
                            Page{' '}
                            <strong>
                                {pageIndex + 1} of {page.length}
                            </strong>{' '}
                        </span>
                        <button onClick={() => nextPage()} disabled={!canNextPage}>
                            {'>'}
                        </button>
                        <button onClick={() => gotoPage(page.length - 1)} disabled={!canNextPage}>
                            {'>>'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliverySettings;
