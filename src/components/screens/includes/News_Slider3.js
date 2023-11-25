import React  from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";


import "swiper/css";
import "swiper/css/pagination";

import '../../../assets/css/home_style.css'


export default function App() {
    return (
        <>
            <Swiper
                grabCursor={true}
                slidesPerView={1}
                modules={[Autoplay, Navigation]}
                loop={true}
                loopedSlides={1}
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                }}
                // pagination={{ clickable: true }}
                className="top_slider"
            >
                <SwiperSlide>
                    <div className="news_slider_item">
                        <div className="news_slider_img_parent">
                            <img src={require('../../../assets/images/news_img1.png')} alt=""/>
                        </div>
                        <div className='news_slider_info_box'>
                            <p className='news_slider_info_box_title'>The standard Lorem Ipsum passage, used since the 1500s</p>
                            <p className='news_slider_info_box_text'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className="news_slider_item">
                        <div className="news_slider_img_parent">
                            <img src={require('../../../assets/images/news_img2.png')} alt=""/>
                        </div>
                        <div className='news_slider_info_box'>
                            <p className='news_slider_info_box_title'>The standard Lorem Ipsum passage, used since the 1500s</p>
                            <p className='news_slider_info_box_text'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>

                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="news_slider_item">
                        <div className="news_slider_img_parent">
                            <img src={require('../../../assets/images/news_img3.png')} alt=""/>
                        </div>
                        <div className='news_slider_info_box'>
                            <p className='news_slider_info_box_title'>The standard Lorem Ipsum passage, used since the 1500s</p>
                            <p className='news_slider_info_box_text'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </div>

                </SwiperSlide>

                <div className='prev_next_btns_wrapper'>
                    <button className='prev'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20" fill="none">
                            <path d="M16.875 10H3.75M8.125 5L3.125 10L8.125 15" stroke="#dd2b1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button className='next'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20" fill="none">
                            <path d="M3.125 10H16.25M11.875 5L16.875 10L11.875 15" stroke="#dd2b1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                </div>

            </Swiper>
        </>
    );
}

