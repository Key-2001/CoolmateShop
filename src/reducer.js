const reducer = (state,action) => {
    switch(action.type){
        case 'SET_LOADING':{
            return{
                ...state,
                isLoading: true,
            }
        } 
        case 'SET_PRODUCTS':{
            return{
                ...state,
                isLoading:false,
                products: action.payload,
            }
        }
        case 'SET_CART':{
            return{
                ...state,
                productsCart:[...state.productsCart,action.payload]
            }
        }
        case 'TOGGLE_AMOUNT':{
            let tempCarts = state.productsCart.map((cartItem,index) => {
                if(index === action.payload.index){
                    if(action.payload.type === 'dec'){
                        return{...cartItem,amountSingleProduct:cartItem.amountSingleProduct - 1};
                    }
                    if(action.payload.type === 'inc'){
                        return{...cartItem,amountSingleProduct:cartItem.amountSingleProduct + 1};
                    }
                }
                return cartItem;
            })
            return{
                ...state,
                productsCart:tempCarts,
            }
        }
        case 'REMOVE':{
            return{
                ...state,
                productsCart:state.productsCart.filter((cartItem,index) => index !== action.payload)
            }
        }
        case 'CHANGE_COLOR':{
            let tempCarts = state.productsCart.map((cartItem,index) => {
                let amountMax = cartItem.colors[action.payload.indexColor].sizes[cartItem.indexSize].amount;
                if(index === action.payload.indexCartItem){
                    return {...cartItem,indexColorsList:parseInt(action.payload.indexColor),indexSize: 0,amountSingleProduct: cartItem.amountSingleProduct <= amountMax ? cartItem.amountSingleProduct : amountMax};
                }
                return cartItem;
            })
            return{
                ...state,
                productsCart: tempCarts,
            }
        }
        case 'CHANGE_SIZE':{
            let tempCarts = state.productsCart.map((cartItem,index) => {
                if(index === action.payload.indexCartItem){
                    return {...cartItem,indexSize:action.payload.indexSize}
                }
                return cartItem;
            })
            return{
                ...state,
                productsCart: tempCarts,
            }
        }
        case 'GET_AMOUNTS':{
            let tempAmount = state.productsCart.reduce((prev,cur) => {
                    return prev + cur.amountSingleProduct
            },0)
            return{
                ...state,
                amountCart: tempAmount,
            }
        }
        case 'GET_SHIP':{
            
            let shipPricing = 25000;
            let total = state.productsCart.reduce((prev,cur) => {
                let totalCur = cur.price * cur.amountSingleProduct;
                return prev + totalCur;
            },0)
            if(total >= 300000){
                shipPricing = 0;
            }
            return{
                ...state,
                shipPricing:shipPricing,
            }
        }
        case 'GET_TOTAL':{
            let total = state.productsCart.reduce((prev,cur) => {
                let totalCur = cur.price * cur.amountSingleProduct;
                return prev + totalCur;
            },state.shipPricing)

            return{
                ...state,
                totalPricing: total,
            }
        }
        case 'SET_NAME_EMPLOY':{
            return{
                ...state,
                infoEmploy: {
                    ...state.infoEmploy,
                    name: action.payload
                }
            }
        }
        case 'SET_PHONE_EMPLOY':{
            return{
                ...state,
                infoEmploy:{
                    ...state.infoEmploy,
                    phone: action.payload
                }
            }
        }
        case 'SET_EMAIL_EMPLOY':{
            return{
                ...state,
                infoEmploy:{
                    ...state.infoEmploy,
                    email: action.payload
                }
            }
        }
        case 'SET_ADDRESS_EMPLOY':{
            return{
                ...state,
                infoEmploy:{
                    ...state.infoEmploy,
                    address: action.payload
                }
            }
        }
        case 'SET_NOTE_EMPLOY':{
            return{
                ...state,
                infoEmploy:{
                    ...state.infoEmploy,
                    bonusNote: action.payload
                }
            }
        }
        case 'SET_PAYMENT_EMPLOY':{
            return{
                ...state,
                infoEmploy:{
                    ...state.infoEmploy,
                    payment: action.payload
                }
            }
        }
        default: return state;
    }

}

export default reducer