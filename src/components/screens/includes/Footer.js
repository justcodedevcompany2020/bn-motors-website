import React, { useState, useEffect, useRef } from 'react';
import '../../../assets/css/footer_style.css';
import {Link} from "react-router-dom";
import mailIcon from  "../../../assets/svg/mail_icon.svg";
import addressIcon from  "../../../assets/svg/address_icon.svg";
import vkIcon from  "../../../assets/svg/vk.svg";
import telegramIcon from  "../../../assets/svg/telegram.svg";
import youtubeIcon from  "../../../assets/svg/youtube.svg";
import zenIcon from  "../../../assets/svg/zen.svg";
import odnaklasnikiIcon from  "../../../assets/svg/odnoklasniki.svg";


export default function Header(props) {
    const [headerScroll, setHeaderScroll] = useState(false);
    const [show_mobile_menu, setShowMobileMenu] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [select_check1, setSelectCheck1] = useState('');
    const [select_check2, setSelectCheck2] = useState('');


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


    const handleOptionChange1 = () => {
        setSelectCheck1(!select_check1);

    };

    const handleOptionChange2 = () => {
        setSelectCheck2(!select_check2);

    };



    return (
        <>

            <div  className='footer'>
                <div className='footer_wrapper'>
                    <div className="footer_item1">
                        <a href='' className='footer_logo_link'>
                            <img src={require('../../../assets/images/bnm_logo.png')} alt=""/>
                        </a>
                        <div className='footer_navigation_links_mail_address_info_wrapper'>
                            <div className='footer_navigation_links_wrapper'>
                                <a href="" className="footer_navigation_link">O нас</a>
                                <a href="" className="footer_navigation_link">Модельный ряд</a>
                                <a href="" className="footer_navigation_link">Стать дилером</a>
                                <a href="" className="footer_navigation_link">Новости</a>
                            </div>
                        </div>

                    </div>

                    <div className="footer_item2">
                        <div className="customer_support_service_info_phone_wrapper">
                            <p className='customer_support_service_info_phone'>служба клиентской поддержки</p>
                            <a href="tel:8 800 000 00 00" className='customer_support_service_info_phone_number'>8 800 000 00 00</a>
                        </div>
                        <div className="social_links_title_wrapper">
                            <p className='social_links_title'>Социальные сети</p>
                            <div className='social_links_wrapper'>
                                <a href="" className="social_link">
                                    <img src={vkIcon} alt=""/>
                                </a>
                                <a href="" className="social_link">
                                    <img src={youtubeIcon} alt=""/>
                                </a>
                                <a href="" className="social_link">
                                    <img src={odnaklasnikiIcon} alt=""/>
                                </a>
                                <a href="" className="social_link">
                                    <img src={zenIcon} alt=""/>
                                </a>
                                <a href="" className="social_link">
                                    <img src={telegramIcon} alt=""/>
                                </a>
                            </div>
                        </div>

                        <form  className="footer_news_form">
                            <p className='footer_news_form_title'>новостная рассылка</p>
                            <div className="footer_news_form_input_wrapper">
                                <input type="text" placeholder='Имя' name='name'
                                       className='footer_news_form_input_field' value={name}
                                       onChange={(e) => {
                                           setName(e.target.value)
                                       }}
                                />
                            </div>
                            <div className="footer_news_form_input_button_wrapper">
                                <input type="text" placeholder='Электронная почта' name='email'
                                       className='footer_news_form_input_field2' value={email}
                                       onChange={(e) => {
                                           setEmail(e.target.value)
                                       }}
                                />
                                <button className='subscribe_to_news_btn'>Подписаться на новости</button>
                            </div>
                                <label className='checkbox_label'>
                                    <input
                                        type='checkbox'
                                        value={select_check1}
                                        checked={select_check1}
                                        onChange={handleOptionChange1}
                                    />


                                    <span className='checkmark'></span>
                                    <p className='checkbox_label_info'>Согласен на получение новостной/маркетинговой рассылки по email</p>
                                </label>

                            <label className='checkbox_label2'>
                                <input
                                    type='checkbox'
                                    value={select_check2}
                                    checked={select_check2}
                                    onChange={handleOptionChange2}
                                />


                                <span className='checkmark2'></span>
                                <p className='checkbox_label_info'>Согласен на получение новостной/маркетинговой рассылки по email</p>
                            </label>

                        </form>
                    </div>


                </div>
            </div>




        </>
    );
}
