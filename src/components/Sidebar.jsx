
import React from "react";
import { NavLink as Link } from 'react-router-dom';
import './Components.css'
import DashboardIcon from '../assets/icons/png/dashboard.png';
import CategoryIcon from '../assets/icons/png/category.png';
import ProductsIcon from '../assets/icons/png/products.png';
import OrdersIcon from '../assets/icons/png/orders.png';
import CustomersIcon from '../assets/icons/png/customers.png';
import WritersIcon from '../assets/icons/png/writers.png';
import PagesIcon from '../assets/icons/png/pages.png';
import MultimediaIcon from '../assets/icons/png/Multimedia.png';
import VisitorIcon from '../assets/icons/png/visitor.png';
import BoisorbouttomupoharIcon from '../assets/icons/png/boi-sorbouttom-upohar.png';
import PuthiprokasherBoiIcon from '../assets/icons/png/puthiprokasher-boi.png';
import SettingsIcon from '../assets/icons/png/settings.png';
import adminlogo from '../assets/icons/png/admin-logo.png';
import logo from '../assets/icons/png/puthiprokash-logo.png';

const Sidebar = () => {
  return (
    <aside className="main-sidebar nav-pills sidebar-dark-primary sidebar-no-expand elevation-1">
      <Link to="/dashboard" className="brand-link text-decoration-none">
        <img
          src={adminlogo}
          alt="AdminLTE "
          className="brand-image img-circle elevation-1"
          style={{ opacity: ".8" }}
        />
        {/* <img src={logo} alt="" className="img-fluid" /> */}
        <div>
          <span className="brand-text font-weight-light">
            পুথিপ্রকাশ
          </span>
        </div>
      </Link>
      <div className="sidebar px-0">
        <nav className="mt-2">
          <ul
            className="nav nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item border-bottom nav-item rounded-0 ">
              <Link to="/dashboard/" className="nav-link">
                <div className="custom-li-item">
                  <img src={DashboardIcon} alt="" width={35} />
                  <p className="ms-2">Dashboard</p>
                </div>
              </Link>
            </li>
            <li className=" nav-item border-bottom nav-item rounded-0">
              <Link to="/dashboard/category" className="nav-link">
                <div className="custom-li-item ">
                  <img src={CategoryIcon} alt="" width={35} />
                  <p className="ms-2">Category</p>
                </div>
              </Link>
            </li>
            <li className="nav-item border-bottom nav-item rounded-0">
              <Link to="/dashboard/products" className="nav-link">
                <div className="custom-li-item">
                  <img src={ProductsIcon} alt="" width={35} />
                  <p className="ms-2">Products</p>
                </div>
              </Link>
            </li>
            <li className="nav-item border-bottom nav-item rounded-0">
              <Link to="/dashboard/orders" className="nav-link">
                <div className="custom-li-item">
                  <img src={OrdersIcon} alt="" width={35} />
                  <p className="ms-2">Orders</p>
                </div>
              </Link>
            </li>
            <li className="nav-item border-bottom nav-item rounded-0">
              <Link to="/dashboard/customers" className="nav-link">
                <div className="custom-li-item">
                  <img src={CustomersIcon} alt="" width={35} />
                  <p className="ms-2">Customers</p>
                </div>
              </Link>
            </li>
            <li className="nav-item border-bottom nav-item rounded-0">
              <Link to="/dashboard/writers" className="nav-link">
                <div className="custom-li-item">
                  <img src={WritersIcon} alt="" width={35} />
                  <p className="ms-2">Writers</p>
                </div>
              </Link>
            </li>
            <li className="nav-item border-bottom nav-item rounded-0">
              <Link to="/dashboard/pages" className="nav-link">
                <div className="custom-li-item">
                  <img src={PagesIcon} alt="" width={35} />
                  <p className="ms-2">Pages</p>
                </div>
              </Link>
            </li>
            <li className="nav-item border-bottom nav-item rounded-0">
              <Link to="/dashboard/multimedia" className="nav-link">
                <div className="custom-li-item">
                  <img src={MultimediaIcon} alt="" width={35} />
                  <p className="ms-2">Multimedia</p>
                </div>
              </Link>
            </li>
            <li className="nav-item border-bottom nav-item rounded-0">
              <Link to="/dashboard/visitor" className="nav-link">
                <div className="custom-li-item">
                  <img src={VisitorIcon} alt="" width={35} />
                  <p className="ms-2">Visitor</p>
                </div>
              </Link>
            </li>
            <li className="nav-item border-bottom nav-item rounded-0">
              <Link to="/dashboard/featured-category" className="nav-link">
                <div className="custom-li-item">
                  <img src={BoisorbouttomupoharIcon} alt="" width={35} />
                  <p className="ms-2">Featured Category</p>
                </div>
              </Link>
            </li>
            <li className="nav-item border-bottom nav-item rounded-0">
              <Link to="/dashboard/download" className="nav-link">
                <div className="custom-li-item">
                  <img src={PuthiprokasherBoiIcon} alt="" width={35} />
                  <p className="ms-2">Download</p>
                </div>
              </Link>
            </li>
            <li className="nav-item border-bottom nav-item rounded-0">
              <Link to="/dashboard/settings" className="nav-link">
                <div className="custom-li-item">
                  <img src={SettingsIcon} alt="" width={35} />
                  <p className="ms-2">Settings</p>
                </div>
              </Link>
            </li>

            <div>
              <hr className='bg-black m-0 my-2' />
            </div>

            <li className="border nav-item border-bottom nav-item rounded-0 ">
              <Link to="/" className="nav-link">
                <div className="custom-li-item">
                  <img src={DashboardIcon} alt="" width={35} />
                  <p className="ms-2">Home</p>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
