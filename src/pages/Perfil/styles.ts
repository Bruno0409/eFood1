import styled from 'styled-components'
import { cores } from '../../styles/globalStyles'

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`

export const HeaderRow = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1040px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 100px;
`

export const LeftText = styled.span`
  color: ${cores.corDoTexto};
  font-size: 16px;
  font-weight: 600;
  flex: 1;
  text-align: left;
  padding-left: 20px;
  margin-top: 16px;
`

export const Logo = styled.img`
  height: 50px;
  object-fit: contain;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 16px;
`

export const RightText = styled.span`
  color: ${cores.corDoTexto};
  font-size: 16px;
  font-weight: 600;
  flex: 1;
  text-align: right;
  padding-right: 20px;
  cursor: pointer;
`

export const HeroApresentacao = styled.section`
  background-color: ${cores.corDoFundoClaro};
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`

export const HeroTitle = styled.h1`
  position: absolute;
  top: 15%;
  left: 20%;
  font-size: 24px;
  color: #fff;
  font-weight: lighter;
`

export const HeroSubtitle = styled.h2`
  position: absolute;
  top: 75%;
  left: 20%;
  font-size: 32px;
  color: #fff;
  font-weight: bold;
`
export const HeroImageSecundario = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
`

export const CardsSection = styled.section`
  max-width: 1040px;
  margin: 40px auto;
  padding: 0 85.5px;
  margin-bottom: 100px;
`

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`

export const Card = styled.div`
  width: 268px;
  background: ${cores.corDoTexto};
  border-radius: 12px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  transition: transform 0.2s ease;
`

export const CardImage = styled.img`
  width: 100%;
  height: 147px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

export const CardTitle = styled.h3`
  font-weight: bold;
  margin-top: 12px;
  font-size: 16px;
  color: ${cores.corDoFundoClaro};
  text-align: left;
  align-self: flex-start; /* Alinha o título à esquerda */
`

export const CardDescription = styled.p`
  font-weight: normal;
  font-size: 14px;
  color: ${cores.corDoFundoClaro};
  margin: 8px 0 16px 0;
  text-align: left;
`

export const AddButton = styled.button`
  background-color: ${cores.corDoFundoClaro};
  color: ${cores.corDoTexto};
  border: none;
  padding: 10px 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 260px;
  border-radius: 8px;
`
