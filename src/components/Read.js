import { useEffect,useState } from "react";
import Movies from "./Movie";//import Movies compoment from movie
import axios from "axios";

const Reader = () => {
    //hold json data
    const data = [
        /*{
            //contains properties of movies such as title,year,imdbid,type,poster
          "Title": "Avengers: Infinity War",
          "Year": "2018",
          "imdbID": "tt4154756",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
          "Title": "Captain America: Civil War",
          "Year": "2016",
          "imdbID": "tt3498820",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
          "Title": "World War Z",
          "Year": "2013",
          "imdbID": "tt0816711",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        }*/
      ];
      //useState hook  intializes a state variable movies is the state value, setMovies the function to update the state value
      const [movies,setMovies] = useState([]);//intial value empty array
      useEffect(//useEffect fetches data from an api
        ()=>{
          //runs asynchroniously i.e runs in the background without letting the  app doesnt hang
          //Requests from api
          axios.get('http://localhost:4000/api/movies')
          .then((response)=>{
            console.log(response.data);
              //update state value
            setMovies(response.data.movies);
          })
          .catch()
        }
      );
    return  (<div>
                <Movies myMovies={movies}/>{/*Movies recieve data through myMovies prop ,movies will loop though each movie object and render the contents*/}
                <h3>Hello from the Read component</h3> 

            </div>);
}

export default Reader;