import './index.css'

const SuggestionItem = props => {
  const {suggestiondetails, onClick} = props
  const {id, suggestion} = suggestiondetails

  const handleArrowClick = () => {
    onClick(suggestion)
  }
  return (
    <li className="list-container" key={id}>
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={handleArrowClick}
      />
    </li>
  )
}

export default SuggestionItem
