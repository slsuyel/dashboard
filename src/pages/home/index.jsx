import React from "react";

import newOrder from "../../assets/icons/png/new-order.png"
import totalSales from "../../assets/icons/png/total-sales.png"
import totalProducts from "../../assets/icons/png/total-products.png"
import segmentation from "../../assets/icons/png/segmentation.png"

export default function Home() {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Home</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <li className="breadcrumb-item active">Home</li>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>


      <div className="content">
        <div className="container-fluid">

          <div className="row mx-auto ">
            <div className="col-md-4 my-1">
              <div className="border border-3 border-white mx-3 p-1 rounded-3 shadow-lg">
                <div className=" d-flex justify-content-around">
                  <div className="my-auto">
                    <p className="fs-5 mb-0 text-secondary"> New Order</p>
                    <h1 className="mb-0 text-secondary">05</h1>
                  </div>
                  <div>
                    <img src={newOrder} alt="" width={100} height={100} />
                  </div>
                </div>
                <hr className="my-2 p-0" />
                <p className="mb-0 ms-2 text-nil">Update Now  </p>
              </div>
            </div>
            <div className="col-md-4 my-1">
              <div className="border border-3 border-white mx-3 p-1 rounded-3 shadow-lg">
                <div className=" d-flex justify-content-around">
                  <div className="my-auto">
                    <p className="fs-5 mb-0 text-secondary">Total Products</p>
                    <h1 className="mb-0 text-secondary">05</h1>
                  </div>
                  <div>
                    <img src={totalProducts} alt="" width={100} height={100} />
                  </div>
                </div>
                <hr className="my-2 p-0" />
                <p className="mb-0 ms-2 text-nil">View  </p>
              </div>
            </div>
            <div className="col-md-4 my-1">
              <div className="border border-3 border-white mx-3 p-1 rounded-3 shadow-lg">
                <div className=" d-flex justify-content-around">
                  <div className="my-auto">
                    <p className="fs-5 mb-0 text-secondary">Total Sales</p>
                    <h1 className="mb-0 text-secondary">05</h1>
                  </div>
                  <div>
                    <img src={totalSales} alt="" width={100} height={100} />
                  </div>
                </div>
                <hr className="my-2 p-0" />
                <p className="mb-0 ms-2 text-nil">View  </p>
              </div>
            </div>
          </div>

          <div className="row mx-auto my-3">

            <div className="col-md-5">
              <div className="border border-3 border-white mx-3 p-1 rounded-3 shadow-lg">
                <div className="row">
                  <div className="col-md-7 text-center ">
                    <p className="mb-0 mb-2 text-secondary">Top 05 Category </p>
                    <img src={segmentation} alt="" width={130} />

                  </div>
                  <div className="col-md-5">
                    <p className="text-secondary">Last 30 days</p>

                    <div className="align-items-center d-flex gap-1">
                      <div className="ctg-1"></div>
                      <span className="text-secondary">Category 01</span>
                    </div>
                    <div className="align-items-center d-flex gap-1">
                      <div className="ctg-2"></div>
                      <span className="text-secondary">Category 01</span>
                    </div>
                    <div className="align-items-center d-flex gap-1">
                      <div className="ctg-3"></div>
                      <span className="text-secondary">Category 01</span>
                    </div>
                    <div className="align-items-center d-flex gap-1">
                      <div className="ctg-4"></div>
                      <span className="text-secondary">Category 01</span>
                    </div>
                    <div className="align-items-center d-flex gap-1">
                      <div className="ctg-5"></div>
                      <span className="text-secondary">Category 01</span>
                    </div>

                  </div>
                </div>

              </div>



            </div>


          </div>




        </div>
      </div>
    </div>
  );
}
