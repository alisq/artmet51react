import { useState } from "react";
import parse from 'html-react-parser';

function Artist({
  index,
  title,
  artist,
  id,
  year,
  medium,
  dimensions,
  image,
  bio,
  isOpen,
  onToggle,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <tr
        className={`artist-card ${isHovered ? "hovered" : ""} ${
          isOpen ? "active" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onClick={onToggle}
      >
        <td>
          <strong>{artist}</strong>
        </td>
        <td>
          <strong>{title}</strong>
        </td>
        <td>{year}</td>
        <td>{parse(medium)}</td>
        <td>{dimensions}</td>

        
        <td className="hideBig">
        {image !=="" && (
          <img src={"/img/small/" + image} alt={`${artist} - ${title}`} />
        )}
          <h3>----</h3>
        </td>
        

        {isHovered && image !== "" && (
          <div className="hover-details">
            <div
              className="hover-preview"
              style={{
                top: coords.y + 15, // offset so it’s not directly under cursor
                left: coords.x + 15,
              }}
            >
              <img src={"/img/small/" + image} alt={`${artist} - ${title}`} />
            </div>
          </div>
        )}
      </tr>

      {image !== "" && (
        <tr
          className={`hidden_content ${isOpen ? "active" : ""}`}
          onClick={onToggle}
        >
          <td colSpan="10">
            <div className="expanded">
              <img src={`/img/big/${image}`} alt={`${artist} - ${title}`} />
              
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default Artist;
