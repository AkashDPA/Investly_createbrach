import './styles/App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
//import Home from './pages/home'
//import Discover from './pages/discover'
//import Allportfolio from './pages/allportfolio'
//import Watchlist from './pages/watchlist'
import Create from './pages/create'
import Investment from './pages/investment'
import Signup from './pages/signup'
import Login from './pages/login'

import About from './pages/footerPages/about'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

{/*          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/allportfolio" element={<Allportfolio />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/investment" element={<Investment />} />
*/}
          <Route path="/create" element={<Create />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/login" element={<Login />} />

          {/*footer pages*/}
          <Route path="/about" element={<About />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
