import { Container, Logo, Icones, Icone, Texto } from '../Footer/styles'
import logo from '../../assets/imagens/logo.png'
import facebook from '../../assets/imagens/Facebook.png'
import instagram from '../../assets/imagens/instagram.png'
import twitter from '../../assets/imagens/twitter.png'

const Footer = () => {
  return (
    <Container>
      <Logo src={logo} alt="Efood logo" />
      <Icones>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icone src={facebook} alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icone src={instagram} alt="Instagram" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icone src={twitter} alt="Twitter" />
        </a>
      </Icones>
      <Texto>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Texto>
    </Container>
  )
}

export default Footer
