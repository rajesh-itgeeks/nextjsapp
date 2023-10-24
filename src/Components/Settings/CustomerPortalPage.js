"use client"
import React from "react";
import Image from 'next/image';
import Navbars from '../Common/Navbar';
import HeaderBar from '../Common/HeaderBar';
function CustomerPortalPage() {
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
                                <h1>Customer Portal</h1>
                            </div>
                        </div>
                        <div class="easy-hs-group easy-cust-portal">
                            <div class="easy-hs-left">
                                <div class="easy-hs-left-content">
                                    <h4>Pause and Resume Subscriptions</h4>
                                </div>
                            </div>
                            <div class="easy-hs-right">
                                <div class="easy-btn-wrapper">
                                    <a href="javascript:;" class="easy-btn pause-resume cust-portal-set" data-type="Enable" data-point="pauseresume">Enable</a>
                                </div>
                            </div>
                        </div>
                        <div class="easy-hs-group easy-cust-portal">
                            <div class="easy-hs-left">
                                <div class="easy-hs-left-content">
                                    <h4>Subscription Cancellation</h4>
                                </div>
                            </div>
                            <div class="easy-hs-right">
                                <div class="easy-btn-wrapper">
                                    <a href="javascript:;" class="easy-btn cancel-subs cust-portal-set" data-type="Enable" data-point="cancelsubs">Enable</a>
                                </div>
                            </div>
                        </div>
                        <div class="easy-hs-group easy-cust-portal">
                            <div class="easy-hs-left">
                                <div class="easy-hs-left-content">
                                    <h4>Skip Next Order</h4>
                                </div>
                            </div>
                            <div class="easy-hs-right">
                                <div class="easy-btn-wrapper">
                                    <a href="javascript:;" class="easy-btn next-order cust-portal-set" data-type="Enable" data-point="nextorder">Enable</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerPortalPage;