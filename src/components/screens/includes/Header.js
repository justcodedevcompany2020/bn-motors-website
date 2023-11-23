import React, { useState, useEffect, useRef } from 'react';
import '../../../assets/css/header_style.css';
import {Link} from "react-router-dom";
import mailIcon from  "../../../assets/svg/mail_icon.svg";
import addressIcon from  "../../../assets/svg/address_icon.svg";


export default function Header(props) {
    const [headerScroll, setHeaderScroll] = useState(false);
    const [show_mobile_menu, setShowMobileMenu] = useState(false);


    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        window.addEventListener('load', handleLoad);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('load', handleLoad);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLoad = () => {};

    const handleScroll = (ev) => {
        const scrollTop = window.scrollY;

        if (scrollTop > 0) {
            setHeaderScroll(true);
        } else {
            setHeaderScroll(false);
        }
    };
    const disableBodyScroll = () => {
        document.body.style.overflow = "hidden";
    };

    const enableBodyScroll = () => {
        document.body.style.overflow = "auto";
    };




    return (
        <>

            <div  className='header'>
                <div className='header_wrapper'>
                    <a href='' className='header_logo_link'>
                        <img src={require('../../../assets/images/bnm_logo.png')} alt=""/>
                    </a>
                    <div className='headers_navigation_links_mail_address_info_wrapper'>
                        <div className='headers_navigation_links_wrapper'>
                            <a href="" className="headers_navigation_link">O нас</a>
                            <a href="" className="headers_navigation_link">Модельный ряд</a>
                            <a href="" className="headers_navigation_link">Стать дилером</a>
                            <a href="" className="headers_navigation_link">Новости</a>
                        </div>
                        <div className='headers_mail_address_info_item_wrapper'>
                            <div className='headers_mail_address_info_item'>
                                <div className="headers_mail_address_info_item_icon">
                                    <img src={mailIcon} alt=""/>
                                </div>
                                <div className='header_mail_links_wrapper'>
                                    <a href="mailto:info@bnm.com" className="header_mail_link">info@bnm.com</a>
                                    <a href="mailto:info@bnmzavod.com" className="header_mail_link">info@bnmzavod.com</a>
                                </div>
                            </div>
                            <div className='headers_mail_address_info_item'>
                                <div className="headers_mail_address_info_item_icon">
                                    <img src={addressIcon} alt=""/>
                                </div>
                                <p className="headers_mail_address_info_item_text">
                                    241013, Россия, г.Брянск,
                                    улица 22-го съезда КПСС, 130
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




        </>
    );
}
