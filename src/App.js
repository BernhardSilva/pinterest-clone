import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Mainboard from './components/Mainboard';
import unsplash from './api/unsplash';

function App() {

  const[pins, setNewPins]= useState([]);

  //Get images for Pins with Axios
  const getImages = (term) => {
      return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
          query : term
        }
      });
  };

  //When press enter find new Pins
  const OnSearchSubmit = (term) => {
      console.log("on search submit (App) =>", term);
      getImages(term).then((res) => {
        let results = res.data.results;
        
        let newPins = [
          ...results,
          ...pins,
        ]
        //Random Pins, like Pinterest algorithm
        newPins.sort(function(a, b) {
          return 0.5 - Math.random();
        });
        setNewPins(newPins);
      })
  }

  //Random Pins Function, when the web app is starting Boom!
  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    let pins = ["Chile", "Cars", "Motorcycles", "Video Games", "Girls"];
    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results;
          console.log(results);

          pinData = pinData.concat(results)
          pinData.sort(function (a, b) {
            return 0.5 - Math.random();
        });
      })
    );
  });
  Promise.all(promises).then(() => {
    setNewPins(pinData);
  });
};

 
useEffect(() => {
  getNewPins();
}, []);

  
  return (
    <div className="app">
      <Header onSubmit={OnSearchSubmit}/>
      <Mainboard pins={pins}/>   
    </div>
  );
}

export default App;
