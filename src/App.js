import "./App.css";
import Dogs from "./components/Dogs";
import NewDogForm from "./components/NewDogForm";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SingleDog from "./components/SingleDog";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Dogs />} />
        <Route path="/newDogForm" element={<NewDogForm />} />
        <Route path="/dogs/:dogId" element={<SingleDog />} />
      </Routes>
    </div>
  );
}

export default App;
