import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


export const Mycontext = createContext()

const MyContexProvider = ({children}) => {
    const API = `https://pokeapi.co/api/v2/pokemon/`

    const [pokemon, setPokemon] = useState(0)


    const getApi = async () => {
        const response = await fetch(API);
        const data = await response.json()
        setPokemon(data)
    }

    const nombrePoke = {
        pokemon,
        setPokemon

    }

    useEffect( () => {
        getApi()
    }, [])

    return (
        <Mycontext.Provider value={nombrePoke}>
            {children}
        </Mycontext.Provider>
    )
}

export default MyContexProvider;
