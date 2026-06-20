function Pokecard({id, name, type, base_experience}) {

    const sprites = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return(
        <section className="container">
            <h2>{name}</h2>
            <img 
            src={sprites}
            alt={name}
            onError={(e) =>{
                e.target.replaceWith("Image unavailable")
            }}></img>
            <p>Type: {type}</p>
            <p >EXP: {base_experience}</p>
        </section>
        //p>{props.children}</p>
    );
}