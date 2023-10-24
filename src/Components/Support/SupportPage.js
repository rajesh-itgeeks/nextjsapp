"use client"
import React from "react";
import Image from 'next/image';
import Navbars from '../Common/Navbar';
import HeaderBar from '../Common/HeaderBar';
import Link from 'next/link';
function SupportPage() {
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
                                <h1>Support</h1>
                            </div>
                        </div>
                        <div class="easy-settings-section">
                            <a href="https://easysubscription.io/easydemo/wp-admin/admin.php?page=easy-subscription-help-guide">
                                <div class="easy-st-icon">
                                    <img src="/images/book-open.svg" alt="Help Guide" />
                                </div>
                                <div class="easy-st-content">
                                    <h3>Help Guide</h3>
                                    <p>Access our comprehensive help guide for clear instructions and valuable resources to resolve your queries.</p>
                                </div>
                            </a>
                        </div>
                        <div class="easy-settings-section">
                            <a href="https://easysubscription.io/contact-us/" target="_blank">
                                <div class="easy-st-icon">
                                    <img src="/images/mail-1.svg" alt="Email Support" />
                                </div>
                                <div class="easy-st-content">
                                    <h3>Email Support</h3>
                                    <p>Reach out to us via email for reliable and efficient support tailored to your needs.</p>
                                </div>
                            </a>
                        </div>
                        
                        
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default SupportPage;