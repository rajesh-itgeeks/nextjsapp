"use client"
import React from "react";
import Image from 'next/image';
import Navbars from '../Common/Navbar';
import HeaderBar from '../Common/HeaderBar';
import Link from 'next/link';
function SettingsPage() {
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
                                <h1>Settings</h1>
                            </div>
                        </div>
                        <div className="easy-settings-section">
                            <Link href="/settings/customerportal">
                                <div className="easy-st-icon">
                                    <img src="/images/settings.svg" alt="settings" />
                                </div>
                                <div className="easy-st-content">
                                    <h3>Customer portal</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="easy-settings-section">
                            <Link href="/settings/notification">
                                <div className="easy-st-icon">
                                        <img src="/images/bell.svg" alt="settings" />
                                    </div>
                                    <div className="easy-st-content">
                                        <h3>Notifications</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="easy-settings-section">
                            <Link href="/settings/widget">
                                <div className="easy-st-icon">
                                    <img src="/images/edit-icon.svg" alt="settings" />
                                </div>
                                <div className="easy-st-content">
                                    <h3>Widget</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="easy-settings-section">
                            <Link href="/settings/ordertags">
                                <div className="easy-st-icon">
                                    <img src="/images/tag.svg" alt="settings" style={{width : '18px'}} />
                                </div>
                                <div className="easy-st-content">
                                    <h3>Order Tags</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="easy-settings-section">
                            <a href="javascript:;">
                                <div className="easy-st-icon">
                                    <img src="/images/tag.svg" alt="settings" style={{width : '18px'}}/>
                                </div>
                                <div className="easy-st-content">
                                    <h3>Payment Settings</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SettingsPage;