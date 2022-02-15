import React,{useState,useEffect,useReducer,useContext} from 'react'
import reducer from './reducer';


const AppContext = React.createContext();

const API_ENDPOINT = "http://demo1657997.mockable.io/products";

const getProductsCart = () => {
    const data = localStorage.getItem('productCart');
    return data ? JSON.parse(data) : [];
}

const initialState = {
    isLoading: false,
    products:[],
    // cart info
    infoEmploy: {
        name:'',
        phone:'',
        email:'',
        address:'',
        bonusNote:'',
        payment:''
    },
    productsCart: getProductsCart(),
    amountCart:0,
    shipPricing: 25000,
    totalPricing:0,
}



const getSortType = () => {
    const data = localStorage.getItem('sortType')
    return data ? data : 'name-a'
}

const getCartItem = () => {
    const data = localStorage.getItem('cartItem');
    return data ? JSON.parse(data) : {} ;
}



const AppProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,initialState);

    const [dataDefault,setDataDefault] = useState([]);
    const [sortType,setSortType] = useState(getSortType());
    const [queryTemp,setQueryTemp] = useState('');
    const [typeClothes,setTypeClothes] = useState('all');
    const [sizeFilter,setSizeFilter] = useState('all')
    const [cartItem,setCartItem] = useState(getCartItem());
    const [isNotify,setIsNotify] = useState(false);

    // fetch api
    const fetchData = async (url) => {
        dispatch({type:'SET_LOADING'});
        try {
            const response = await fetch(url);
            const data = await response.json();
            setDataDefault(data.products);
            handleChangeSortType(data.products)
            dispatch({type:'SET_PRODUCTS',payload:data.products});
            // console.log(data);
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(()=> {
        fetchData(API_ENDPOINT)
    },[])
    // handle search product

    const handleChangeSortType = (data) => {
        // console.log(sortType)
        if(sortType === 'price-lowest'){
            
            data.sort((a,b) => {
                if(a.price < b.price) return -1
                return 0
            })
        }
        else if(sortType === 'price-highest'){
            data.sort((a,b) => {
                if(a.price > b.price) return -1
                return 0
            }) 
        }
        else if(sortType === 'name-a'){
            data.sort((a,b) => {
                if(a.name < b.name) return -1
                return 0
            })
        }
        else{
            data.sort((a,b) => {
                if(a.name > b.name) return -1
                return 0
            })
        }
        localStorage.setItem('sortType',sortType);
        dispatch({type:'SET_PRODUCTS',payload:data});
        
    }

     const handleSearchTemp = (data) => {
        if(queryTemp !== ''){
            
            data = data.filter((item) => {
                return item.name.toLowerCase().indexOf(queryTemp.toLowerCase()) !== -1;
                // return item.name.toLowerCase() === queryTemp.toLowerCase();
            });
            console.log(data);
        }
        
        dispatch({type:'SET_PRODUCTS',payload:data});
        return data
    }

    const handleFilterType = (data) => {
        // console.log(typeClothes)
        if(typeClothes !== 'all'){
            data = data.filter((item) => item.type === typeClothes)
        }
        // console.log(data);

        dispatch({type:'SET_PRODUCTS',payload:data});
        // console.log(state.products)
        return data;
    }

    const handleFilterSizes = (data) => {
        if(sizeFilter !== 'all'){
            data = data.filter((item) => {
                item =  item.colors.filter((color) => {
                    color =  color.sizes.filter((size) => size === sizeFilter)
                })
            })
        }

        dispatch({type:'SET_PRODUCTS',payload:data});
        return data;
    }

    useEffect(() => {
        let dataTemp = dataDefault;
        dataTemp = handleSearchTemp(dataTemp);
        dataTemp = handleFilterType(dataTemp);
        dataTemp = handleFilterSizes(dataTemp);
        handleChangeSortType(dataTemp);
        // console.log(state.products)
    },[queryTemp,sortType,typeClothes])


    // handle events cart page

    const handleAddCartItem = (data) => {
        dispatch({type:'SET_CART',payload:data});
        setIsNotify(true);
    }

    const toggleAmount = (index,type) => {
        dispatch({type:'TOGGLE_AMOUNT',payload:{index,type}})
    }

    const removeItemCart = (index) => {
        dispatch({type:'REMOVE',payload:index})
    }

    const handleChangeColorCartItem = (indexCartItem,color) => {
        let indexColor = 0;
        // console.log(indexCartItem,indexColor);
        state.productsCart[indexCartItem].colors.forEach((colorItem,index) => {
            if(colorItem.color === color){
                indexColor = index;
            }
        })
        dispatch({type:'CHANGE_COLOR',payload:{indexCartItem,indexColor}})
        // console.log(indexColor);
    }

    const handleChangeSizeCartItem = (indexCartItem,size) => {
        let indexSize = 0;
        let indexTemp = state.productsCart[indexCartItem].indexColorsList;
        // console.log(indexTemp)
        // console.log(indexCartItem,size);
        // console.log(state.productsCart[indexCartItem].colors[indexTemp])
        state.productsCart[indexCartItem].colors[indexTemp].sizes.forEach((sizeItem,index) => {
            if(sizeItem.size === size){
                indexSize = index;
            }
        })
        dispatch({type:'CHANGE_SIZE',payload:{indexCartItem,indexSize}})

    }

    useEffect(() => {
        localStorage.setItem('productCart',JSON.stringify(state.productsCart));
        dispatch({type:'GET_AMOUNTS'});
        dispatch({type:'GET_SHIP'});
        dispatch({type:'GET_TOTAL'});
    },[state.productsCart])
    // handle input info employee
    const handleSetName = (data) => {
        dispatch({type:'SET_NAME_EMPLOY',payload:data})
    }
    const handleSetPhone = (data) => {
        dispatch({type:'SET_PHONE_EMPLOY',payload:data})
    }
    
    const handleSetEmail = (data) => {
        dispatch({type:'SET_EMAIL_EMPLOY',payload:data})
    }
    
    const handleSetAddress = (data) => {
        dispatch({type:'SET_ADDRESS_EMPLOY',payload:data})
    }
    const handleSetNote = (data) => {
        dispatch({type:'SET_NOTE_EMPLOY',payload:data})
    }
    const handleSetPayment = (data) => {
        dispatch({type:'SET_PAYMENT_EMPLOY',payload:data})
    }
    

    return(
        <AppContext.Provider value={{...state,isNotify,setIsNotify,queryTemp,setQueryTemp,sortType,setSortType,typeClothes,setTypeClothes,cartItem,setCartItem,
                                    sizeFilter,setSizeFilter,handleAddCartItem,toggleAmount,removeItemCart,handleChangeColorCartItem,handleChangeSizeCartItem,
                                    handleSetName,handleSetPhone,handleSetEmail,handleSetAddress,handleSetNote,handleSetPayment}}>{children}</AppContext.Provider>
    )
}

// make sure use

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext,AppProvider}
