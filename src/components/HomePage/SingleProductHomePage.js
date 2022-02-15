import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { formatCash } from '../../data/cashConvert';


const SingleProductHomePage = ({product}) => {
    const{id,name,price,colors} = product;
    
    const [indexTempImg,setIndexTempImg] = useState(0)
    

    let tempImg = colors[indexTempImg]

    const handleClickColorItem = (index) => {
        setIndexTempImg(index);
        const colors = document.querySelectorAll('.color-option-item');
        // console.log(colors[4].id)
        localStorage.setItem('index',index);

    }


    return (
        <>
                                    <div className='product-item-img'>
                                        <Link to={`/product/${id}`} className='wrap-img-link-product'>
                                          <img className='img-first' src={tempImg.img[0]} alt={tempImg.color}/>
                                          <img className='img-swap' src={tempImg.img[1]} alt={tempImg.color}/>
                                          <div className='wrap-sizes'>
                                            {tempImg.sizes.map((sizeItem,index) => {
                                                const {size} = sizeItem;
                                                return(
                                                    <span className='size-item' key={index}>{size}</span>
                                                )
                                            })}
                                          </div>
                                        </Link>
                                    </div>
                                    <div className='product-item-content'>
                                        <div className='color-option'>
                                            {colors.map((colorItem,index) => {
                                                const{color,imgColor} = colorItem;
                                                let tempClass = '';
                                                if(indexTempImg === index){
                                                    tempClass = 'is-active'
                                                }
                                                return(
                                                    <div key={index} className={`color-option-item ${tempClass}`} onClick={() => handleClickColorItem(index)}>
                                                        <img src={imgColor} alt={color}/>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <Link to={`/product/${id}`} >
                                          {name}
                                        </Link>
                                        <span>{formatCash(`${price}`)}đ</span>
                                    </div>
        </>
    )
}

export default SingleProductHomePage
