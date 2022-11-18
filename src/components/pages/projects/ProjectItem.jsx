import { Col } from "react-bootstrap"

export const ProjectItem = ({ project }) => {
    return (
        <Col xs={4} className="d-flex gap-3">
            <img src={require('../../../assets/images/' + project.image)} alt={project.name} />
            <div>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
            </div>
        </Col>
    )
}