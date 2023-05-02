import { Container, Nav, NavLink, Navbar } from "react-bootstrap";

export function NavbarComponent() {
  return (
    <Navbar className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/" as={NavLink}>Home</Nav.Link>
          <Nav.Link href="/store" as={NavLink}>Store</Nav.Link>
          <Nav.Link href="/about" as={NavLink}>About</Nav.Link>
        </Nav>
        Hi
      </Container>
    </Navbar>
  )
}