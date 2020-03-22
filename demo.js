function makeDeck(){
  const deck = [];
  const suits = ["hearts", "diamonds", "spades", "clubs"];
  const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";
  for(let value of values.split(",")){
    for(let suit of suits){
      deck.push({value, suit})
    }
  }
  return deck;
}

function drawCard(deck){
  return deck.pop();
}

const myDeck = {
  deck: [],
  drawnCard: [],
  suits : ["hearts", "diamonds", "spades", "clubs"],
  values : "2,3,4,5,6,7,8,9,10,J,Q,K,A",
  initializeDeck(){
    const {suits, values, deck} = this;
    for(let value of values.split(",")){
      for(let suit of suits){
        deck.push({value, suit})
      }
    }
  },
  drawCard(){
    const card = this.deck.pop(); 
    this.drawnCard.push(card);
    return card;
  },
  drawMultiple(numCards){
    const drawn = [];
    for(let i = 0; i < numCards; i++){
      drawn.push(this.drawCard());
    }
    return drawn;
  }
}

function suffle(arr){
  for(let i = arr.length-1; i >=0; i--){
    let j = Math.floor(Math.random() * (i+1));
    [arr[i], arr[j]] = [arr[j],[arr[i]]];
  }
  return arr;
}
