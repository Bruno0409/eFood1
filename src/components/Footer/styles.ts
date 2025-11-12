import styled from 'styled-components'
import { cores } from '../../styles/globalStyles'

export const Container = styled.footer`
  background-color: ${cores.corDoFundoBege};
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  position: relative;
`

export const Logo = styled.img`
  width: 125px;
  height: 58px;
  margin-bottom: 32px;
`

export const Icones = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`

export const Icone = styled.img`
  width: 24px;
  height: 24px;
`

export const Texto = styled.p`
  font-size: 10px;
  color: ${cores.corDoTexto};
  text-align: center;
  max-width: 480px;
  position: absolute;
  bottom: 40px;
`
