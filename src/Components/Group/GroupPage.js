"use client"
import React from "react";
import Navbars from '../Common/Navbar';
import HeaderBar from '../Common/HeaderBar';
import Link from 'next/link';
function GroupPage() {
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
                                <h1>Subscription Groups</h1>
                            </div>
                            <div className="easy-title-right">
                                <div className="easy-btn-wrapper">
                                    <Link href="/group/creategroup" className="easy-btn create-group">
                                        Create Group
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="easy-search-wrapper">
                            <div className="easy-search">
                                <input type="text" placeholder="Searching all subscription groups" id="sub-groups" className="easy-input-text easy-input" />
                                <a href="javascript:;" className="easy-btn search-group">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GroupPage;