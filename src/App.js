import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png',
    id: 0
  })

  const evoluiPichu = () => {
    if(!pokemon.evolved){
      setPokemon({
        ...pokemon,
        name: "Pikachu",
        evolved: true,
        weight: 6,
        image: "https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/240px-025Pikachu.png"
    })}else{setPokemon({
        ...pokemon,
        name: "Raichu",
        weight: 30,
        color: "orange",
        image: "https://archives.bulbagarden.net/media/upload/thumb/8/88/026Raichu.png/240px-026Raichu.png"
      })}
    } 

  // Para fazer seus próximos pokemons, crie novos estados!

  const [pokemon1, setPokemon1] = useState({
    name: "Lugia",
    type: "Psychic/Flying",
    evolved: false,
    weight: 216,
    color: 'white',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/4/44/249Lugia.png/240px-249Lugia.png',
    id: 0
  })

  const evoluiLugia = () => {
    setPokemon1({
      ...pokemon1
    })
    alert("Nenhuma evolução disponível!")
  }

  const [pokemon2, setPokemon2] = useState({
    name: "Squirtle",
    type: "Water",
    evolved: false,
    weight: 9,
    color: 'lightblue',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/3/39/007Squirtle.png/240px-007Squirtle.png',
    id: 0
  })

  const evoluiSquirtle = () => {
    if(!pokemon2.evolved){
      setPokemon2({
        ...pokemon2,
        name: "Wartortle",
        evolved: true,
        weight: 22.5,
        image: "https://archives.bulbagarden.net/media/upload/thumb/0/0c/008Wartortle.png/240px-008Wartortle.png"
    })}else{setPokemon2({
        ...pokemon2,
        name: "Blastoise",
        weight: 85.5,
        image: "https://archives.bulbagarden.net/media/upload/thumb/0/02/009Blastoise.png/240px-009Blastoise.png"
      })
    }}  

  const [pokemon3, setPokemon3] = useState({
    name: "Eevee",
    type: "Normal",
    evolved: false,
    weight: 6.5,
    color: 'brown',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/e/e2/133Eevee.png/240px-133Eevee.png',
    id: 0
  })

  const evoluiEevee = () => {
    setPokemon3({
    ...pokemon3,
    name:"Flareon",
    type: "Fire",
    evolved: true,
    weight: 25,
    color: "orange",
    image: "https://archives.bulbagarden.net/media/upload/thumb/d/dd/136Flareon.png/240px-136Flareon.png"
  })
  }

  const [pokemon4, setPokemon4] = useState({
    name: "Meowth",
    type: "Normal",
    evolved: false,
    weight: 4.2,
    color: 'gold',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/d/d6/052Meowth.png/240px-052Meowth.png',
    id: 0
  })
  
  const evoluiMeowth = () => {
    setPokemon4({
    ...pokemon4,
    name:"Persian",
    evolved: true,
    weight: 32,
    image: "https://archives.bulbagarden.net/media/upload/archive/1/13/20130824005218%21053Persian.png"
  })
  }

  const [pokemon5, setPokemon5] = useState({
    name: "Scyther",
    type: "Bug/Flying",
    evolved: false,
    weight: 56,
    color: 'green',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/b/ba/123Scyther.png/240px-123Scyther.png',
    id: 0
  })

  const evoluiScyther = () => {
    setPokemon5({
    ...pokemon5,
    name:"Scizor",
    type: "Bug/Steel",
    evolved: true,
    weight: 118,
    color: "red",
    image: "https://archives.bulbagarden.net/media/upload/thumb/5/55/212Scizor.png/240px-212Scizor.png"
  })
  }

  const [pokemon6, setPokemon6] = useState({
    name: "Dratini",
    type: "Dragon",
    evolved: false,
    weight: 3.3,
    color: 'purple',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/c/cc/147Dratini.png/240px-147Dratini.png',
    id: 0
  })

  const evoluiDratini = () => {
    if(!pokemon6.evolved){
      setPokemon6({
        ...pokemon6,
        name: "Dragonair",
        evolved: true,
        weight: 16.5,
        image: "https://archives.bulbagarden.net/media/upload/thumb/9/93/148Dragonair.png/240px-148Dragonair.png"
    })}else{setPokemon6({
        ...pokemon6,
        name: "Dragonite",
        weight: 210,
        color: "orange",
        image: "https://archives.bulbagarden.net/media/upload/thumb/8/8b/149Dragonite.png/240px-149Dragonite.png"
      })
    }}
    
    const [pokemon7, setPokemon7] = useState({
      name: "Magikarp",
      type: "Water",
      evolved: false,
      weight: 10,
      color: 'lightblue',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/0/02/129Magikarp.png/240px-129Magikarp.png',
      id: 0
    })
  
    const evoluiMagikarp = () => {
      setPokemon7({
      ...pokemon7,
      name:"Gyarados",
      type: "Water/Flying",
      evolved: true,
      weight: 235,
      image: "https://archives.bulbagarden.net/media/upload/thumb/4/41/130Gyarados.png/240px-130Gyarados.png"
    })
    }

  return ( 
  <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard nome={pokemon.name} tipo={pokemon.type} peso={pokemon.weight} cor={pokemon.color} imagem={pokemon.image} evolucao={evoluiPichu}/>
      {/* Crie aqui seus próximos pokemons! */}
      <PokemonCard nome={pokemon1.name} tipo={pokemon1.type} peso={pokemon1.weight} cor={pokemon1.color} imagem={pokemon1.image} evolucao={evoluiLugia}/>
      <PokemonCard nome={pokemon2.name} tipo={pokemon2.type} peso={pokemon2.weight} cor={pokemon2.color} imagem={pokemon2.image} evolucao={evoluiSquirtle}/>
      <PokemonCard nome={pokemon3.name} tipo={pokemon3.type} peso={pokemon3.weight} cor={pokemon3.color} imagem={pokemon3.image} evolucao={evoluiEevee}/>
      <PokemonCard nome={pokemon4.name} tipo={pokemon4.type} peso={pokemon4.weight} cor={pokemon4.color} imagem={pokemon4.image} evolucao={evoluiMeowth}/>
      <PokemonCard nome={pokemon5.name} tipo={pokemon5.type} peso={pokemon5.weight} cor={pokemon5.color} imagem={pokemon5.image} evolucao={evoluiScyther}/>
      <PokemonCard nome={pokemon6.name} tipo={pokemon6.type} peso={pokemon6.weight} cor={pokemon6.color} imagem={pokemon6.image} evolucao={evoluiDratini}/>
      <PokemonCard nome={pokemon7.name} tipo={pokemon7.type} peso={pokemon7.weight} cor={pokemon7.color} imagem={pokemon7.image} evolucao={evoluiMagikarp}/>
    </FlexContainer>
  </>
    
  );
}

export default App;
