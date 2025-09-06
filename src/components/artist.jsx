import {useState} from "react";

function Artist({index, title, artist, id, year, medium, dimensions, image}) {
    const [isHovered, setIsHovered] = useState(false);
    const [coords, setCoords] = useState({x:0, y:0})

     const handleMouseMove = (e) => {
          setCoords({ x: e.clientX, y: e.clientY });
        };

    return(
           <tr className={`artist-card ${isHovered ? "hovered" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove} >
      
     
        
            <td>
            <p>{artist} — {title}</p>
            </td>
            <td>
          <p>{year}</p>
          </td>
          <td>
          <p>{medium}</p>
          </td>
          <td>
          <p>{dimensions}</p>
          </td>

               {isHovered && (
        <div className="hover-details">
         <div
          className="hover-preview"
          style={{
            position: "fixed",
            top: coords.y + 15,   // offset so it’s not directly under cursor
            left: coords.x + 15,
            pointerEvents: "none", // so it doesn't block hover
            zIndex: 1000,
          }}
        >
          <img
            src={image}
            alt={`${artist} - ${title}`}
            style={{ maxWidth: "200px", maxHeight: "200px", border: "1px solid #ccc", background: "#fff" }}
          />
        </div>
        </div>
      )}


        </tr>
    )
}

export default Artist;


