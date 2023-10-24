"use client"
import React from "react";
import Image from 'next/image';
import Navbars from '../Common/Navbar';
import HeaderBar from '../Common/HeaderBar';
import Link from 'next/link';
function NotificationsPage() {
    return (
        <>
            <div className="easy-base">
                <div className="easy-left-menu">
                    <Navbars />
                </div>
                <div className="easy-right-div">
                    <HeaderBar />
                    <div className="easy-body">
                        <div class="easy-body-div easy-sub-activation">
                            <div class="easy-title">
                                <h1>Subscription order Confirmation</h1>
                                <p>Sent to customers when subscription order is confirmed.</p>
                            </div>
                            <div class="easy-btn-wrapper">
                                <a class="easy-btn variable-doc" href="javascript:;">Variable Doc</a> 
                            </div>
                        </div>
                        <div class="easy-sub-activation-email">
                            <div class="easy-sa-email-content">
                                <h3>Email content</h3>
                            </div>
                            <div class="easy-sa-email-head">
                                <div class="easy-saeh-left">
                                    <label>From name</label>
                                    <input type="text" placeholder="Store Name" value="Easy Subbscription" class="easy-input-text easy-input" id="store-name" />
                                    <p class="name-error easy-sa-email-error">Please enter your name</p>
                                </div>
                                <div class="easy-saeh-left">
                                    <label>From email</label>
                                    <input type="text" placeholder="Store Email" value="help@easysubbscription.com" class="easy-input-text easy-input" id="store-email" />
                                    <p class="email-error easy-sa-email-error">Please enter your name</p>
                                </div>
                                <div class="easy-saeh-left"> 
                                    <label>Email subject</label>
                                    <input type="text" placeholder="Order Confirmation" value="Subscription Order Confirmation" class="easy-input-text easy-input" id="store-subject" />
                                    <p class="subject-error easy-sa-email-error">Please enter your name</p>
                                </div>
                            </div>
                            <div class="easy-sa-email-body">
                                <label>Email template</label>

                            </div> 
                            <input type="hidden" value="Confirmation" id="mail-type" />
                            <div class="easy-sa-email-btn">
                                <div class="easy-btn-wrapper">
                                    <a class="easy-btn easy-sa-email-save" href="javascript:;">Save</a><a class="easy-btn easy-sa-email-send" href="javascript:;">Send a test email</a><a class="easy-btn easy-sa-email-preview " href="javascript:;"> Preview </a> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotificationsPage;