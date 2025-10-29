import React, { useState } from 'react';
import Artist from './artist';
import artists from '../data.json';


function ArtistTable() {

    const [openId, setOpenId] = useState(null);
    const handleToggle = (id) => {
        setOpenId((prev) => (prev === id ? null : id))
    }
    return (
        <>
        <h2 id="artworks_title">Artworks</h2>
        <table id="imageGrid">
          
            <tr className="headings">
            <td className="longer"><u>Artist</u></td>
            <td><u>Title</u></td>
            <td><u>Year</u></td>
            <td><u>Medium</u></td>
            <td><u>Dimensions</u></td>
            <td><u>Edition</u></td>
            <td><u>Notes</u></td>
            </tr>
          
          {artists.map((item, index) => (
                        <>
                            <Artist 
                              key={index}                              
                              title={item.title} 
                              artist={item.artist}
                              id={item.id}
                              notes={item.notes}
                              year={item.year}
                              edition={item.edition}
                              medium={item.medium}
                              dimensions={item.dimensions}
                              image={item.image}
                              bio={item.bio}
                              isOpen={openId === item.id}
                             onToggle={() => handleToggle(item.id)}
                               />
                               
                               </>
                        
                    ))}
                    </table>
                    </>
    )
}

export default ArtistTable;