/** Simple presentation component for a card.
 *
 * Props:
 * - cards: array of drawn card objects:  [ {image, value, suit, code} ]
 *
 * State: none
 *
 *  CardContainer  -> Card
 **/

function Card({cards}) {

  return (
    <div className="Card-container">
      {cards.map(c => (
        <img src={c.image} alt={`${c.value} of ${c.suit}`} key={c.code} className="Card-card"/>
      ))}
    </div>
  )
}

export default Card;
