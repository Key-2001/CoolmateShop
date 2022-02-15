import React from 'react'
import ProductHomePage from './ProductHomePage'
import SlideBanner from './SlideBanner'

const Home = () => {
    return (
        <>
            <div className='slide-banner-wrap'>
                <SlideBanner/>
            </div>
            <section className='screen-default products-home'>
                <ProductHomePage/>
            </section>
            <section className='homepage-excool'>
                <div className='excool-wrap'>
                    <div className='excool-content'>
                        <h1>Dòng sản phẩm công nghệ EXCOOL</h1>
                        <h5>Công nghệ Việt cho người Việt</h5>
                        <div>
                            <a href='#'>Tìm hiểu thêm</a>

                        </div>
                    </div>
                    <div className='excool-img'>
                        <img src='https://mcdn.coolmate.me/uploads/January2022/ao_(1)_1_(1)_(1).jpg' alt='excool-img'/>
                    </div>
                </div>
            </section>
            <section className='homepage-coolmate-basic'>
                <div className='coolmate-basic-wrap'>
                    <h1>Coolmate Basics</h1>
                    <div className='coolmate-basic-container'>
                        <div className='coolmate-basic-item'>
                            <img src='https://mcdn.coolmate.me/uploads/January2022/CoolmateBasic1.png' alt='img1'/>
                        </div>
                        <div className='coolmate-basic-item'>
                            <img src='https://mcdn.coolmate.me/uploads/January2022/CoolmateBasic2.png' alt='img2'/>
                        </div>
                        <div className='coolmate-basic-item'>
                            <img src='https://mcdn.coolmate.me/uploads/January2022/CoolmateBasic3.png' alt='img3'/>
                        </div>
                        <div className='coolmate-basic-item'>
                            <img src='https://mcdn.coolmate.me/uploads/January2022/CoolmateBasic4.png' alt='img4'/>
                        </div>
                    </div>
                    <div className='footer-coolmate-basic'>
                        <h5>Dòng sản phảm mặc cơ bản <span>chất lượng tốt</span> và <span>giá rẻ</span> của Coolmate</h5>
                        <a href='#'>Trải nghiệm</a>
                    </div>
                </div>
            </section>
            <section className='homepage-collections'>
                <div className='homepage-collections-wrap'>
                    <a className='collection-item' href='#'>
                        <img src='https://mcdn2-coolmate.cdn.vccloud.vn/uploads/November2021/BANNER_LDP-02_1(1).jpg' alt='Mặc trong'/>
                        <span>Đồ Mặc Trong</span>
                    </a>
                    <a className='collection-item' href='#'>
                        <img src='https://mcdn.coolmate.me/uploads/November2021/BANNER_LDP-02_1(3)(1).jpg' alt='Mặc Ngoài'/>
                        <span>Đồ Mặc Ngoài</span>
                    </a>
                    <a className='collection-item' href='#'>
                        <img src='https://mcdn.coolmate.me/uploads/November2021/BANNER_LDP-02_1(5)(1).jpg' alt='Thể thao'/>
                        <span>Đồ Thể Thao</span>
                    </a>
                    <a className='collection-item' href='#'>
                        <img src='https://mcdn.coolmate.me/uploads/November2021/BANNER_LDP-02_1(6)(1).jpg' alt='all'/>
                        <span>Tất Cả</span>
                    </a>
                </div>
            </section>
            <section className='screen-default homepage-about'>
                <div className='homepage-about-img'>
                    <img src='https://mcdn.coolmate.me/uploads/November2021/Coolclub_Des_1(1).jpg' alt='img'/>
                </div>
                <div className='homepage-about-content'>
                    <h2>Trải nghiệm mua sắm an tâm cho nam giới</h2>
                    <p>Giá cả hợp lý - dịch vụ 100% hài lòng - tự hào sản xuất tại Việt Nam</p>
                    <div >
                        <a href='/about/2'>Tìm hiểu thêm</a>

                    </div>
                </div>
            </section>
            <section className='screen-default homepage-more'>
                <div className='homepage-more-wrap'>
                    <marquee width='100%' direction='left' height='72px'>
                        <p><b>CoolClub</b> - Ưu đãi <b>nhiều hơn </b>,mua sắm, vui hơn. Nhận ngay <b>ưu đãi 7% </b>cho lần mua sắm đầu tiên </p>
                    </marquee>
                    <a href='/about/3'>Gia nhập ngay</a>
                </div>
            </section>
            <section className='homepage-about-more screen-default grid-5-5'>
                <a href='/about/1'>
                    <img src='https://mcdn.coolmate.me/uploads/November2021/image1_59.jpg' alt='story-coolmate'/>
                    
                </a>
                <a href='/about/2'>
                    <img src='https://mcdn.coolmate.me/uploads/November2021/image2.jpg' alt='story-coolmate'/>
                    
                </a>
            </section>
        </>
    )
}

export default Home
