import "./App.css";
import {Route, Routes} from "react-router-dom";
import RestaurantClientMainPage from "./pages/RestaurantClientMainPage";
import RestaurantManagementMainPage from "./pages/RestaurantManagementMainPage";
import LandingPage from "./pages/LandingPage";
import MenuContextProvider from "./context/MenuContext";
import ReactGA from 'react-ga';
import {useState} from "react";

const TRACKING_ID = "UA-253704276-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  const [maxTableNumber, setMaxTableNumber] = useState(20);

  const updateMaxTableNumber = (number) => {
    setMaxTableNumber(number);
  }

  return (
    <MenuContextProvider>
      <div className="app">
        <Routes>
          <Route path="/tables/:tableId" element={<RestaurantClientMainPage maxTableNumber={maxTableNumber}/>}/>
          <Route path="/restaurant"
                 element={<RestaurantManagementMainPage updateMaxTableNumber={updateMaxTableNumber}/>}/>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
      </div>
    </MenuContextProvider>
  );
}

export default App;
