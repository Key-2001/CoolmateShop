import React,{useEffect,useState} from 'react'
import { useGlobalContext } from '../../context'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { formatCash } from '../../data/cashConvert'


const Cart = () => {
    const {infoEmploy,productsCart,shipPricing,totalPricing,toggleAmount,removeItemCart,handleChangeColorCartItem,handleChangeSizeCartItem,
            handleSetName,handleSetPhone,handleSetEmail,handleSetAddress,handleSetNote,handleSetPayment} = useGlobalContext();
    // console.log(productsCart);
    
    const {name,phone,email,address,bonusNote,payment} = infoEmploy;
    
    const [errName,setErrName] = useState({isErr: false,message:''})
    const [errPhone,setErrPhone] = useState({isErr: false,message:''})
    const [errEmail,setErrEmail] = useState({isErr: false,message:''})
    const [errAddress,setErrAddress] = useState({isErr: false,message:''})
    const [errPayment,setErrPayment] = useState({isErr:false,message:''})

    useEffect(() => {
        let payments = document.querySelectorAll('.form-payment-wrap>label');
        payments.forEach((item,index) => {
            if(item.classList.contains('is-active')){
                item.classList.remove('is-active');
            }
            if(item.htmlFor.includes(payment)){
                item.classList.add('is-active')
            }
            if(payment === ''){
                item.classList.remove('is-active');

            }
        })

    },[payment])
    const handleErrFormPhone = (data) => {
        let arr = data.split('');
        arr.forEach((item,index) => {
            let temp =  parseInt(item);
            // console.log(parseInt(item),Boolean(temp))
            if(!Boolean(temp) && temp !== 0){
                // console.log('haha',Boolean(temp))
                setErrPhone(() => {
                    return{
                        isErr:true,
                        message:'Số điện thoại không hợp lệ!',
                    }
                })
                
            }
        })
        if(arr.length !== 10){
            setErrPhone(() => {
                    return{
                        isErr:true,
                        message:'Số điện thoại không hợp lệ!',
                    }
                })
                
        }
    }


    const handleSubmit = () => {
        // name
        if(name === ''){
            setErrName(() => {
                return{
                    isErr:true,
                    message:'Vui lòng nhập thông tin này!'
                }
            })
            let nameInput = document.querySelector('#name-employ');
            nameInput.classList.add('is-err')
        }
        // phone
        handleErrFormPhone(phone);
        if(phone === ''){
            setErrPhone(() => {
                return{
                    isErr:true,
                    message:'Vui lòng nhập thông tin này!'
                }
            })
            let phoneInput = document.querySelector('#phone-employ');
            phoneInput.classList.add('is-err')
        }
        // email
        if(email.indexOf('@') === -1){
            setErrEmail(() => {
                return{
                    isErr:true,
                    message:'Email không hợp lệ!!'
                }
            })
            let emailInput = document.querySelector('#email-employ');
            emailInput.classList.add('is-err')
        }
        if(email === ''){
            setErrEmail(() => {
                return{
                    isErr:true,
                    message:'Vui lòng nhập Email!!'
                }
            })
            let emailInput = document.querySelector('#email-employ');
            emailInput.classList.add('is-err')
        }
        // address
        if(address === ''){
            setErrAddress(() => {
                return{
                    isErr:true,
                    message:'Vui lòng nhập địa chỉ!'
                }
            })
            let addressInput = document.querySelector('#address-employ');
            addressInput.classList.add('is-err')
        }
        if(payment === ''){
            setErrPayment(() => {
                return{
                    isErr:true,
                    message:'Vui lòng chọn hình thức thanh toán!'
                }
            })
            
        }
    }

    useEffect(() => {
        if(name !== ''){
            setErrName(() => {
                return{
                    isErr:false,
                    message:''
                }
            })
            let nameInput = document.querySelector('#name-employ');
            nameInput.classList.remove('is-err')
        }
        // phone
        if(phone !== ''){
            setErrPhone(() => {
                return{
                    isErr:false,
                    message:''
                }
            })
            let phoneInput = document.querySelector('#phone-employ');
            phoneInput.classList.remove('is-err')
        }
        

        // address
        if(address !== ''){
            setErrAddress(() => {
                return{
                    isErr:false,
                    message:''
                }
            })
            let addressInput = document.querySelector('#address-employ');
            addressInput.classList.remove('is-err')
        }
        // payment
        if(payment !== ''){
            setErrPayment(() => {
                return{
                    isErr:false,
                    message:''
                }
            })
        }
    },[name,phone,address,payment])

    useEffect(() => {
        if(email !== ''){
            setErrEmail(() => {
                return{
                    isErr:false,
                    message:''
                }
            })
            let emailInput = document.querySelector('#email-employ');
            emailInput.classList.remove('is-err')
        }
    },[email])

    return (
        <section className='screen-default cart-page'>
            <div className='info-employ'>
                <div className='info-address'>
                    <div className='header-info-address'>
                        <h3>Thông tin vận chuyển</h3>
                        <span>Bạn đã có tài khoản? <a href='#'>Đăng nhập ngay</a></span>
                    </div>
                    <div className='form-address'>
                        <div className='form-item'>
                            <div className='name-employ'>
                                <input id='name-employ' type='text' placeholder='Họ tên' value={name} onInput={(e) => handleSetName(e.target.value)}/>
                                {errName.isErr && <span className='err'>{errName.message}</span>}
                            </div>
                            <div className='phone-employ'>
                                <input id='phone-employ' type='text' placeholder='Số điện thoại' value={phone} onInput={(e) => handleSetPhone(e.target.value)}/>
                                {errPhone.isErr && <span className='err'>{errPhone.message}</span>}
                            </div>
                        </div>
                        <div className='email-employ'>
                            <input id='email-employ' type='email' placeholder='Email' value={email} onInput={(e) => handleSetEmail(e.target.value)}/>
                            {errEmail.isErr && <span className='err'>{errEmail.message}</span>}
                        </div>
                        <div className='address-employ' value={address}>
                            <input id='address-employ' type='text' placeholder='Địa chỉ' onInput={(e) =>handleSetAddress(e.target.value)}/>
                            {errAddress.isErr && <span className='err'>{errAddress.message}</span>}
                        </div>
                        <div className='select-address'>
                        </div>
                        <div className='bonus-time-ship'>
                            <input type='text' placeholder='Ghi chú thêm(Ví dụ: Giao hàng giờ hành chính)' value={bonusNote} onInput={(e) => handleSetNote(e.target.value)}/>
                        </div>
                    </div>
                    <div className='form-payment'>
                        <div className='form-payment-header'>
                            <h3>Hình thức thanh toán</h3>
                            {errPayment.isErr && <span style={{padding:'unset'}} className='err'>{errPayment.message}</span>}
                        </div>
                        <form className='form-payment-wrap'>
                            <label  htmlFor='paymentCOD' onClick={(e) => handleSetPayment(e.target.value)}>
                                <span>
                                    <input type='radio' id='paymentCOD' name='payment-method' value='COD'/>
                                </span>
                                <span>
                                    <img src='https://www.coolmate.me/images/COD.svg' alt='COD'/>
                                </span>
                                <span>COD<br/>Thanh toán khi nhận hàng</span>
                            </label>
                            <label htmlFor='paymentMOMO' onClick={(e) => handleSetPayment(e.target.value)}>
                                <span>
                                    <input type='radio' id='paymentMOMO' name='payment-method' value='MOMO'/>
                                </span>
                                <span>
                                    <img src='https://www.coolmate.me/images/momo-icon.png' alt='MOMO'/>
                                </span>
                                <span>MOMO</span>
                            </label>
                            <label htmlFor='paymentZaloPay' onClick={(e) => handleSetPayment(e.target.value)}>
                                <span>
                                    <input type='radio' id='paymentZaloPay' name='payment-method' value='ZaloPay'/>
                                </span>
                                <span>
                                    <img src='https://www.coolmate.me/images/logo-zalopay.svg' alt='ZaloPay'/>
                                </span>
                                <span>Ví điện tử ZaloPay<br/>Thẻ ATM / Internet Banking<br/>Thẻ tín dụng (Credit card) / Thẻ ghi nợ (Debit card)</span>
                            </label>
                            <label htmlFor='paymentShopeePay' onClick={(e) => handleSetPayment(e.target.value)}>
                                <span>
                                    <input type='radio' id='paymentShopeePay' name='payment-method' value='ShopeePay'/>
                                </span>
                                <span>
                                    <img src='https://mcdn.coolmate.me/image/September2021/195dbf69c0ac36f26fbd_(1).png' alt='ShopeePay'/>
                                </span>
                                <span>Ví ShopeePay<br/><i>Giảm thêm 50k cho khách hàng lần đầu mở ví và thanh toán bằng ShopeePay</i></span>
                            </label>
                            <label htmlFor='paymentVNPay' onClick={(e) => handleSetPayment(e.target.value)}>
                                <span>
                                    <input type='radio' id='paymentVNPay' name='payment-method' value='VNPay'/>
                                </span>
                                <span>
                                    <img src='https://www.coolmate.me/images/vnpay.png' alt='VNPay'/>
                                </span>
                                <span>Mobile banking của các ngân hàng qua VNPAY<br/>Thẻ ATM / Tài khoản ngân hàng<br/>VNPay QR</span>
                            </label>
                            <label htmlFor='paymentFoxPay' onClick={(e) => handleSetPayment(e.target.value)}>
                                <span>
                                    <input type='radio' id='paymentFoxPay' name='payment-method' value='FoxPay'/>
                                </span>
                                <span>
                                    <img src='https://www.coolmate.me/images/foxpay.png' alt='FoxPay'/>
                                </span>
                                <span>Ví FoxPay<br/><i> Ưu đãi 20k cho hóa đơn từ 50k dành cho người dùng foxpay mới tới ngày 31.03.2022<br/>(ưu đãi sẽ được thể hiện trong ví Foxpay của bạn)</i></span>
                            </label>
                        </form>
                    </div>
                    <span >Nếu bạn không hài lòng với sản phẩm của chúng tôi? Bạn hoàn toàn có thể trả lại sản phẩm. Tìm hiểu thêm <a href='#'>tại đây.</a></span>
                    <button type='submit' className='btn-cart' onClick={() => handleSubmit()}>Thanh toán</button>
                </div>
                
            </div>
            <div className='product-cart'>
                <div className='wrap-product-cart'>

                    <h3>Giỏ hàng</h3>
                    <div className='info-product-cart'>
                        {productsCart.map((product,index) => {
                            const {id,name,amountSingleProduct,colors,indexColorsList,indexSize,price} = product;
                            return(
                                <div key={index} className='cart-item'>
                                    <span className='btn-remove' onClick={() => removeItemCart(index)}><AiOutlineClose/></span>
                                    <div className='cart-item-img'>
                                        <img src={colors[indexColorsList].img[0]} alt='img-demo'/>
                                        <span>{amountSingleProduct}</span>
                                    </div>
                                    <div className='cart-item-info'>
                                        <Link to={`/product/${id}`}>{name}</Link>
                                        <div className='cart-item-color-size'>
                                            {colors[indexColorsList].color} - {colors[indexColorsList].sizes[indexSize].size}
                                        </div>
                                        <div className='select-cart-item-color-size'>
                                            <div className='select-color'>
                                                <select name='color' value={colors[indexColorsList].color} onChange={(e) => handleChangeColorCartItem(index,e.target.value)}>
                                                    {colors.map((colorItem,i) => {
                                                        const{color} = colorItem;
                                                        return(
                                                            <option key={i} index={i} value={color}>{color}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                            <div className='select-size'>
                                                <select name='size' value={colors[indexColorsList].sizes[indexSize].size} onChange={(e) => handleChangeSizeCartItem(index,e.target.value)}>
                                                    {colors[indexColorsList].sizes.map((sizeItem,index) => {
                                                        const {size,amount} = sizeItem;
                                                        return(
                                                            <option key={index} value={size}>{size}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className='action-cart-item'>
                                            <div className='quantity'>
                                                    {amountSingleProduct === 1 ?
                                                    <button disabled style={{cursor:'no-drop'}} className='btn-dec'>-</button>
                                                    :
                                                    <button className='btn-dec' onClick={() => toggleAmount(index,'dec')}>-</button>
                                                    }
                                                    <span className='quantity-number'>{amountSingleProduct}</span>
                                                    {amountSingleProduct === colors[indexColorsList].sizes[indexSize].amount ?
                                                    <button disabled style={{cursor:'no-drop'}} className='btn-inc'>+</button>
                                                    :
                                                    <button className='btn-inc' onClick={() => toggleAmount(index,'inc')}>+</button>
                                                    }
                                            </div>
                                            <div className='pricing-cart-item'>
                                                {formatCash(`${amountSingleProduct*price}`)}đ
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='discount-box'>
                        <input type='text' placeholder='Mã giảm giá'/>
                        <button type='button' disabled>Áp dụng</button>
                    </div>
                    {/* <span className='err'>Mã giảm giá không tồn tại</span> */}
                    <div className='pricing-info'>
                        <div className='pricing-item'>
                            <p>Tạm tính</p>
                            <p>
                                {formatCash(`${totalPricing - shipPricing}`)}đ
                            </p>
                        </div>
                        <div className='pricing-item'>
                            <p>Giảm giá</p>
                            <p >
                                0đ
                            </p>
                        </div>
                        <div className='pricing-item'>
                            <p>Phí giao hàng</p>
                            <p>
                                {formatCash(`${shipPricing}`)}đ
                            </p>
                        </div>
                    </div>
                    <div className='total-pricing'>
                        <p>Tổng</p>
                        <p className='pricing-total-number'>
                            {formatCash(`${totalPricing}`)}đ

                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart
