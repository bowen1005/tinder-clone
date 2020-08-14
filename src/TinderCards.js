import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([]);
  // const people = [];

  // setPeople([...people, 'sonny', 'qazi'])
  // above is the same as ===> people.push('sonny', 'qazi')

  useEffect(() => {
    // This is where the code runs..
    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      // This is the cleanup function that is needed to clean up every time 'people' is added to the list
      unsubscribe();
      // This actually pulls the data from the database and shows the snapshot
    };
    // This will run once when the component loads and never again
  }, []);
  // Whenever '[]' changes, it will refire the 'useEffect' code.
  // useEffect is a piece of code which runs based on a condition

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
