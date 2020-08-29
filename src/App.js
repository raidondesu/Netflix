import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
function App() {
  return (
    <div className="App">
      <Row title = "Netflix Originals" fetchUrl={}/>
      <Row title = "Trending Now" fetchUrl={}/>
      <Row title = "Top Rated" fetchUrl={}/>
      <Row title = "Action Movies" fetchUrl={}/>
      <Row title = "Comedy Movies" fetchUrl={}/>
      <Row title = "Romance Movies" fetchUrl={}/>
    </div>
  );
}

export default App;
