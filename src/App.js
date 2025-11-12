
import './css/main.css'

import ArtistTable from './components/artistTable';
import BurgerMenu from './components/burgerMenu';
import Footer from './components/footer';

function App() {
  return (
    
    <div className="App">
       <BurgerMenu
        title=""
        items={[
          { label: "Event Details", href: "#details" },
          { label: "Artworks", href: "#artworks_title" },
          { label: "Tickets", href: "#ticket-table" },
          { label: "Sponsors and Contact", href: "#footer" }
        ]}
      />

      <a href="https://artmetropole.com" target="_blank" rel="noreferrer">
       <h1>ARTMETROPOLE</h1>
       </a>
    <div className="rule"  id="details">❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉</div>


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


             <h3>
Featuring DJs Chinelo + Marnigurl<br />
MC'd by Mikiki
  
      </h3>

      <div className="rule">❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉❉</div>

<p>This is a unique fundraising event, unlike a traditional auction, where all guests who purchase a Lucky Draw Ticket will go home with an artwork. Following an in-person preview of the works, our MC will draw names to determine who is lucky enough to choose first, second, and so on. Proxy previews and picks are available if you are unable to join us in person.
With a regular Party Ticket, you can visit the preview of artworks Upstairs, watch the Lucky Draw, and enjoy a night of DJs and dancing, including complimentary drinks.
</p>

<table id="ticket-table">
  <tr>
    <td>
      <span className="big"><a href="https://artmetropole.com/shop/16630">→<span className="hoverSpacer"></span>Lucky Draw Ticket</a></span>
      <p><br />Artwork + 1 Entry to Preview and Party</p>
      
    </td>
    <td className="align-right">
      <span className="big"><a href="https://artmetropole.com/shop/16630">$1000</a></span>
    </td>
  </tr>
  <tr>
    <td>
      <span className="big"><a href="https://artmetropole.com/shop/16631">→<span className="hoverSpacer"></span>Party Ticket</a></span>
      <p><br />1 Entry to Preview and Party</p>
    </td>
    <td className="align-right">
      <span className="big"><a href="https://artmetropole.com/shop/16631">$100</a></span>
    </td>
  </tr>
</table>
<div className="rule">-----------------------</div>


<ArtistTable />
<div className="rule">-----------------------</div>

<Footer />
    </div>
  );
}

export default App;
