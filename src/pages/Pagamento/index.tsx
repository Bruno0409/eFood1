// pages/Pagamento/index.tsx
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask'
import axios from 'axios'

import {
  DrawerContainer,
  ItemsContainer,
  InputGroup,
  Label,
  Input,
  Row,
  CheckoutButton,
  SecondaryButton,
  TitleRow,
  Title,
  TotalText
} from '../../components/Pagamento/styles'

const PagamentoPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { cartItems, deliveryData } = location.state || {}

  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cvv, setCvv] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const handleFinish = async () => {
    const paymentData = {
      card: {
        name: cardName,
        number: cardNumber,
        cvv,
        expires: { month, year }
      }
    }

    const pedidoData = {
      products: cartItems,
      delivery: deliveryData,
      payment: paymentData
    }

    try {
      const response = await axios.post(
        'https://api-ebac.vercel.app/api/efood/checkout',
        pedidoData
      )
      const orderId = response.data.orderId
      navigate('/confirmacao', {
        state: { orderId, deliveryData, paymentData }
      })
    } catch (error) {
      console.error('Erro ao enviar pedido:', error)
      alert('Erro ao processar o pagamento. Tente novamente.')
    }
  }

  // cálculo do total do carrinho
  const total = cartItems
    ? cartItems
        .reduce((sum: number, item: any) => sum + item.price, 0)
        .toFixed(2)
    : '0.00'

  return (
    <DrawerContainer>
      <ItemsContainer>
        <TitleRow>
          <Title>Pagamento</Title>
          <TotalText>Valor a pagar: R$ {total}</TotalText>
        </TitleRow>

        <InputGroup>
          <Label>Nome no cartão</Label>
          <Input
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            placeholder="Digite o nome como está no cartão"
          />
        </InputGroup>

        <InputGroup>
          <Label>Número do cartão</Label>
          <InputMask
            mask="9999 9999 9999 9999"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          >
            {() => <Input placeholder="0000 0000 0000 0000" />}
          </InputMask>
        </InputGroup>

        <Row>
          <InputGroup style={{ flex: 1 }}>
            <Label>Mês de Vencimento</Label>
            <InputMask
              mask="99"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              placeholder="MM"
            ></InputMask>
          </InputGroup>

          {/* Ano de Vencimento */}
          <InputGroup style={{ flex: 1 }}>
            <Label>Ano do Vencimento</Label>
            <InputMask
              mask="99"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              maxLength={2}
            ></InputMask>
          </InputGroup>

          <InputGroup style={{ width: '100px' }}>
            <Label>CVV</Label>
            <InputMask
              mask="999"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              maskChar=""
            >
              {() => <Input placeholder="000" />}
            </InputMask>
          </InputGroup>
        </Row>
      </ItemsContainer>

      <CheckoutButton onClick={handleFinish}>Finalizar pedido</CheckoutButton>
      <SecondaryButton onClick={() => navigate('/endereco')}>
        Voltar para endereço
      </SecondaryButton>
    </DrawerContainer>
  )
}

export default PagamentoPage
