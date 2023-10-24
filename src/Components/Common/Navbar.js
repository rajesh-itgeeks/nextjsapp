"use client"
import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname  } from "next/navigation";

function Navbar() {
    const pathname = usePathname();
    return (
        <>
            <div className="easy-logo">
                <img src="/images/easylogo.svg" alt="easy-logo" className="desktop-logo" />
                <img src="/images/easy-icon-mobile.jpg" alt="easy-logo" className="mobile-logo" style={{ display: 'none' }} />
            </div>
            <ul className="easy-menu">
                <li className={(pathname == "/") ? "easy-active" : ""}>
                    <Link href="/">
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2.25 7.25L9 2L15.75 7.25V15.5C15.75 15.8978 15.592 16.2794 15.3107 16.5607C15.0294 16.842 14.6478 17 14.25 17H3.75C3.35218 17 2.97064 16.842 2.68934 16.5607C2.40804 16.2794 2.25 15.8978 2.25 15.5V7.25Z"></path><path d="M6.75 17V9.5H11.25V17"></path></svg>
                        <span>Home</span>
                    </Link>
                </li>
                <li className={pathname == "/orders" ? "easy-active" : ""}>		
                    <Link href="/orders">
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 9.5H12L10.5 11.75H7.5L6 9.5H1.5"></path><path d="M4.0875 4.3325L1.5 9.5V14C1.5 14.3978 1.65804 14.7794 1.93934 15.0607C2.22064 15.342 2.60218 15.5 3 15.5H15C15.3978 15.5 15.7794 15.342 16.0607 15.0607C16.342 14.7794 16.5 14.3978 16.5 14V9.5L13.9125 4.3325C13.7883 4.08259 13.5969 3.87228 13.3597 3.72521C13.1226 3.57814 12.8491 3.50015 12.57 3.5H5.43C5.15094 3.50015 4.87745 3.57814 4.64028 3.72521C4.40312 3.87228 4.21168 4.08259 4.0875 4.3325V4.3325Z"></path>
                        </svg>
                        <span>Subscription Orders</span>
                    </Link>
                </li>
                <li className={pathname == "/group" ? "easy-active" : ""}>
                    <Link href="/group">
			            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.4425 10.5575L10.065 15.935C9.92569 16.0745 9.76026 16.1851 9.57816 16.2606C9.39606 16.3361 9.20087 16.3749 9.00375 16.3749C8.80663 16.3749 8.61144 16.3361 8.42934 16.2606C8.24724 16.1851 8.08181 16.0745 7.9425 15.935L1.5 9.5V2H9L15.4425 8.4425C15.7219 8.72354 15.8787 9.10372 15.8787 9.5C15.8787 9.89628 15.7219 10.2765 15.4425 10.5575V10.5575Z"></path><path d="M5.25 5.75H5.2575"></path></svg>
			            <span>Subscription Groups</span>
                    </Link>
                    {
                        pathname == "/group" && <ul>
                            <li>
                                <Link href="/group/creategroup" class="">Create Group</Link>
                            </li>
                        </ul>
                    }
			    </li>
                <li className={pathname == "/customers" ? "easy-active" : ""}>		
                    <Link href="/customers">
			            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15 16.25V14.75C15 13.9544 14.6839 13.1913 14.1213 12.6287C13.5587 12.0661 12.7956 11.75 12 11.75H6C5.20435 11.75 4.44129 12.0661 3.87868 12.6287C3.31607 13.1913 3 13.9544 3 14.75V16.25"></path><path d="M9 8.75C10.6569 8.75 12 7.40685 12 5.75C12 4.09315 10.6569 2.75 9 2.75C7.34315 2.75 6 4.09315 6 5.75C6 7.40685 7.34315 8.75 9 8.75Z"></path></svg>
			            <span>Customers</span>
                    </Link>
	            </li>
                <li className={pathname == "/settings" || pathname == "/settings/customerportal" || pathname == "/settings/notification" || pathname == "/settings/widget" || pathname == "/settings/ordertags" ? "easy-active" : ""}>		
                    <Link href="/settings">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-settings"><circle cx="12" cy="12" r="3"></    circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                        <span>Settings</span>
                    </Link>
                    {
                        pathname == "/settings" || pathname == "/settings/customerportal" || pathname == "/settings/notification" || pathname == "/settings/widget" || pathname == "/settings/ordertags" ? <ul>
					        <li>
                                {
                                    pathname == "/settings/customerportal" ? <Link href="/settings/customerportal" class="active-sub">Customer Portal</Link> : <Link href="/settings/customerportal">Customer Portal</Link>                                    
                                }
                            </li>
                            <li>
                                {
                                    pathname == "/settings/notification" ? <li><Link href="/settings/notification" class="active-sub">Notification</Link></li> : <li><Link href="/settings/notification" class="">Notification</Link></li>                                    
                                }
                            </li>
                            <li>
                                {
                                    pathname == "/settings/widget" ? <li><Link href="/settings/widget" class="active-sub">Widget</Link></li> : <li><Link href="/settings/widget" class="">Widget</Link></li>                                   
                                }
                            </li>
                            <li>
                                {
                                    pathname == "/settings/ordertags" ? <li><Link href="/settings/ordertags" class="active-sub">Order Tags</Link></li> : <li><Link href="/settings/ordertags" class="">Order Tags</Link></li>                                   
                                }
                            </li>
				        </ul> : ''
                    }
                    
			    </li>
                <li  className={pathname == "/support" ? "easy-active" : ""}>		
                    <Link href="/support">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-life-buoy"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></svg>
                        <span>Support</span>
                    </Link>
			    </li>
            </ul> 
        </>
    )
}

export default Navbar;