import React from "react";
import './HomeScreen.css';
import Banner from '../components/Banner';
import requests from '../Requests';
import Row from '../components/Row';
import Navbar from "../components/Navbar";

function HomeScreen() {
  return (
    <div className='home-screen'>
        <Navbar />

        <Banner/>

        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Documenaries Movies" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default HomeScreen