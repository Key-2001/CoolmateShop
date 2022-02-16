import React from 'react'
import { Link } from 'react-router-dom'

const Customer = () => {
    return (
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

export default Customer
