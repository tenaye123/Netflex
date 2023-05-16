
import './App.css';
import request from './Collection/request';
import Row from './Row/Row';
import Banner from './Banner/Banner';
// import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import Navigate from './Nav/Navigate';


function App() {
  return (
    <div className="App">
      <Navigate />
      <Banner />
      <Row
        title="NETFLEX ORIGNALS"
        fetchUrl={request.fetchNetflexOriginals}
        isLargeRow />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Footer/>
    </div>
  );
}

export default App;
