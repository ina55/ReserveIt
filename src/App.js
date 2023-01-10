import "./App.css";
import {Route, Routes} from "react-router-dom";
import RestaurantClientMainPage from "./pages/RestaurantClientMainPage";
import RestaurantManagementMainPage from "./pages/RestaurantManagementMainPage";
import LandingPage from "./pages/LandingPage";
import MenuContextProvider from "./context/MenuContext";
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-253704276-1";
ReactGA.initialize(TRACKING_ID);
function App() {
  return (
    <MenuContextProvider>
      <div className="app">
        <Routes>
          <Route path="/tables" element={<RestaurantClientMainPage/>}/>
          <Route path="/restaurant" element={<RestaurantManagementMainPage/>}/>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
      </div>
    </MenuContextProvider>
  );
}

export default App;
