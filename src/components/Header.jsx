import '../styles/components/_header.scss'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <Container fluid className='bgc-secondary comp_header'>
                <Container>
                    <Link to='/'>
                        <h1 className='m-0 py-2 color-quinary' style={{ width: '40rem' }}>Investigación aplicada a la simulación de incedios forestales</h1>
                    </Link>
                </Container>
            </Container>

            <Container fluid className='mb-5 p-0 bgc-tertiary position-sticky top-0 comp_navbar'>
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