import '../styles/components/_header.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <Container fluid className='bgc-secondary comp_header' style={{zIndex: 100}}>
                <Container>
                    <Row>
                        <Col xs={12} lg={8}>
                            <Link to='/'>
                                <h1 className='m-0 py-2 color-quinary'>Investigación aplicada a la simulación de incedios forestales</h1>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container fluid className='mb-5 bgc-tertiary position-sticky top-0 comp_navbar' style={{zIndex: 100}}>
                <Container>
                    <nav className='d-flex gap-3'>
                        <Link
                            to='/projects'
                            className='py-3 f-link color-secondary'
                        >
                            Proyectos
                        </Link>
                        <Link
                            to='/articles'
                            className='py-3 f-link color-secondary'
                        >
                            Artículos
                        </Link>
                        <Link
                            to='/members'
                            className='py-3 f-link color-secondary'
                        >
                            Equipo
                        </Link>
                    </nav>
                </Container>
            </Container>
        </>
    )
}