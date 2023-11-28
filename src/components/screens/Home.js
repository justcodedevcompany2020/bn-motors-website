import React, { useState, useEffect } from 'react';
 import { Link } from 'react-router-dom';
 import '../../assets/css/home_style.css';
 import Header from "./includes/Header";
 import Footer from "./includes/Footer";
 import TopSlider from "./includes/Top_Slider";
 import NewsSlider1 from "./includes/News_Slider1";
 import plusIcon from '../../assets/svg/plus_icon.svg'
 import loadMoreIcon from '../../assets/svg/arrow_icon.svg'
 import dealerIcon1 from '../../assets/svg/dealer_icon1.svg'
 import dealerIcon2 from '../../assets/svg/dealer_icon2.svg'
 import dealerIcon3 from '../../assets/svg/dealer_icon3.svg'
 import closeIcon from '../../assets/svg/close_icon.svg'




 export default function Home (props) {
     const [headerScroll, setHeaderScroll] = useState(false);
     const [show_mpv_popup, setShowMpvPopup] = useState(false);
     const [show_bnm1_popup, setShowBnm1Popup] = useState(false);
     const [show_bnm2_popup, setShowBnm2Popup] = useState(false);
     const [next_page_url, setNextPageUrl] = useState(null);

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
     const [single_news_info, setSingleNewsInfo] = useState([]);



     const [show_news_single_page, setShowNewsSinglePage] = useState(false);
     const [img_path, setImgPath] = useState('https://bnmotors.justcode.am/uploads/');

     const loadMore = async () => {
         console.log(next_page_url, 'next')
         let requestOptions = {
             method: 'GET',
             redirect: 'follow',
         };

         try {
             const response = await fetch(`${next_page_url}`, requestOptions);
             const result = await response.json();

             console.log(result, 'news more');

             if (result?.status === true) {
                 setNewsList((prevNewsList) => [
                     ...prevNewsList,
                     ...result?.data?.data, // Assuming result.data.data is an array of news items
                 ]);

                 setNextPageUrl(result?.data?.next_page_url);
             }
         } catch (error) {
             console.log('error', error);
         }
     };

     const [countries_list, setCountriesList] = useState([
         {
             id: 1,
             name: 'РЯЗАНЬ',
         },
         {
             id: 2,
             name: 'ТАМБОВ',
         },
         {
            id: 3,
            name: 'ЛИПЕЦК',
         },
         {
             id: 4,
             name: 'СМОЛЕНСК',
         },
         {
             id: 5,
             name: 'ХАБАРОВСК',
         },
         {
             id: 6,
             name: 'ЧИТА',
         },
         {
             id: 7,
             name: 'ИРКУТСК',
         }
     ]);
     const [mpv_list, setMpvList] = useState([
         {
             id: 1,
             img: require('../../assets/images/mpv_img1.webp')
         },
         {
             id: 2,
             img: require('../../assets/images/mpv_img2.webp')
         },
     ]);
     const [bnm_list1, setMpvList1] = useState([
         {
             id: 1,
             img: require('../../assets/images/bnm_one_img1.webp')
         },
         {
             id: 2,
             img: require('../../assets/images/bnm_one_img2.webp')
         },
         {
             id: 3,
             img: require('../../assets/images/bnm_one_img3.webp')
         },
         {
             id: 4,
             img: require('../../assets/images/bnm_one_img4.webp')
         },
         {
             id: 5,
             img: require('../../assets/images/bnm_one_img5.webp')
         },

     ]);
     const [bnm_list2, setMpvList2] = useState([
         {
             id: 1,
             img: require('../../assets/images/bnm_second_img1.webp')
         },
         {
             id: 2,
             img: require('../../assets/images/bnm_second_img2.webp')
         },
         {
             id: 3,
             img: require('../../assets/images/bnm_second_img3.webp')
         },
         {
             id: 4,
             img: require('../../assets/images/bnm_second_img4.webp')
         },
         {
             id: 5,
             img: require('../../assets/images/bnm_second_img5.webp')
         },

     ]);

     useEffect(() => {
         getCountries();
     }, [])
     useEffect(() => {
         getNews();
     }, [])

     const disableBodyScroll = () => {
         document.body.style.overflow = "hidden";
     };

     const enableBodyScroll = () => {
         document.body.style.overflow = "auto";
     };

     const showMpvPopup = () => {
         setShowMpvPopup(true)
         disableBodyScroll()
     }
     const showBnm1Popup = () => {
         setShowBnm1Popup(true)
         disableBodyScroll()
     }
     const showBnm2Popup = () => {
         setShowBnm2Popup(true)
         disableBodyScroll()
     }
     const getCountries = () => {

         let requestOptions = {
             method: 'GET',
             redirect: 'follow'
         };

         fetch("https://bnmotors.justcode.am/api/get_country", requestOptions)
             .then(response => response.json())
             .then(result =>
                 {
                     if (result?.status === true) {
                          setCountriesList(result?.data)
                     }
                     console.log(result, 'country')

                 }

             )
             .catch(error => console.log('error', error));
     }
     const getNews = () => {

         let requestOptions = {
             method: 'GET',
             redirect: 'follow'
         };

         fetch("https://bnmotors.justcode.am/api/news?page=1", requestOptions)
             .then(response => response.json())
             .then(result =>
                 {
                     console.log(result, 'news')

                     if (result?.status === true) {
                         setNewsList(result?.data?.data)
                         setNextPageUrl(result?.data?.next_page_url)
                     }

                 }
             )
             .catch(error => console.log('error', error));
     }
     const getDate = (date) => {
         console.log(date, 'dataaaaaaaa');
         const moscowTimeZone = 'Europe/Moscow';

         // let timestamp = date;
         // timestamp = timestamp.substring(0, 10);
         date = new Date(date);


         // Use toLocaleDateString to format the date in Moscow time zone
         const options = {
             timeZone: moscowTimeZone,
             day: 'numeric',
             month: 'numeric',
             year: 'numeric',
         };

         const moscowDate = date.toLocaleDateString('ru-RU', options);

         console.log('Moscow Date:', moscowDate);
         return moscowDate;
     }

     const showNewsSinglePage = (id) => {
         console.log(id, 'news id')

         let requestOptions = {
             method: 'GET',
             redirect: 'follow'
         };

         fetch(`https://bnmotors.justcode.am/api/single_news/news_id=${id}`, requestOptions)
             .then(response => response.json())
             .then(result =>
                 {
                     if (result?.status === true) {
                            setSingleNewsInfo(result?.data)
                            setShowNewsSinglePage(true)
                             disableBodyScroll()
                     }
                     console.log(result, 'single news')
                 }

             )
             .catch(error => console.log('error', error));
     }

     return (
         <>


             <div className='main_wrapper' id='general_page'>
                <Header/>
                <main>
                    <section className='top'>
                        <div className="top_wrapper">
                            <div className="top_img">
                                <img src={require('../../assets/images/top_img.webp')} alt=""/>
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
                                    <img src={require('../../assets/images/history_img.webp')} alt=""/>
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
                                        <img src={require('../../assets/images/car_model_img1.webp')} className='cars_models_item_img_child' alt=""/>
                                        <button className='more_details_button' onClick={() => showBnm1Popup()}>
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
                                        <img src={require('../../assets/images/car_model_img2.webp')} className='cars_models_item_img_child' alt=""/>
                                        <button className='more_details_button' onClick={() => showBnm2Popup()}>
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
                                        <img src={require('../../assets/images/car_model_img3.webp')}  className='cars_models_item_img_child' alt=""/>
                                        <button className='more_details_button' onClick={() => showMpvPopup()}>
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
                                <img src={require('../../assets/images/model_img.webp')} alt=""/>
                            </div>
                            <div className="car_models_details_img">
                                <img src={require('../../assets/images/model_img2.webp')} alt=""/>
                            </div>
                        </div>
                    </section>
                    <section className="top_slider">
                        <div className="top_slider_wrapper">
                            <div className='top_slider_box'>
                                <TopSlider/>
                            </div>
                            <div className="top_slider_info_item">
                                {/*<div className="top_slider_info_item_line"></div>*/}
                                <div className="top_slider_info_item_child">
                                    <div className='top_slider_info_item_child_title_parent'>
                                        <p className="top_slider_info_item_child_title">Конструкция корпуса</p>
                                    </div>
                                    <div className='top_slider_info_item_child_detail_parent'>
                                        <p className="top_slider_info_item_child_detail">Кузов на раме</p>
                                    </div>
                                </div>
                                <div className="top_slider_info_item_child">
                                    <div className='top_slider_info_item_child_title_parent'>
                                        <p className="top_slider_info_item_child_title">Габаритные размеры (мм)</p>
                                    </div>
                                    <div className='top_slider_info_item_child_detail_parent'>
                                        <p className="top_slider_info_item_child_detail">5585/5985×1880×2050</p>
                                    </div>
                                </div>
                                <div className="top_slider_info_item_child">
                                    <div className='top_slider_info_item_child_title_parent'>
                                        <p className="top_slider_info_item_child_title">Размер грузового отсека (мм)</p>
                                    </div>
                                    <div className='top_slider_info_item_child_detail_parent'>
                                        <p className="top_slider_info_item_child_detail">
                                            3300×1780×360
                                            3700×1780×360
                                            3000×1780×360
                                        </p>
                                    </div>

                                </div>
                                <div className="top_slider_info_item_child">
                                    <div className='top_slider_info_item_child_title_parent'>
                                        <p className="top_slider_info_item_child_title">Колесная база (мм)</p>
                                    </div>
                                    <div className='top_slider_info_item_child_detail_parent'>
                                        <p className="top_slider_info_item_child_detail">3400/3600</p>
                                    </div>
                                </div>
                                <div className="top_slider_info_item_child">
                                    <div className='top_slider_info_item_child_title_parent'>
                                        <p className="top_slider_info_item_child_title">Места</p>
                                    </div>
                                    <div className='top_slider_info_item_child_detail_parent'>
                                        <p className="top_slider_info_item_child_detail">2/5</p>
                                    </div>
                                </div>
                                <div className="top_slider_info_item_child">
                                    <div className='top_slider_info_item_child_title_parent'>
                                        <p className="top_slider_info_item_child_title">Дорожный просвет (мм)</p>
                                    </div>
                                    <div className='top_slider_info_item_child_detail_parent'>
                                        <p className="top_slider_info_item_child_detail">170</p>
                                    </div>
                                </div>
                                <div className="top_slider_info_item_child">
                                    <div className='top_slider_info_item_child_title_parent'>
                                        <p className="top_slider_info_item_child_title">Снаряженная масса (кг)</p>
                                    </div>
                                    <div className='top_slider_info_item_child_detail_parent'>
                                        <p className="top_slider_info_item_child_detail">1595/1740</p>
                                    </div>
                                </div>
                                <div className="top_slider_info_item_child">
                                    <div className='top_slider_info_item_child_title_parent'>
                                        <p className="top_slider_info_item_child_title">Грузоподъемность (кг)</p>

                                    </div>
                                    <div className='top_slider_info_item_child_detail_parent'>
                                        <p className="top_slider_info_item_child_detail">2000/2500</p>
                                    </div>
                                </div>
                                <div className="top_slider_info_item_child">
                                    <div className='top_slider_info_item_child_title_parent'>
                                        <p className="top_slider_info_item_child_title">Шины</p>
                                    </div>
                                    <div className='top_slider_info_item_child_detail_parent'>
                                        <p className="top_slider_info_item_child_detail">185R14LT×7</p>
                                    </div>
                                </div>
                                <div className="top_slider_info_item_child">
                                    <div className='top_slider_info_item_child_title_parent'>
                                        <p className="top_slider_info_item_child_title">Подвеска передняя</p>
                                    </div>
                                    <div className='top_slider_info_item_child_detail_parent'>
                                        <p className="top_slider_info_item_child_detail">Листовая рессора</p>
                                    </div>
                                </div>
                                <div className="top_slider_info_item_child">
                                    <div className='top_slider_info_item_child_title_parent'>
                                        <p className="top_slider_info_item_child_title">Задняя подвеска</p>
                                    </div>
                                    <div className='top_slider_info_item_child_detail_parent'>
                                        <p className="top_slider_info_item_child_detail">Листовая рессора</p>
                                    </div>
                                </div>
                                <div className="top_slider_info_item_child">
                                    <div className='top_slider_info_item_child_title_parent'>
                                        <p className="top_slider_info_item_child_title">Рабочий объем (мл)</p>
                                    </div>
                                    <div className='top_slider_info_item_child_detail_parent'>
                                        <p className="top_slider_info_item_child_detail">1590/1962</p>
                                    </div>
                                </div>
                                <div className="top_slider_info_item_child">
                                    <div className='top_slider_info_item_child_title_parent'>
                                        <p className="top_slider_info_item_child_title">Максимальная мощность (кВт)</p>
                                    </div>
                                    <div className='top_slider_info_item_child_detail_parent'>
                                        <p className="top_slider_info_item_child_detail">91/106</p>

                                    </div>
                                </div>
                                <div className="top_slider_info_item_child">
                                    <div className='top_slider_info_item_child_title_parent'>
                                        <p className="top_slider_info_item_child_title">Максимальный крутящий момент (Н м)</p>
                                    </div>
                                    <div className='top_slider_info_item_child_detail_parent'>
                                        <p className="top_slider_info_item_child_detail">161/200</p>
                                    </div>
                                </div>
                                <div className="top_slider_info_item_child">
                                    <div className='top_slider_info_item_child_title_parent'>
                                        <p className="top_slider_info_item_child_title">Максимальная скорость (км/ч)</p>
                                    </div>
                                    <div className='top_slider_info_item_child_detail_parent'>
                                        <p className="top_slider_info_item_child_detail">105</p>
                                    </div>
                                </div>
                                <div className="top_slider_info_item_child">
                                    <div className='top_slider_info_item_child_title_parent'>
                                        <p className="top_slider_info_item_child_title">Тип привода</p>
                                    </div>
                                    <div className='top_slider_info_item_child_detail_parent'>
                                        <p className="top_slider_info_item_child_detail">Задний привод</p>
                                    </div>
                                </div>
                                <div className="top_slider_info_item_child">
                                    <div className='top_slider_info_item_child_title_parent'>
                                        <p className="top_slider_info_item_child_title">Тип тормоза</p>
                                    </div>
                                    <div className='top_slider_info_item_child_detail_parent'>
                                        <p className="top_slider_info_item_child_detail">Дисковый/барабанный</p>
                                    </div>
                                </div>
                                <div className="top_slider_info_item_child">
                                    <div className='top_slider_info_item_child_title_parent'>
                                        <p className="top_slider_info_item_child_title">Коробка передач</p>
                                    </div>
                                    <div className='top_slider_info_item_child_detail_parent'>
                                        <p className="top_slider_info_item_child_detail">5MT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="company_news">
                        <div className="company_news_wrapper">
                            <h1 className='company_news_title'>Новости компании</h1>
                            <div className="company_news_items_wrapper">
                                {news_list?.map((item, index) => {
                                    return (
                                        <div className="company_news_item" key={index}>
                                            <div className='company_news_item_img_info_box'>
                                                {item?.photo?.length > 0 &&
                                                    <div className="company_news_item_img">
                                                        <img src={img_path + item?.photo[0]?.photo} alt=""/>
                                                    </div>
                                                }

                                                <p className="company_news_item_date_info">
                                                    {getDate(item?.created_at)}
                                                </p>
                                                <p className="company_news_item_title">
                                                    {item?.title}
                                                </p>
                                                <p className="company_news_item_info">
                                                    {item?.description}
                                                </p>
                                            </div>

                                            <button className='company_news_item_more_button' onClick={() => {showNewsSinglePage(item?.id)}}>
                                                <span className='company_news_item_more_button_text'>Подробнее</span>
                                                <img src={plusIcon} alt=""/>
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                            <button className='load_more_news_button' onClick={() => loadMore()}>
                                <span className='load_more_news_button_text'>
                                    Загрузить ещё
                                </span>
                                <img src={loadMoreIcon} alt=""/>
                            </button>
                        </div>
                    </section>
                    <section className="how_to_become_dealer">
                        <div className="how_to_become_dealer_wrapper">
                            <div className='how_to_become_dealer_img'>
                                <img src={require('../../assets/images/dealer_img.webp')} alt=""/>
                                <p className='how_to_become_dealer_img-title'>Стать дилером BNM в России</p>
                            </div>
                            <div className='how_to_become_dealer_info_wrapper'>
                                <h1 className='how_to_become_dealer_title'>КАК СТАТЬ ДИЛЕРОМ?</h1>
                                <p className='how_to_become_dealer_info'>
                                    В соответствии со стратегией развития бизнеса компании BNM, эксклюзивный дистрибутор марки BAW в России, расширяет и обновляет свою дилерскую сеть и приглашает
                                    к сотрудничеству партнеров. Обращаем Ваше внимание на то, что выбор дилера в каждом регионе проводится на конкурсной основе и согласно приоритетным задачам дистрибутора
                                </p>
                                <div className="how_to_become_dealer_items_wrapper">
                                    <div className="how_to_become_dealer_item">
                                        <div className="how_to_become_dealer_item_icon">
                                            <img src={dealerIcon2} alt=""/>
                                        </div>
                                        <p className="how_to_become_dealer_item_title">Скачать анкету</p>
                                        <p className="how_to_become_dealer_item_info">
                                            Скачайте форму презентации заявителя,
                                            и заполните необходимые данные.
                                        </p>
                                    </div>
                                    <div className="how_to_become_dealer_item">
                                        <div className="how_to_become_dealer_item_icon">
                                            <img src={dealerIcon3} alt=""/>
                                        </div>
                                        <p className="how_to_become_dealer_item_title">Отправить заявку</p>
                                        <p className="how_to_become_dealer_item_info">
                                            Заполненную анкету кандидата необходимо
                                            направить по электронной почте info@bnm.com.
                                            После рассмотрения анкеты кандидата
                                            со стороны дистрибьютора Вам будет
                                            отправлена более подробная информация
                                            по условиям сотрудничества.
                                        </p>
                                    </div>
                                    <div className="how_to_become_dealer_item">
                                        <div className="how_to_become_dealer_item_icon">
                                            <img src={dealerIcon1} alt=""/>
                                        </div>
                                        <p className="how_to_become_dealer_item_title">
                                            Рассмотрение заявки и принятие решения
                                        </p>
                                        <p className="how_to_become_dealer_item_info">
                                            После рассмотрения заявки, в случае вынесения
                                            положительного решения, BNM совместно
                                            с кандидатом реализует проект открытия
                                            официального дилера в регионе в соответствии
                                            с утвержденной процедурой.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="partners">
                        <div className="partners_wrapper">
                            <h1 className='partners_title'>
                                В НАСТОЯЩИЙ МОМЕНТ <br/>
                                BNM ИЩЕТ ПАРТНЁРОВ В СЛЕДУЮЩИХ ГОРОДАХ:
                            </h1>
                            <div className="partners_list_items_wrapper">
                                {countries_list?.map((item, index) => {
                                    return (
                                        <p className='partners_list_item' key={index}>{item.name}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                </main>
                 <Footer/>

                 {show_mpv_popup &&
                    <div className='show_mpv_popup'>
                        <div className='show_mpv_popup_wrapper'>
                            <button className='show_mpv_popup_close_btn'
                                    onClick={() => {
                                        setShowMpvPopup(false)
                                        enableBodyScroll()
                                    }}
                            >
                                <img src={closeIcon} alt=""/>
                            </button>
                            {mpv_list.map((item, index) => {
                                return (
                                    <div className='show_mpv_popup_img'>
                                        <img src={item.img} alt=""/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                 }
                 {show_bnm1_popup &&
                    <div className='show_mpv_popup'>
                     <div className='show_mpv_popup_wrapper'>
                         <button className='show_mpv_popup_close_btn'
                                 onClick={() => {
                                     setShowBnm1Popup(false)
                                     enableBodyScroll()
                                 }}
                         >
                             <img src={closeIcon} alt=""/>
                         </button>
                         {bnm_list1.map((item, index) => {
                             return (
                                 <div className='show_mpv_popup_img'>
                                     <img src={item.img} alt=""/>
                                 </div>
                             )
                         })}
                     </div>
                 </div>
                 }
                 {show_bnm2_popup &&
                    <div className='show_mpv_popup'>
                     <div className='show_mpv_popup_wrapper'>
                         <button className='show_mpv_popup_close_btn'
                                 onClick={() => {
                                     setShowBnm2Popup(false)
                                     enableBodyScroll()
                                 }}
                         >
                             <img src={closeIcon} alt=""/>
                         </button>
                         {bnm_list2.map((item, index) => {
                             return (
                                 <div className='show_mpv_popup_img'>
                                     <img src={item.img} alt=""/>
                                 </div>
                             )
                         })}
                     </div>
                 </div>
                 }

                 {show_news_single_page &&
                    <div className='show_news_single_page_popup'>
                        <div className='show_news_single_page_popup_wrapper'>
                            <button className='show_mpv_popup_close_btn'
                                    onClick={() => {
                                        setShowNewsSinglePage(false)
                                        enableBodyScroll()
                                    }}
                            >
                                <img src={closeIcon} alt=""/>
                            </button>
                                <NewsSlider1 photo={single_news_info?.photo}/>
                            <p className="company_news_item_date_info">
                                {getDate(single_news_info?.created_at)}
                            </p>
                            <p className="company_news_item_title">
                                {single_news_info?.title}
                            </p>
                            <p className="company_news_item_info">
                                {single_news_info?.description}
                            </p>
                        </div>
                    </div>
                 }

             </div>

         </>

     )


 }



