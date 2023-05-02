import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import BestSellers from './components/bestsellers/BestSellers';

import bestSellersArray from "./components/bestsellers/bestSellersArray.json"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <BestSellers
      array={bestSellersArray}
      ></BestSellers>
    </div>
  );
}

export default App;
