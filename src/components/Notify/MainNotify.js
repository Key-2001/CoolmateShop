import React,{useEffect,useState} from 'react'
import { useGlobalContext } from '../../context';
import Notify from './Notify';

const MainNotify = () => {
    const {cartItem,isNotify,setIsNotify} = useGlobalContext();
    const [list,setList] = useState([]);
    
    return (
        <div className='main-notify'>
            {
                list.map((item,index) => {
                    
                    return(
                        <div className='notify' key={index}>
                            <Notify  cartItem={item} isNotify={isNotify} setIsNotify={setIsNotify}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MainNotify
