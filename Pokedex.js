function Pokedex({pokemon}) {
    
    return(
        <div>
            <h1>Pokédex</h1>
            <ol className="pokedex">
                {pokemon.map(p =>{
                    return <ul key={p.id}>
                        <Pokecard 
                        id = {p.id}
                        name = {p.name}
                        type = {p.type}
                        base_experience = {p.base_experience}>                            
                        </Pokecard>
                    </ul>
                })}
            </ol>
        </div>
    );
}
{/* <div>
            <h1>Pokédex</h1>
            <ol>
                {pokemon.map(pokemon =>{
                    return <ul key={pokemon.id}>
                        <Pokemon 
                        id = {pokemon.id}
                        name = {pokemon.name}
                        type = {pokemon.type}
                        base_experience = {pokemon.base_experience}>                            
                        </Pokemon>
                    </ul>
                })}
            </ol>
        </div> */}

        