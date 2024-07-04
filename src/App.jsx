import Footer from "./components/Footer";
import Header from "./components/Header";
import PlayerList from "./components/PlayerList";
import SlideBar from "./components/SlideBar";
import './App.css'
const App=()=>{
    return(
        <div>
           <Header/>
             <div className="player-container">
              <div className="slide-bar">
                <SlideBar/>
              </div>
        <div className="player-playlist">
           <PlayerList/>
        </div>
        </div>
        
        <div className="footer">
        <Footer/>
        </div>
        </div>
    )
}
export default App;