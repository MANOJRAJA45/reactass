import { BrowserRouter,Routes,Route } from "react-router-dom";

import Landingpage from"./components/Landingpage";
import Postview from "./Postview";

function App(){
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage/>}></Route>
          <Route path="/Postview" element={<Postview/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
