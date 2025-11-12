import React from 'react'
import trashIcon from '../../assets/imagens/Lixeira.png'
import {
  DrawerOverlay,
  DrawerContainer,
  CartItem,
  CartImage,
  CartDetails,
  CartTitle,
  CartPrice,
  RemoveButton,
  CheckoutButton,
  ItemsContainer,
  CartFooter,
  TotalLabel,
  TotalValue,
  TotalRow
} from './styles'

// Atualizar interface para incluir a quantidade
export interface Product {
  id: number
  img: string
  title: string
  price: number
  quantity: number // Quantidade de cada item no carrinho
}

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  cartItems: Product[]
  onRemoveItem?: (id: number) => void
  onContinue?: () => void
}

const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onContinue
}) => {
  if (!isOpen) return null

  // Calculando o total dinamicamente
  const total = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2)

  return (
    <DrawerOverlay onClick={onClose}>
      <DrawerContainer onClick={(e) => e.stopPropagation()}>
        <ItemsContainer>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <CartImage src={item.img} alt={item.title} />
              <CartDetails>
                <CartTitle>{item.title}</CartTitle>
                <CartPrice>
                  R$ {(item.price * item.quantity).toFixed(2)}{' '}
                  {/* Preço total de cada item */}
                </CartPrice>
              </CartDetails>
              <RemoveButton
                onClick={() => {
                  if (onRemoveItem) {
                    onRemoveItem(item.id)
                  }
                }}
              >
                <img
                  src={trashIcon}
                  alt="Remover item"
                  style={{ width: 15, height: 15 }}
                />
              </RemoveButton>
            </CartItem>
          ))}
        </ItemsContainer>

        <CartFooter>
          <TotalRow>
            <TotalLabel>Valor total:</TotalLabel>
            <TotalValue>R$ {total}</TotalValue> {/* Exibe o total calculado */}
          </TotalRow>
          <CheckoutButton onClick={onContinue}>
            Continuar com a entrega
          </CheckoutButton>
        </CartFooter>
      </DrawerContainer>
    </DrawerOverlay>
  )
}

export default CartDrawer
