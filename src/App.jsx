import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Counter } from "./components/Counter";
import { ProductsList } from "./components/ProductsList";
import { BikeList } from "./components/BikeList";
import { NavBar } from "./NavBar";
import { ToggleClr } from "./Toggle/ToggleClor";
import Watch from "./components/Watch";
import ReduCounter from "./components/useReducer/ReduCounter";
import ComplicatedCout from "./components/CompCount/ComplicatedCout";
import CompCount02 from "./components/CompCount/CompCount02";
import CheckRedux from "./components/CheckRedux";
import { configStore } from "./State/Store/configStore";
import { Provider } from "react-redux";
import RefFocus from "./useRefClass/RefFocus";
import Timer from "./useRefClass/Timer";
import FunctionalTimer from "./useRefClass/FunctionalTimer";
// import Address from "./components/Address";
function App() {
  const localStore = configStore();
  return (
    <div className="App">
      <Provider store={localStore}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/bikes" element={<BikeList />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/ComplicatedCount" element={<ComplicatedCout />} />
            <Route path="/ReduCounter" element={<ReduCounter />} />
            <Route path="/CompCount" element={<CompCount02 />} />
            <Route path="/backclr" element={<ToggleClr />} />
            <Route path="/redux" element={<CheckRedux />} />
            <Route path="/reffocus" element={<RefFocus />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/funtimer" element={<FunctionalTimer />} />
            {/* <Route path="/address" element={<Address />} /> */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
