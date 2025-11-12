import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Modal from '../../components/Modal/modal'
import CartDrawer, { Product as CartProduct } from '../../components/Carrinho'
import EnderecoDrawer from '../../components/Endereco'
import PagamentoDrawer from '../../components/Pagamento'

import {
  ModalBody,
  ProductImage,
  TextContent,
  Title,
  Description,
  Button
} from '../../components/Modal/styles'

import {
  HeroContainer,
  HeroImage,
  Logo,
  HeaderRow,
  LeftText,
  RightText,
  HeroApresentacao,
  HeroImageSecundario,
  HeroTitle,
  HeroSubtitle,
  CardsSection,
  CardsGrid,
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  AddButton
} from './styles'

import heroImagePerfil from '../../assets/imagens/fundo_menor.png'
import logoImage from '../../assets/imagens/logo.png'

interface Product {
  id: number
  img: string
  title: string
  description: string
  price: number
  customText?: string
  quantity?: number // Quantidade opcional no tipo do produto
}

const truncateDescription = (description: string, maxLength = 120) => {
  if (description.length > maxLength) {
    return description.slice(0, maxLength) + '...'
  }
  return description
}

const Perfil = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [products, setProducts] = useState<Product[]>([])
  const [restaurant, setRestaurant] = useState<any>(null)

  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const [cartOpen, setCartOpen] = useState(false)
  const [enderecoOpen, setEnderecoOpen] = useState(false)
  const [pagamentoOpen, setPagamentoOpen] = useState(false)

  const [cartItems, setCartItems] = useState<CartProduct[]>([])

  const [orderId, setOrderId] = useState<string | null>(null)

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRestaurant(data)
        const pratos = data.cardapio.map((item: any) => {
          return {
            id: item.id,
            img: item.foto,
            title: item.nome,
            description: item.descricao,
            price: item.preco,
            customText: 'Serve de 2 a 3 pessoas'
          }
        })
        setProducts(pratos)
      })
      .catch((err) => {
        console.error('Erro ao carregar restaurante ou pratos:', err)
      })
  }, [id])

  const handleSaibaMaisClick = (product: Product) => {
    setSelectedProduct(product)
    setModalOpen(true)
  }

  const handleVoltarParaEndereco = () => {
    setPagamentoOpen(false)
    setEnderecoOpen(true)
  }

  const handleVoltarAoCarrinho = () => {
    setEnderecoOpen(false)
    setCartOpen(true)
  }

  // Calculando total com base na quantidade
  const total = cartItems
    .reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
    .toFixed(2)

  return (
    <>
      <HeroContainer>
        <HeroImage src={heroImagePerfil} alt="Imagem do fundo perfil" />
        <HeaderRow>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <LeftText>Restaurantes</LeftText>
          </Link>
          <Logo src={logoImage} alt="Logo" />
          <RightText onClick={() => setCartOpen(true)}>
            {cartItems.length} produto(s) no carrinho
          </RightText>
        </HeaderRow>
        {restaurant && (
          <HeroApresentacao>
            <HeroImageSecundario
              src={restaurant.capa}
              alt="Imagem secundária"
            />
            <HeroTitle>{restaurant.titulo}</HeroTitle>
            <HeroSubtitle>{restaurant.tipo}</HeroSubtitle>
          </HeroApresentacao>
        )}
      </HeroContainer>

      <CardsSection>
        <CardsGrid>
          {products.map(({ id, img, title, description, price }) => (
            <Card key={id}>
              <CardImage src={img} alt={title} />
              <CardTitle>{title}</CardTitle>
              <CardDescription>
                {truncateDescription(description)}
              </CardDescription>
              <AddButton
                onClick={() =>
                  handleSaibaMaisClick({ id, img, title, description, price })
                }
              >
                Saiba mais
              </AddButton>
            </Card>
          ))}
        </CardsGrid>
      </CardsSection>

      {modalOpen && selectedProduct && (
        <Modal onClose={() => setModalOpen(false)}>
          <ModalBody>
            <ProductImage
              src={selectedProduct.img}
              alt={selectedProduct.title}
            />
            <TextContent>
              <Title>{selectedProduct.title}</Title>
              <Description>{selectedProduct.description}</Description>
              <p>{selectedProduct.customText}</p>
              <Button
                onClick={() => {
                  // Adicionando a quantidade ao carrinho
                  setCartItems((prev) => {
                    const productIndex = prev.findIndex(
                      (item) => item.id === selectedProduct.id
                    )
                    if (productIndex !== -1) {
                      const updatedCartItems = [...prev]
                      updatedCartItems[productIndex].quantity += 1
                      return updatedCartItems
                    } else {
                      return [...prev, { ...selectedProduct, quantity: 1 }]
                    }
                  })
                  setModalOpen(false)
                  setCartOpen(true)
                }}
              >
                Adicionar ao Carrinho - R$ {selectedProduct.price.toFixed(2)}
              </Button>
            </TextContent>
          </ModalBody>
        </Modal>
      )}

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={(id) =>
          setCartItems((prev) => prev.filter((item) => item.id !== id))
        }
        onContinue={() => {
          setCartOpen(false)
          setEnderecoOpen(true)
        }}
      />

      <EnderecoDrawer
        isOpen={enderecoOpen}
        onClose={() => setEnderecoOpen(false)}
        onContinue={() => {
          setEnderecoOpen(false)
          setPagamentoOpen(true)
        }}
        onVoltarAoCarrinho={handleVoltarAoCarrinho}
      />

      <PagamentoDrawer
        isOpen={pagamentoOpen}
        onClose={() => setPagamentoOpen(false)}
        onVoltarParaEndereco={handleVoltarParaEndereco}
        onFinish={() => {
          const newOrderId = `order-${new Date().getTime()}`
          setOrderId(newOrderId)

          // Passa os dados para a página de confirmação
          navigate('/confirmacao', {
            state: {
              orderId: newOrderId,
              cartItems,
              deliveryData: {
                nome: 'João Silva',
                rua: 'Rua 10',
                numero: '123',
                complemento: 'Apto 101',
                cidade: 'São Paulo',
                cep: '01234-567'
              },
              paymentData: {
                metodo: 'Cartão de Crédito',
                resumo: 'Pagamento aprovado'
              }
            }
          })
        }}
        total={total}
      />
    </>
  )
}

export default Perfil
