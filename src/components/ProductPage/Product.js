import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import Loading from '../../pages/Loading';
import SingleProductProductsPage from './SingleProductProductsPage';


const Product = () => {

    const {isLoading,products,queryTemp,setQueryTemp,sortType,setSortType,
            typeClothes,setTypeClothes,sizeFilter,setSizeFilter} = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className='wrap-product-page'>
            <div className='option-product-page'>
                <div className='wrap-option screen-default'>
                    <div className='wrap-search-filter'>
                        <h4>sản phẩm</h4>
                        <div className='filter-search-form'>
                            <form className='form-search' onSubmit={(e) => handleSubmit(e)}>
                                <input className='search-filter' placeholder='Tìm kiếm sản phẩm...' value={queryTemp} onChange={(e) => setQueryTemp(e.target.value)}/>
                                <button className='btn-search'>
                                <img src='https://www.coolmate.me/images/header/icon-search.svg' alt='search-icon'/>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className='wrap-other-filter'>
                        {/* <form className='filter-select-item'>
                            <label htmlFor='size'>Kích cỡ</label>
                            <select id='size'  name='size' className='size-filter' onChange={(e) => setSizeFilter(e.target.value)} value={sizeFilter}>
                                <option value='all'>Tất cả</option>
                                <option value='S'>S</option>
                                <option value='XS'>XS</option>
                                <option value='M'>M</option>
                                <option value='L'>L</option>
                                <option value='XL'>XL</option>
                                <option value='2XL'>2XL</option>
                                <option value='3XL'>3XL</option>
                            </select>
                        </form> */}
                        <form className='filter-select-item'>
                            <label htmlFor='type'>Nhóm sản phẩm</label>
                            <select id='type'  name='type' className='type-filter' onChange={(e) => setTypeClothes(e.target.value)} value={typeClothes}>
                                <option value='all'>Tất cả</option>
                                <option value='Áo Khoác'>Áo khoác</option>
                                <option value='Áo dài tay'>Áo dài tay</option>
                                <option value='Áo Polo'>Áo polo</option>
                                <option value='Áo ngắn tay'>Áo T-shirt</option>
                                <option value='Áo sơ mi'>Áo sơ mi</option>
                                <option value='Áo thể thao nam'>Áo thể thao</option>
                                <option value='Quần lót nam'>Quần lót nam</option>
                                <option value='Quần short'>Quần short</option>
                                <option value='Quần dài'>Quần dài</option>
                                <option value='Tất (vớ)'>Tất (vớ)</option>
                            </select>
                        </form>
                        <form className='filter-select-item'>
                            <label htmlFor='sort'>Sắp xếp</label>
                            <select id='sort'  name='sort' className='sort-filter' onChange={(e) => setSortType(e.target.value)} value={sortType}>
                                <option value='name-a'>Sản phẩm (A - Z)</option>
                                <option value='name-z'>Sản phẩm (Z - A)</option>
                                <option value='price-lowest'>Giá thấp đến cao</option>
                                <option value='price-highest'>Giá cao đến thấp</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
            <div className='wrap-products screen-default'>
                {isLoading && <Loading/>}
                {products.map((productItem,index) => {
                    const{id,name,price,colors} = productItem;
                    return(
                        <div key={id} className='product-item'>
                            <SingleProductProductsPage product={productItem}/>
                            
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Product
