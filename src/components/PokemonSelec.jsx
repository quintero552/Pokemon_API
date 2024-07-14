import { useContext, useState } from "react" // Agregamos el hoot de useContext
import { useNavigate } from "react-router-dom";
import { Mycontext } from '../Context/Mycontext'
import Button from 'react-bootstrap/Button';

const PokemonSelec = () => {
    const { pokemon } = useContext(Mycontext)
    const [selectedPokemon, setSelectedPokemon] = useState('');
    
    

    const navigate = useNavigate();

    const handleSelectChange = (event) => {
       setSelectedPokemon(event.target.value);
     };
     
    const navegarRuta = () => {
      if (selectedPokemon) {
        navigate(`/pokemones/${selectedPokemon}`)
      }
    }
  
    return (
      <div className="container" style={{textAlign: 'center', marginTop: '30px'}}>
        <h1>Selecciona un pokemon</h1>        
        <select key={pokemon} value={pokemon} onChange={handleSelectChange} style={{width: '250px', textAlign: 'center', padding: '9px', borderRadius: '8px'}}>
            <option>--Pokemones--</option>
        {pokemon?.results?.map((item) => {
          return (            
              <option key={item.name} value={item.name}>{item.name}</option>
            )
          })}
        </select>
        <br />
        <Button style={{marginTop: '25px'}} variant="dark" onClick={navegarRuta}>Ver Detalle</Button>
      </div>
    )
}

export default PokemonSelec
