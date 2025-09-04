
import './css/main.css'
import Artist from './components/artist';
import artists from './data.json';
import Logo from './logo.svg';

function App() {
  return (
    
    <div className="App">
      <a href="https://artmetropole.com" target="_blank">
       <img src={Logo} id="homeLogo" alt="Art Metropole" />
       </a>
    <hr className='hr1' />

{/* 
      <h2>
        Lucky Draw Fundraiser & Party
      </h2> */}
      <h1>
        Lucky Draw<br />Fundraiser &<br />Party
      </h1>
      <hr className='hr2' />
   

             <h4>
  November 20, 2025<br />
  7pm-12am<br />
  Cafeteria+ Upstairs
      </h4>



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
      
 
    </div>
  );
}

export default App;
