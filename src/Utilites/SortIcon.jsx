import React, { useState } from 'react';

const SortIcon = ({ onToggle }) => {
    const [sortDirection, setSortDirection] = useState(null);

    const toggleSort = () => {
        setSortDirection(prevSortDirection => {
            const nextSortDirection =
                prevSortDirection === 'asc' ? 'desc' : prevSortDirection === 'desc' ? null : 'asc';

            if (onToggle) {
                onToggle(nextSortDirection);
            }

            // Log the current sort direction
            console.log('Current Sort Direction:', nextSortDirection);

            return nextSortDirection;
        });
    };


    return (
        <>
            {sortDirection === 'asc' && <i className="fas fa-sort-up" onClick={toggleSort}></i>}
            {sortDirection === 'desc' && <i className="fas fa-sort-down" onClick={toggleSort}></i>}
            {sortDirection === null && <i className="fas fa-sort" onClick={toggleSort}></i>}
        </>
    );
};

export default SortIcon;
