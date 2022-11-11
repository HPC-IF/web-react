import { Container, Row } from 'react-bootstrap'
import members from '../../../models/members.json'
import { MemberItem } from './MemberItem'

export const Members = () => {
    return (
        <Container>
            <h2 className='mb-4'>Equipo</h2>
            <p className='mb-4'>
                Somos un equipo de trabajo con expertos en Física, Computación, Electrónica y Ciencias de la atmósfera. Nuestros intereses confluyen en este trabajo, donde nuestros trabajos científicos se aplican a un problema relacionado al medio ambiente utilizando tecnologías de punta.
                Abordamos la problemática desde distintos puntos de vista, y esto incrementa la creatividad de nuestras soluciones y las bases científicas que las sustentan.
                Los integrantes del equipo de trabajo trabajamos en distintas instituciones: Consejo Nacional de Investigaciones Cietíficas y Técnicas (CONICET), Universidad Nacional de Río Negro (Sede Andina, Bariloche), Centro Atómico Bariloche, Universidad Nacional del Comahue (Centro Regional Universitario Bariloche).
            </p>
            <Row className='mb-4'>
                <h3>Miembros actuales</h3>
            </Row>
            <Row className='g-4'>
                {members.map(member =>
                    <MemberItem key={member.name} member={member} />
                )}
            </Row>
        </Container>
    )
}