const API_KEY = "280e264b93fe1ea1032639f374f4ea88"
const request={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchNetflexOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchTopRatedMovies:`movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default request;



