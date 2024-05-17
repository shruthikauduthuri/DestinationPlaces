// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

const destinationsList = [
  {
    uniqueNo: 1,
    name: 'Melaka Mosque',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  },
  {
    uniqueNo: 2,
    name: 'Hyderabad',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  },
  {
    uniqueNo: 3,
    name: 'Singapore',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  },
  {
    uniqueNo: 4,
    name: 'Korea',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  },
  {
    uniqueNo: 5,
    name: 'Japan',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  },
  {
    uniqueNo: 6,
    name: 'Thailand',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  },
  {
    uniqueNo: 7,
    name: 'Malaysia',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  },
  {
    uniqueNo: 8,
    name: 'Dubai',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  },
  {
    uniqueNo: 9,
    name: 'Washington DC',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  },
  {
    uniqueNo: 10,
    name: 'Riyad',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  },
  {
    uniqueNo: 11,
    name: 'Doha',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  },
  {
    uniqueNo: 12,
    name: 'Kansas',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  },
]

class DestinationSearch extends Component {
  state = {
    searchInput: '',
    placesDetailsList: destinationsList,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput, placesDetailsList} = this.state
    const searchResults = placesDetailsList.filter(eachPlace =>
      eachPlace.name.toLowerCase().includes(searchInput),
    )
    return (
      <div className="search-container">
        <h1 className="title">Destination Search</h1>
        <div className="container">
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>

        <ul className="list-container">
          {searchResults.map(eachPlace => (
            <DestinationItem
              placeDetails={eachPlace}
              key={eachPlace.uniqueNo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
