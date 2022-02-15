import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import { useGlobalContext } from '../../context'
import {BsCheck,BsStarFill,BsStarHalf,BsStar} from 'react-icons/bs'
import Loading from '../../pages/Loading';
import { formatCash } from '../../data/cashConvert';

const getIndexColorList = () => {
    const data = localStorage.getItem('index');
    return data ? parseInt(data) : 0;
}

const SingleProduct = () => {
    const {isLoading,products,handleAddCartItem,cartItem,setCartItem} = useGlobalContext();
    const {id} = useParams();
    const [singleProduct,setSingleProduct] = useState([]);
    const [indexColorsList,setIndexColorsList] = useState(getIndexColorList());
    const [starList,setStarList] = useState([0,1,2,3,4]);
    const [indexImg,setIndexImg] = useState(0);
    const [lengthColors,setLengthColors] = useState(0);
    const [indexSize,setIndexSize] = useState(0);

    
    const [amountSingleProduct,setAmountSingleProduct] = useState(1);
    // console.log(id);
    useEffect(() => {
        let data = products.filter((item) => item.id === parseInt(id));
        setSingleProduct(data);
        // console.log(singleProduct)
    },[products])
   
    
    useEffect(() => {
        const slickSlides = document.querySelectorAll('#slick-slides');
        slickSlides.forEach((slickSlideItem,index) => {
            if(slickSlideItem.classList.contains('slick-slide-active')){
                slickSlideItem.classList.remove('slick-slide-active')
            }
            if(index === indexImg){
                slickSlideItem.classList.add('slick-slide-active')
            }
        })
        const imgSubs = document.querySelectorAll('#img-sub');
        imgSubs.forEach((item,index) => {
            if(item.classList.contains('img-sub-active')){
                item.classList.remove('img-sub-active');
            }
            if(index === indexImg){
                item.classList.add('img-sub-active');
            }
        })
    },[indexImg])

    useEffect(() => {
        setAmountSingleProduct(1);
    },[indexSize,indexColorsList])
    
    useEffect(() => {
        singleProduct.forEach((product) => {
            const {id,name,type,price,colors} = product;
            setCartItem(() => {
                return{
                    id,
                    name,
                    type,
                    price,
                    colors,
                    amountSingleProduct,
                    indexColorsList,
                    indexSize
                }
            })
        })
        // console.log(productsCart);
    },[amountSingleProduct,indexColorsList,indexSize,products])

    const handleClickMainColor = (index) => {
        setIndexColorsList(index);
        setIndexSize(0);
        setIndexImg(0);
    }

    const handleHoverEnter = () => {
        const button = document.querySelector('#action-btn');
        button.classList.add('btn-action-sub')
    }
    const handleHoverLeave = () => {
        const button = document.querySelector('#action-btn');
        button.classList.remove('btn-action-sub')
    }

    
    return (
        <section className='screen-default single-product-page'>
            {isLoading && <Loading/>}
            {singleProduct.map((product) => {
                {/* console.log(product) */}
                const {id,colors, name, price, sold, stars, type, votes, description} = product;
                return(<div key={id} className='wrap-single-product-info'>
                    <div className='header-single-product'>
                        <ul>
                            <li>
                                <a href='/'>Trang chủ</a>
                            </li>
                            <li>
                                <a href='/'>{type}</a>
                            </li>
                        </ul>
                    </div>
                    <div className='info-single-product'>
                        <div className='wrap-info-img'>
                            <button className='btn-prev-img' onClick={() => setIndexImg((prev) => {
                                if(prev === 0){
                                    return colors[indexColorsList].img.length - 1
                                }
                                return prev - 1
                            })}/>
                            <button className='btn-next-img' onClick={() => setIndexImg((prev) => {
                                if(prev === colors[indexColorsList].img.length - 1){
                                    return 0
                                }
                                return prev + 1
                            })}/>
                            {colors[indexColorsList].img.map((item,index) => {
                                
                                let position = 'img-none';
                                if(index === indexImg){
                                    position = 'img-active'
                                }
                                
                                return(
                                    <img key={index} src={item} className={position}/>
                                )
                            })}
                            <ul className='tab-list-banner'>
                                {colors[indexColorsList].img.map((item,index) => {
                                    let tempPosition = '';
                                    if(index === 0){
                                        tempPosition = 'slick-slide-active'
                                    }

                                    return(
                                        <li key={index}>
                                            <button id='slick-slides' type='button' className={`${tempPosition} slick-slide`}></button>
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className='wrap-img-sub'>
                                {colors[indexColorsList].img.map((item,index) => {
                                    let tempPosition = '';
                                    if(index === 0){
                                        tempPosition = 'img-sub-active'
                                    }
                                return(
                                    <div id='img-sub' key={index} className={`${tempPosition} img-sub`} onClick={() => setIndexImg(index)}>
                                        <img  src={item} alt='img-sub'/>
                                    </div>
                                )
                            })}
                            </div>
                        </div>
                        <div className='wrap-content-info'>
                            <h3>{name}</h3>
                            <div className='reviews-product'>
                                <div className='stars'>
                                    {starList.map((starItem) => {
                                        let temp = stars - starItem;
                                        
                                        if(temp >= 1){
                                            return(
                                                <span key={starItem}><BsStarFill/></span>
                                            )
                                        }
                                        else if(temp >0 && temp<1){
                                            return(
                                                <span key={starItem}><BsStarHalf/></span>

                                            )
                                        }
                                        else{
                                            return(
                                                <span key={starItem}><BsStar/></span>

                                            )
                                        }
                                    })}
                                </div>
                                <div className='amount-review'>{votes}</div>
                                <div className='sold'>Đã bán: {sold}</div>
                            </div>
                            <h5>{formatCash(`${price}`)}đ</h5>
                            <div className='color-product'>
                                <span>Màu sắc: <strong>{colors[indexColorsList].color}</strong></span>
                                <div className='wrap-main-color'>
                                    {colors.map((item,index) => {
                                        const {imgColor} = item;
                                        let tempClass = '';
                                        if(index === indexColorsList){
                                            tempClass = 'is-active'
                                        }
                                        return(
                                            <div key={index} className={`${tempClass} main-color`} onClick={() => handleClickMainColor(index)}>
                                                <img src={imgColor} alt='mainColor'/>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='size-product'>
                                <span>Kích thước: <strong>{colors[indexColorsList].sizes[indexSize].size}</strong></span>
                                <div className='wrap-sizes-product'>
                                    {colors[indexColorsList].sizes.map((sizeItem,index) => {
                                        const {size,amount} = sizeItem;

                                        let position = '';
                                        if(index === indexSize){
                                            position = 'is-active';
                                        }

                                        return(
                                            <div key={index} className={`${position} size-product-item`} onClick={() => setIndexSize(index)}>
                                                <span>{size}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='action-product'>
                                <div className='quantity'>
                                    {amountSingleProduct === 1 ?
                                    <button style={{cursor:'no-drop'}} disabled className='btn-dec'>-</button> : 
                                    <button  className='btn-dec' onClick={() => setAmountSingleProduct(amountSingleProduct - 1)}>-</button>
                                    }
                                    <span className='quantity-number'>{amountSingleProduct}</span>
                                    {amountSingleProduct === colors[indexColorsList].sizes[indexSize].amount ? 
                                    <button style={{cursor:'no-drop'}} disabled className='btn-inc'>+</button>
                                    :
                                    <button className='btn-inc' onClick={() => setAmountSingleProduct(amountSingleProduct + 1)}>+</button>
                                    }
                                </div>
                                <div className='btn-action'>
                                    <button id='action-btn' type='button' onMouseEnter={() => handleHoverEnter()}
                                                                            onMouseLeave={() => handleHoverLeave()}
                                                                           onClick={() => handleAddCartItem(cartItem)}>Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                            <div className='policy-product'>
                                <div className='wrap-policy-product'>
                                    <div className='policy-product-item'>
                                        <div className='policy-product-icon'>
                                            <img src='https://www.coolmate.me/images/icons/icon3.svg' alt='icon'/>
                                        </div>
                                        <span>Đổi trả cực dễ<br/>chỉ cần số điện thoại</span>
                                    </div>
                                    <div className='policy-product-item'>
                                        <div className='policy-product-icon'>
                                            <img src='https://www.coolmate.me/images/icons/icon4.svg' alt='icon'/>
                                        </div>
                                        <span>Miễn phí vận chuyển<br/>cho đơn hàng trên 300k</span>
                                    </div>
                                    <div className='policy-product-item'>
                                        <div className='policy-product-icon'>
                                            <img src='https://www.coolmate.me/images/icons/icon5.svg' alt='icon'/>
                                        </div>
                                        <span>60 ngày đổi trả<br/>vì bất kỳ lý do gì</span>
                                    </div>
                                    <div className='policy-product-item'>
                                        <div className='policy-product-icon'>
                                            <img src='https://www.coolmate.me/images/icons/icon2.svg' alt='icon'/>
                                        </div>
                                        <span>Hotline 1900.27.27.37<br/>hỗ trợ từ 8h30 - 22h mỗi ngày</span>
                                    </div>
                                    <div className='policy-product-item'>
                                        <div className='policy-product-icon'>
                                            <img src='https://www.coolmate.me/images/icons/icon1.svg' alt='icon'/>
                                        </div>
                                        <span>Đến tận nơi nhận hàng trả,<br/>hoàn tiền trong 24h</span>
                                    </div>
                                    <div className='policy-product-item'>
                                        <div className='policy-product-icon'>
                                            <img src='https://www.coolmate.me/images/icons/icon6.svg' alt='icon'/>
                                        </div>
                                        <span>Giao hàng 2-5 ngày<br/>(có thể lâu hơn do Covid19)</span>
                                    </div>
                                </div>
                            </div>
                            <div className='features-product'>
                                <b>Đặc điểm nổi bật</b>
                                <div className='features-list'>
                                    {description.map((item,index) => {
                                        return(
                                            <div key={index} className='feature-item'>
                                                <span>{item}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            })}
        </section>
    )
}

export default SingleProduct
