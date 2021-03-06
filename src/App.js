import React from 'react';
import Row from './Row';

import requests from './requests';
import Banner from './Banner';

import './App.css';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />

      <Row
        title="Netflix orignals"
        isLargeRow
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentation" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
