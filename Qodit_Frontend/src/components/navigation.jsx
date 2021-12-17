import { Link, NavLink, withRouter } from "react-router-dom"

export const Navigation = withRouter((props) => {
  const {navBar} = props;
  const { location } = props;

  function checkRouter(){
    if(location){
      switch (location.pathname){
        case '/login':
          return true
        case '/admin/dashboard':
          return true;
        case '/hr/dashboard':
          return true;
        case '/sales/dashboard':
          return true;
        default :
          return false;
      }
    }
  }

  if (checkRouter()){
    return null;
  } 
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <Link  className='navbar-brand page-scroll' to='/'>
          Qodit
          </Link>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        > 
          <ul className='nav navbar-nav navbar-right'>
            {navBar && navBar.map( data => {
            return (<li className="nav-item">
              <NavLink exact activeClassName="active" to={`${data.body}`} className='page-scroll'>
                {data.title}
              </NavLink>
            </li>)}) }
            <li> 
              <NavLink exact activeClassName="active"  to="/career" style={{ textDecoration: 'none' }}
              className='page-scroll'>
                Careers
              </NavLink>
            </li>
                  </ul>
        </div>
      </div>
    </nav>
  )
}
)