import { BrowserRouter,Routes,Route } from "react-router-dom";

import Details from "./components/Details";
import PokeList from "./components/PokeList";
import "./styles/App.css";  

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokeList/>} />
          <Route path="/:id" element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
