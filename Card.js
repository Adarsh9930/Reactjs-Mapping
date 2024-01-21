import React from "react";

function Card() {
  const card = [{
    name: "Adarsh",
    heading: "Engineer",
    onPress: () => alert("Success")
  },
    {
      name: "Beta",
      heading: "Engineer",
      onPress: () => alert("Success")
    },
    {
      name: "Saurav",
      heading: "Engineer",
      onPress: () => alert("Success")
    },
    {
      name: "Aalok",
      heading: "Engineer",
      onPress: () => alert("Success")
    }];


  return (
    <div>
    {
      card.map(({
        name, heading, onPress
      })=>(
        <div>
      <h1>{name}</h1>
      <p>
          {heading}
        </p>
      <p>
          {onPress}
        </p>
        </div>
      ))
      }
    </div>
  )
}

export default Card;