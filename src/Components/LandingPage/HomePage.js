"use client"
import React from "react";
import Image from 'next/image';
import Navbars from '../Common/Navbar';
import HeaderBar from '../Common/HeaderBar';
import Link from 'next/link';
function HomePage() {
    const interVal = ['Day', 'Week', '1 Month', '3 Month', '6 Month', '9 Month', '1 Year'];

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
                                <h1>Dashboard</h1>
                            </div>
                            <div className="easy-ds-filter">
                                <div className="easy-ds-rest">
                                    <a className="easy-btn ds-rest-btn ds-rest-hide" href="javascript:;">Reset Filter</a>
                                </div>
                                <div className="easy-ds-fiter-wrap">
                                    <label>Interval</label>
                                    <select className="easy-ds-interval" value="Week">
                                        {
                                            interVal.map((item, index) => (
                                                <option value="{item}" key={index}>{item}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="easy-statistics">
                            <div className="easy-statistics-item easy-static-order">
                                <h5>Orders</h5>
                                <h3>0</h3>
                                <p>Last <span>7 days</span></p>
                                <img src="/images/order-state1.svg" alt="order-state1" />
                            </div>
                            <div className="easy-statistics-item easy-static-sale">
                                <h5>Sales</h5>
                                <h3>$<span>0.00</span></h3>
                                <p>Last <span>7 days</span></p>
                                <img src="/images/order-state2.svg" alt="order-state2" />
                            </div>
                            <div className="easy-statistics-item easy-static-nextsale">
                                <h5>Upcoming sales</h5>
                                <h3>$<span>851.00</span></h3>
                                <p>Next <span>7 days</span></p>
                                <img src="/images/order-state3.svg" alt="order-state3" />
                            </div>
                        </div>
                        <div className="easy-hs-group">
                            <div className="easy-hs-left">
                                <div className="easy-hs-left-icon">
                                    <img src="/images/creategroup.svg" alt="creategroup" />
                                </div>
                                <div className="easy-hs-left-content">
                                    <h4>Create a subscription group</h4>
                                    <p>Set up a subscription plan by creating subscription group</p>
                                </div>
                            </div>
                            <div className="easy-hs-right">
                                <div className="easy-btn-wrapper">
                                    <Link href="/group/creategroup" className="easy-btn hcreate-group">Create subscription group</Link>
                                </div>
                            </div>
                            
                        </div>
                        <div className="easy-hs-group">
                            <div className="easy-hs-left">
                                <div className="easy-hs-left-icon">
                                    <img src="/images/widget.svg" alt="widget" />
                                </div>
                                <div className="easy-hs-left-content">
                                    <h4>Customise your subscription widget</h4>
                                    <p>Select style for your subscription widget</p>
                                </div>
                            </div>
                            <div className="easy-hs-right">
                                <div className="easy-btn-wrapper">
                                    <Link href="/settings/widget" className="easy-btn hcreate-group">Customize your widget</Link>
                                </div>
                            </div>
                        </div>
                        <div className="easy-hs-group">
                            <div className="easy-hs-left">
                                <div className="easy-hs-left-icon">
                                    <img src="/images/subscriptions.svg" alt="subscriptions" />
                                </div>
                                <div className="easy-hs-left-content">
                                    <h4>Manage Subscription</h4>
                                    <p>Take full control of subscriptions from your subscription page .</p>
                                </div>
                            </div>
                            <div className="easy-hs-right">
                                <div className="easy-btn-wrapper">
                                    <Link h href="/group" className="easy-btn hcreate-group">Manage subscriptions</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;