"use client"
import React from "react";
import Image from 'next/image';
import Navbars from '../Common/Navbar';
import HeaderBar from '../Common/HeaderBar';
function SubscriptionOrders() {
    const type = ['All', 'Day', 'Week', 'Month'];
    const status = ['All', 'Active', 'Cancle', 'Expired', 'Failed', 'Paused'];

    return (
        <>
            <div className="easy-base">
                <div className="easy-left-menu">
                    <Navbars />
                </div>
                <div className="easy-right-div">
                    <HeaderBar />
                    <div className="easy-body">
                        <div className="easy-body-div easy-deshboard">
                            <div className="easy-title">
                                <h1>Subscription Orders</h1>
                            </div>
                            <div className="easy-order-filter">
                                <div className="easy-ds-rest">
                                    <a className="easy-btn od-rest-btn od-rest-hide" href="javascript:;">Reset Filter</a>
                                </div>
                                <div className="easy-od-fiter-type">
                                    <label>Type</label>
                                    <select className="easy-od-type od-fillter-dropdown">
                                        {
                                            type.map((item, index) => (
                                                <option value="{item}" key={index}>{item}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="easy-od-fiter-status">
                                    <label>Status</label>
                                    <select className="easy-od-status od-fillter-dropdown">
                                        {
                                            status.map((item, index) => (
                                                <option value="{item}" key={index}>{item}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="easy-orders-wrapper">
		                    <div className="easy-search-wrapper">
                                <div className="easy-search">
                                    <input type="text" placeholder="Search by Order ID, Customer Name, or Customer Email" id="sub-ods" className="easy-input-text easy-input" />
                                    <a href="javascript:;" className="easy-btn search-ods">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    </a>
                                </div>
                            </div>
                            <div class="easy-od-inner">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Customer</th>
                                            <th>Date</th>
                                            <th>Type</th>
                                            <th>Status</th>
                                            <th>View</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>#100026</td>
									        <td><span class="easy-customer">Rajesh Choudhary</span><span>rajeshchoudhary@itgeeks.com</span></td>
									        <td>September 20, 2023</td>
									        <td>Every 1 Day</td>
									        <td><span class="easy-status easy-Active">Active</span></td>
									        <td><a href="javascripit:;"><img src="/images/eye.svg" /></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubscriptionOrders;