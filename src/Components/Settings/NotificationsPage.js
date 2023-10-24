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
                        <div className="easy-body-div easy-deshboard">
                            <div className="easy-title">
                                <h1>Notification Settings</h1>
                            </div>
                        </div>
                        <div class="easy-settings-section easy-notif-sec">
                            <Link href="/settings/notification/emailactivation">
                                <div class="easy-st-content">
                                    <h3>Subscription order Confirmation</h3>
                                    <p>Sent to customers when subscription order is confirmed.</p>
                                </div>
                                <div class="easy-st-icon">
                                    <img src="/images/notification_edit.svg" alt="notification_edit" />
                                </div> 
                            </Link> 
                        </div>
                        <div class="easy-settings-section easy-notif-sec">
                            <a href="https://easysubscription.io/easydemo/wp-admin/admin.php?page=easy-subscription-cancel">
                                <div class="easy-st-content">
                                    <h3>Subscription status change</h3>
                                    <p>Sent to customers when subscriptions status will change</p>
                                </div>
                                <div class="easy-st-icon">
                                    <img src="/images/notification_edit.svg" alt="notification_edit" />
                                </div>
                            </a>
                        </div>
                        <div class="easy-settings-section easy-notif-sec">
                            <a href="https://easysubscription.io/easydemo/wp-admin/admin.php?page=easy-subscription-skip">
                                <div class="easy-st-content">
                                    <h3>Subscription recurring order skip</h3>
                                    <p>Sent to customers when their recurring order is skipped</p>
                                </div>
                                <div class="easy-st-icon">
                                    <img src="/images/notification_edit.svg" alt="notification_edit" />
                                </div>
                            </a>
                        </div>
                        <div class="easy-settings-section easy-notif-sec">
                            <a href="https://easysubscription.io/easydemo/wp-admin/admin.php?page=easy-subscription-invoice-success">
                                <div class="easy-st-content">
                                    <h3>Subscription recurring order invoce success</h3>
                                    <p>Sent to customers when their recurring order is skipped</p>
                                </div>
                                <div class="easy-st-icon">
                                    <img src="/images/notification_edit.svg" alt="notification_edit" />
                                </div>
                            </a>
                        </div>
                        <div class="easy-settings-section easy-notif-sec">
                            <a href="https://easysubscription.io/easydemo/wp-admin/admin.php?page=easy-subscription-invoice-failed">
                                <div class="easy-st-content">
                                    <h3>Subscription recurring order invoce failed</h3>
                                    <p>Sent to customers when their recurring order is skipped</p>
                                </div>
                                <div class="easy-st-icon">
                                    <img src="/images/notification_edit.svg" alt="notification_edit" />
                                </div>
                            </a>
                        </div>
                        <div class="easy-settings-section easy-notif-sec">
                            <a href="https://easysubscription.io/easydemo/wp-admin/admin.php?page=easy-subscription-paypal-confirmation">
                                <div class="easy-st-content">
                                    <h3>Subscription recurring order paypal buyer confirmation</h3>
                                    <p>Sent to customers when their recurring order is skipped</p>
                                </div>
                                <div class="easy-st-icon">
                                    <img src="/images/notification_edit.svg" alt="notification_edit" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotificationsPage;