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
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  flex-grow: 1;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const Label = styled.label`
  font-size: 13px;
  font-weight: bold;
  color: ${cores.corDoFundoBege};
`

export const Input = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: none;
  font-size: 14px;
  outline: none;
  background-color: ${cores.corDoFundoBege};
`

export const Row = styled.div`
  display: flex;
  gap: 12px;
`

export const CheckoutButton = styled.button`
  width: 100%;
  max-width: 340px;
  background-color: ${cores.corDoFundoBege};
  color: ${cores.corDoTexto};
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  align-self: center;
  margin-top: 12px;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: none;
  }
`

export const SecondaryButton = styled(CheckoutButton)`
  background-color: transparent;
  color: ${cores.corDoFundoBege};
  border: 1px solid ${cores.corDoFundoBege};
`

export const TitleRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 12px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`

export const TotalText = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${cores.corDoFundoBege};
`
