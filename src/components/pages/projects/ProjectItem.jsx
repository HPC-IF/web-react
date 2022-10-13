export const ProjectItem = ({ project }) => {
    return (
        <div>
            <h4>{project.name}</h4>
            <img src={require('../../../assets/images/' + project.image)} />
            <p>{project.description}</p>
        </div>
    )
}