import React,{useState,useEffect} from 'react'
import { slideBanner } from '../../data/slideBanner'
import {GrLinkPrevious,GrLinkNext} from 'react-icons/gr'
const SlideBanner = () => {
    const [slideData,setSlideData] = useState(slideBanner);
    const[indexBanner,setIndexBanner]= useState(0);

    useEffect(() => {
        let lastIndex = slideData.length - 1;
        if(indexBanner === slideData.length){
            setIndexBanner(0);
        }
        if(indexBanner < 0){
            setIndexBanner(lastIndex);
        }
    },[slideData,indexBanner])

    useEffect(() => {
        let slide = setInterval(()=>setIndexBanner(indexBanner + 1),5000);
        return () => {
        clearInterval(slide);
        }
    },[indexBanner])

    useEffect(() => {
        const slickSlides = document.querySelectorAll('#slick-slide');
        slickSlides.forEach((slickSlideItem,index) => {
            if(slickSlideItem.classList.contains('slick-slide-active')){
                slickSlideItem.classList.remove('slick-slide-active')
            }
            if(index === indexBanner){
                slickSlideItem.classList.add('slick-slide-active')
            }
        })
    },[indexBanner])

    return (
        <div className='slide-banner-inner'>

            <div className='prev-banner-button' onClick={() => setIndexBanner(indexBanner - 1)}>
                <button className='btn-banner'>
                    <GrLinkPrevious className='banner-icon'/>

                </button>
            </div>
            {slideData.map((slideItem,index) => {
                const {id,img} = slideItem;
                let position = 'banner-next';
                if(indexBanner === index){
                    position='banner-active';
                }
                if(index === indexBanner -1 || (indexBanner===0 && index === slideBanner.length-1)){
                   position ='banner-prev'
                }
                return(
                    <a key={id} href='#' className={position} >
                        <img src={img} alt='img-slide'/>
                    </a>

                )
            })}
            <div className='next-banner-button' onClick={() => setIndexBanner(indexBanner + 1)}>
                <button className='btn-banner'>
                    <GrLinkNext className='banner-icon'/>

                </button>
            </div>

            <ul className='tab-list-banner'>
                {slideData.map((slideItem,index) => {
                    const {id} = slideItem;
                    return(
                        <li key={id}>
                            <button id='slick-slide' type='button' className='slick-slide'></button>
                        </li>
                    )
                })}
            </ul>
            <div className='banner-policy'>
                <div className='banner-policy-inner'>
                    <div className='policy-item'>
                        Miễn phí vận chuyển cho <br/> đơn hàng trên 300K
                    </div>
                    <div className='policy-item'>
                        60 ngày đổi trả vì<br/> bất kì lý do gì
                    </div>
                    <div className='policy-item'>
                        Đến tận nơi nhận hàng trả, <br/>hoàn tiền trong 24h
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideBanner
