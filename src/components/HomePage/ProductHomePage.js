import React,{useState,useEffect} from 'react'
import { useGlobalContext } from '../../context'
import Loading from '../../pages/Loading';
import { Link } from 'react-router-dom';
import SingleProductHomePage from './SingleProductHomePage';


const ProductHomePage = () => {
    const {isLoading,products} = useGlobalContext();
    const [indexTempImg,setIndexTempImg] = useState(0);
    const [typeClothesHomePage,setTypeClothesHomePage] = useState('Polo');

    useEffect(() => {
        const clothesType = document.querySelectorAll('.home-tab-products');
        const navType = document.querySelectorAll('.home-tab-item');
        clothesType.forEach((type,index) => {
            if(type.classList.contains('active-grid')){
                type.classList.remove('active-grid');
            }
            if(type.id === typeClothesHomePage){
                type.classList.add('active-grid');
            }
        }) 
        navType.forEach((typeNavItem) => {
            // console.log(typeNavItem.type)
            if(typeNavItem.classList.contains('is-active')){
                typeNavItem.classList.remove('is-active')
            }
            if(typeNavItem.type === typeClothesHomePage){
                typeNavItem.classList.add('is-active')
            }
        })
    },[typeClothesHomePage])

    return (
        <>
            <h4>Cần Phải Có</h4>
            <div className='home-tab'>
                <div className='home-tab-header'>
                    <a href='#Áo Polo' type='Polo'  className='home-tab-item is-active' onClick={() => setTypeClothesHomePage('Polo')}>Áo Polo</a>
                    <a href='#Áo Khoác' type='jacket' className='home-tab-item' onClick={() => setTypeClothesHomePage('jacket')}>Áo khoác</a>
                    <a href='#Áo Thể thao' type='sport'  className='home-tab-item' onClick={() => setTypeClothesHomePage('sport')}>Áo thể thao</a>
                </div>
                {isLoading && <Loading/>}
                <div className='home-tab-wrap'>
                    <div id='Polo' className='home-tab-products active-grid'>
                        {products.filter((product) => product.type === "Áo Polo").slice(0,4).map((product) => {
                            {/* console.log(product) */}
                            const{id,name,price,colors} = product;
                            {/* console.log(colors) */}
                            return(
                                <div id={`product-${id}`} key={id} className='home-tab-product-item'>
                                    <SingleProductHomePage product = {product}/>
                                </div>
                                
                            )
                        })}
                    </div>
                    <div id='jacket' className='home-tab-products '>
                        {products.filter((product) => product.type === "Áo Khoác").slice(0,4).map((product) => {
                            {/* console.log(product) */}
                            const{id,name,price,colors} = product;
                            {/* console.log(colors) */}
                            return(
                                <div id={`product-${id}`} key={id} className='home-tab-product-item'>
                                    <SingleProductHomePage product = {product}/>
                                </div>
                                
                            )
                        })}
                    </div>
                    <div id='sport' className='home-tab-products '>
                        {products.filter((product) => product.type === "Áo thể thao nam").slice(0,4).map((product) => {
                            {/* console.log(product) */}
                            const{id,name,price,colors} = product;
                            {/* console.log(colors) */}
                            return(
                                <div key={id} className='home-tab-product-item'>
                                    <SingleProductHomePage product = {product}/>
                                </div>
                                
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductHomePage
