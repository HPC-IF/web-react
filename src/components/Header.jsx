import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <Container fluid style={{ backgroundColor: '#ddd' }} className='mb-4'>
            <Container>
                <Row>
                    <Col>
                        <Link to='/'>
                            <h1>Investigación aplicada a la simulación de incedios forestales</h1>
                        </Link>
                    </Col>
                    <Col as='nav' className='d-flex gap-4'>
                        <Link to='/projects'>Proyectos</Link>
                        <Link to='/articles'>Artículos</Link>
                        <Link to='/members'>Equipo</Link>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}