

function Card({card}) {
  const c = card[0]
  console.log("c", card);

  return (
    <div>
      <img src={c.image} alt={`${c.value} of ${c.suit}`} />
    </div>
  )
}

export default Card;


//[{"image": "https://deckofcardsapi.com/static/img/KH.png",
// "value": "KING",
// "suit": "HEARTS",
// "code": "KH"}]