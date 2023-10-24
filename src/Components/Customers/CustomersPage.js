"use client"
import React from "react";
import Navbars from '../Common/Navbar';
import HeaderBar from '../Common/HeaderBar';
function CustomersPage() {
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
                                <h1>Customers</h1>
                            </div>
                        </div>
                        <div className="easy-orders-wrapper">
                            <div className="easy-search-wrapper">
                                <div className="easy-search">
                                    <input type="text" placeholder="Search by name, email, order" id="sub-cust" className="easy-input-text easy-input" />
                                    <a href="javascript:;" className="easy-btn search-cust">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="easy-od-inner">					
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Customer</th>
                                            <th>Email</th>
                                            <th>Active Plan</th>
                                            <th>Spent</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Rajesh Choudhary</td>
                                            <td>rajeshchoudhary@itgeeks.com</td><td>3</td>
                                            <td>$156</td>
								        </tr>
                                        <tr>
                                            <td>rajan singh Chodhary</td>
                                            <td>Rajfrean@mail.com</td><td>1</td>
                                            <td>$82</td>
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

export default CustomersPage;