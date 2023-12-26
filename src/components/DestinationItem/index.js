// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destination} = props
  const {name, imgUrl, id} = destination

  return (
    <li className="destination-card-container" key={id}>
      <img src={imgUrl} className="destination-card" alt={name} />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
