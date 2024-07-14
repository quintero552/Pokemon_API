import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react";

const PokemoID = () => {

  const { name } = useParams()

  const [nombrePOkemon, setNombrePOkemon] = useState(name)
  

   const recibeName = async () => {
     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
     const data = await res.json()
     setNombrePOkemon(data)
   }

   useEffect(() => {
    recibeName();
   }, []);
  
  return (
    <div className="container" style={{marginTop: '75px'}}>
      <div className="row">
        <div className="col" style={{textAlign: 'center'}}>
          <img src={nombrePOkemon?.sprites?.other?.dream_world?.front_default} alt="Pokemon" className="img-fluid" />
        </div>
        <div className="col">
          <h2>{nombrePOkemon.name}</h2>
          <ul>
            <li>{nombrePOkemon?.stats?.[0]?.stat?.name} {nombrePOkemon?.stats?.[0]?.base_stat}</li>
            <li>{nombrePOkemon?.stats?.[1]?.stat?.name} {nombrePOkemon?.stats?.[1]?.base_stat}</li>
            <li>{nombrePOkemon?.stats?.[2]?.stat?.name} {nombrePOkemon?.stats?.[2]?.base_stat}</li>
            <li>{nombrePOkemon?.stats?.[3]?.stat?.name} {nombrePOkemon?.stats?.[3]?.base_stat}</li>
            <li>{nombrePOkemon?.stats?.[4]?.stat?.name} {nombrePOkemon?.stats?.[4]?.base_stat}</li>
            <li>{nombrePOkemon?.stats?.[5]?.stat?.name} {nombrePOkemon?.stats?.[5]?.base_stat}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PokemoID
