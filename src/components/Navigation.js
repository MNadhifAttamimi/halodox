import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigasi = (props) => {

    return(
        <Navbar style={{borderBottom: "1px solid rgba(177,182,182,1)"}} expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className='px-4'><img style={{width: "180px"}} src={props.image} alt='logo'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScrollx 
          >
            <Nav.Link href="#action1" className='px-3' style={{color: "black"}}>Beranda</Nav.Link>
            <Nav.Link href="#action2" className='px-3' style={{color: "black"}}>Artikel</Nav.Link>
            <Nav.Link href="#action1" className='px-3' style={{color: "black"}}>Aplikasi</Nav.Link>
            <Nav.Link href="#action2" className='px-3' style={{color: "black"}}>Riwayat</Nav.Link>
          </Nav>
          <Form className='px-5'>
            <Button style={{fontWeight: "600"}} variant="danger">Login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default Navigasi;