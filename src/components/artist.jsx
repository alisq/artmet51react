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
            <p>{artist} — {title}</p>
          <p>{year}</p>
          <p>{medium}</p>
          <p>{dimensions}</p>

               {isHovered && (
        <div className="hover-details">
          —————
        </div>
      )}


        </div>
    )
}

export default Artist;


