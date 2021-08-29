import "./style.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import LogoFooter from "../../assets/logo-footer.png"
import { Face } from "@material-ui/icons";

const Footer = () => {
  return(
  <>
    <footer className="footer">
      <div className="logo-footer">        
          <img src={LogoFooter} alt="logotipo insole" />
      </div>

      <div className="developer">
            <div className="developer-social__media">
              <FacebookIcon className="icon-footer" fontSize="large" />
              <FacebookIcon className="icon-footer" fontSize="large" />
              <FacebookIcon className="icon-footer" fontSize="large" />
            </div>
          <p>Desenvolvido por Allana Evellyn</p>
      </div>

      <div className="social-media">
          <FacebookIcon className="icon-footer" fontSize="large"/>
          <FacebookIcon className="icon-footer" fontSize="large" />
      </div>
    </footer>
  </>
  )
}

export default Footer