import React, { useState } from 'react'
import InputMask from 'react-input-mask'
import {
  DrawerOverlay,
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
} from './styles'

interface PagamentoDrawerProps {
  isOpen: boolean
  onClose: () => void
  onVoltarParaEndereco: () => void
  onFinish: () => void
  total: string
}

const PagamentoDrawer: React.FC<PagamentoDrawerProps> = ({
  isOpen,
  onClose,
  onVoltarParaEndereco,
  onFinish,
  total
}) => {
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cvv, setCvv] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  if (!isOpen) return null

  const handleFinish = () => {
    const digitsCard = cardNumber.replace(/\D/g, '')
    if (digitsCard.length < 16) {
      alert('Por favor, insira um número de cartão válido com 16 dígitos.')
      return
    }
    if (cvv.length < 3) {
      alert('Por favor, insira um CVV válido (3 dígitos).')
      return
    }
    if (month.length < 2 || Number(month) < 1 || Number(month) > 12) {
      alert('Por favor, insira um mês válido (MM).')
      return
    }
    if (year.length < 2) {
      alert('Por favor, insira o ano (AA).')
      return
    }

    onFinish()
  }

  return (
    <DrawerOverlay onClick={onClose}>
      <DrawerContainer onClick={(e) => e.stopPropagation()}>
        <ItemsContainer>
          <TitleRow>
            <Title>Pagamento</Title>
            <TotalText>Valor a pagar: R$ {total}</TotalText>
          </TitleRow>

          <InputGroup>
            <Label>Nome no cartão</Label>
            <Input
              placeholder="Digite o nome como está no cartão"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
          </InputGroup>

          <Row>
            <InputGroup style={{ flex: 1 }}>
              <Label>Número do cartão</Label>
              <InputMask
                mask="9999 9999 9999 9999"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              >
                {(inputProps: any) => (
                  <Input {...inputProps} placeholder="0000 0000 0000 0000" />
                )}
              </InputMask>
            </InputGroup>

            <InputGroup style={{ width: '80px' }}>
              <Label>CVV</Label>
              <InputMask
                mask="999"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              >
                {(inputProps: any) => (
                  <Input {...inputProps} placeholder="000" />
                )}
              </InputMask>
            </InputGroup>
          </Row>

          <Row>
            <InputGroup style={{ flex: 1 }}>
              <Label>Mês do Vencimento</Label>
              <InputMask
                mask="99"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              >
                {(inputProps: any) => (
                  <Input {...inputProps} placeholder="MM" />
                )}
              </InputMask>
            </InputGroup>

            <InputGroup style={{ flex: 1 }}>
              <Label>Ano do Vencimento</Label>
              <InputMask
                mask="99"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                {(inputProps: any) => (
                  <Input {...inputProps} placeholder="AA" />
                )}
              </InputMask>
            </InputGroup>
          </Row>
        </ItemsContainer>

        <CheckoutButton onClick={handleFinish}>Finalizar pedido</CheckoutButton>
        <SecondaryButton onClick={onVoltarParaEndereco}>
          Voltar para endereço
        </SecondaryButton>
      </DrawerContainer>
    </DrawerOverlay>
  )
}

export default PagamentoDrawer
