import React,{useEffect} from 'react'

const Story = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <div className='content-about'>
                <div className='about-banner'>

                </div>
                <div className='about-story'>
                    <div className='container-grid'>
                        <div className='story-left'>
                            <h1>
                                <strong>Câu chuyện <span>về</span> 
                                    <span className='svg'><img src='https://www.coolmate.me/images/about-us-coolmate.svg' alt='logo-coolmate'></img></span>
                                </strong>
                            </h1>
                            <img  src='https://www.coolmate.me/images/about-us-model.webp' alt='modall-demoo'/>
                        </div>
                        <div  className='story-right'>
                            <p>Được hình thành trong thời đại 4.0, <strong>Coolmate</strong> áp dụng sức mạnh của công nghệ vào thời trang để đưa ra <span className="text--italic text--primary">Giải pháp mua sắm đồ cơ bản cho nam giới</span> với mô hình tiện lợi hơn, tiết kiệm hơn - khách hàng có thể mua cả tủ đồ đảm bảo chất lượng, giá tốt, giao hàng nhanh chóng, và dịch vụ chăm sóc vượt trội.</p>
                            <p>Sứ mệnh của <strong>Coolmate</strong> là giúp nam giới mua sắm dễ dàng hơn bởi <strong>Coolmate</strong> tin rằng các đấng mày râu xứng đáng có được điều đó. Bằng chính những trải nghiệm lâu dài và nghiên cứu tâm huyết, chúng tôi tin rằng bằng cách đưa đến <span className="text--italic text--primary">sự đơn giản, tiện lợi và giá cả hợp lý</span> sẽ là con đường giúp chúng tôi thực hiện sứ mệnh của mình.</p>
                            <p>Ở <strong>Coolmate</strong>, mọi chiến lược đều bắt đầu và tập trung cho sản phẩm. Các sản phẩm của Coolmate từ khâu dệt vải, nhuộm vải, cắt may, hoàn thiện đều được thực hiện trong những nhà máy sản xuất địa phương đạt tiêu chuẩn xuất khẩu và bởi những bàn tay khéo léo với cái tâm mang đến những sản phẩm được gắn nhãn <span className="text--italic text--bold">“Tự hào sản xuất tại Việt Nam”</span>. Coolmate luôn đi kèm triết lý <span className="text--italic text--bold">“Các đối tác sản xuất là một phần của Coolmate”</span> và chúng tôi tập trung xây dựng mối quan hệ để cùng nhau nâng cao chất lượng sản phẩm, có nhiều đơn hàng và tạo nhiều việc làm hơn. Các sản phẩm của Coolmate đã được tạo ra như thế nào, cùng Coolmate tìm hiểu <a href="https://www.coolmate.me/page/san-pham-coolmate-duoc-san-xuat-nhu-the-nao" className="text--primary">tại đây</a> nhé!</p>
                            <div  className='white-box'>
                                <p><strong>Coolmate</strong> là sự kết hợp giữa ‘Cool’ và ‘Mate’. Chúng tôi mong muốn đem đến cho khách hàng ưa trải nghiệm thích phiêu lưu của mình một vẻ ngoài “cool” ngầu, mới mẻ, năng động. Hơn cả, chúng tôi muốn được trở thành những người bạn, những người đồng hành “mate” trong suốt những ngày bận rộn, đem lại sự thoải mái và tự tin trong từng bước di chuyển, thấu hiểu và trở thành những trợ thủ đắc lực nhất.</p>
                                <img  src='https://www.coolmate.me/images/about-us-box.png' alt='box-coolmate'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about-section'>
                    <h2>lợi ích nổi bật</h2>
                    <div className='section-container'>
                        <div className='section-item'>
                            <div className='img-section'>
                                <img  src='https://www.coolmate.me/images/about-us-1.jpg' alt='section1'/>
                                <div style={{top:"20%",left:'-250px'}} className='black-box'>
                                    <span style={{top:"-50px",left:"-30px"}} className='number'>01.</span>
                                    <h4>Giải pháp mua đồ mới lạ</h4>
                                    <p>Quên đi những khoản chi trả kha khá và phải đi nhiều nơi lẻ tẻ để có được những món đồ cơ bản nhất như áo thun, quần short, quần sịp, tất (vớ), chúng tôi mong muốn thay đổi mọi thứ. Chỉ bằng vài cú click chuột và một tủ đồ đầy đủ sẽ đến gõ cửa nhà bạn ngay sau đó.</p>
                                </div>
                            </div>
                        </div>
                        <div className='section-item'>
                            <div style={{width:"60%"}} className='img-section'>
                                <img  src='https://www.coolmate.me/images/about-us-2.webp' alt='section2'/>
                                <div style={{top:"-75px",right:"-160px",left:"unset"}} className='black-box'>
                                    <span style={{bottom:"-40px",right:"-56px"}} className='number'>02.</span>
                                    <h4>Trải nghiệm mua sắm thông minh</h4>
                                    <p><strong>Coolmate</strong> đem lại sự thoải mái nhất trong mua sắm. Bạn có thể tự do xem bất kỳ món hàng nào, theo dõi những món đồ muốn mua, mua hàng trong tích tắc và thậm chí là có thể đổi trả <strong>60 ngày</strong> miễn phí vì bất kỳ lý do gì.</p>
                                </div>
                            </div>
                        </div>
                        <div className='section-item'>
                            <div className='img-section'>
                                <img  src='https://www.coolmate.me/images/about-us-3.webp' alt='section3'/>
                                <div style={{bottom:"60px",left:"-240px"}} className='black-box'>
                                    <span style={{left:"-36px",top:"-53px"}} className='number'>03.</span>
                                    <h4>Giá cả hợp lý </h4>
                                    <p>Tất cả những gì bạn thấy trên web là tất cả những gì bạn phải trả, cam kết không có chi phí phát sinh trong quá trình mua và đổi trả hàng.</p>
                                </div>
                            </div>
                        </div>
                        <div className='section-item'>
                            <div className='img-section'>
                                <img  src='https://www.coolmate.me/images/about-us-4.webp' alt='section4'/>
                                <div style={{top:"-75px",right:"-160px"}} className='black-box'>
                                    <span style={{bottom:"-40px",right:"-48px"}} className='number'>04.</span>
                                    <h4>Sẵn sàng hỗ trợ để bạn thoải mái mua sắm </h4>
                                    <p>Dịch vụ hỗ trợ và tư vấn khách hàng 24/7, hướng đến giao hàng trong 24h tại các thành phố lớn, 60 ngày đổi trả miễn phí với bất kì lý do gì, kể cả là đồ lót, chúng tôi không ngại đổi/trả và luôn chấp nhận để đem lại trải nghiệm tốt nhất đến khách hàng.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about-footer'>
                    <div className='list'>
                        <span>Thoải mái hơn</span>
                        <span>Tiện lợi hơn</span>
                        <span>Hợp lý hơn</span>
                    </div>
                    <div className='home-link-footer'>
                        <a style={{marginRight:"1rem"}} href="/">
                            <img src="https://www.coolmate.me/images/about-us-coolmate-2.svg" alt='logo'/>
                        </a>
                        nhé?
                    </div>
                    <div className='list-youtube'>
                        <h2>coolmat unboxing</h2>
                        <div className='wrap-link'>
                            <div className='link-item'>
                                <a href="https://www.youtube.com/watch?v=KnvKl2CU82U&t=196s" >
                                    <img style={{width:"100%"}} src="https://www.coolmate.me/images/anh4.png" alt='link1'/>
                                    <h5>lạ sneaker</h5>
                                </a>
                            </div>
                            <div className='link-item'>
                                <a href="https://www.youtube.com/watch?v=fzjHHNhO0YU&t=161s" >
                                    <img style={{width:"100%"}} src="https://www.coolmate.me/images/anh3.png" alt='link2'/>
                                    <h5>dưa leo</h5>
                                </a>
                            </div>
                            <div className='link-item'>
                                <a href="https://www.youtube.com/watch?v=J5-Rju_mhpg&t=154s" >
                                    <img style={{width:"100%"}} src="https://www.coolmate.me/images/anh2.png" alt='link3'/>
                                    <h5>tân 1 cú</h5>
                                </a>
                            </div>
                            <div className='link-item'>
                                <a href="https://www.youtube.com/watch?v=KnvKl2CU82U&t=196s" >
                                    <img style={{width:"100%"}} src="https://www.coolmate.me/images/anh1.png" alt='link4'/>
                                    <h5>an nguyễn fitnessr</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story
