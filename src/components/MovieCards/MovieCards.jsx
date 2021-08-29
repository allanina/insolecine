import axios from "axios";
import { useState, useEffect } from "react";
import { img_300 } from "../../config/config"
import "./style.css";

const MovieCards = () =>{
  const [movies, setMovies] = useState([]);

  //faz a requisição por meio do link e a chave está no arquivo .env
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
      );
    //console.log(data);
    setMovies(data.results);
};
  useEffect(() => {
    fetchMovies();
  },[]);

  return (
    <div className="container">
      {movies && movies.map(moviesInfo => (
        <div className="container-card">
            {/* o img_300 foi importado do config pois a API não fornece as imagens dos posteres */}
            <div className="image-poster">
                <img alt={moviesInfo.title} src={`${img_300}/${moviesInfo.poster_path}`}/>
                <div className="text-overlay">
                  <span>{moviesInfo.title}</span>
                  <span>{moviesInfo.vote_average}</span>
                  <p>{moviesInfo.overview.substr(0, 150)}</p>
                </div>
            </div>

            <div>
              <p className="movie-content">{moviesInfo.title}</p>
            </div>
        </div>
      ))}

    </div>
  )
};

export default MovieCards;