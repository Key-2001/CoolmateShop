import React,{useState,useEffect} from 'react'
import { formatCash } from '../../data/cashConvert';
import { useGlobalContext } from '../../context';



const Notify = () => {
    const {cartItem,isNotify,setIsNotify} = useGlobalContext();
    const {name,colors,indexColorsList,price} = cartItem;
    // console.log(cartItem)
    useEffect(() => {
        if(isNotify){
            let notify = document.querySelectorAll('.notify');
            notify.forEach((item) => {
                    item.classList.add('is-active');
                    setIsNotify(false)
                
            })
            
        }
        let Notify = setTimeout(() => {
            let notify = document.querySelectorAll('.notify');
            notify.forEach((item,index) => {
                    item.classList.remove('is-active');
                    setIsNotify(false)
                
            })
            
        },2000)
        return(() => {
            clearTimeout(Notify);
        })

    },[isNotify])

    useEffect(() => {
        let notify = document.querySelector('.notify');
        notify.classList.remove('is-active');
    },[cartItem])

    return (
        <div className='notify'>
            <div className='notify-wrap'>
                <h4>Đã thêm vào giỏ hàng!</h4>
                <div className='notify-content'>
                            <div className='wrap-item-notify'>
                                <div className='img-part-notify'>
                                    <img src={colors[indexColorsList].img[0]} alt='demo'/>
                                </div>
                                <div className='info-part-notify'>
                                    <h4>{name}</h4>
                                    <span>màu: {colors[indexColorsList].color}</span>
                                    <span>{formatCash(`${price}`)}đ</span>
                                </div>
                            </div>
                       
                </div>
            </div>
        </div>
    )
}

export default Notify
