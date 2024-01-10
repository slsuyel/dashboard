import React, { useState } from 'react';

const SearchOrder = () => {
    const [searchQuery, setSearchQuery] = useState({
        orderNo: '',
        customerName: '',
        productName: '',
        Payment: '',
        orderDate: ''
    });

    const handleSearch = () => {
        console.log(searchQuery);
    };
    return (
        <div class="container mb-3">
            <form class="d-flex gap-3 justify-content-center flex-wrap">

                <div class="custom-form-group custom-flex-fill">
                    <input
                        type="text"
                        class="custom-form-control "
                        id="orderNo"
                        placeholder="Order No."
                        value={searchQuery.orderNo}
                        onChange={(e) => setSearchQuery({ ...searchQuery, orderNo: e.target.value })}
                    />
                </div>


                <div class="custom-form-group custom-flex-fill">
                    <input
                        type="text"
                        class="custom-form-control "
                        id="customerName"
                        placeholder="Customer Name"
                        value={searchQuery.customerName}
                        onChange={(e) => setSearchQuery({ ...searchQuery, customerName: e.target.value })}
                    />
                </div>
                <div class="custom-form-group custom-flex-fill">
                    <input
                        type="text"
                        class="custom-form-control "
                        id="productName"
                        placeholder="Product Name"
                        value={searchQuery.productName}
                        onChange={(e) => setSearchQuery({ ...searchQuery, productName: e.target.value })}
                    />
                </div>
                <div class="custom-form-group custom-flex-fill">
                    <input
                        type="text"
                        class="custom-form-control "
                        id="Payment"
                        placeholder="Payment"
                        value={searchQuery.Payment}
                        onChange={(e) => setSearchQuery({ ...searchQuery, Payment: e.target.value })}
                    />
                </div>
                <div class="custom-form-group custom-flex-fill">
                    <input
                        type="date"
                        class="custom-form-control "
                        id="orderDate"
                        placeholder="Order Dt"
                        value={searchQuery.orderDate}
                        onChange={(e) => setSearchQuery({ ...searchQuery, orderDate: e.target.value })}
                    />
                </div>


                <button
                    className="border btn btn-sm mb-0 text-nowrap text-white"
                    style={{ background: "#48b7d7", width: '110px' }}
                    type="button"
                    onClick={handleSearch}
                >
                    Search
                </button>

            </form>

        </div>
    );
};

export default SearchOrder;