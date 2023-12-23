// Write your code here.
import './index.css'

const Card = props => {
  const {headerText, description, className} = props
  return (
    <li className={className}>
      <div className="card">
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button type="button" className="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default Card
