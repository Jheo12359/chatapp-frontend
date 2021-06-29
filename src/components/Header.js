import { useLocation, Link, useHistory  } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Button from './Button';
const Header = () => {

    const history = useHistory();
    const location = useLocation();
    function logOut(){
        localStorage.clear();
        history.push('/login');
    }

    return (
    <Navbar className="nav" bg="dark" variant="dark">
    <h1>Chat App</h1>
        <Nav className="mr-auto">
            {
              localStorage.getItem('user-info') ?
              <>
            <div>
               <Button onClick={logOut} text='Logout' className='btn' />
               { location.pathname === '/updateuser' ? 
                <Link to="/chatui" style={{backgroundColor : '#0d6efd'}}>Back</Link> 
                : 
                <Link to="/updateuser" style={{backgroundColor : '#0d6efd'}}>Account</Link>
               }
            </div>
              </>
              :
              <>
            { location.pathname === '/register' ?
                <Link to="/login" style={{backgroundColor : '#0d6efd'}}>Login</Link> 
                :
                <Link to="/register" style={{backgroundColor : 'green'}}>Register</Link>
            }
              </>
            }
        </Nav>
    </Navbar>
    )
}

export default Header
