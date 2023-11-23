import React, { useState, useEffect } from 'react';
 import { Link } from 'react-router-dom';
 import '../../assets/css/home_style.css';
 import Header from "./includes/Header";
 import plusIcon from '../../assets/svg/plus_icon.svg'
 import loadMoreIcon from '../../assets/svg/arrow_icon.svg'




 export default function Home (props) {
     const [headerScroll, setHeaderScroll] = useState(false);
     const [news_list, setNewsList] = useState([
         {
             id: 1,
             img: require('../../assets/images/news_img1.png'),
             date: '18.08.23',
             title: 'Открытие завода BNM',
             info: 'Краткое описание события',
         },
         {
             id: 2,
             img: require('../../assets/images/news_img2.png'),
             date: '25.08.23 ',
             title: 'Презентация BAW',
             info: 'Краткое описание события',
         },
         {
             id: 3,
             img: require('../../assets/images/news_img3.png'),
             date: '05.09.23',
             title: 'Комтранс 2023 | BAW',
             info: 'Краткое описание события',
         },
     ]);

         return (
         <>


             <div className='main_wrapper' id='general_page'>
                <Header/>
                <main>
                    <section className='top'>
                        <div className="top_wrapper">
                            <div className="top_img">
                                <img src={require('../../assets/images/top_img.jpg')} alt=""/>
                            </div>
                        </div>
                    </section>
                    <section className="company_history">
                        <div className="company_history_wrapper">
                            <h1 className="company_history_title">История компании</h1>
                            <div className="company_history_items_wrapper">
                                <div className="company_history_info_item">
                                    <p className='company_history_info_item_text'>
                                        Beijing Automobile Works была основана в 1958 году и стала второй автомобилестроительной компанией в Китае. Впоследствии, в 1987 году, она была объединена с Beijing Motorcycle Works. В результате образовалась компания Beijing Automobile
                                        and Motorcycle United Company (BAM). В 2001 году она слилась с автосборочным цехом Beijing и была образована корпорация Beijing Automobile Works Co., Ltd (BAW). Компания BAW считается одним из самых крупных автомобилестроительных производств
                                        в Пекине. Ее сфера деятельности включает развитие, производство и продажу легковых внедорожников, грузовиков и специальных автомобилей.
                                    </p>
                                    <p className="company_history_info_item_text">
                                        На сегодняшний день BAW выпускает свой модельный ряд автомобилей более чем в 150 комплектациях. Корпорация BAW является официальным поставщиком армии Китая и выпускает также специальные военные автомобили, например, автомобиль-
                                        -амфибию «Amphicar». Главный офис BAW находится в районе Chaoyang (Пекин). Производственные площади размещаются на двух заводах: один находится в районе Chaoyang, второй — в районе Shunyi. Производительность — 100 тыс. автомобилей в год.
                                        Обширная дистрибьюторская и сервисная сеть BAW покрывает весь Китай.
                                    </p>
                                    <p className="company_history_info_item_text">
                                        В 1953 году при финансовой поддержке государства был основан первый завод автомобильных запчастей и аксессуаров, производящий в основном карбюраторы. В 1958 завод был переименован в Beijing Automobile Works. Государственный деятель
                                        Ден Сяопин посетил Beijing Automobile Works, а президент Мао сам лично проверял пассажирский автомобиль Jinggangshan Brand. В 1961 году произведен первый военный внедорожник BJ210. В 1965 году производятся внедорожники BJ212. В 1982 г.
                                        изготовлен легкий грузовик BJ122 и легкие автобусы BJ620. В 1984 г. завод Beijing Automobile Works объединен с AMC (американским производителем автомобилей), чтобы создать первое коммерческое предприятие Beijing Jeep, Ltd. (BJC), производящее
                                        внедорожники.
                                    </p>
                                    <p className="company_history_info_item_text">
                                        В 1986 изготовлен пассажирский автомобиль BJ752. В 1987 завод объединен с Beijing Motorcycle Company, чтобы организовать Beijing Automobile and Motorcycle United company (BAM). В 1994 была основана Beijing Automobile Assembly (BAA), производящая
                                        специальные легковые внедорожники. В 1997 завод скооперировался с другими 99 китайскими компаниями, чтобы организовать Beijing Foton — один из самых больших производителей автомобилей. В сентябре 2001 года объединен с Beijing Automobile
                                        Assembly для создания Beijing Automobile Works Co., Ltd. (BAW). В 2006 году BAW выходит на Росийский рынок и представляет две модели легких грузовиков: 2,5 и 4 тонны.
                                    </p>
                                    <p className="company_history_info_item_text">
                                        Высокоэффективная управленческая группа BAW. С каждым годом растут объемы производства BAW. Так, завод в Chaoyang занимает площадь 79 тыс. м .
                                        2 и выпускает более 20 тыс. автомобилей в год. Второй завод в Shunyi занимает площадь 310 тыс. м и может производить до 80 тыс. автомобилей в год. Используя
                                        современное управление и технологии, BAW неуклонно улучшает качество автомобилей и сервисного обслуживания.
                                    </p>
                                    <p className="company_history_info_item_text">
                                        В 2023 году BAW подписала эксклюзивное соглашение с компанией БН-Моторс по поставкам легких коммерческих грузовиков.
                                        В итоге создается проект BNM, благодаря которому формируется производственная площадка в г. Брянск,
                                        а через некоторое время открываются дилерские центры по всей России!

                                    </p>
                                </div>
                                <div className="company_history_img_item">
                                    <img src={require('../../assets/images/history_img.png')} alt=""/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="cars_models">
                        <div className="cars_models_wrapper">
                            <h1 className='cars_models_title'>Модельный ряд</h1>
                            <div className="cars_models_items_wrapper">
                                <div className="cars_models_item">
                                    <div className="cars_models_item_info_box">
                                        <p className="cars_models_item_title">BNM I</p>
                                        <p className="cars_models_item_info">Экономичное решение
                                            для вашего бизнеса
                                        </p>
                                    </div>

                                    <div className="cars_models_item_img">
                                        <img src={require('../../assets/images/car_model_img1.png')} className='cars_models_item_img_child' alt=""/>
                                        <button className='more_details_button'>
                                            <span className='more_details_button_text'>Подробнее</span>
                                            <img src={plusIcon} alt=""/>
                                        </button>
                                    </div>
                                </div>
                                <div className="cars_models_item">
                                    <div className="cars_models_item_info_box">
                                        <p className="cars_models_item_title">BNM II </p>
                                        <p className="cars_models_item_info">
                                            Универсальное решение для бизнеса
                                            и семьи
                                        </p>
                                    </div>

                                    <div className="cars_models_item_img">
                                        <img src={require('../../assets/images/car_model_img2.png')} className='cars_models_item_img_child' alt=""/>
                                        <button className='more_details_button'>
                                            <span className='more_details_button_text'>Подробнее</span>
                                            <img src={plusIcon} alt=""/>
                                        </button>
                                    </div>
                                </div>
                                <div className="cars_models_item">
                                    <div className="cars_models_item_info_box">
                                        <p className="cars_models_item_title">MPV</p>
                                        <p className="cars_models_item_info">
                                            Автомобиль для бизнеса с комфортом
                                            автомобиля бизнес-класса.
                                        </p>
                                    </div>

                                    <div className="cars_models_item_img">
                                        <img src={require('../../assets/images/car_model_img3.png')}  className='cars_models_item_img_child' alt=""/>
                                        <button className='more_details_button'>
                                            <span className='more_details_button_text'>Подробнее</span>
                                            <img src={plusIcon} alt=""/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="car_models_details">
                        <div className="car_models_details_wrapper">
                            <div className="car_models_details_img">
                                <img src={require('../../assets/images/model_img.jpg')} alt=""/>
                            </div>
                            <div className="car_models_details_img">
                                <img src={require('../../assets/images/model_img2.jpg')} alt=""/>
                            </div>
                        </div>
                    </section>
                    <section className="company_news">
                        <div className="company_news_wrapper">
                            <h1 className='company_news_title'>Новости компании</h1>
                            <div className="company_news_items_wrapper">
                                {news_list.map((item, index) => {
                                    return (
                                        <div className="company_news_item" key={index}>
                                            <div className="company_news_item_img">
                                                <img src={item.img} alt=""/>
                                            </div>
                                            <p className="company_news_item_date_info">
                                                {item.date}
                                            </p>
                                            <p className="company_news_item_title">
                                                {item.title}
                                            </p>
                                            <p className="company_news_item_info">
                                                {item.info}
                                            </p>
                                            <button className='company_news_item_more_button'>
                                                <span className='company_news_item_more_button_text'>Подробнее</span>
                                                <img src={plusIcon} alt=""/>
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                            <button className='load_more_news_button'>
                                <span className='load_more_news_button_text'>
                                    Загрузить ещё
                                </span>
                                <img src={loadMoreIcon} alt=""/>
                            </button>
                        </div>
                    </section>
                </main>
             </div>

         </>

     )


 }



