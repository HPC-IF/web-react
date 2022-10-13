import projects from '../../../models/projects.json'
import { Container } from 'react-bootstrap'
import { ProjectItem } from './ProjectItem'

export const Projects = () => {
    return (
        <Container>
            <h2>Proyectos</h2>
            {projects.map(project =>
                <ProjectItem key={project.name} project={project} />
            )}
        </Container>
    )
}