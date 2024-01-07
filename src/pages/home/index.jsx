import React, { useContext } from "react";
import newOrder from "../../assets/icons/png/new-order.png"
import totalSales from "../../assets/icons/png/total-sales.png"
import totalProducts from "../../assets/icons/png/total-products.png"
import segmentation from "../../assets/icons/png/segmentation.png"
import vistior from "../../assets/icons/png/total-visitor.png"
import users from "../../assets/icons/png/total-user.png"
import { AuthContext } from "../../providers/AuthProviders";
import Breadcrumb from "../../Utilites/Breadcrumb";
import totalEarning from '../../assets/icons/png/total-earning.png'
import avgSell from '../../assets/icons/png/avg.-sales.png'
import newUser from '../../assets/icons/png/new-users.png'

export default function Home() {

  const { isNightMode } = useContext(AuthContext);

  return (
    <div className={`content-wrapper ${isNightMode ? 'night-mode' : ''}`} >
      <div className="content-header">


        <Breadcrumb page={'Home'} />

      </div>


      <div className="content">
        <div className="container-fluid">

          <div className="row mx-auto ">
            <div className="col-md-4 my-1">
              <div className=" mx-3 rounded-3 shadow-sm w-100">
                <div className=" d-flex justify-content-around">
                  <div className="my-auto">
                    <p className="fs-5 mb-0 text-secondary"> New Order</p>
                    <h1 className="mb-0 text-secondary">05</h1>
                  </div>
                  <div>
                    <img className="ps-1 pt-2" src={newOrder} alt="" width={100} height={100} />
                  </div>
                </div>
                <hr className="my-2 p-0" />
                <p className="mb-0 ms-2 text-nil">Update Now  </p>
              </div>
            </div>
            <div className="col-md-4 my-1">
              <div className=" mx-3 rounded-3 shadow-sm w-100">
                <div className=" d-flex justify-content-around">
                  <div className="my-auto">
                    <p className="fs-5 mb-0 text-secondary">Total Products</p>
                    <h1 className="mb-0 text-secondary">05</h1>
                  </div>
                  <div>
                    <img className="ps-1 pt-2" src={totalProducts} alt="" width={100} height={100} />
                  </div>
                </div>
                <hr className="my-2 p-0" />
                <p className="mb-0 ms-2 text-nil">View  </p>
              </div>
            </div>
            <div className="col-md-4 my-1">
              <div className=" mx-3 rounded-3 shadow-sm w-100">
                <div className=" d-flex justify-content-around">
                  <div className="my-auto">
                    <p className="fs-5 mb-0 text-secondary">Total Sales</p>
                    <h1 className="mb-0 text-secondary">05</h1>
                  </div>
                  <div>
                    <img className="ps-1 pt-2" src={totalSales} alt="" width={100} height={100} />
                  </div>
                </div>
                <hr className="my-2 p-0" />
                <p className="mb-0 ms-2 text-nil">View  </p>
              </div>
            </div>
          </div>

          <div className="row mx-auto my-3">

            <div className="col-md-5 my-auto">
              <div className=" mb-2  mx-3 p-1 py-3 rounded-3 shadow-sm">
                <div className="row">
                  <div className="col-md-7 text-center ">
                    <p className="mb-0 mb-2 text-secondary">Top 05 Category </p>
                    <img className="ps-1 pt-2" src={segmentation} alt="" width={130} />

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

              <div className="align-items-center  mb-2 px-1 py-2 rounded-3 row shadow-sm">
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
                  <img className="ps-1 pt-2" src={vistior} alt="" width={70} />
                </div>
              </div>
              <div className="align-items-center  mb-2 px-1 py-2 rounded-3 row shadow-sm">
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
                  <img className="ps-1 pt-2" src={users} alt="" width={70} />
                </div>
              </div>

            </div>




          </div>


          <div className="row mx-auto my-3 text-secondary">

            <div className="col-md-4 my-1 mx-auto">
              <div className="align-items-center mb-2 ms-3 p-3 py-2 rounded-3 shadow-sm">
                <div className="d-flex gap-1 justify-content-between">
                  <div><p className="mb-0">Total Earnings</p></div>
                  <div className="d-flex gap-2 pb-2 text-decoration-underline text-info text-sm">
                    <p className="mb-0">    Daily</p>
                    <p className="mb-0"> Monthly</p>
                    <p className="mb-0">   Yearly</p>
                  </div>
                </div>

                <div className="align-items-end d-flex justify-content-between">
                  <h3 className="pt-3">Tk. 49500.00</h3>
                  <img className="ps-1 pt-2" src={totalEarning} alt="" width={70} height={60} />
                </div>
              </div>


            </div>
            <div className="col-md-4 my-1 mx-auto">
              <div className="align-items-center mb-2 ms-3 p-3 py-2 rounded-3 shadow-sm">
                <div className="d-flex gap-1 justify-content-between">
                  <div><p className="mb-0">Avg. Sales</p></div>
                  <div className="d-flex gap-2 pb-2 text-decoration-underline text-info text-sm">
                    <p className="mb-0">    Daily</p>
                    <p className="mb-0"> Monthly</p>
                    <p className="mb-0">   Yearly</p>
                  </div>
                </div>

                <div className="align-items-end d-flex justify-content-between">
                  <h3 className="pt-3">Tk. 49500.00</h3>
                  <img className="ps-1 pt-2" src={avgSell} alt="" width={70} height={60} />
                </div>
              </div>


            </div>
            <div className="col-md-4 my-1 mx-auto">
              <div className="align-items-center mb-2 ms-3 p-3 py-2 rounded-3 shadow-sm">

                <div className="align-items-center d-flex justify-content-between ">
                  <div>
                    <p className="mb-0">New Users</p>
                    <p className="mb-0 text-sm">Last 30 days</p>
                    <h3 className="mt-2">Tk. 49500.00</h3>
                  </div>



                  <div className="">

                    <img className="ps-1 pt-2" src={newUser} alt="" width={70} height={70} />
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
