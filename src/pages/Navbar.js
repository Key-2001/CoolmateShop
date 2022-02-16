import React,{useRef,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import { useGlobalContext } from '../context'

const Navbar = () => {
    const {amountCart} = useGlobalContext();

    // const handleScroll = (e) => {
    //     const nav = document.getElementById('nav');
    //     const scrollTop = window.scrollY || document.documentElement.scrollTop;
    //     if(scrollTop > 0){
    //         nav.classList.add('display-none');
    //     }else{
    //         nav.classList.remove('display-none');

    //     }
        
    // }
    // useEffect(()=> {
    //     window.addEventListener('scroll', handleScroll, { passive: true });
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // },[])

    // const handleClick = () => {
    //     Location.reload();
    // }

    return (
        <header id='nav' >
            <div className='top-bar'>
                <a href='https://www.coolmate.me/lp/sale-to-cuoi-nam-2021-uu-dai-den-50'>sale to cuối năm ưu đãi đến 50%</a>
            
            </div>
            <div className='nav-wrap'>
                <div className='nav-center'>
                    <div className='toggle-bar'>
                        <FaBars/>
                    </div>
                    <div className='nav-logo'>
                        <a href='/'>
                            <img src='https://www.coolmate.me/images/logo-coolmate.svg' alt='logo'/>
                        </a>
                    </div>
                    <div className='nav-menu'>
                        <ul id='menu-list'>
                            <li className='menu-item '>
                                <Link to='/' className='nav-special'>
                                    Sale đến 50%
                                    <span className='hot-sale'>hot</span>
                                </Link>
                            </li>
                            <li className='menu-item wardrobe'>
                                <Link to='/'>
                                    Tủ đồ
                                </Link>
                                <div className='navbar-child wardrobe-sub'>
                                    <div className='wrap-nav-sub'>
                                        <h5>nhu cầu</h5>
                                        <div className='wrap-child'>
                                            <a href='#'>
                                                <img src='https://www.coolmate.me/images/header/tu-do-dinh-ky.jpg' alt='Tủ đồ định kì'/>
                                                <span>tủ đồ định kỳ - Coolsub</span>
                                            </a>
                                            <a href='#'>
                                                <img src='https://www.coolmate.me/images/header/men-box.jpg' alt='Tủ đồ nam giới'/>
                                                <span>tủ đồ nam giới - Men's Box</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='menu-item products-nav'>
                                <Link to='/product'>
                                    Sản phẩm
                                </Link>
                                <div className='navbar-child products-sub'>
                                    <div className='wrap-products-child-sub'>
                                        <div className='product-child-column'>
                                            <h5>Bộ Sưu Tập</h5>
                                            <ul>
                                                <li>
                                                    <a href='#'>Thu Đông</a>
                                                </li>
                                                <li>
                                                    <a href='#'>Care & Share</a>
                                                </li>
                                                <li>
                                                    <a href='#'>Lạc Khởi</a>
                                                </li>
                                                <li>
                                                    <a href='#'>Coolmate Basics</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='product-child-column'>
                                            <h5>Danh mục</h5>
                                            <ul>
                                                <li>
                                                    <a href='/product'>Tất cả</a>
                                                </li>
                                            </ul>
                                            <ul className='menu-product-sub-active'>
                                                <li>
                                                    <a href='#'>Áo Khoác</a>
                                                </li>
                                                <li>
                                                    <a href='#'>Áo Dài Tay</a>
                                                </li>
                                                <li>
                                                    <a href='#'>Áo Polo</a>
                                                </li>
                                                <li>
                                                    <a href='#'>Áo T-shirt</a>
                                                </li>
                                                <li>
                                                    <a href='#'>Áo Sơ Mi</a>
                                                </li>
                                                <li>
                                                    <a href='#'>Áo Thể Thao</a>
                                                </li>
                                                <li>
                                                    <a href='#'>Áo In Hình</a>
                                                </li>
                                            </ul>
                                            <ul className='menu-product-sub-active'>
                                                <li>
                                                    <a href='#'>Quần Lót Nam</a>
                                                </li>
                                                <li>
                                                    <a href='#'>Quần Short</a>
                                                </li>
                                                <li>
                                                    <a href='#'>Quần Dài</a>
                                                </li>
                                            </ul>
                                            <ul className='menu-product-sub-active'>
                                                <li>
                                                    <a href='#'>Tất (Vớ)</a>
                                                </li>
                                                <li>
                                                    <a href='#'>Phụ Kiện</a>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                        <div className='product-child-column'>
                                            <h5>Xu hướng</h5>
                                            <ul>
                                                <li>
                                                    <a href='#'>Hàng Mới về</a>
                                                </li>
                                                <li>
                                                    <a href='#'>Giảm nhiều nhất</a>
                                                </li>
                                                <li>
                                                    <a href='#'>Bán chạy nhất</a>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                        <div className='product-child-column'>
                                            <h5>Nhu cầu</h5>
                                            <ul>
                                                <li>
                                                    <a href='#'>Mặc hàng ngày</a>
                                                </li>
                                                <li>
                                                    <a href='#'>Đồ mặc trong</a>
                                                </li>
                                                <li>
                                                    <a href='#'>Mặc thể thao</a>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                        <div className='product-child-column'>
                                            <h5>Công nghệ</h5>
                                            <ul>
                                                <li>
                                                    <a href='#'>Cleandye
                                                        <span>Nhuộm không dùng nước</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='#'>HeiQ Viroblock
                                                        <span>Diệt 99.99% virus SARS-CoV2</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='#'>Excool
                                                        <span>Công nghệ làm mát tối đa</span>
                                                    </a>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='menu-item'>
                                <Link to='/'>
                                    Coolprint
                                </Link>
                            </li>
                            <li className='menu-item about-nav'>
                                <Link to='/about/1'>
                                    Về coolmate
                                </Link>
                                <div className='navbar-child about-sub'>
                                    <div className='wrap-nav-sub'>
                                        <h5>coolmate</h5>
                                        <div className='wrap-child'>
                                            <Link to='/about/1' >
                                                <img src='https://mcdn.coolmate.me/uploads/December2021/Copy_of_2-14_1_(1).jpg' alt='Câu truyện'/>
                                                <span>câu chuyện</span>
                                            </Link>
                                            <Link to='/about/2' >
                                                <img src='https://mcdn.coolmate.me/uploads/December2021/3-2_1_(2)_(1).jpg' alt='Dịch vụ'/>
                                                <span>Dịch vụ 100% hài lòng</span>
                                            </Link>
                                            <Link to='/about/3' >
                                                <img src='https://mcdn.coolmate.me/uploads/December2021/Copy_of_2-4_1_(2)_(1).jpg' alt='Coolmate dich vụ'/>
                                                <span>Coolclub - Khách hàng thân thiện</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='nav-actions'>
                        <div className='button-actions-nav'>
                            <a href='#'>
                                <img src='https://www.coolmate.me/images/header/icon-search.svg' alt='search-icon'/>
                            </a>
                        </div>
                        <div className='button-actions-nav'>
                            <a href='#'>
                                <img src='https://www.coolmate.me/images/header/icon-account.svg' alt='login-icon'/>
                            </a>
                        </div>
                        <div className='button-actions-nav'>
                            <Link to='/cart'>
                                <img src='https://www.coolmate.me/images/header/icon-cart.svg' alt='cart-icon'/>
                            </Link>
                            <span className='counts-cart'>{amountCart}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
