import styled from 'styled-components'
import shlml_logo from '../assets/shlml_logo.jpg'
import { Col, Container, Row } from 'react-bootstrap'

const HomeContainer = styled(Container)`
  display: flex;
`

const StyledImg = styled.img`
  width: 100%;
`

const TextCol = styled(Col)`
  padding: 30px;
  font-size: 120%;
`

const ImgCol = styled(Col)`
  display: flex;
  align-items: center;
`
const Home = () => {
  return (
    <HomeContainer as={Container}>
      <Row>
        <ImgCol md={6}>
          <StyledImg src={shlml_logo} alt="Le logo de la SHLM" />
        </ImgCol>
        <TextCol md={6}>
          <p>
            Notre Société possède un important fonds documentaire centré bien
            évidemment sur la Lorraine.
          </p>
          <p>
            Elle est sur demande à la disposition des chercheurs et érudits.
            Afin de simplifier la recherche nous avons décomposé ces fonds en
            rubrique:
          </p>
          <ul>
            <li>Les imprimés, plus de 17 000 ouvrages.</li>
            <li>
              Les factums, plus de 1 000 documents. Il n'est pas facile de
              trouver un document, sans comprendre le contenu, aussi en
              demandant une recherche sans critère, vous pouvez faire défiler
              les titres des divers mémoires.
            </li>
            <li>
              Fonds documentaires, plus de 1 400 ouvrages, ce sont surtout des
              ouvrages de cours du XIXème siècle. Le défilement s'obtient par la
              recherche sans critère.
            </li>
            <li>
              Le fonds johannique, plus de 3 200 ouvrages, la Société a
              bénéficié d'unimportant legs de livres sur Jeanne d'Arc.
            </li>
            <li>
              Manuscrits, plus de 400, certains sont des originaux, d'autres des
              copies. Attention, une partie de ce fonds est déposé aux archives
              départementales et n'est pas consultable au Musée Lorrain. Le
              défilement s'obtient par la recherche sans critère.
            </li>
            <li>
              Index du Pays Lorrain, cette rubrique reprend la table d'index de
              1904 à 2004 réalisée par Pierre Simonin. Ce qui permet une
              recherche textuelle dans les rubriques.
            </li>
          </ul>
        </TextCol>
      </Row>
    </HomeContainer>
  )
}

export default Home
