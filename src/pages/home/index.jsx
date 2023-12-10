import React, { useContext } from "react";

import newOrder from "../../assets/icons/png/new-order.png"
import totalSales from "../../assets/icons/png/total-sales.png"
import totalProducts from "../../assets/icons/png/total-products.png"
import segmentation from "../../assets/icons/png/segmentation.png"
import vistior from "../../assets/icons/png/total-visitor.png"
import users from "../../assets/icons/png/total-user.png"
import { AuthContext } from "../../providers/AuthProviders";
import Breadcrumb from "../../Utilites/Breadcrumb";

export default function Home() {

  const { isNightMode } = useContext(AuthContext);
  console.log(isNightMode);

  return (
    <div className={`content-wrapper ${isNightMode ? 'night-mode' : ''}`} >
      <div className="content-header">


        <Breadcrumb page={'Home'} />

      </div>


      <div className="content">
        <div className="container-fluid">

          <div className="row mx-auto ">
            <div className="col-md-4 my-1">
              <div className="border border-3 border-white mx-3 rounded-3 shadow-lg w-100">
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
              <div className="border border-3 border-white mx-3 rounded-3 shadow-lg w-100">
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
              <div className="border border-3 border-white mx-3 rounded-3 shadow-lg w-100">
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

            <div className="col-md-5 my-auto">
              <div className="border border-3 mb-2 border-white mx-3 p-1 py-3 rounded-3 shadow-lg">
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

            <div className="col-md-7  text-secondary">

              <div className="align-items-center border border-3 border-white mb-2 px-1 py-2 rounded-3 row shadow-lg">
                <div className="col-md-6">

                  <div className="d-flex justify-content-between px-1 mb-1 me-3">
                    <span>Todays visitors</span>
                    <span> -49</span>
                  </div>
                  <div className="d-flex justify-content-between px-1 mb-1 me-3">
                    <span>Todays visitors</span>
                    <span> -52</span>
                  </div>
                  <div className="d-flex justify-content-between px-1 mb-1 me-3">
                    <span>Todays visitors</span>
                    <span> -66</span>
                  </div>

                </div>


                <div className="col-md-3 text-center ">
                  <h6>Total Visitors</h6>
                  <h3 className="text-nil">55000</h3>
                </div>

                <div className="col-md-3 text-center">
                  <img src={vistior} alt="" width={70} />
                </div>
              </div>
              <div className="align-items-center border border-3 border-white mb-2 px-1 py-2 rounded-3 row shadow-lg">
                <div className="col-md-6">

                  <div className="d-flex justify-content-between px-1 mb-1 me-3">
                    <span>New Usersr (30 days)</span>
                    <span> -49</span>
                  </div>
                  <div className="d-flex justify-content-between px-1 mb-1 me-3">
                    <span>Avg. Users per month</span>
                    <span> -52</span>
                  </div>
                  <div className="d-flex justify-content-between px-1 mb-1 me-3">
                    <span>Visitors in a year</span>
                    <span> -66</span>
                  </div>

                </div>


                <div className="col-md-3 text-center">
                  <h6>Total Users</h6>
                  <h3 className="text-nil">55000</h3>
                </div>

                <div className="col-md-3 text-center">
                  <img src={users} alt="" width={70} />
                </div>
              </div>

            </div>




          </div>




        </div>
      </div>
    </div>
  );
}
