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
            
            top: coords.y + 15,   // offset so it’s not directly under cursor
            left: coords.x + 15
            
          }}
        >
          <img
            src={image}
            alt={`${artist} - ${title}`}
            
          />
        </div>
        </div>
      )}


        </tr>
    )
}

export default Artist;


