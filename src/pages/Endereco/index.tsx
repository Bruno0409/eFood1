import React from 'react'
import {
  DrawerContainer,
  ItemsContainer,
  InputGroup,
  Label,
  Input,
  Row,
  CheckoutButton,
  SecondaryButton
} from '../../components/Endereco/styles'
import { useNavigate } from 'react-router-dom'

const EnderecoPage = () => {
  const navigate = useNavigate()

  const handleContinue = () => {
    navigate('/pagamento')
  }

  const handleBack = () => {
    navigate('/carrinho')
  }

  return (
    <DrawerContainer>
      <ItemsContainer>
        <h3>Entrega</h3>

        <InputGroup>
          <Label>Quem irá receber</Label>
          <Input placeholder="Nome completo" />
        </InputGroup>

        <InputGroup>
          <Label>Endereço</Label>
          <Input placeholder="Rua ou Av" />
        </InputGroup>

        <InputGroup>
          <Label>Cidade</Label>
          <Input placeholder="Cidade" />
        </InputGroup>

        <Row>
          <InputGroup style={{ flex: 1 }}>
            <Label>CEP</Label>
            <Input placeholder="00000-000" />
          </InputGroup>

          <InputGroup style={{ width: '80px' }}>
            <Label>Número</Label>
            <Input placeholder="123" />
          </InputGroup>
        </Row>

        <InputGroup>
          <Label>Complemento (opcional)</Label>
          <Input placeholder="Apartamento, bloco, etc." />
        </InputGroup>
      </ItemsContainer>

      <CheckoutButton onClick={handleContinue}>
        Continuar com o pagamento
      </CheckoutButton>

      <SecondaryButton onClick={handleBack}>Voltar ao carrinho</SecondaryButton>
    </DrawerContainer>
  )
}

export default EnderecoPage
