import {useState} from "react";

function Artist({index, title, artist, id, year, medium, dimensions, image, bio, isOpen, onToggle}) {
    const [isHovered, setIsHovered] = useState(false);
    const [coords, setCoords] = useState({x:0, y:0})
    

     const handleMouseMove = (e) => {
          setCoords({ x: e.clientX, y: e.clientY });
        };

        
        
    return(
      <>
           <tr className={`artist-card ${isHovered ? "hovered" : ""} ${isOpen ? "active" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove} 
            onClick={onToggle} 
            >
      
     
            <td className="hideBig">
            <strong> <img
            src={'https://alisq.github.io/artmet51react/build/img/small/'+image}
            alt={`${artist} - ${title}`}
            
          /></strong>
            </td>
        
            <td>
            <strong>{artist}</strong>
            </td>
            <td><strong>{title}</strong>
            </td>
            <td>
          {year}
          </td>
          <td>
          {medium}
          </td>
          <td>
          {dimensions}
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
            src={'https://alisq.github.io/artmet51react/build/img/small/'+image}
            alt={`${artist} - ${title}`}
            
          />
        </div>
        </div>
      )}


        </tr>

        {isOpen && (
          <tr
          onClick={onToggle}><td colspan="10">

            <div className="expanded">
            
              <img
                src={'https://alisq.github.io/artmet51react/build/img/small/'+image}
                alt={`${artist} - ${title}`}            
              />

              <div>
                
                <p>{bio}</p>
              </div>
          
          </div>
            </td></tr>
        )}
        </>
    )
}

export default Artist;


