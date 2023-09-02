
import { Navbar, Container, Nav, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const logoImageUrl = 'https://www.malawiyp.com/img/mw/r/1624560523-97-ccap-blantyre-synod.jpg';

function NavBar({ Links }) {
    return (
        <Navbar bg="white" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <Image src={logoImageUrl} width={100} height={100} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        {Links.map(({ Caption, url }, i) => (
                            <Link key={i} to={url} className='px-2 py-2 text-decoration-none text-body'>
                                {Caption}
                            </Link>
                        ))}
                    </Nav>
                    <Nav>
                        <Button role='a' href='/donate' >Donate</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    );
}

export default NavBar;
