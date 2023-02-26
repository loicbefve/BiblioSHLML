import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`/home`}>Accueil</Link>
          <Link to={`/imprimes`}>Imprimés</Link>
          <Link to={`/factums`}>Factums</Link>
          <Link to={`/fonds_documentaire`}>Fonds Documentaire</Link>
          <Link to={`/fonds_joannique`}>Fonds Johannique</Link>
          <Link to={`/manuscrits`}>Manuscrits</Link>
          <Link to={`/index_pays_lorrain`}>Index du Pays-Lorrain</Link>
          <Link to={`/contact`}>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
