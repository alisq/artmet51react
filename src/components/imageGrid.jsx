import React from 'react';
import Artist from './artist';
import artists from '../data.json';


function ImageGrid() {
    return (
        <>
        <h2>Artworks</h2>
        <section id="imageGrid">
          {artists.map((item, index) => (
                        <div key={index}>
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
                        </div> 
                    ))}
                    </section>
                    </>
    )
}

export default ImageGrid;