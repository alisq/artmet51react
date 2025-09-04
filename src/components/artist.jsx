function Artist({index, title, artist, id, year, medium, dimensions, image}) {
    return(
        <div>
            <img src={image} />
            hey {id}<br />
            Are you selling a {medium}?<br />
            and your name is: {artist}<br />
            You made it in {year}<br />
            it's {dimensions} big<br />
            here's a pic: {image}<br /><br />
        </div>
    )
}

export default Artist;


