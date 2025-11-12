import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Perfil from '../pages/Perfil'
import Carrinho from '../pages/Carrinho'
import EnderecoPage from '../pages/Endereco'
import PagamentoPage from '../pages/Pagamento'
import ConfirmacaoPage from '../pages/Confirmacao'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil/:id" element={<Perfil />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/endereco" element={<EnderecoPage />} />
        <Route path="/pagamento" element={<PagamentoPage />} />
        <Route path="/confirmacao" element={<ConfirmacaoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
