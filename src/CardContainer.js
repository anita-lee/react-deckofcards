import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./Card";


const API_URL = "https://deckofcardsapi.com/api/deck"

/** CardContainer component. Renders a deck of cards.
 *
 * Props: none
 *
 *
 * State: deck - newly shuffled deck object
 *        cards: array of drawn card objects:  [ {image, value, suit, code}, ... ]
 *
 *  App -> CardContainer
 **/

function CardContainer() {
  const [deck, setDeck] = useState({
    data: null,
    isLoading: true,
  })
  const [cards, setCards] = useState([]);

  /** loads new deck on page mount */
  useEffect(function loadDeck() {

    /** Axios request for new deck, update deck state */
    async function getDeck() {
      const response = await axios.get(`${API_URL}/new/shuffle/?deck_count=1`);
      setDeck({data:response.data, isLoading:false})
    }
    getDeck();
  }, [])

  /** Draws new card, update cards state */
  async function drawCard() {
    if(cards.length === 52) return alert("Error: no cards remaining!");
    const newCard = await axios.get(`${API_URL}/${deck.data.deck_id}/draw/?count=1`);
    setCards(cards => [...cards, newCard.data.cards[0]]);
  }

  if (deck.isLoading) {return <i>Loading...</i>};

  return (
    <div>
      <button className="button" onClick={drawCard}>GIMME A CARD!</button>
      {cards.length > 0 &&
      <Card cards={cards}/>}
    </div>
  )
}

export default CardContainer;

