import styled from 'styled-components'
import { cores } from '../../styles/globalStyles'

export const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${cores.overlayColor};
  display: flex;
  justify-content: flex-end;
  z-index: 999;
`

export const DrawerContainer = styled.div`
  width: 360px;
  height: 100%;
  background-color: ${cores.corDoTexto};
  color: ${cores.corDoFundoBege};
  padding: 24px;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
`

export const ItemsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
`

export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
  color: ${cores.corDoFundoBege};
`

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 1.4;
  color: ${cores.corDoFundoBege};
`

export const ConcluirButton = styled.button`
  width: 100%;
  max-width: 340px;
  background-color: ${cores.corDoFundoBege};
  color: ${cores.corDoTexto};
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 14px;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  align-self: center;
  margin-top: auto;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: none;
  }
`
