import { Link } from "react-router-dom"

export const ProjectItem = ({ project }) => {
    
    return (
        <Link to={`${project.id}`}>
            <h4>{project.name}</h4>
            <img src={require('../../../assets/images/' + project.image)} alt={project.name} />
            <p>{project.description}</p>
        </Link>
    )
}