
import { SUB_QUANTITY, ADD_QUANTITY, SEARCH } from './action-types/cart-actions'

export const search = (text) => {
    return {
        type: SEARCH,
        text
    }
}

export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}

export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}
