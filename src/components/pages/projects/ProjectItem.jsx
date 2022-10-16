export const ProjectItem = ({ project }) => {
    return (
        <div>
            <h4>{project.name}</h4>
            <img src={require('../../../assets/images/' + project.image)} alt={project.name} />
            <p>{project.description}</p>
        </div>
    )
}