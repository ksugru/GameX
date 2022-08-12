import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="mb-5" >
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Link to="/home" className='nav-link brand__name' >
                        UTask
                    </Link>
                    <Nav className="me-auto">

                        <Link to="/" className='nav-link'>Главная</Link>

                        <Link to="/auth" className='nav-link'>Войти</Link>


                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header