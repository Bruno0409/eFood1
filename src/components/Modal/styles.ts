import styled from 'styled-components'
import { cores } from '../../styles/globalStyles'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${cores.overlayColor};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  background: ${cores.corDoTexto};
  color: ${cores.corDoFundoBege};
  padding: 24px;
  border-radius: 8px;
  max-width: 1024px;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  font-size: 14px;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  color: ${cores.corDoFundoBege};
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  }
`

export const ModalBody = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const ProductImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
`

export const Title = styled.strong`
  font-size: 18px;
  font-weight: bold;
`

export const Description = styled.p`
  font-size: 14px;
  margin-top: 16px;
`

export const CustomText = styled.p`
  font-size: 12px;
`

export const Button = styled.button`
  margin-top: 16px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${cores.corDoFundoBege};
  color: ${cores.corDoTexto};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  max-width: 300px;
`
