import { SUB_QUANTITY, ADD_QUANTITY, SEARCH } from '../actions/action-types/cart-actions'

const initState = {
    items: [
        { id: 1, title: 'Item 1', price: 10, quantity: 0, isShowing: true },
        { id: 2, title: 'Item 2', price: 20, quantity: 0, isShowing: true },
        { id: 3, title: 'Item 3', price: 40, quantity: 0, isShowing: true },
    ],
    total: 0
}

const cartReducer = (state = initState, action) => {
    if (action.type === SEARCH) {
        const actionText = action.text;
        if (actionText !== "") {
            for (let item of state.items) {
                item.isShowing = item.title.includes(actionText);
            }
        }
        else {
            for (let item of state.items) {
                item.isShowing = true;
            }
        }
    }
    else if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }
    else if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        if (addedItem.quantity === 0) {
            return state;
        }
        addedItem.quantity -= 1
        let newTotal = state.total - addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }

    return state;
}

export default cartReducer
