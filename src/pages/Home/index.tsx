import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'

import {
  HeroContainer,
  HeroImage,
  Logo,
  HeroText,
  SecaoCards,
  Container,
  Lista
} from './styles'

import heroImage from '../../assets/imagens/fundo.png'
import logoImage from '../../assets/imagens/logo.png'

// Interface ajustada conforme os dados da API
interface Restaurante {
  id: number
  titulo: string
  tipo: string
  capa: string
  destacado: boolean
  avaliacao: number
  descricao: string
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => {
        setRestaurantes(data)
      })
      .catch((err) => {
        console.error('Erro ao carregar restaurantes:', err)
      })
  }, [])

  return (
    <>
      <HeroContainer>
        <HeroImage src={heroImage} alt="Imagem do fundo" />
        <Logo src={logoImage} alt="Logo" />
        <HeroText>
          Viva experiências gastronômicas
          <br />
          no conforto da sua casa
        </HeroText>
      </HeroContainer>

      <SecaoCards>
        <Container>
          <Lista>
            {restaurantes.map((restaurante) => (
              <Card
                key={restaurante.id}
                id={restaurante.id}
                imagem={restaurante.capa}
                tags={[
                  restaurante.tipo,
                  restaurante.destacado ? 'Destaque' : ''
                ].filter(Boolean)}
                titulo={restaurante.titulo}
                nota={restaurante.avaliacao.toFixed(1)}
                descricao={restaurante.descricao}
              />
            ))}
          </Lista>
        </Container>
      </SecaoCards>
    </>
  )
}

export default Home
