import React from 'react';

function PersonCard(props) {
  return (
    <div className="person-card">
      <h2>{props.firstName} {props.lastName}</h2>
      <p>Age: {props.age}</p>
      <p>Hair Color: {props.hairColor}</p>
    </div>
  );
}

function App() {
  const handleClick = () => {
    console.log("Botón clickeado!");
  };

  return (
    <div className="App">
      <PersonCard 
        firstName="John"
        lastName="Doe"
        age={30}
        hairColor="Brown"
      />
      <PersonCard 
        firstName="Jane"
        lastName="Smith"
        age={25}
        hairColor="Blonde"
      />
      <PersonCard 
        firstName="Michael"
        lastName="Johnson"
        age={40}
        hairColor="Black"
      />
      <PersonCard 
        firstName="Emily"
        lastName="Davis"
        age={35}
        hairColor="Red"
      />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
