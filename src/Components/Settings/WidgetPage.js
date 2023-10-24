"use client"
import React from "react";
import Image from 'next/image';
import Navbars from '../Common/Navbar';
import HeaderBar from '../Common/HeaderBar';
import Link from 'next/link';
function WidgetPage() {
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
                                <h1>Customize Widget</h1>
                            </div>
                        </div>
                        <div class="easy-widget-list">
                            <div class="easy-widget-item">
                                <img src="/images/wstyle1.jpg" />
                                <div class="easy-widget-value">
                                    <input type="radio" value="style1" name="widget-style" id="wstyle1" class="widget-style" checked="" />
                                    <label for="wstyle1">Style One</label>
                                </div>
                            </div>
                            <div class="easy-widget-item">
                                <img src="/images/wstyle2.jpg" />
                                <div class="easy-widget-value">
                                    <input type="radio" value="style2" name="widget-style" id="wstyle2" class="widget-style" />
                                    <label for="wstyle2">Style Two</label>
                                </div>
                            </div>
                            <div class="easy-widget-item">
                                <img src="/images/wstyle3.jpg" />
                                <div class="easy-widget-value">
                                    <input type="radio" value="style3" name="widget-style" id="wstyle3" class="widget-style" />
                                    <label for="wstyle3">Style Three</label>
                                </div>
                            </div>
                            <div class="easy-widget-item">
                                <img src="/images/wstyle4.jpg" />
                                <div class="easy-widget-value">
                                    <input type="radio" value="style4" name="widget-style" id="wstyle4" class="widget-style" />
                                    <label for="wstyle4">Style Four</label>
                                </div>
                            </div>
                            <div class="easy-widget-item">
                                <img src="/images/wstyle5.jpg" />
                                <div class="easy-widget-value">
                                    <input type="radio" value="style5" name="widget-style" id="wstyle5" class="widget-style" />
                                    <label for="wstyle5">Style Five</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WidgetPage;