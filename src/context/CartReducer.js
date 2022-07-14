export const CartReducer = (state, action) => {

    switch (action.type) {

        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
            break;

        case "REMOVE_TO_CART":
            return {
                ...state,
                cart: state.cart.filter((c) => c.id !== action.payload.id)
            }
            break;

        case "CHANGE_CART_QTY":
            return {
                ...state,
                cart: state.cart.filter((c) =>
                    c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
                )
            }
            break;

        default:
            return state;
    }
}

export const productReducer = (state, action) => {
    switch (action.type) {
        case "SORT_BY_PRICE":
            return { ...state, sort: action.payload };
            break;
        case "SORT_BY_STOCK":
            return { ...state, byStock: !state.byStock };
            break;
        case "SORT_BY_DELIVERY":
            return { ...state, byFastDelivery: !state.byFastDelivery };
            break;
        case "FILTER_BY_RATING":
            console.log("sort by rating");
            return { ...state, byRating: action.payload };
            break;
        case "FILTER_BY_SEARCH":
            return { ...state, searchQuery: action.payload };
            break;
        case "CLEAR_FILTERS":
            return {
                byStock: false,
                byFastDelivery: false,
                byRating: 0,
                searchQuery: ""
            };
            break;
        default:
            return state;
    }
}