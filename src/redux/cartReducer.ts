import { Action } from 'redux'
import { Product } from './types'

interface CartState {
  cartItems: Product[]
}

interface CartAction extends Action {
  type: string
  payload: Product | number
}

const initialState: CartState = {
  cartItems: []
}

const cartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      if ((action.payload as Product).id) {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload as Product]
        }
      }
      return state

    case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload)
      }

    default:
      return state
  }
}

export default cartReducer
