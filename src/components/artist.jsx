import {useState} from "react";

function Artist({index, title, artist, id, year, medium, dimensions, image}) {
    const [isHovered, setIsHovered] = useState(false);

    return(
            <div
      className={`artist-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
            <img src={'img/'+image} />
            {/* hey {id}<br />
            Are you selling a {medium}?<br />
            and your name is: {artist}<br />
            You made it in {year}<br />
            it's {dimensions} big<br />
            here's a pic: {image}<br /><br /> */}

               {isHovered && (
        <div className="hover-details">
          <p>{artist} — {title}</p>
          <p>{year}</p>
          <p>{medium}</p>
          <p>{dimensions}</p>
        </div>
      )}


        </div>
    )
}

export default Artist;


