import './Header.css';
import logo from '../../assets/logo.png'


function Header() {
  
  return (
    <div className='header'>
      <div className='links-container'>
            <a href='#' target='_blank'>
              <img src={logo} alt="#logo" className='logo'/>
            </a>

            <div className='titulo'>
              <a href='#' target='_blank'>Dados e Prontuários</a>
            </div>

            <div className='wrap-shortcuts-navbar'>
              <a href='#' className='shortcut'>
                VOLTAR
              </a>
              <a href='#' className='shortcut'>
                PRONTUÁRIOS
              </a>
              <a href='#' className='shortcut'>
                MEUS PACIENTES
              </a>

              <a href='#' className='shortcut'>
                LOGOUT
              </a>
              
            </div>

      </div>
    </div>
  );
}

export default Header;
