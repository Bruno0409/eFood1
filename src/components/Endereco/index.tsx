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
  SecondaryButton
} from './styles'

interface EnderecoDrawerProps {
  isOpen: boolean
  onClose: () => void
  onContinue: () => void
  onVoltarAoCarrinho: () => void
}

const EnderecoDrawer: React.FC<EnderecoDrawerProps> = ({
  isOpen,
  onClose,
  onContinue,
  onVoltarAoCarrinho
}) => {
  // Estados locais dos inputs
  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [cidade, setCidade] = useState('')
  const [cep, setCep] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')

  if (!isOpen) return null

  // Função de validação
  const handleContinue = (e: React.MouseEvent) => {
    e.stopPropagation()

    if (!nome || !endereco || !cidade || !cep || !numero) {
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }

    // Valida se o CEP está completo (máscara "99999-999")
    if (cep.includes('_') || cep.length < 9) {
      alert('Digite um CEP válido (formato 00000-000).')
      return
    }

    onContinue()
  }

  return (
    <DrawerOverlay onClick={onClose}>
      <DrawerContainer onClick={(e) => e.stopPropagation()}>
        <ItemsContainer>
          <h3>Entrega</h3>

          <InputGroup>
            <Label>Quem irá receber</Label>
            <Input
              placeholder="Nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <Label>Endereço</Label>
            <Input
              placeholder="Rua ou Av"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <Label>Cidade</Label>
            <Input
              placeholder="Cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
          </InputGroup>

          <Row>
            <InputGroup style={{ flex: 1 }}>
              <Label>CEP</Label>
              <InputMask
                mask="99999-999"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              >
                {(inputProps: any) => (
                  <Input {...inputProps} placeholder="00000-000" />
                )}
              </InputMask>
            </InputGroup>

            <InputGroup style={{ width: '80px' }}>
              <Label>Número</Label>
              <Input
                placeholder="123"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              />
            </InputGroup>
          </Row>

          <InputGroup>
            <Label>Complemento (opcional)</Label>
            <Input
              placeholder="Apartamento, bloco, etc."
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            />
          </InputGroup>
        </ItemsContainer>

        <CheckoutButton onClick={handleContinue}>
          Continuar com o pagamento
        </CheckoutButton>

        <SecondaryButton onClick={onVoltarAoCarrinho}>
          Voltar ao carrinho
        </SecondaryButton>
      </DrawerContainer>
    </DrawerOverlay>
  )
}

export default EnderecoDrawer
