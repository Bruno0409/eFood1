import styled from 'styled-components'
import { cores } from '../../styles/globalStyles'

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 360px;
  overflow: hidden;
`

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

export const Logo = styled.img`
  display: block;
  margin: 64px auto 0 auto;
  width: 125px;
  height: 58px;
  position: relative;
  z-index: 2;
`

export const HeroText = styled.h1`
  margin-top: 100px;
  text-align: center;
  font-size: 36px;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  color: ${cores.corDoTexto};
  position: relative;
  z-index: 2;
`

export const SecaoCards = styled.section`
  background-color: ${cores.corDoFundoClaro};
  padding: 0;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 80px;
`

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  gap: 40px 80px;
  list-style: none;
  margin: 0;
  padding: 40px 0;
`
