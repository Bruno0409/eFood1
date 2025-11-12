import React from 'react'
import { useLocation } from 'react-router-dom'
import {
  DrawerOverlay,
  DrawerContainer,
  ItemsContainer,
  Title,
  Paragraph,
  ConcluirButton
} from './styles'

interface ConfirmacaoPedidoDrawerProps {
  isOpen: boolean
  onClose: () => void
  orderId: string
}

const ConfirmacaoPedidoDrawer: React.FC<ConfirmacaoPedidoDrawerProps> = ({
  isOpen,
  onClose,
  orderId
}) => {
  const location = useLocation()
  const { deliveryData, paymentData, cartItems } = location.state || {}

  // Verificar se todos os dados necessários estão disponíveis
  if (!isOpen || !orderId || !cartItems || !deliveryData || !paymentData)
    return null

  // Cálculo do total do carrinho
  const total = cartItems
    ? cartItems
        .reduce((sum: number, item: any) => sum + item.price * item.quantity, 0)
        .toFixed(2)
    : '0.00'

  return (
    <DrawerOverlay onClick={onClose}>
      <DrawerContainer onClick={(e) => e.stopPropagation()}>
        <ItemsContainer>
          <Title>Pedido Realizado - {orderId}</Title>
          <Paragraph>
            Seu pedido foi recebido e está em processo de preparação.
          </Paragraph>

          {/* Carrinho */}
          <div>
            <h4>Itens do pedido:</h4>
            {cartItems.map((item: any, index: number) => (
              <Paragraph key={index}>
                {item.name} - {item.quantity} x R${item.price.toFixed(2)} = R$
                {(item.quantity * item.price).toFixed(2)}
              </Paragraph>
            ))}
          </div>

          <Paragraph>
            <strong>Total: R${total}</strong>
          </Paragraph>

          {/* Endereço */}
          <div>
            <h4>Endereço de entrega:</h4>
            <Paragraph>
              {deliveryData?.nome} <br />
              {deliveryData?.rua}, {deliveryData?.numero} <br />
              {deliveryData?.complemento
                ? `Complemento: ${deliveryData.complemento}`
                : 'Sem complemento'}{' '}
              <br />
              {deliveryData?.cidade} - {deliveryData?.cep}
            </Paragraph>
          </div>

          {/* Pagamento */}
          <div>
            <h4>Forma de pagamento:</h4>
            <Paragraph>
              {paymentData?.metodo} -{' '}
              {paymentData?.resumo || 'Detalhes do pagamento não informados.'}
            </Paragraph>
          </div>

          <Paragraph>
            Seu pedido será entregue em breve! Agradecemos a confiança e
            esperamos que aproveite sua refeição.
          </Paragraph>
        </ItemsContainer>

        <ConcluirButton onClick={onClose}>Fechar</ConcluirButton>
      </DrawerContainer>
    </DrawerOverlay>
  )
}

export default ConfirmacaoPedidoDrawer
