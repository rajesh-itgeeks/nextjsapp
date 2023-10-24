"use client"
import Image from 'next/image';
import React from "react";
function HeaderBar() {
    return (
        <>
            <div className="easy-top-bar">
                <div className="easy-bar-icon">
                    <a href="javascript:;" className="easy-bar-icon dec-bar-show bar-show">
                        <img src="/images/bar-icons.svg" alt="bar-icon" />
                    </a>
                </div>
                <div className="easy-email-icon">
                    <a href="javascript:;">
                        <img src="/images/phone.svg" alt="bar-icon" />
                        <span>Schedule a Demo Call</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default HeaderBar;