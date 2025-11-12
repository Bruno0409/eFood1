import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CardContainer,
  Imagem,
  TagsContainer,
  Tag,
  InfoContainer,
  Titulo,
  Nota,
  Descricao,
  Botao
} from './styles'

type Props = {
  imagem: string
  tags: string[]
  titulo: string
  nota: string
  descricao: string
  id: number
}

const Card: React.FC<Props> = ({
  imagem,
  tags,
  titulo,
  nota,
  descricao,
  id
}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    console.log(`Navegando para /perfil/${id}`)
    navigate(`/perfil/${id}`)
  }

  return (
    <CardContainer>
      <Imagem src={imagem} alt={titulo} />
      <TagsContainer>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagsContainer>
      <InfoContainer>
        <Titulo>{titulo}</Titulo>
        <Nota>{nota} ⭐️</Nota>
      </InfoContainer>
      <Descricao>{descricao}</Descricao>
      <Botao onClick={handleClick}>Saiba mais</Botao>
    </CardContainer>
  )
}

export default Card
