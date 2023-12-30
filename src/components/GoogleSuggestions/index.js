// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      suggestionsList: props.suggestionsList,
      searchInput: '',
    }
  }

  onSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  handleArrowClick = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {searchInput, suggestionsList} = this.state
    const searchResults = suggestionsList.filter(suggestion =>
      suggestion.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="card-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search"
            />
            <input
              type="search"
              value={searchInput}
              placeholder="Search Google"
              className="input"
              onChange={this.onSearch}
            />
          </div>
          <ul>
            {searchResults.map(suggestion => (
              <SuggestionItem
                key={suggestion.id}
                suggestiondetails={suggestion}
                onClick={this.handleArrowClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
