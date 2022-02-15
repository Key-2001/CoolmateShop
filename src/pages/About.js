import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router'
const About = () => {
    const id = useParams();
    const [param,setParam] = useState(id);
    // console.log(param)
    
    if(parseInt(param.id) === 1){

        return(
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
        )
    }

    if(parseInt(param.id) === 2){
        return(
            <div className='content-about content-about2'>
                    <div className='about-banner'>

                    </div>
                    <section className='service-description'>
                        <div className='service-wrap'>
                            <div className='service-inner'>
                                <div className='service-content'>
                                    <p>Thương mại điện tử (TMĐT) là một hình thức mua sắm mới ở Việt Nam trong mấy năm trở lại đây. Không ai phủ nhận được những sự tiện lợi mà TMĐT mang lại. Chỉ việc ngồi nhà, một chiếc Smartphone vài cú click chuột là đã có ngay một món đồ được giao tới tận cửa.</p>
                                    <p>Tuy nhiên, cũng như một "đứa trẻ mới lớn" thì TMĐT cũng mang lại không ít những vấn đề rắc rối.</p>
                                    <p>Việc nhận được những sản phẩm khác hoàn toàn mô tả và hình ảnh đăng tải không còn là hiếm gặp. Sau khi liên hệ với Dịch vụ khách hàng thì việc đổi/trả diễn ra cực kỳ phiền toái và không phải lúc nào người mua cũng được hỗ trợ xứng đáng. Mua một sản phẩm mà sau 4-5 ngày mới nhận được, và khi nhận thì hộp đồ không còn được nguyên vẹn nữa...</p>
                                    <p>Đây là những vấn đề đã và đang xảy ra hàng ngày, và chính điều này đang làm cản trở TMĐT phát triển ở Việt Nam. Coolmate tin tưởng rằng TMĐT là một mô hình tốt, và mang lại rất nhiều lợi ích cho khách hàng, có chăng vấn đề phát sinh là do người bán hàng chưa thực sự làm tốt nhất vai trò của mình. Và Coolmate muốn thay đổi điều đó!</p>
                                    <p>Tại Coolmate bạn sẽ thấy rất nhiều những chính sách, những dịch vụ và trải nghiệm mà RẤT ÍT KHI TÌM THẤY ở những nơi khác. Tất cả những điều chúng tôi đang và sẽ theo đuổi chỉ để đảm bảo rằng 100% khách hàng mua hàng tại Coolmate hài lòng.</p>
                                    <p>Cùng xem trải nghiệm mua sắm Online tại Coolmate có gì hay ho nhé!</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='service-information'>
                        <div style={{height:'610px'}} className='container-infor'>
                            <img src='https://mcdn.coolmate.me/uploads/January2022/Dich_vu_2.png' alt='ship'/>
                            <div className='container-content-info'>
                                <div className='content-infor-heading'>
                                    <div className='infor-number'>01</div>
                                    <div className='infor-title'>Liên hệ Chăm sóc<br/> khách hàng dễ dàng</div>
                                </div>
                                <div className='content-infor-text'>
                                    <p>Tổng đài Coolmate với số Hotline 1900272737 rất dễ tìm kiếm và xuất hiện khắp mọi nơi từ Website, Email, Fanpage, trong nhãn mác, bao bì đóng gói...</p>
                                    <p>Hơn thế nữa, đội ngũ chăm sóc khách hàng Coolmate cam kết 100% cuộc gọi sẽ được trả lời, nếu như bị gọi nhỡ (do quá tải) sẽ được gọi lại ngay lập tức.</p>
                                    <p>Ngoài ra khách hàng có thể liên hệ với Coolmate thông qua rất nhiều kênh khác nhau như: Email, Chat, Để lại đánh giá, bình luận ở các kênh mạng xã hội của Coolmate.</p>
                                </div>
                            </div>
                            <div className='container-content-img'>
                                <img src='https://mcdn.coolmate.me/uploads/December2021/3_(1)_1_(1).jpg' alt='service1'/>
                            </div>
                        </div>
                        <div style={{height:'402px'}} className='container-infor'>
                            <div style={{width:'50%',marginLeft:'35rem'}} className='container-content-info'>
                                <div className='content-infor-heading'>
                                    <div className='infor-number'>02</div>
                                    <div className='infor-title'>Thời gian trao đổi với tổng<br/> đài viên là không hạn chế</div>
                                </div>
                                <div className='content-infor-text'>
                                    <p>Coolmate không giới hạn thời gian phải kết thúc một cuộc gọi. Chúng tôi khuyến khích nhân viên CSKH nói chuyện và trao đổi với khách hàng nhiều hơn. Cuộc gọi dài nhất tới thời điểm hiện tại chúng tôi ghi nhận là kéo dài 48 phút.</p>
                                    
                                </div>
                            </div>
                            <div style={{textAlign:'left'}} className='container-content-img'>
                                <img src='https://mcdn.coolmate.me/uploads/December2021/3-3_1_(1).jpg' alt='service2'/>
                            </div>
                        </div>
                        <div style={{height:'556px'}} className='container-infor'>
                        
                            <div style={{width:'50%',marginLeft:'0'}} className='container-content-info'>
                                <div className='content-infor-heading'>
                                    <div className='infor-number'>03</div>
                                    <div className='infor-title'>Văn hoá say YES<br/> trong xử lý tình huống</div>
                                </div>
                                <div className='content-infor-text'>
                                    <p>Đội ngũ CSKH của chúng tôi cam kết rằng 99.99% các vấn đề của khách hàng khi gọi tới sẽ được giải quyết NHANH, ĐẦY ĐỦ, và ĐÁNG NHỚ. CSKH của Coolmate được trao nhiều công cụ, và quyền hành để giúp có thể hỗ trợ khách hàng ngay lập tức, với mục tiêu cuối cùng là mang lại trải nghiệm khách hàng hài lòng 100%.</p>
                                    
                                </div>
                            </div>
                            <div className='container-content-img'>
                                <img src='https://mcdn.coolmate.me/uploads/December2021/3-2_1_(1).jpg' alt='service3'/>
                            </div>
                        </div>
                        <div style={{height:'556px'}} className='container-infor'>
                        
                            <div style={{width:'50%',marginLeft:'50%'}} className='container-content-info'>
                                <div  className='content-infor-heading'>
                                    <div className='infor-number'>04</div>
                                    <div className='infor-title'>Sự tương tác mang<br/> tính cá nhân hoá</div>
                                </div>
                                <div className='content-infor-text'>
                                    <p>Khác với các tổng đài viên trả lời theo cấu trúc có sẵn. Khác với các Fanpage phản hồi tự động, và theo những form lặp lại.</p>
                                    <p>Ở Coolmate, mọi thứ đều không có kịch bản trước. CSKH của chúng tôi được đào tạo để có thể xử lý theo từng trường hợp cụ thể theo yêu cầu của khách hàng. Coolmate tin rằng mỗi khách hàng có những vấn đề và nhu cầu khác nhau, do đó không thể áp dụng những công thức giống nhau được.</p>
                     
                                </div>
                            </div>
                            <div style={{textAlign:'left'}} className='container-content-img'>
                                <img src='https://mcdn.coolmate.me/uploads/December2021/Anh_chup_Man_hinh_2021-12-15_luc_17.45_1_(1)_(1).jpg' alt='service4'/>
                            </div>
                        </div>
                        <div style={{height:'446px'}} className='container-infor'>
                        
                            <div style={{width:'50%',marginLeft:'150px'}} className='container-content-info'>
                                <div className='content-infor-heading'>
                                    <div className='infor-number'>05</div>
                                    <div className='infor-title'>CSKH hoạt động 13,5h/1<br/> ngày và 7 ngày/1 tuần</div>
                                </div>
                                <div className='content-infor-text'>
                                    <p>Trong bất cứ khi nào thuộc khung thời gian từ 8h30 tới 22:00 trong tất cả các ngày trong tuần, bạn đều có thể tâm sự với team CSKH Coolmate. Chúng tôi hướng tới một tổng đài hỗ trợ 24/7 trong tương lai.</p>
                                </div>
                            </div>
                            <div  className='container-content-img'>
                                <img src='https://mcdn.coolmate.me/uploads/December2021/Anh_chup_Man_hinh_2021-12-15_luc_17.45_2_(1).jpg' alt='service5'/>
                            </div>
                        </div>
                        <div style={{height:'540px'}} className='container-infor'>
                        
                            <div style={{width:'50%',marginLeft:'50%'}} className='container-content-info'>
                                <div className='content-infor-heading'>
                                    <div className='infor-number'>06</div>
                                    <div className='infor-title'>Dịch vụ đổi trả miễn phí 60<br/> ngày với BẤT CỨ LÝ DO GÌ</div>
                                </div>
                                <div className='content-infor-text'>
                                    <p>Minh hoạ đơn giản cho dịch vụ này đó là bạn có thể mua 1 chiếc áo Coolmate và mặc nó trong vòng 59 ngày. Sau đó, nếu cảm thấy không hài lòng, bạn hoàn toàn có thể gửi yêu cầu đổi sang chiếc áo mới hoặc hoàn tiền. Mọi thứ sẽ được xử lý trong vòng 24 tiếng mà không hề có bất cứ khó khăn gì.</p>
                                    <p style={{margin:"0"}}><strong >Tại sao chúng tôi làm như vậy?</strong></p>
                                    <p style={{margin:"0"}}>Đơn giản vì chúng tôi muốn khách hàng hài lòng 100% khi mua đồ tại Coolmate.</p>
                                    <p style={{margin:"0"}}><strong >Nếu khách hàng lợi dụng chính sách để trục lợi thì sao?</strong></p>
                                    <p style={{marginTop:"0"}}>Chúng tôi tin rằng các khách hàng của mình đều tự tế, văn minh và có nhu cầu thực sự.</p>
                                </div>
                            </div>
                            <div style={{textAlign:'left'}} className='container-content-img'>
                                <img src='https://mcdn.coolmate.me/uploads/December2021/Anh_chup_Man_hinh_2021-12-15_luc_17.45_7_(1).jpg' alt='service6'/>
                            </div>
                        </div>
                        <div style={{height:'490px'}} className='container-infor'>
                        
                            <div style={{width:'50%',marginLeft:'48%'}} className='container-content-info'>
                                <div className='content-infor-heading'>
                                    <div className='infor-number'>07</div>
                                    <div className='infor-title'>Dịch vụ đổi trả tận<br/> nơi của Coolmate</div>
                                </div>
                                <div className='content-infor-text'>
                                    <p>Việc mua 1 sản phẩm và cần đổi trả vì không vừa là một sự bất tiện. Không phải ai cũng có thể sắp xếp thời gian để mang ra bưu điện gửi lại và đợi 1 thời gian sau đó mới nhận lại món đồ mới.</p>
                                    <p>Với Coolmate, mọi thứ đơn giản hơn rất nhiều. Bưu tá của chúng tôi sẽ mang sản phẩm mới và thu hồi sản phẩm cũ tại nhà hoặc cơ quan theo yêu cầu của khách hàng trong 1 lần duy nhất.</p>
                                </div>
                            </div>
                            <div style={{textAlign:'left'}} className='container-content-img'>
                                <img src='https://mcdn.coolmate.me/uploads/December2021/1-4_(1)_1_(1).jpg' alt='service7'/>
                            </div>
                        </div>
                        <div style={{height:'556px'}} className='container-infor'>
                        
                            <div style={{width:"50%",marginLeft:"0"}}  className='container-content-info'>
                                <div className='content-infor-heading'>
                                    <div className='infor-number'>08</div>
                                    <div className='infor-title'>Trả hàng hoàn tiền và có<br/> bưu tá lấy hàng tận nơi</div>
                                </div>
                                <div className='content-infor-text'>
                                    <p>Có lẽ chỉ có Coolmate mới có thể xử lý trả hàng hoàn tiền trong vòng 24h. Vâng, nếu bạn không hài lòng thì chúng tôi sẽ hoàn tiền vào ví điện tử hoặc tài khoản của bạn trong vòng TỐI ĐA LÀ 24H kể từ khi gửi yêu cầu.</p>
                                    <p>Ngoài ra, hàng cần gửi trả cũng sẽ có bưu tá của chúng tôi tới tận nơi để lấy, bạn không cần phải mang đi đâu cả.</p>
                                    <p>Toàn bộ quá trình này là KHÔNG THU PHÍ.</p>
                                </div>
                            </div>
                            <div className='container-content-img'>
                                <img src='https://mcdn.coolmate.me/uploads/December2021/Anh_chup_Man_hinh_2021-12-15_luc_17.45_4_(1).jpg' alt='service8'/>
                            </div>
                        </div>
                        <div style={{height:'610px'}} className='container-infor'>
                            
                            <div style={{width:"50%",marginLeft:"42%"}} className='container-content-info'>
                                <div className='content-infor-heading'>
                                    <div className='infor-number'>09</div>
                                    <div className='infor-title'>Giao hàng nhanh mà<br/> không thu thêm phí</div>
                                </div>
                                <div className='content-infor-text'>
                                    <p>Có lẽ chỉ có Coolmate mới có thể xử lý trả hàng hoàn tiền trong vòng 24h. Vâng, nếu bạn không hài lòng thì chúng tôi sẽ hoàn tiền vào ví điện tử hoặc tài khoản của bạn trong vòng TỐI ĐA LÀ 24H kể từ khi gửi yêu cầu.</p>
                                    <p>Ngoài ra, hàng cần gửi trả cũng sẽ có bưu tá của chúng tôi tới tận nơi để lấy, bạn không cần phải mang đi đâu cả.</p>
                                    <p>Toàn bộ quá trình này là KHÔNG THU PHÍ.</p>
                                </div>
                            </div>
                            <div style={{textAlign:"left"}} className='container-content-img'>
                                <img src='https://mcdn.coolmate.me/uploads/December2021/Anh_chup_Man_hinh_2021-12-15_luc_17.45_5_(1).jpg' alt='service9'/>
                            </div>
                        </div>
                        <div style={{height:'405px'}} className='container-infor'>
                            
                            <div style={{width:"50%",marginLeft:"100px"}} className='container-content-info'>
                                <div className='content-infor-heading'>
                                    <div className='infor-number'>10</div>
                                    <div className='infor-title'>Đóng gói cẩn thận</div>
                                </div>
                                <div className='content-infor-text'>
                                    <p>Mỗi đơn hàng của Coolmate được đóng gói 2 lớp, như một gói quà, đảm bảo khách hàng nhận được sản phẩm sẽ thực sự trọn vẹn.</p>
                                   
                                </div>
                            </div>
                            <div className='container-content-img'>
                                <img src='https://mcdn.coolmate.me/uploads/December2021/Anh_chup_Man_hinh_2021-12-15_luc_17.45_6_(1).jpg' alt='service1'/>
                            </div>
                        </div>
                        <div style={{height:'405px'}} className='container-infor'>
                            
                            <div style={{width:"50%",marginLeft:"42%",transform:"unset"}} className='container-content-info'>
                                <div className='content-infor-heading'>
                                    <div className='infor-number'>11</div>
                                    <div className='infor-title'>Dịch vụ tặng chiếc<br/>tất/vớ bị mất</div>
                                </div>
                                <div className='content-infor-text'>
                                    <p>Hiểu rằng đàn ông rất hay mất 1 chiếc vớ (mà không hiểu lý do vì sao), và như thế chiếc còn lại hầu như bị bỏ đi. Ở Coolmate, khách hàng sẽ nhận được 1 chiếc tất thay thế cho chiếc bị mất. Hãy gửi yêu cầu cho chúng tôi khi bạn gặp tình trạng tương tự, và tôi chắc chắn là sẽ gặp phải thôi.</p>
                                   
                                </div>
                            </div>
                            <div style={{textAlign:"left"}} className='container-content-img'>
                                <img src='https://mcdn.coolmate.me/uploads/December2021/2L6A3918_copy_1_(1).jpg' alt='service11'/>
                            </div>
                        </div>
                    </section>
                    <section className='service-thanks'>
                        <div className='service-thanks-img'>
                            <img src='https://mcdn.coolmate.me/uploads/December2021/Group_669_(1).jpg' alt='tks-img'/>
                        </div>
                        <div className='service-thanks-text'>
                            <h2>thankyou!</h2>
                            <h4>Trong cuộc sống có quá nhiều sự lựa chọn cảm ơn bạn đã chọn Coolmate!</h4>
                        </div>
                    </section>
            </div>
        )
    }
    return(
        <>
            <section className='coolclub-banner'>
                <img src='https://mcdn.coolmate.me/uploads/December2021/Coolclub_Des_1_(1)_(1).jpg' alt='11 dich vu'/>
                <div className='coolclub-content'>
                    <div className='coolclub-box'>
                        <div className='coolclub-heading'>
                            coolclub

                        </div>
                        <div className='coolclub-description'>
                            Ưu đãi nhiều hơn,<br/>mua sắm vui hơn
                        </div>
                    </div>
                    <div className='coolclub-grid'>
                        <div className='coolclub-item'>
                            <div className='coolclub-policy'>
                                giảm thêm <br/> 7%
                            </div>
                        </div>
                        <div className='coolclub-item'>
                            <div className='coolclub-policy'>
                                quà tằng sinh nhật <br/> và dịp đặc biệt
                            </div>
                        </div>
                        <div className='coolclub-item'>
                            <div className='coolclub-policy'>
                                ưu đãi <br/> đặc quyền khác
                            </div>
                        </div>
                    </div>
                    <div className='coolclub-button'>
                        <a href='#coolclub-box' className='club-button'>Gia nhập ngay</a>
                    </div>
                </div>
            </section>
            <section id='coolclub-box' className='coolclub-boxx'>
                <div className='coolclub-boxx-img'>
                    <img src='https://mcdn.coolmate.me/uploads/December2021/Copy_of_2-4_1.jpg' alt='img-box'/>
                </div>
                <div className='coolclub-boxx-text'>
                    <h2>Tại sao lại là <br/>Coolmate?</h2>
                    <h4>3 năm trên hành trình mang đến trải nghiệm mua sắm Online an tâm và tiện lợi hơn cho nam giới Việt Nam, Coolmate đã nhận được nhiều sự ủng hộ và tin yêu từ phía khách hàng. CoolClub được coi như một sự tri ân của Coolmate với mọi người đã và đang mua sắm tại Coolmate.</h4>
                </div>
            </section>
            <section style={{backgroundColor:"#f9f86c"}} className='coolclub-boxx'>
                <div style={{backgroundColor:"#fff",border:"1px #000 solid",borderRadius:"30px",color:"#000",width:"70%",fontWeight:"320",padding:"3rem"}} className='coolclub-boxx-text'>
                    <h4 style={{marginBottom:"unset",}}>CoolClub là chương trình dành cho các khách hàng đã mua sắm ở Website <Link style={{color:"#2f4acf"}} to='/'>Coolmate.me</Link> với số tiền trên 500k. Với việc trở thành thành viên của CoolClub, khách hàng sẽ nhận được rất nhiều quyền lợi ưu đãi như giảm giá trực tiếp thêm 7%, quà tặng sinh nhật và các ngày đặc biệt, ưu đãi cho các sản phẩm mới, hay trong tương lai, Coolmate còn nghĩ "táo bạo" ví dụ như Xem Netflix miễn phí, xem K+ miễn phí... vì thế nếu đủ điều kiện hãy tranh thủ trở thành một thành viên của CoolClub bạn nhé!</h4>
                </div>
                <div className='coolclub-boxx-question'>
                    <h2>CoolClub<br/>là gì?</h2>
                </div>
            </section>
            <section style={{backgroundColor:"#d9d9d9"}} className='coolclub-boxx'>
                <div style={{color:"#000",justifyContent:"center"}} className='coolclub-boxx-text'>
                    <h2>Trở thành thành viên <br/>CoolClub và hưởng ưu đãi</h2>
                    <h4 style={{marginBottom:"unset",marginTop:"1.5rem"}}>Bạn chỉ cần tạo tài khoản khi mua hàng tại Website Coolmate.me và với hóa đơn cộng dồn trên 500k thì hệ thống sẽ tự ghi nhận bạn là thành viên.<br/>Kể từ lần mua hàng tiếp theo thì hệ thống sẽ tự động giảm thêm 7%, nhưng lưu ý cần đăng nhập vào tài khoản để mua hàng nhé!</h4>
                </div>
                <div className='coolclub-boxx-img'>
                    <img style={{borderRadius:"30px"}} src='https://mcdn.coolmate.me/uploads/December2021/BOO02573_1.jpg' alt='box2'/>
                </div>
            </section>
            <section className='coolclub-customer'>
                <div className='coolclub-customer-inner'>
                    <h2>Đặc quyền thành <br/> viên coolclub</h2>
                    <div className='coolclub-customer-wrapItem'>
                        <div className='coolclub-customer-item'>
                            <img src='https://mcdn.coolmate.me/uploads/December2021/Group_670.png' alt='cus1'/>
                            <h4>Giảm thêm ngay 7%</h4>
                            <h5>Giảm thêm nghĩa là sau khi áp dụng các chương trình khuyến mãi khác và không giới hạn, tuy nhiên có một số sản phẩm bị loại trừ</h5>
                        </div>
                        <div className='coolclub-customer-item'>
                            <img src='https://mcdn.coolmate.me/uploads/December2021/Group_671_(1).png' alt='cus2'/>
                            <h4>Quà tặng sinh nhật</h4>
                            <h5>Khác với thương hiệu khác, ngoài voucher giảm giá, Coolmate sẽ có quà tặng "xịn xò" gửi tới tận nhà bạn vào tháng sinh nhật.</h5>
                        </div>
                        <div className='coolclub-customer-item'>
                            <img src='https://mcdn.coolmate.me/uploads/December2021/Group_672.png' alt='cus3'/>
                            <h4>Ưu đãi sản phẩm mới</h4>
                            <h5>Quyền mua trước một số sản phẩm độc quyền hoặc với giá cực tốt.</h5>
                        </div>
                        <div className='coolclub-customer-item'>
                            <img src='https://mcdn.coolmate.me/uploads/December2021/Group_673.png' alt='cus4'/>
                            <h4 style={{marginTop:"1rem"}}>Hàng ngàn <br/> "đặc quyền" khác</h4>
                            <h5>Quyền lợi khác trong tương lai Không dám hứa trước, nhưng rất có thể các bạn sẽ có những "vé" xem K+, Netflix, nghe nhạc Spotify... miễn phí.</h5>
                        </div>
                    </div>
                </div>
            </section>
            <section className='coolmateclub-exclude'>
                <h2>Một số trường hợp không được áp dụng</h2>
                <h4>Vì các sản phẩm này đã áp dụng chương trình giảm giá lớn rồi bạn nhé!</h4>
                <div className='exclude-wrap'>
                    <div className='exclude-item'>Coolmate Outlet</div>
                    <div className='exclude-item'>Wow box</div>
                    <div className='exclude-item'>Sản phẩm Flash sale</div>
                    <div className='exclude-item'>Tủ đồ định kỳ</div>

                </div>
            </section>
            <section className='service-thanks'>
                        <div className='service-thanks-img'>
                            <img src='https://mcdn.coolmate.me/uploads/December2021/Group_669_(1).jpg' alt='tks-img'/>
                        </div>
                        <div className='service-thanks-text'>
                            <h2>thankyou!</h2>
                            <h4>Trong cuộc sống có quá nhiều sự lựa chọn cảm ơn bạn đã chọn Coolmate!</h4>
                        </div>
            </section>
        </>
    )
}

export default About
