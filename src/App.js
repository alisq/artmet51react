
import './css/main.css'
import Logo from './logo.svg';
import ImageGrid from './components/imageGrid';

function App() {
  return (
    
    <div className="App">
      <a href="https://artmetropole.com" target="_blank">
       <h1>ARTMETROPOLE</h1>
       </a>
    <div className="rule">❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉</div>

{/* 
      <h2>
        Lucky Draw Fundraiser & Party
      </h2> */}
      <h2>
        Lucky Draw<br />Fundraiser &<br />Party

      </h2>
      
      <div className="rule">✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺</div>
      
   

             <h3>
  November 20, 2025<br />
  7pm-12am<br />
  Cafeteria+ Upstairs
  
      </h3>

      <div className="rule">❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉</div>


<table>
  <tr>
    <td>
      <span className="big"><a href="https://artmetropole.com/shop/16582">→Lucky Draw Ticket</a></span>
      
    </td>
    <td>
      <span className="big">$800</span>
    </td>
  </tr>
  <tr>
    <td>
      <span className="big"><a href="https://artmetropole.com/shop/16583">→Party Ticket</a></span>
    </td>
    <td>
      <span className="big"><a href="https://artmetropole.com/shop/16583">$50</a></span>
    </td>
  </tr>
</table>
<h3>-----------------------</h3>


<ImageGrid />


    </div>
  );
}

export default App;
