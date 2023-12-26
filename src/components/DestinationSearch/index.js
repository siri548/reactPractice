// Write your code here
import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInputValue: '',
      destinationList: props.initialDestinations,
    }
  }

  searchingFunction = event => {
    const {value} = event.target

    this.setState({
      searchInputValue: value,
    })
  }

  render() {
    const {searchInputValue, destinationList} = this.state

    const searchResults = destinationList.filter(eachdestination =>
      eachdestination.name.includes(searchInputValue),
    )

    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            value={searchInputValue}
            placeholder="Search"
            className="search"
            onClick={this.searchingFunction}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
          <ul className="list-container">
            {searchResults.map(eachdestination => (
              <DestinationItem
                destination={eachdestination}
                key={eachdestination.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
