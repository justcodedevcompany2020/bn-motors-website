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
import { Link as LinkScroll } from 'react-scroll';


export default function Header(props) {
    const [headerScroll, setHeaderScroll] = useState(false);
    const [show_mobile_menu, setShowMobileMenu] = useState(false);
    const [name, setName] = useState('');
    const [name_error_text, setNameErrorText] = useState('');
    const [name_error, setNameError] = useState(false);

    const [email, setEmail] = useState('');
    const [email_error_text, setEmailErrorText] = useState('');
    const [email_error, setEmailError] = useState(false);

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

    const sendEmail = () => {

        if (name.length == 0 || email.length == 0) {
            if (name.length == 0) {
                setNameError(true)
                setNameErrorText('Поле является обязательным.')
            } else {
                setNameError(false)
                setNameErrorText('')
            }
            if (email.length == 0) {
                setEmailError(true)
                setEmailErrorText('Поле является обязательным.')
            } else {
                setEmailError(false)
                setEmailErrorText('')
            }
        } else {
            setEmailError(false)
            setEmailErrorText('')
            setNameError(false)
            setNameErrorText('')
            let formdata = new FormData();
            formdata.append("name", name);
            formdata.append("email", email);

            let requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch("https://bnmotors.justcode.am/api/send_email", requestOptions)
                .then(response => response.json())
                .then(result =>
                    {
                        console.log(result, 'send')
                        if (result?.status === true) {
                             setName('')
                            setEmail('')
                        } else if (result?.status === false) {
                            if (result?.message?.email[0] === "The email field must be a valid email address.") {
                                console.log(result.message, 'result?.message?.email[0]')

                                setEmailError(true)
                                setEmailErrorText('Неправильный адрес электронной почты')
                            } else {
                                setEmailError(false)
                                setEmailErrorText('')
                            }

                        }




                    }
                )
                .catch(error => console.log('error', error));
        }

    }



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
                                <LinkScroll to="about_us" smooth={true} className='footer_navigation_link'>
                                    O нас
                                </LinkScroll>
                                <LinkScroll to="models" smooth={true} className='footer_navigation_link'>
                                    Модельный ряд
                                </LinkScroll>
                                <LinkScroll to="become_dealer" smooth={true} className='footer_navigation_link'>
                                    Стать дилером
                                </LinkScroll>
                                <LinkScroll to="news" smooth={true} className='footer_navigation_link'>
                                    Новости
                                </LinkScroll>

                            </div>
                        </div>
                        <div className="footer_img">
                            <img src={require('../../../assets/images/top_img2.webp')} alt=""/>
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
                            {name_error &&
                                <p className='error_text'>{name_error_text}</p>
                            }
                            <div className="footer_news_form_input_button_wrapper">
                                <input type="text" placeholder='Электронная почта' name='email'
                                       className='footer_news_form_input_field2' value={email}
                                       onChange={(e) => {
                                           setEmail(e.target.value)
                                       }}
                                />
                                <button className='subscribe_to_news_btn' type='button' onClick={() => {sendEmail()}}>Подписаться на новости</button>
                            </div>
                            {email_error &&
                                <p className='error_text'>{email_error_text}</p>
                            }
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


                        </form>
                    </div>


                </div>
            </div>




        </>
    );
}
