import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import BestSellers from './components/bestsellers/BestSellers';

import bestSellersArray from "./components/bestsellers/bestSellersArray.json"
import ImageGallery from './components/imageGallery/ImageGallery';
import Products from './components/products/Products';
import CupExperience from './components/cupExperience/CupExperience';
import Sponsors from './components/sponsors/Sponsors';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <BestSellers array={bestSellersArray} ></BestSellers>
      <ImageGallery></ImageGallery>
      <Products></Products>
      <CupExperience></CupExperience>
      <Sponsors></Sponsors>
    </div>
  );
}

export default App;
