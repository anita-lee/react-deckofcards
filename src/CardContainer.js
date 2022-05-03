import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./Card";


const API_URL = "https://deckofcardsapi.com/api/deck"

function CardContainer() {
  const [deck, setDeck] = useState({
    data: null,
    isLoading: true,
  })
  const [card, setCard] = useState(null);

  useEffect(function loadDeck() {
    async function getDeck() {
      const response = await axios.get(`${API_URL}/new/shuffle/?deck_count=1`);
      setDeck({data:response.data, isLoading:false})
    }
    getDeck();
  }, [])

  async function drawCard() {
    if(card && (card.data.remaining === 0)) return alert("Error: no cards remaining!");
    const newCard = await axios.get(`${API_URL}/${deck.data.deck_id}/draw/?count=1`);
    setCard(card => newCard.data.cards);
  }

  if (deck.isLoading) {return <i>Loading...</i>};

  return (
    <div>
      <button onClick={drawCard}>GIMME A CARD!</button>
      {card &&
      <Card card={card}/>}
    </div>
  )
}

export default CardContainer;
