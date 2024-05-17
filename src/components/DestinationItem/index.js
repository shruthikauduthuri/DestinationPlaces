// Write your code here
import './index.css'

const DestinationItem = props => {
  const {placeDetails} = props
  const {imageUrl, name} = placeDetails

  return (
    <li className="place-container">
      <img src={imageUrl} className="image" alt={name} />
      <p className="para">{name}</p>
    </li>
  )
}

export default DestinationItem
