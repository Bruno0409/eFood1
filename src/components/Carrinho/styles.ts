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
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
  flex-grow: 1;
`

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  background-color: ${cores.corDoFundoBege};
  color: ${cores.corDoTexto};
  border-radius: 8px;
  padding: 5px;
  gap: 12px;
  position: relative;
`

export const CartImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 6px;
  object-fit: cover;
`

export const CartDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const CartTitle = styled.span`
  font-weight: bold;
  font-size: 14px;
`

export const CartPrice = styled.span`
  font-size: 13px;
  margin-top: 4px;
`

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: red;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 50px;
`
export const CartFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
`
export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TotalLabel = styled.span`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: ${cores.corDoFundoBege};
`
export const TotalValue = styled.span`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: ${cores.corDoFundoBege};
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

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: none;
  }
`
