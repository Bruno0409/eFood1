import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  DrawerOverlay,
  DrawerContainer,
  ItemsContainer,
  Title,
  Paragraph,
  ConcluirButton
} from '../../components/Confirmacao/styles'

const ConfirmacaoPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { orderId, cartItems, deliveryData, paymentData } = location.state || {}

  // Verificar se todos os dados necessários estão presentes
  if (!orderId || !cartItems || !deliveryData || !paymentData) {
    return <p>Dados do pedido não encontrados!</p>
  }

  const total = cartItems
    .reduce((sum: number, item: any) => sum + item.price * item.quantity, 0)
    .toFixed(2)

  // Função para lidar com a ação do botão de "Concluir"
  const handleConcluir = () => {
    navigate('/') // Navega para a página inicial após concluir
  }

  return (
    <DrawerOverlay>
      <DrawerContainer>
        <ItemsContainer>
          <Title>Pedido Realizado - {orderId}</Title>

          <Paragraph>
            Seu pedido foi recebido e está em processo de preparação. Ele será
            entregue no endereço fornecido em breve.
          </Paragraph>

          <h4>Itens do Pedido:</h4>
          {cartItems.map((item: any, index: number) => (
            <Paragraph key={index}>
              {item.title} - {item.quantity} x R${item.price.toFixed(2)} = R$
              {(item.quantity * item.price).toFixed(2)}
            </Paragraph>
          ))}

          <Paragraph>
            <strong>Total: R${total}</strong>
          </Paragraph>

          <h4>Endereço de Entrega:</h4>
          <Paragraph>
            {deliveryData?.nome} <br />
            {deliveryData?.rua}, {deliveryData?.numero} <br />
            {deliveryData?.complemento
              ? `Complemento: ${deliveryData.complemento}`
              : 'Sem complemento'}
            <br />
            {deliveryData?.cidade} - {deliveryData?.cep}
          </Paragraph>

          <h4>Forma de Pagamento:</h4>
          <Paragraph>
            {paymentData?.metodo} -{' '}
            {paymentData?.resumo || 'Detalhes do pagamento não informados.'}
          </Paragraph>

          <Paragraph>
            Seu pedido será entregue em breve! Agradecemos pela confiança.
          </Paragraph>

          <ConcluirButton onClick={handleConcluir}>Concluir</ConcluirButton>
        </ItemsContainer>
      </DrawerContainer>
    </DrawerOverlay>
  )
}

export default ConfirmacaoPage
