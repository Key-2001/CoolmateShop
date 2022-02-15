import React from 'react'

const Footer = () => {
    return (
        <footer className=''>
            <div className='footer-wrap'>
                <section className='footer-before'>
                    <div className='footer-menu'>
                        <div className='footer-menu-item'>
                            <h5>Khám phá COOLMATE</h5>
                            <ul>
                                <li>Áo Polo</li>
                                <li>Áo T-shirt</li>
                                <li>Áo Sơ mi</li>
                                <li>Quần</li>
                                <li>Quần lót</li>
                                <li>Tất (Vớ)</li>
                                <li>Phụ kiện khác</li>
                                <li>Coolsub</li>
                                <li>Hộp tạo sẵn</li>
                            </ul>
                        </div>
                        <div className='footer-menu-item'>
                            <h5>Dịch vụ khách hàng</h5>
                            <ul>
                                <li>Hỏi đáp - FAQs</li>
                                <li>Chính sách đổi trả 60 ngày</li>
                                <li>Liên hệ</li>
                                <li>Dịch vụ gói quà tặng</li>
                                <li>Thành viên Coolclub</li>
                                <li>Khách hàng hài lòng 100%</li>
                                <li>Chính sách khuyến mãi</li>
                                <li>Chính sách giao hàng</li>
                                <li>Hộp tạo sẵn</li>
                            </ul>
                            <h5>Kiến thức mặc đẹp</h5>
                            <ul>
                                <li>Hướng dẫn chọn size</li>
                                <li>Blog</li>
                                <li>Group mặc đẹp sống chất</li>
                                
                            </ul>
                        </div>
                        <div className='footer-menu-item'>
                            <h5>Tài liệu - Tuyển dụng</h5>
                            <ul>
                                <li>Đăng kí bản quyền</li>
                                <li>Tuyển dụng</li>
                                
                            </ul>
                            <h5>Về COOLMATE</h5>
                            <ul>
                                <li>Câu chuyện về Coolmate</li>
                                <li>Care & Share</li>
                                <li>Nhà máy</li>
                                
                            </ul>
                        </div>
                        <div className='footer-menu-item'>
                            <h5>Địa chỉ liên hệ</h5>
                            <ul>
                                <li><u>HUB Hà Nội:</u> Số 103, Đường Vạn Phúc, Phường Vạn Phúc, Quận Hà Đông, TP. Hà Nội</li>
                                <li><u>HUB Tp Hồ Chí Minh:</u> Lầu 1, Số 163 Trần Trọng Cung, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh</li>
                                
                            </ul>
                        </div>
                    </div>
                    <div style={{flex:'1'}}></div>
                    <div className='footer-sidebar'>
                        <h4>COOLMATE lắng nghe bạn!</h4>
                        <p>Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt hơn nữa.</p>
                        <div className='footer-button'>
                            <a href='#'>Gửi Ý Kiến</a>
                        </div>
                        <div className='contact-coolmate'>
                            <div className='contact-img'>
                                <img src='https://www.coolmate.me/images/footer/icon-hotline.svg' alt='phone'/>
                            </div>
                            <div className='contact-content'>
                                <span>Hotline</span>
                                <span>1900.272737 (028.7777.2737)</span>
                            </div>
                        </div>
                        <div className='contact-coolmate'>
                            <div className='contact-img'>
                                <img src='https://www.coolmate.me/images/footer/icon-email.svg' alt='email'/>
                            </div>
                            <div className='contact-content'>
                                <span>Email</span>
                                <span>Cool@coolmate.me</span>
                            </div>
                        </div>
                        <div className='social-network'>
                            <a href='https://www.facebook.com/coolmate.me'>
                                <img src='https://www.coolmate.me/images/footer/icon-facebook.svg' alt='facebook'/>
                            </a>
                            <a href='https://www.instagram.com/coolmate.me/'>
                                <img src='https://www.coolmate.me/images/footer/icon-instar.svg' alt='instagram'/>
                            </a>
                            <a href='https://www.youtube.com/channel/UCWw8wLlodKBtEvVt1tTAsMA'>
                                <img src='https://www.coolmate.me/images/footer/icon-youtube.svg' alt='youtube'/>
                            </a>
                        </div>
                    </div>
                </section>
                
                <section className='footer-after'>
                    <div className='copyright'>
                        <span>@ CÔNG TY TNHH FASTECH ASIA</span>
                        <span>Mã số doanh nghiệp: 0108617038. Giấy chứng nhận đăng ký doanh nghiệp do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày 20/02/2019.</span>
                    </div>
                    <div style={{flex:'1'}}></div>

                    <div className='logo'>
                        <div>
                            <img src='https://www.coolmate.me/images/footer/Coolmate-info.png' alt='logo1'/>
                        </div>
                        <div>
                            <img src='https://www.coolmate.me/images/footer/logoSaleNoti.png' alt='info'/>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Footer
