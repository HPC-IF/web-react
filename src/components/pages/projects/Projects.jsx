import projects from '../../../models/projects.json'
import { Col, Container, Row } from 'react-bootstrap'
import { ProjectItem } from './ProjectItem'

export const Projects = () => {
    return (
        <Container>
            <h2 className='mb-4 color-secondary'>Proyectos</h2>
            <Row>
                {projects.map(project =>
                    <ProjectItem key={project.name} project={project} />
                )}
            </Row>
        </Container>
    )
}