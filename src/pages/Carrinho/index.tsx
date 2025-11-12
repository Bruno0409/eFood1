import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CartDrawer, { Product } from '../../components/Carrinho'
import { removeItemFromCart } from '../../redux/cartActions'

const CarrinhoPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const cartItems = useSelector((state: any) => state.cartItems)

  const handleRemoveItem = (id: number) => {
    dispatch(removeItemFromCart(id))
  }

  const handleContinue = () => {
    navigate('/entrega')
  }

  const total = cartItems
    .reduce((sum: number, item: Product) => sum + item.price, 0)
    .toFixed(2)

  return (
    <div>
      <h1>Seu Carrinho</h1>
      <CartDrawer
        isOpen={true}
        onClose={() => navigate('/')}
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onContinue={handleContinue}
      />
    </div>
  )
}

export default CarrinhoPage
