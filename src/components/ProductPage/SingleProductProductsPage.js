import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import {BsCheck,BsStarFill,BsStarHalf,BsStar} from 'react-icons/bs'
import { formatCash } from '../../data/cashConvert';



const SingleProductProductsPage = ({product}) => {
    // console.log(product)
    const{id,name,price,colors,stars,votes} = product;
    const [starList,setStarList] = useState([0,1,2,3,4]);

    const handleOnClick = (index,indexSize) => {
        localStorage.setItem('index',index);
        console.log(indexSize)
        const{id,type,name,price,colors,stars,votes} = product;

        let cartItem = {
            id,
            name,
            type,
            price,
            colors,
            amountSingleProduct: 1,
            indexColorsList: index,
            indexSize: indexSize
        }
        localStorage.setItem('cartItem',JSON.stringify(cartItem))
    }

    return (
        <>
            {colors.map((colorItem,index) => {
                const {color,img,sizes} = colorItem;
                return(
                    <div className='product-item-child' key={index}>
                        <div className='product-item-img'>
                            <div className='reviews'>
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
                                <div className='votes'>
                                    ({votes})
                                </div>
                            </div>
                            <a href={`/product/${id}`} className='wrap-img-link-product'>
                                <img className='img-first' src={img[0]} alt={color}/>
                                <img className='img-swap' src={img[1]} alt={color} onClick={() => handleOnClick(index,0)}/>
                                <div className='wrap-sizes'>
                                    {sizes.map((sizeItem,indexSize) => {
                                        const {size} = sizeItem;
                                        return(
                                                <span className='size-item' key={indexSize} onClick={() => handleOnClick(index,indexSize)}>{size}</span>
                                            )
                                    })}
                                </div>
                            </a>
                        </div>
                        <div className='product-item-content'>
                            <div className='margin-top__1rem'>
                                <a href={`/product/${id}`} onClick={() => handleOnClick(index,0)}>
                                {name} - {color}
                                </a>
                                <span>{formatCash(`${price}`)}đ</span>
                            </div>
                        </div>

                    </div>
                )
            })}
        </>
    )
}

export default SingleProductProductsPage
