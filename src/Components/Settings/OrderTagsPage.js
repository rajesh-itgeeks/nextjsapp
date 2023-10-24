"use client"
import React from "react";
import Image from 'next/image';
import Navbars from '../Common/Navbar';
import HeaderBar from '../Common/HeaderBar';
import Link from 'next/link';
function OrderTagsPage() {
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
                                <h1>Order Tags</h1>
                            </div>
                        </div>
                        <div class="easy-order-tg-inner ">
                            <div class="easy-order-tg-left">
                                <h3>Enable this tag for all suscription orders.</h3>
                                <input type="text" class="order-tag input-second easy-input" placeholder="easysubscription" value="xyz" />
                                <p>Tag for any order that contains a subscription product</p>
                                <div class="easy-btn-wrapper">
                                    <a class="easy-btn save-ordertag" href="javascript:;">Save</a> 
                                </div>
                                <p class="odtag-msg" style={{display : 'none'}}>Order tag is saved successfully.</p>
                            </div>
                            <div class="easy-order-tg-right">
                                <div class="easy-btn-wrapper">
                                    <a class="easy-btn enable-ordertag cust-portal-set" href="javascript:;" data-type="Enable" data-point="ordertag">Enable</a> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderTagsPage;