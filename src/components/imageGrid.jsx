import React from 'react';
import Artist from './artist';
import artists from '../data.json';


function ImageGrid() {
    return (
        <>
        <h2>Artworks</h2>
        <table id="imageGrid">
          {artists.map((item, index) => (
                        <>
                            <Artist 
                              key={index}                              
                              title={item.title} 
                              artist={item.artist}
                              id={item.id}
                              year={item.year}
                              medium={item.medium}
                              dimensions={item.dimensions}
                              image={item.image}
                               />
                               
                               </>
                        
                    ))}
                    </table>
                    </>
    )
}

export default ImageGrid;