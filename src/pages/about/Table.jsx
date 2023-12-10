import React from 'react';
import { useTable, useSortBy } from 'react-table';

const Table = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        // Use a custom cell renderer for the Actions column
        Cell: ({ row }) => (
          <div>
            {/* Checkbox for edit */}
            <input type="checkbox" onChange={() => handleEdit(row.original.id)} />
            {' '}
            {/* Checkbox for delete */}
            <input type="checkbox" onChange={() => handleDelete(row.original.id)} />
          </div>
        ),
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      { id: 1, name: 'John Doe', age: 25 },
      { id: 2, name: 'Jane Doe', age: 30 },
      { id: 3, name: 'Bob Smith', age: 22 },
    ],
    []
  );

  const handleEdit = (id) => {
    // Handle edit logic here
    console.log(`Edit checkbox clicked for ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Handle delete logic here
    console.log(`Delete checkbox clicked for ID: ${id}`);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  return (
    <table {...getTableProps()} className="table table-striped table-bordered">
      <thead className="thead-dark">
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
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
  );
};

export default Table;
