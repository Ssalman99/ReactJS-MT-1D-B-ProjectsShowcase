import './index.css'

const ProjectCard = props => {
  const {projectCardDetails} = props
  const {name, imageUrl} = projectCardDetails

  return (
    <li className="list-item">
      <img className="image" src={imageUrl} alt={name} />
      <p className="list-pera">{name}</p>
    </li>
  )
}

export default ProjectCard
