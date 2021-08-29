import "./style.css";
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom'

const Header = () =>{
  return (
    <div className="header">
      <div className="logo-container">
        <Link className="logo" to="/">InsoleCine</Link>
      </div>
      <form className="search-movie__container">
        <input className="search-input" placeholder="Pesquisar filme"/>
        <button className="search-button"><SearchIcon color="primary" fontSize="small"/></button>
      </form>
    </div>
  )
}

export default Header
